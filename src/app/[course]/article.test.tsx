import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Article from "@/app/[course]/article";

jest.mock("@/lib/client", () => ({
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockResolvedValue({
      data: [
        { topic_id: 1, topic_name: "Topic One" },
        { topic_id: 2, topic_name: "Topic Two" },
      ],
    }),
  })),
}));

describe("Article Component", () => {
  it("renders chapter name and section component", async () => {
    render(<Article chapter_id={1} chapter_name="Chapter One" />);
    expect(screen.getByText("Chapter One")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Topic One")).toBeInTheDocument();
      expect(screen.getByText("Topic Two")).toBeInTheDocument();
    });
  });
});

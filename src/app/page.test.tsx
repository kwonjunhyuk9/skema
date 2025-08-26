import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/page";

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([
    {
      subject: "Subject One",
      courses: ["course-one", "course-two"],
      description: "Subject One Description",
    },
    {
      subject: "Subject Two",
      courses: ["course-three", "course-four"],
      description: "Subject Two Description",
    },
  ]),
});

describe("Page Component", (): void => {
  it("renders subjects with courses and descriptions", async (): Promise<void> => {
    render(<Page />);
    await waitFor((): void => {
      expect(screen.getByText("Subject One")).toBeInTheDocument();
      expect(screen.getByText("Subject Two")).toBeInTheDocument();
      expect(screen.getByText("COURSE-ONE")).toBeInTheDocument();
      expect(screen.getByText("COURSE-TWO")).toBeInTheDocument();
      expect(screen.getByText("COURSE-THREE")).toBeInTheDocument();
      expect(screen.getByText("COURSE-FOUR")).toBeInTheDocument();
      expect(screen.getByText(/Subject One Description/i)).toBeInTheDocument();
      expect(screen.getByText(/Subject Two Description/i)).toBeInTheDocument();
    });
  });
});

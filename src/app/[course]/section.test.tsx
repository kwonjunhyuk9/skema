import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Section from "@/app/[course]/section";

jest.mock("@/lib/client", () => ({
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockResolvedValue({
      data: [
        { concept_id: 1, concept_name: "Concept One" },
        { concept_id: 2, concept_name: "Concept Two" },
      ],
    }),
  })),
}));

describe("Section Component", () => {
  it("renders topic name and concept name", async () => {
    render(<Section topic_id={1} topic_name="Topic One" />);
    expect(screen.getByText("Topic One")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Concept One")).toBeInTheDocument();
      expect(screen.getByText("Concept Two")).toBeInTheDocument();
    });
  });
});

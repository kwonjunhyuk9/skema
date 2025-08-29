import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typewriter from "@/components/typewriter";

describe("Typewriter Component", () => {
  it("renders the text", () => {
    render(<Typewriter text={"Typewriter"} duration={1} delay={1} steps={1} />);
    expect(screen.getByText("Typewriter")).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typewriter from "@/components/typewriter";

describe("Typewriter Component", (): void => {
  it("renders the text", (): void => {
    render(<Typewriter text={"Typewriter"} duration={1} delay={1} steps={1} />);
    expect(screen.getByText("Typewriter")).toBeInTheDocument();
  });
});
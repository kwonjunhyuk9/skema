import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Underliner from "@/components/underliner";

describe("Underliner Component", () => {
  it("renders the given text", () => {
    render(<Underliner text="Underliner" />);
    expect(screen.getByText("Underliner")).toBeInTheDocument();
  });
});

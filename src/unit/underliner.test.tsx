import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Underliner from "@/app/underliner";

describe("Underliner Component", (): void => {
  it("renders the given text", (): void => {
    render(<Underliner text="Underliner" />);
    expect(screen.getByText("Underliner")).toBeInTheDocument();
  });
});

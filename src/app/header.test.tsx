import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/app/header";

describe("Header Component", () => {
  it("renders the title", () => {
    render(<Header />);
    expect(screen.getByText(/DANCING WITH LIFE/i)).toBeInTheDocument();
  });
});

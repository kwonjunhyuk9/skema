import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Header from "@/app/header";

describe("Header Component", (): void => {
  it("renders the title", (): void => {
    render(<Header />);
    expect(screen.getByText(/DANCING WITH LIFE/i)).toBeInTheDocument();
  });
});

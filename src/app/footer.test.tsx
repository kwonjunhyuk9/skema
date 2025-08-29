import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/footer";

describe("Footer Component", () => {
  it("renders contact links", () => {
    render(<Footer />);
    expect(screen.getByText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });
});

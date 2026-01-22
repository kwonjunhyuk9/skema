import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Scrollbar from "@/components/scrollbar";

describe("Scrollbar Component", () => {
  const mockRefs = {
    current: Array.from({ length: 3 }, () => {
      const el = document.createElement("div");
      el.scrollIntoView = jest.fn();
      return el;
    }),
  };

  it("renders row direction icons", () => {
    render(<Scrollbar pageRefs={mockRefs} buttonCount={2} direction="row" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.getByAltText("left")).toBeInTheDocument();
    expect(screen.getByAltText("right")).toBeInTheDocument();
    expect(screen.queryByAltText("up")).not.toBeInTheDocument();
    expect(screen.queryByAltText("down")).not.toBeInTheDocument();
  });

  it("renders column direction icons", () => {
    render(<Scrollbar pageRefs={mockRefs} buttonCount={2} direction="column" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.getByAltText("up")).toBeInTheDocument();
    expect(screen.getByAltText("down")).toBeInTheDocument();
    expect(screen.queryByAltText("left")).not.toBeInTheDocument();
    expect(screen.queryByAltText("right")).not.toBeInTheDocument();
  });
});

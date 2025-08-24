import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Scrollbar from "@/app/scrollbar";

describe("Scrollbar Component", (): void => {
  const mockRefs = {
    current: Array.from({ length: 3 }, (): HTMLDivElement => {
      const el: HTMLDivElement = document.createElement("div");
      el.scrollIntoView = jest.fn();
      return el;
    }),
  };

  it("renders row direction icons", (): void => {
    render(<Scrollbar pageRefs={mockRefs} buttonCount={2} direction="row" />);
    const buttons: HTMLElement[] = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.getByAltText("left")).toBeInTheDocument();
    expect(screen.getByAltText("right")).toBeInTheDocument();
    expect(screen.queryByAltText("up")).not.toBeInTheDocument();
    expect(screen.queryByAltText("down")).not.toBeInTheDocument();
  });

  it("renders column direction icons", (): void => {
    render(<Scrollbar pageRefs={mockRefs} buttonCount={2} direction="column" />);
    const buttons: HTMLElement[] = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(screen.getByAltText("up")).toBeInTheDocument();
    expect(screen.getByAltText("down")).toBeInTheDocument();
    expect(screen.queryByAltText("left")).not.toBeInTheDocument();
    expect(screen.queryByAltText("right")).not.toBeInTheDocument();
  });
});

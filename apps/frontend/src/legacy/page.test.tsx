import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/[course]/page";
import { act } from "react";

jest.mock("@/lib/client", () => ({
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockResolvedValue({ data: [{ course_id: 1 }] }),
  })),
}));

describe("Page Component", () => {
  it("renders course name and article component", async () => {
    const params = Promise.resolve({ course: "course-one" });
    await act(async () => {
      render(<Page params={params} />);
    });
    await waitFor(() => {
      expect(screen.getByText("COURSE ONE")).toBeInTheDocument();
    });
  });
});

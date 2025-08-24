import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/[course]/page";
import { act } from "react";

jest.mock("@/utils/supabase", (): unknown => ({
  from: jest.fn((): unknown => ({
    select: jest.fn().mockReturnThis(),
    eq: jest.fn().mockResolvedValue({ data: [{ course_id: 1 }] }),
  })),
}));

describe("Page Component", (): void => {
  it("renders course name and article component", async (): Promise<void> => {
    const params: Promise<{ course: string }> = Promise.resolve({ course: "course-one" });
    await act(async (): Promise<void> => {
      render(<Page params={params} />);
    });
    await waitFor((): void => {
      expect(screen.getByText("COURSE ONE")).toBeInTheDocument();
    });
  });
});

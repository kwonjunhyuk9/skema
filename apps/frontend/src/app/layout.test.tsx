import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "@/app/layout";

jest.mock("@/app/header", () => {
  const HeaderMock = () => <div>Header Mock</div>;
  HeaderMock.displayName = "HeaderMock";
  return HeaderMock;
});

jest.mock("@/app/footer", () => {
  const FooterMock = () => <div>Footer Mock</div>;
  FooterMock.displayName = "FooterMock";
  return FooterMock;
});

jest.mock("@vercel/analytics/next", () => {
  const AnalyticsMock = () => <div data-testid="analytics-mock" />;
  AnalyticsMock.displayName = "AnalyticsMock";
  return { Analytics: AnalyticsMock };
});

jest.mock("@vercel/speed-insights/next", () => {
  const SpeedInsightsMock = () => <div data-testid="speed-insights-mock" />;
  SpeedInsightsMock.displayName = "SpeedInsightsMock";
  return { SpeedInsights: SpeedInsightsMock };
});

describe("Layout Component", () => {
  it("renders header, footer, and child", () => {
    render(
      <Layout>
        <div>Child Content</div>
      </Layout>,
    );
    expect(screen.getByText("Header Mock")).toBeInTheDocument();
    expect(screen.getByText("Footer Mock")).toBeInTheDocument();
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });
});

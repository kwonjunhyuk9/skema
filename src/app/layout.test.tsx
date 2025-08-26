import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "@/app/layout";

jest.mock("@/app/header", (): React.FC => {
  const HeaderMock: React.FC = (): React.ReactElement => <div>Header Mock</div>;
  HeaderMock.displayName = "HeaderMock";
  return HeaderMock;
});

jest.mock("@/app/footer", (): React.FC => {
  const FooterMock: React.FC = (): React.ReactElement => <div>Footer Mock</div>;
  FooterMock.displayName = "FooterMock";
  return FooterMock;
});

jest.mock("@vercel/analytics/next", (): { Analytics: React.FC } => {
  const AnalyticsMock: React.FC = (): React.ReactElement => <div data-testid="analytics-mock" />;
  AnalyticsMock.displayName = "AnalyticsMock";
  return { Analytics: AnalyticsMock };
});

jest.mock("@vercel/speed-insights/next", (): { SpeedInsights: React.FC } => {
  const SpeedInsightsMock: React.FC = (): React.ReactElement => <div data-testid="speed-insights-mock" />;
  SpeedInsightsMock.displayName = "SpeedInsightsMock";
  return { SpeedInsights: SpeedInsightsMock };
});

describe("Layout Component", (): void => {
  it("renders header, footer, and child", (): void => {
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

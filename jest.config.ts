import type { Config } from "jest";

const config: Config = {
  projects: [
    {
      displayName: "frontend",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/apps/frontend/**/*.spec.(ts|tsx)"],
    },
    {
      displayName: "backend",
      testEnvironment: "node",
      testMatch: ["<rootDir>/apps/backend/**/*.spec.ts"],
    },
  ],
};

export default config;

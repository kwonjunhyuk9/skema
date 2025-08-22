# Testing Guide

This document outlines the testing strategy adopted in this project, detailing the overall approach and objectives.

---

## 🛠️ Testing Tools

- **Unit and Integration Testing**: Jest
- **End-to-End Testing**: Playwright

---

## 🃏 Using Jest

- Jest automatically detects test files like `*.test.js`.
- Run all tests using `npx jest`.
- To test a specific file, use `npx jest filename`.
- Customize behavior using a `jest.config.js` file.

---

## 🎭 Using Playwright

- Jest automatically detects test files like `*.spec.js`.
- Run all tests using `npx playwright`.
- To test a specific file, use `npx playwright filename`.
- Customize behavior using a `playwright.config.js` file.

---

## 💡 Best Practices

- Write isolated, descriptive test cases.
- Use mocks and stubs for external services.
- Keep tests fast and consistent.

---

## 📚 References

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Playwright Documentation](https://playwright.dev/docs/intro)

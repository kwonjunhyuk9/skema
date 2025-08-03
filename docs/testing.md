# Testing Guide

This document outlines the testing strategy adopted in this project, detailing the overall approach and objectives.

---

## 🛠️ Testing Tools

- **Unit Tests**: Jest
- **E2E Tests**: Cypress
- **CI**: GitHub Actions

---

[//]: # (TODO: Use Jest)
## 🧪 Using Jest

- Jest automatically detects test files like `*.test.js` or `*.spec.js`.
- Run all tests using `npm test` or `npm run test`.
- To test a specific file, provide its path as an argument.
- Use watch mode to rerun tests on file changes.
- Snapshot testing helps track unexpected UI or data changes.
- Customize behavior using a `jest.config.js` file.

---

[//]: # (TODO: Use Cypress)
## 🛰️ Using Cypress

- Cypress is used for end-to-end and integration testing in the browser.
- Run tests using `npx cypress open` to launch the interactive test runner.
- You can also run tests headlessly with `npx cypress run`.
- Test files are usually placed in the `cypress/e2e` folder.
- Cypress provides a live browser where you can see each step as it runs.
- You can write tests using a clear syntax like `cy.visit()` and `cy.get()`.
- Configuration can be customized in `cypress.config.js`.

---

[//]: # (TODO: Use Github Actions)
## 🤖 Using GitHub Actions

- GitHub Actions lets you automate workflows like testing, building, or deploying code.
- Workflows are defined in `.github/workflows` as YAML files.
- You can trigger actions on events like push, pull request, or on a schedule.
- Each workflow runs on a virtual machine using defined steps and jobs.
- You can run scripts like `npm install`, `npm test`, or `npx cypress run` in your workflow.
- Marketplace provides prebuilt actions for caching, deployments, and more.
- Secrets like API keys can be stored securely in repository settings.

---

## 💡 Best Practices

- Write isolated, descriptive test cases.
- Use mocks and stubs for external services.
- Keep tests fast and consistent.

--- 

## 📚 References

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Cypress Documentation](https://docs.cypress.io/app/get-started/why-cypress)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
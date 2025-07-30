# Styling Guide

This document defines the code style guidelines for the project to ensure consistency and maintainability.

---

## 🛠 Styling Tools

- **Linter**: ESLint
- **Formatter**: Prettier

---

## 🧹 Using ESLint

- To lint your entire project, run `npx eslint .`.
- To lint a specific folder, `use npx eslint foldername/`.
- If you want to lint a single file, run `npx eslint filename.js`.
- To automatically fix fixable issues, add the fix flag: `npx eslint . --fix`.
- You can customize linting rules using the `.eslintrc` configuration file.

---

## 🎨 Using Prettier

- To check if your code is properly formatted without making changes, run `npx prettier . --check`.
- To format all files in your project, use `npx prettier . --write`.
- To format a specific file, run `npx prettier filename.js --write`.
- You can configure formatting options using a `.prettierrc` file.

---

## 📦 File and Folder Structure

- `public/data` for Static data files.
- `public/icons` for Website icon images.
- `public/projects` for Project static media.
- `src/app` for App Router core.
- `src/styles` for Global styles.
- `src/types` for Type definitions.

---

## 🔤 Naming Conventions

- Variables should be `camelCase`.
- Functions should be `camelCase`.
- Classes should be `PascalCase`.
- Types should be `PascalCase`.
- Constant should be `UPPER_SNAKE_CASE`.
- Files should be `kebab-case`.
- Folders should be `kebab-case`.

---

## 📝 Commenting Guidelines

- Keep comments concise and only when necessary.
- Use JSDoc for Public APIs.
- Mark Pending Work. Use `TODO:`, `FIXME:`, `OPTIMIZE:` for future tasks.

---

## 📚 References

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/)
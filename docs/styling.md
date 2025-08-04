# Styling Guide

This document defines the code style guidelines for the project to ensure consistency and maintainability.

---

## 🛠 Styling Tools

- **Formatter**: Prettier
- **Linter**: ESLint

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

## 🔃 Styling Order

- `Positioning` controls how an element is positioned on the page and layered with others.
- `Box Model` defines the element’s size, spacing, and how it fits in the layout.
- `Layout` manages the structural arrangement of elements using Flexbox or Grid.
- `Typography` styles the appearance and formatting of text.
- `Appearance` sets the visual look through colors, backgrounds, borders, and shadows.
- `Effects` brings motion and transformation to elements.
- `Miscellaneous` includes interaction behaviors like cursor, visibility, and user selection.

---

## 📝 Commenting Guidelines

- Keep comments concise and only when necessary.
- Use JSDoc for Public APIs.
- Mark Pending Work. Use `TODO:`, `FIXME:`, `OPTIMIZE:` for future tasks.

---

## 📚 References

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/)

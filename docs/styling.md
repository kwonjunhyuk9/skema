# Styling Guide

This document defines the code style guidelines for the project to ensure consistency and maintainability.

---

## 🛠 Styling Tools

- **Formatter**: Prettier
- **Linter**: ESLint

---

## 🧹 Using ESLint

- To lint your entire project, run `npx eslint .`.
- To lint a specific folder, run `npx eslint foldername/`.
- To lint a specific file, run `npx eslint filename.js`.
- To automatically fix fixable issues, run `npx eslint . --fix`.
- You can customize linting rules using the `.eslintrc` configuration file.

---

## 🎨 Using Prettier

- To format your entire project, run `npx prettier . --write`.
- To format a specific folder, run `npx prettier foldername/ --write`.
- To format a specific file, run `npx prettier filename.js --write`.
- To check if the formatting is correct, run `npx prettier . --check`.
- You can customize formatting options using the `.prettierrc` configuration file.

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

- `Position` controls how an element is positioned on the page and layered with others.
- `Box` defines the element’s size, spacing, and how it fits in the layout.
- `Layout` manages the structural arrangement of elements using Flexbox or Grid.
- `Typography` styles the appearance and formatting of text.
- `Appearance` sets the visual look through colors, backgrounds, borders, and shadows.
- `Effect` brings motion and transformation to elements.
- `Miscellaneous` includes interaction behaviors like cursor, visibility, and user selection.

---

## 📝 Commenting Guidelines

- Keep comments concise and only when necessary.
- Mark Pending Work. Use `TODO:`, `FIXME:`, `OPTIMIZE:` for future tasks.

---

## 📚 References

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/)

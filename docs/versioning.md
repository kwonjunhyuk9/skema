# Versioning Guide

This document briefly describes the versioning strategy and tools used in this project.

---

## 🛠️ Versioning Tools

- **Version Control System**: Git
- **Version Hosting System**: GitHub

---

## 🧰 Using Git

- To initialize a new Git repository, use the command `git init`.
- To check the current status of the repository and see which files are staged or unstaged, run `git status`.
- To add specific files to the staging area, use `git add <file>`.
- To commit the staged changes with a descriptive message, use `git commit -m "Describe your changes"`.

---

## 🌐 Using GitHub

- Create a repository on GitHub and link it to local repo `git remote add origin <URL>`.
- Push code to GitHub by using `git push origin main`.
- Open a Pull Request on GitHub for code review before merging.
- Use GitHub Issues to track bugs and features.
- Configure repository settings for collaborators, branch protection, and secrets.

---

## 🔖 Versioning Scheme

- The `MAJOR` version is incremented when incompatible API changes are introduced.
- The `MINOR` version is incremented when new, backward-compatible functionality is added.
- The `PATCH` version is incremented when backward-compatible bug fixes are made.

---

## 📚 References

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/en)
# Versioning Guide

This document briefly describes the versioning strategy and tools used in this project.

---

## 🛠️ Versioning Tools

- **Version Control System**: Git
- **Version Hosting System**: GitHub

---

## 🎛 Using Git

- To initialize a new Git repository, use `git init`.
- To clone a remote repository into a new local directory, use `git clone URL`.
- To check the current status of the repository and see which files are staged or unstaged, use `git status`.
- To add all files to the staging area, use `git add .`.
- To commit the staged changes with a descriptive message, use `git commit -m "message"`.
- To create an annotated tag on a specific commit, use `git tag -a v1.0 target -m "version 1.0"`.
- To create a new branch, use `git branch branchname`.
- To switch to an existing branch, use `git checkout branchname`.
- To merge the specified branch into the current branch, use `git merge branchname`.
- To push the current branch to the remote branch, use `git push origin branchname`.
- To fetch changes from the remote branch into the current branch, use `git pull origin branchname`.

---

## 🐱 Using GitHub

- Configure repository settings for collaborators, branch protection, and secrets.
- Open a Pull Request on GitHub for code review before merging.
- Use GitHub Issues to track bugs and features.

---

## 🔖 Versioning Scheme

- The `MAJOR` version is incremented when incompatible API changes are introduced.
- The `MINOR` version is incremented when new, backward-compatible functionality is added.
- The `PATCH` version is incremented when backward-compatible bug fixes are made.

---

## 📚 References

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Documentation](https://docs.github.com/en)

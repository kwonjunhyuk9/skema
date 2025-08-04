# Deployment Guide

This document explains the process of deploying the application to a live environment using a modern hosting platform.

---

## 🛠 Deployment Tools

- **Hosting**: Vercel

---

## 🚀 Using Vercel

- Log in to your Vercel account.
- Import the repository from your Git provider.
- Follow the steps to configure project settings.
- Vercel automatically detects the framework you're using.
- It configures the appropriate build process based on the framework.
- The output directory is set automatically according to the framework’s conventions.
- Dependency installation is also handled by default during the deployment process.
- Environment variables must be added manually.
- Every push to your Git repository automatically triggers a Preview deployment.

---

## ✅ Things to Verify

- Check logs in the Vercel dashboard for any errors.
- Confirm environment variables are loaded and working.
- Access the deployed site at its Vercel URL.
- Test all major functionality.

---

## 📚 References

- [Vercel Documentation](https://vercel.com/docs)

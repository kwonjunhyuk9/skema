# Deployment Guide

This document explains the process of deploying the application to a live environment using a modern hosting platform.

---

## 🛠 Deployment Tools

- **Hosting**: Vercel
- **Database**: Supabase

---

## 🚀 Using Vercel

- Log in to your Vercel account.
- Import the repository from your Git provider.
- It configures the appropriate build process based on the framework.
- Environment variables must be added manually.
- Every push to your Git repository automatically triggers a Preview deployment.

---

## 💽 Using Supabase

- Log in to your Supabase account.
- In Vercel, open Integrations and install Supabase.
- Add environment variables in Supabase.
- Test on a Preview URL and monitor logs.

---

## ✅ Things to Verify

- Check logs in the dashboard for any errors.
- Confirm environment variables are loaded and working.
- Access the deployed site at its URL.
- Test all major functionality.

---

## 📚 References

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

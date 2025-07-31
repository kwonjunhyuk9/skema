# Performance Guide

This document explains how to measure, monitor, and improve the performance of a web application using an automated
auditing tool.

---

## 🛠 Performance Tools

- **SEO**: Lighthouse

---

## 💡 Using Lighthouse

- Run a Lighthouse audit by executing `lighthouse <URL>` in the terminal.
- Use `--emulated-form-factor=mobile` or `--emulated-form-factor=desktop` to choose a device type.
- Specify which categories to audit with `--only-categories=performance,seo,accessibility`.
- Set the output format using `--output html` or `--output json`.
- Define the output file and path with `--output-path ./report.html`.
- Integrate the Lighthouse CLI commands into CI/CD pipelines for automated audits.

---

## 🎯 Optimization Goals

- The First Contentful Paint should be under 1.8 seconds.
- The Largest Contentful Paint should be under 2.5 seconds.
- The Total Blocking Time should be less than 300 milliseconds.
- The Cumulative Layout Shift should be below 0.1.
- The Accessibility score should be 90 or above.
- The SEO score should be 90 or above.
- The Best Practices score should be 90 or above.

---

## ⚙️ Optimization Strategies

- Remove unused code.
- Optimize images.
- Improve server response times and leverage caching.
- Enhance accessibility with ARIA attributes, keyboard navigation.
- Optimize SEO with proper meta-tags and semantic HTML.

---

## 📚 References

- [Lighthouse Official Documentation](https://developer.chrome.com/docs/lighthouse/)

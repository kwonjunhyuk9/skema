# Performance Guide

This document explains how to measure, monitor, and improve the performance of a web application using an automated
auditing tool.

---

## 🛠 Performance Tools

- **SEO**: Lighthouse
- **Analytics**: Vercel Analytics
- **Insights**: Vercel Speed Insights

---

[//]: # (TODO: Use Lighthouse)

## 💡 Using Lighthouse

- Run a Lighthouse audit by executing `lighthouse <URL>` in the terminal.
- Use `--emulated-form-factor=mobile` or `--emulated-form-factor=desktop` to choose a device type.
- Specify which categories to audit with `--only-categories=performance,seo,accessibility`.
- Set the output format using `--output html` or `--output json`.
- Define the output file and path with `--output-path ./report.html`.
- Integrate the Lighthouse CLI commands into CI/CD pipelines for automated audits.

---

## 📊 Using Vercel Analytics

- Enable Analytics for your project via the Vercel dashboard under the “Analytics” tab.
- Access real-time visitor data directly in the dashboard or via the Vercel Analytics API.
- View traffic sources, geographic distribution, and page performance metrics on demand.

---

## ⚡ Using Vercel Speed Insights

- Open your project in the Vercel dashboard and navigate to the “Speed Insights” section.
- Review key performance metrics like FCP, LCP, and TBT collected from real user data.
- Use filtering options to analyze specific URLs, devices, or time ranges.
- Track performance trends over time to monitor improvements or regressions after deployments.

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

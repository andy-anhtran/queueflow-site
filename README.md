# QueueFlow (`queueflow.cloud`)

> Asynchronous Client Portal & Visual Task Queue for Design & Development Agencies

[![Next.js](https://img.shields.io/badge/Next.js-16+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Corporate Operator](https://img.shields.io/badge/Operator-Techy_Tinker,_LLC-10B981?style=flat-square)](https://queueflow.cloud)

**QueueFlow** gives boutique design and development agencies an asynchronous client portal and Kanban queue. No hourly billables, no chaotic email threads—just strict 1-task WIP limits and automated flat-rate Stripe subscriptions.

---

## 🏛️ Corporate Operator & Compliance Details

This repository hosts the official web presence, client-facing waitlist, and compliance disclosures for **QueueFlow**, operated by:

- **Legal Entity:** Techy Tinker, LLC
- **Jurisdiction:** Delaware, United States
- **Entity Type:** Limited Liability Company (LLC)
- **Primary Domain:** [queueflow.cloud](https://queueflow.cloud)
- **Contact:** [support@queueflow.cloud](mailto:support@queueflow.cloud)
- **Payment Architecture:** Stripe Billing & Subscriptions (PCI-DSS Level 1 compliant)

---

## 🚀 Key Features

- **Strict WIP Concurrency:** Enforce 1-task concurrency limits per active client retainer to prevent scope creep.
- **Automated Stripe Billing Sync:** Real-time webhook events pause or lock client workspace access if subscription charges fail or lapse.
- **White-Label Client Portal:** Branded asynchronous portal where clients submit briefs, upload brand guidelines, and download deliverables.
- **Underwriting Ready:** Embedded compliance modals and operator disclosures for Stripe Atlas, Stripe Live Mode, and Mercury Bank reviews.

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/your-org/queueflow-site.git
cd queueflow-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
# Compile optimized static bundle
npm run build

# Start production server
npm start
```

---

## ⚡ Deployment to Vercel

This repository is pre-configured for zero-config, 1-click imports on Vercel:
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project** and select `queueflow-site`.
3. Set the root directory to `./` (framework preset: Next.js).
4. Click **Deploy**.

---

## ⚖️ License & Copyright

© 2026 Techy Tinker, LLC. All rights reserved.

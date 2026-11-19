# BRIONEX Technologies — Official Website

> Premium, international-standard digital solutions & technology agency website engineered from zero. Built with semantic HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

---

## 1. Brand Identity & Positioning

**Company Name:** BRIONEX Technologies  
**Positioning:** An international digital solutions and technology agency helping businesses build modern digital experiences and grow through technology.  
**Official WhatsApp / Phone:** `+92 317 0658553`  
**Official Email:** `info@brionex.com`  
**Verified Markets Served:** United States, United Kingdom, United Arab Emirates, Canada, Australia, Pakistan  

### Signature Color System (CSS Variables)
- **Deep Midnight Canvas:** `#0b0f19` (`--bg-primary`)
- **Secondary Slate Base:** `#0f172a` (`--bg-secondary`)
- **Card Surfaces:** `#131c31` (`--bg-surface`)
- **Signature Green Accent:** `#00e599` (`--accent-green` / used on the distinctive **X** in BRIONEX and high-priority UI highlights)
- **Secondary Cyan Accent:** `#00b4d8` (`--accent-cyan`)
- **Accent Gradient:** `linear-gradient(135deg, #00e599 0%, #00b4d8 100%)`
- **Typography:** Headings in **Plus Jakarta Sans**, body copy in **Inter**

---

## 2. Directory Structure

```text
brionextechnologies/
│
├── index.html                      # Homepage
├── services.html                   # All Services Overview
├── web-development.html            # Web Development Service
├── app-development.html            # Mobile App Development Service
├── custom-software.html            # Custom Software Development Service
├── website-redesign.html           # Website Redesign & Modernization Service
├── seo.html                        # Search Engine Optimization Service
├── branding.html                   # Logo Design & Brand Identity Service
├── social-media-marketing.html     # Social Media Marketing Service
├── projects.html                   # Portfolio & Client Work Showcase
├── mjd-funding.html                # Case Study: MJD Funding
├── mel-the-master-barber.html      # Case Study: Mel The Master Barber
├── sitara-event-complex.html       # Case Study: Sitara Event Complex
├── pricing.html                    # Transparent Milestone Pricing Plans
├── about.html                      # Who We Are, Mission, Vision, Approach
├── contact.html                    # Direct Inquiries & Interactive Form
├── faqs.html                       # Categorized Accordion FAQs
├── privacy-policy.html             # Starter Privacy Policy Template
├── terms-and-conditions.html       # Starter Commercial Terms Template
│
├── assets/
│   ├── css/
│   │   └── style.css               # Global Design System, Responsive Breakpoints
│   ├── js/
│   │   └── main.js                 # Sticky Nav, Scroll Reveal, Active Link, Form Logic
│   └── images/
│       ├── logo.svg                # Master Vector Logo with Neon 'X'
│       ├── favicon.svg             # Hexagonal App Favicon
│       ├── hero-mockup.svg         # Platform Visual Composition
│       ├── project-mjd.svg         # MJD Funding UI Interface Mockup
│       ├── project-mel.svg         # Mel The Master Barber UI Mockup
│       └── project-sitara.svg      # Sitara Event Complex UI Mockup
│
├── sitemap.xml                     # Search Engine Sitemap
├── robots.txt                      # Search Crawler Directives
└── README.md                       # Project Documentation & Deployment Guide
```

---

## 3. Technology Stack & Framework Rules

This project strictly adheres to clean web standards with **zero heavy frontend frameworks**:
- **Semantic HTML5:** Valid tags, accessible labels, landmark regions, schema microdata.
- **Modern CSS3:** CSS Custom Properties (variables), flexbox, grid, glassmorphism, responsive clamp typography.
- **Bootstrap 5.3.3:** Used via CDN for rapid grid scaffolding, utilities, and offcanvas dropdowns.
- **Bootstrap Icons 1.11.3:** Sharp, responsive vector iconography.
- **Vanilla JavaScript (ES6+):** Sticky navbar handler, IntersectionObserver scroll reveal, URL parameter autofill, active route highlight, and accessible form validation.
- **Strictly Prohibited & Excluded:** React, Vue, Angular, Next.js, Tailwind CSS, or unnecessary npm runtimes.

---

## 4. How to Run Locally

Because this is a pure static frontend site, no compilation, npm install, or build steps are required.

### Option A: VS Code Live Server
1. Open this repository folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option B: Python Local Server
Run in PowerShell or terminal inside the project directory:
```powershell
python -m http.server 3000
```
Open `http://localhost:3000` in your web browser.

### Option C: Node.js `npx serve`
```powershell
npx serve .
```

---

## 5. Contact Form Integration Guide

### Current Static Behavior
The contact form on `contact.html` features comprehensive client-side validation:
- Validates Full Name (minimum 2 characters).
- Validates Email format via regex.
- Validates Service Selection.
- Validates Project Details (minimum 10 characters).
- Displays validation errors per input.
- Toggles a button loading state while verifying data.
- **Zero Deception:** It clearly notifies the user that the site is running in static frontend mode and provides one-click instant transmission options:
  1. **Send via WhatsApp (+92 317 0658553)** prefilled with their exact form inputs.
  2. **Open in Email Client** preformatted with their project brief.

### Connecting to a Production Email Dispatch Service
To enable direct email inbox delivery from the form without writing backend code, choose one of these standard integrations:

#### Option 1: Web3Forms (Recommended - Free & Instant)
1. Get a free Access Key from [https://web3forms.com](https://web3forms.com).
2. In `contact.html`, set the form action:
   ```html
   <form id="brionexContactForm" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     <input type="hidden" name="subject" value="New BRIONEX Project Inquiry">
     ...
   ```

#### Option 2: Formspree
1. Create a free form at [https://formspree.io](https://formspree.io).
2. Set the form action in `contact.html`:
   ```html
   <form id="brionexContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option 3: Custom Node.js / Express Backend
If connecting to your custom API, update `assets/js/main.js`:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, company, service, budget, details })
})
.then(res => res.json())
.then(data => /* Display success alert */)
.catch(err => /* Handle error */);
```

---

## 6. Deployment Guide

### A. Deploy to Vercel (Instant Zero-Config)
1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Leave all build settings at default (Vercel automatically detects static HTML).
5. Click **Deploy**. Your site will be live on a fast global edge network in seconds.

### B. Deploy to Netlify
1. Drag and drop the `brionextechnologies` folder directly onto the [Netlify Drop](https://app.netlify.com/drop) dashboard, or connect via Git.
2. Publish directory: `.` (root).

### C. Deploy to Apache / Nginx / Traditional cPanel
Upload the contents of this folder directly to your web server's `public_html` directory via SFTP or cPanel File Manager.

---

## 7. Quality & SEO Audit Checklist

- [x] **Semantic HTML:** All pages include `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.
- [x] **Headings Hierarchy:** Single `<h1>` per page with strictly ordered `<h2>`, `<h3>`, `<h4>` subheadings.
- [x] **Unique Meta Tags:** Unique `<title>`, `<meta name="description">`, and canonical URLs on all 19 HTML files.
- [x] **Social OpenGraph:** Verified `og:title`, `og:description`, `og:image`, and `og:url` on all pages.
- [x] **Schema.org Structured Data:** Valid JSON-LD schemas for `Organization`, `WebSite`, `Service`, `Article`, and `FAQPage`.
- [x] **Real Client Work:** Featured case studies for verified live projects:
  - MJD Funding (`https://mjdfunding.vercel.app`)
  - Mel The Master Barber (`https://melthemasterbarber.vercel.app`)
  - Sitara Event Complex (`https://sitaraevenetcomplex01.vercel.app`)
- [x] **Accessibility:** Keyboard tab indexes, visible focus outlines, high-contrast text, `aria-label` tags, and `prefers-reduced-motion` media queries.
- [x] **Responsive Testing:** Fully responsive from 360px up to 4K displays with zero horizontal overflow.
- [x] **Sitemap & Robots:** Valid `sitemap.xml` and `robots.txt` indexing all production pages.

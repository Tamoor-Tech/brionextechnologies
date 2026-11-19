# Brionex Technologies — Official Website

> Premium, international-standard digital solutions & technology agency website. Built with semantic HTML5, modern CSS3, Bootstrap 5, and vanilla JavaScript.

---

## 1. Brand Identity & Positioning

**Company Name:** Brionex Technologies  
**Positioning:** An international digital solutions and technology agency helping businesses build modern digital experiences and grow through technology.  
**Official WhatsApp / Phone:** `+92 317 0658553`  
**Official Email:** `brionex.tech@gmail.com`  
**Verified Markets Served:** United States, United Kingdom, United Arab Emirates, Canada, Australia, Pakistan  

### Brand Color System (Yango-Inspired Violet Identity)
- **Primary Violet:** `#6639D8` (`--primary-violet` / used as the core UI accent, primary buttons, highlights, active states)
- **Deep Violet:** `#4823A8` (`--deep-violet`)
- **Light Violet & Soft Lavender:** `#F1ECFF` & `#E5DCFF`
- **Dark Background Canvas:** `#11121A` (`--bg-primary`)
- **Dark Surface Base:** `#171824` & `#1C1D2B` (`--bg-surface`)
- **Signature Green Identity Accent:** `#00e599` (preserved strictly for the **x** in Brione**x** and the floating WhatsApp action button `#25D366`)
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
│   │   └── main.js                 # Sticky Nav, Scroll Reveal, Active Link, Form Logic, Social Config
│   └── images/
│       ├── logo.svg                # Master Vector Logo with Signature Green 'x'
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
- **Direct Multi-Channel Options:** It clearly notifies the user that the site is running in static frontend mode and provides one-click instant transmission options:
  1. **Send via WhatsApp (+92 317 0658553)** prefilled with their exact form inputs.
  2. **Send via Email (`brionex.tech@gmail.com`)** preformatted with their project brief.

### Connecting to a Production Email Dispatch Service
To enable direct email inbox delivery from the form without writing backend code, choose one of these standard integrations:

#### Option 1: Web3Forms (Recommended - Free & Instant)
1. Get a free Access Key from [https://web3forms.com](https://web3forms.com).
2. In `contact.html`, set the form action:
   ```html
   <form id="brionexContactForm" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     <input type="hidden" name="subject" value="New Brionex Project Inquiry">
     ...
   ```

#### Option 2: Formspree
1. Create a free form at [https://formspree.io](https://formspree.io).
2. Set the form action in `contact.html`:
   ```html
   <form id="brionexContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 6. Social Media Accounts Configuration

Social media accounts are configured centrally in `assets/js/main.js`:
```javascript
const BRIONEX_SOCIAL_CONFIG = {
  facebook: 'https://facebook.com/brionextechnologies',
  instagram: 'https://instagram.com/brionextechnologies',
  tiktok: 'https://tiktok.com/@brionextechnologies',
  twitter: 'https://x.com/brionextech',
  linkedin: 'https://linkedin.com/company/brionextechnologies'
};
```
To update the accounts, simply update these values or the respective `href` links in the footer of the HTML files.

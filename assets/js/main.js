/**
 * BRIONEX TECHNOLOGIES — Global Script
 * Premium Interactions, Accessible Navigation & Form Validation
 */

// Centralized Social Media Configuration (Editable Placeholders)
const BRIONEX_SOCIAL_CONFIG = {
  facebook: 'https://facebook.com/brionextechnologies',
  instagram: 'https://instagram.com/brionextechnologies',
  tiktok: 'https://tiktok.com/@brionextechnologies',
  twitter: 'https://x.com/brionextech',
  linkedin: 'https://linkedin.com/company/brionextechnologies',
  whatsapp: 'https://wa.me/923170658553',
  email: 'brionex.tech@gmail.com'
};

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initActiveNav();
  initScrollReveal();
  initContactForm();
  initYearAutoUpdate();
  initSocialLinks();
  initCounterAnimation();
});

/**
 * 1. Sticky Navbar on Scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-brionex');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Active Navigation Highlight based on current path
 */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link-brionex, .dropdown-menu .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const linkPath = href.split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.nav-link-brionex');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  // Close mobile navbar menu on link click
  const navCollapse = document.getElementById('navbarBrionexContent');
  if (navCollapse) {
    const navItems = navCollapse.querySelectorAll('a:not(.dropdown-toggle)');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }
}

/**
 * 3. Scroll Reveal Animations (IntersectionObserver)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/**
 * 4. Transparent & Robust Contact Form Validation
 */
function initContactForm() {
  const form = document.getElementById('brionexContactForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const alertBox = document.getElementById('formStatusMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const serviceInput = document.getElementById('contactService');
    const detailsInput = document.getElementById('contactDetails');
    const companyInput = document.getElementById('contactCompany');
    const budgetInput = document.getElementById('contactBudget');

    // Reset validations
    [nameInput, emailInput, serviceInput, detailsInput].forEach(input => {
      if (input) input.classList.remove('is-invalid');
    });

    // Validate Name
    if (!nameInput || nameInput.value.trim().length < 2) {
      if (nameInput) nameInput.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
      if (emailInput) emailInput.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Service
    if (!serviceInput || !serviceInput.value) {
      if (serviceInput) serviceInput.classList.add('is-invalid');
      isValid = false;
    }

    // Validate Project Details
    if (!detailsInput || detailsInput.value.trim().length < 10) {
      if (detailsInput) detailsInput.classList.add('is-invalid');
      isValid = false;
    }

    if (!isValid) {
      if (alertBox) {
        alertBox.innerHTML = `
          <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <div>Please review the highlighted fields and provide valid project details.</div>
          </div>
        `;
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    // Loading state
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Validating Inquiry...`;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      const clientName = encodeURIComponent(nameInput.value.trim());
      const clientEmail = encodeURIComponent(emailInput.value.trim());
      const clientCompany = companyInput && companyInput.value.trim() ? encodeURIComponent(companyInput.value.trim()) : 'N%2FA';
      const clientService = encodeURIComponent(serviceInput.value);
      const clientBudget = budgetInput && budgetInput.value.trim() ? encodeURIComponent(budgetInput.value.trim()) : 'Unspecified';
      const clientMessage = encodeURIComponent(detailsInput.value.trim());

      const waText = `*Brionex Technologies Inquiry*%0A%0A*Name:* ${clientName}%0A*Email:* ${clientEmail}%0A*Company:* ${clientCompany}%0A*Service:* ${clientService}%0A*Budget:* ${clientBudget}%0A*Details:* ${clientMessage}`;
      const waUrl = `https://wa.me/923170658553?text=${waText}`;

      const mailtoUrl = `mailto:brionex.tech@gmail.com?subject=Project Inquiry: ${clientService} - ${clientName}&body=Name: ${clientName}%0D%0AEmail: ${clientEmail}%0D%0ACompany: ${clientCompany}%0D%0AService: ${clientService}%0D%0ABudget: ${clientBudget}%0D%0A%0D%0AProject Details:%0D%0A${clientMessage}`;

      if (alertBox) {
        alertBox.innerHTML = `
          <div class="alert alert-info border-1 text-white p-4" style="background-color: #1C1D2B; border-color: #6639D8;" role="alert">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="bi bi-info-circle-fill fs-5" style="color: #B39DFF;"></i>
              <strong class="fs-6 text-white">Inquiry Ready to Dispatch (Frontend Static Mode)</strong>
            </div>
            <p class="small text-secondary mb-3">
              This static website requires connection to a live form service (such as Web3Forms or Formspree as documented in <code>README.md</code>). You can transmit this inquiry directly to our engineering team right now:
            </p>
            <div class="d-flex flex-wrap gap-2">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #fff; font-weight: 600; border-radius: 9999px; padding: 0.5rem 1.2rem;">
                <i class="bi bi-whatsapp"></i> Send via WhatsApp (+92 317 0658553)
              </a>
              <a href="${mailtoUrl}" class="btn btn-sm btn-brionex-primary">
                <i class="bi bi-envelope"></i> Send via Email (brionex.tech@gmail.com)
              </a>
            </div>
          </div>
        `;
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  });
}

/**
 * 5. Auto-update Current Year in Footer
 */
function initYearAutoUpdate() {
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * 6. Populate Social Links
 */
function initSocialLinks() {
  const fbLinks = document.querySelectorAll('a.social-fb');
  const igLinks = document.querySelectorAll('a.social-ig');
  const ttLinks = document.querySelectorAll('a.social-tt');
  const xLinks = document.querySelectorAll('a.social-x');
  const inLinks = document.querySelectorAll('a.social-in');

  fbLinks.forEach(el => el.setAttribute('href', BRIONEX_SOCIAL_CONFIG.facebook));
  igLinks.forEach(el => el.setAttribute('href', BRIONEX_SOCIAL_CONFIG.instagram));
  ttLinks.forEach(el => el.setAttribute('href', BRIONEX_SOCIAL_CONFIG.tiktok));
  xLinks.forEach(el => el.setAttribute('href', BRIONEX_SOCIAL_CONFIG.twitter));
  inLinks.forEach(el => el.setAttribute('href', BRIONEX_SOCIAL_CONFIG.linkedin));
}


/**
 * 7. Animated Counter — Hero Stats & Stat Numbers
 * Counts from 0 to target value when element enters viewport.
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.hero-stat-number, .stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);

      const raw = el.textContent.trim();
      // Extract suffix (everything that isn't a digit or decimal point)
      const suffix = raw.replace(/[\d.]/g, '');
      const target = parseFloat(raw);
      if (isNaN(target)) return;

      let start = null;
      const duration = 1800;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        // Cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

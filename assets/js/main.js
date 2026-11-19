/**
 * BRIONEX TECHNOLOGIES — Global Script
 * Premium Interactions, Accessible Navigation & Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initActiveNav();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initYearAutoUpdate();
});

/**
 * 1. Sticky Navbar on Scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar-brionex');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
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
      // If dropdown item, also highlight parent dropdown toggle
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
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/**
 * 4. Back To Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 5. Transparent & Robust Contact Form Validation
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

    // Disable button & show checking state
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

      const waText = `*BRIONEX Inquiry*%0A%0A*Name:* ${clientName}%0A*Email:* ${clientEmail}%0A*Company:* ${clientCompany}%0A*Service:* ${clientService}%0A*Budget:* ${clientBudget}%0A*Details:* ${clientMessage}`;
      const waUrl = `https://wa.me/923170658553?text=${waText}`;

      const mailtoUrl = `mailto:info@brionex.com?subject=Project Inquiry: ${clientService} - ${clientName}&body=Name: ${clientName}%0D%0AEmail: ${clientEmail}%0D%0ACompany: ${clientCompany}%0D%0AService: ${clientService}%0D%0ABudget: ${clientBudget}%0D%0A%0D%0AProject Details:%0D%0A${clientMessage}`;

      if (alertBox) {
        alertBox.innerHTML = `
          <div class="alert alert-info border-1 text-white p-4" style="background-color: #132238; border-color: #00e599;" role="alert">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="bi bi-info-circle-fill text-accent fs-5"></i>
              <strong class="fs-6 text-white">Inquiry Verified (Frontend Static Mode)</strong>
            </div>
            <p class="small text-secondary mb-3">
              This static website requires connection to a live form endpoint (such as Formspree, Web3Forms, or your server API as documented in <code>README.md</code>). You can transmit this inquiry directly to our engineering team right now:
            </p>
            <div class="d-flex flex-wrap gap-2">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-brionex-primary">
                <i class="bi bi-whatsapp"></i> Send via WhatsApp (+92 317 0658553)
              </a>
              <a href="${mailtoUrl}" class="btn btn-sm btn-brionex-secondary">
                <i class="bi bi-envelope"></i> Open in Email Client
              </a>
            </div>
          </div>
        `;
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 700);
  });
}

/**
 * 6. Auto-update Current Year in Footer
 */
function initYearAutoUpdate() {
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * BRIONEX TECHNOLOGIES — Homepage Dedicated Script (home.js)
 * Clean, lightweight, modular vanilla JS for index.html only.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHomeStickyNavbar();
  initHomeScrollReveal();
  initHomeCounterAnimation();
});

/**
 * 1. Sticky Navbar on Scroll with backdrop blur
 */
function initHomeStickyNavbar() {
  const navbar = document.querySelector('.navbar-brionex');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 25) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * 2. IntersectionObserver Scroll Reveal
 * Respects prefers-reduced-motion
 */
function initHomeScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReduced) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 3. Animated Number Counters (Proof Strip)
 * Animates numbers from 0 to target on first viewport entry
 */
function initHomeCounterAnimation() {
  const counters = document.querySelectorAll('.home-stat-number');
  if (!counters.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);

      const raw = el.textContent.trim();
      const suffix = raw.replace(/[\d.]/g, '');
      const target = parseFloat(raw);
      if (isNaN(target)) return;

      let startTime = null;
      const duration = 1600;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      };

      requestAnimationFrame(step);
    });
  }, { threshold: 0.35 });

  counters.forEach(el => observer.observe(el));
}

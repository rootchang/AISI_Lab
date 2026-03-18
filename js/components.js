/* ============================================================
   AISI Lab — Shared Components
   Injects consistent nav + footer into every page
   ============================================================ */
(function () {
  'use strict';

  /* ── Logo SVG ───────────────────────────────────────────── */
  const LOGO_SVG = `<svg class="logo-mark" width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="core-grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#e2c78a"/><stop offset="100%" stop-color="#c9a84c"/></radialGradient>
      <radialGradient id="node-grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#7ecec8"/><stop offset="100%" stop-color="#5fb8b0"/></radialGradient>
      <filter id="glow2" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <circle cx="24" cy="24" r="20" stroke="#c9a84c" stroke-width="0.7" stroke-dasharray="2.5 3.5" opacity="0.35"/>
    <circle cx="24" cy="24" r="13" stroke="#5fb8b0" stroke-width="0.5" stroke-dasharray="1.5 4" opacity="0.25"/>
    <line x1="24" y1="24" x2="24" y2="6.5" stroke="#c9a84c" stroke-width="1.1" stroke-linecap="round" opacity="0.55"/>
    <line x1="24" y1="24" x2="39.5" y2="33" stroke="#5fb8b0" stroke-width="1.1" stroke-linecap="round" opacity="0.45"/>
    <line x1="24" y1="24" x2="8.5" y2="33" stroke="#c9a84c" stroke-width="1.1" stroke-linecap="round" opacity="0.45"/>
    <line x1="24" y1="24" x2="39.5" y2="15" stroke="#5fb8b0" stroke-width="0.8" stroke-linecap="round" opacity="0.30"/>
    <line x1="24" y1="24" x2="8.5" y2="15" stroke="#5fb8b0" stroke-width="0.8" stroke-linecap="round" opacity="0.30"/>
    <line x1="24" y1="6.5" x2="39.5" y2="15" stroke="#c9a84c" stroke-width="0.6" stroke-linecap="round" opacity="0.20"/>
    <line x1="39.5" y1="33" x2="8.5" y2="33" stroke="#5fb8b0" stroke-width="0.6" stroke-linecap="round" opacity="0.20"/>
    <circle cx="24" cy="6.5" r="3.2" fill="url(#core-grad)" filter="url(#glow2)" opacity="0.95"/>
    <circle cx="39.5" cy="33" r="3" fill="url(#node-grad)" opacity="0.85"/>
    <circle cx="8.5" cy="33" r="3" fill="url(#core-grad)" opacity="0.7"/>
    <circle cx="39.5" cy="15" r="2.2" fill="url(#node-grad)" opacity="0.5"/>
    <circle cx="8.5" cy="15" r="2.2" fill="url(#node-grad)" opacity="0.5"/>
    <circle cx="24" cy="24" r="5.5" fill="url(#core-grad)" filter="url(#glow2)"/>
    <circle cx="24" cy="24" r="3" fill="#fff" opacity="0.25"/>
  </svg>`;

  const NAV_LINKS = [
    { href: 'index.html',        label: 'Home' },
    { href: 'about.html',        label: 'About' },
    { href: 'research.html',     label: 'Research' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'team.html',         label: 'Team' },
    { href: 'hiring.html',       label: 'Hiring' },
    { href: 'news.html',         label: 'News' },
  ];

  const THEME_TOGGLE = `
    <button class="theme-toggle" type="button" aria-label="Toggle light/dark mode" title="Toggle theme">
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
      </svg>
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a6.7 6.7 0 1 0 9.8 9.8Z"></path>
      </svg>
    </button>`;

  const HAMBURGER = `<div class="hamburger" role="button" tabindex="0" aria-label="Menu"><span></span><span></span><span></span></div>`;

  /* ── Build Nav ──────────────────────────────────────────── */
  function buildNav() {
    const pageName = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const linksHTML = NAV_LINKS.map(({ href, label }) => {
      const isActive = href.toLowerCase() === pageName;
      return `<li><a href="${href}"${isActive ? ' class="active"' : ''}>${label}</a></li>`;
    }).join('');

    const navHTML = `
      <nav>
        <div class="nav-inner">
          <a class="nav-logo" href="index.html">
            ${LOGO_SVG}
            <div>
              <span class="logo-text"><em>AISI</em> Lab</span>
              <span class="logo-sub">AI &amp; Systems Immunology</span>
            </div>
          </a>
          <ul class="nav-links">${linksHTML}</ul>
          ${THEME_TOGGLE}
          ${HAMBURGER}
        </div>
      </nav>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  /* ── Build Footer ───────────────────────────────────────── */
  function buildFooter() {
    const footerHTML = `
      <footer>
        <div class="footer-inner">
          <div class="footer-brand">
            <div class="footer-logo-wrap">
              ${LOGO_SVG.replace('class="logo-mark" width="40" height="40"', 'class="logo-mark" width="34" height="34"')}
              <span class="footer-logo-text"><em>AISI</em> Lab</span>
            </div>
            <p>
            Laboratory of Artificial Intelligence &amp; Systems Immunology<br>
            Shanghai Institute of Immunology | Department of Immunology and Microbiology<br>
            School of Basic Medical Sciences, School of Medicine<br>
            Shanghai Jiao Tong University
            </p>
          </div>

          <div class="footer-col">
            <h5>Navigate</h5>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About PI</a></li>
              <li><a href="research.html">Research</a></li>
              <li><a href="publications.html">Publications</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="hiring.html">Hiring</a></li>
              <li><a href="news.html">News</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5>Resources &amp; Contact</h5>
            <ul>
              <li><a href="https://loris.ccr.cancer.gov/" target="_blank" rel="noopener">LORIS Tool (NCI)</a></li>
              <li><a href="https://scholar.google.com/citations?user=9PM5gWIAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></li>
              <li><a href="https://github.com/rootchang" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="mailto:tiangen.chang@sjtu.edu.cn">tiangen.chang@sjtu.edu.cn</a></li>
              <li><a class="no-link">Building 5, 280 Chongqing South Rd</a></li>
              <li><a class="no-link">Huangpu District, Shanghai 200025, China</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 AISI Lab — Laboratory of Artificial Intelligence &amp; Systems Immunology, SII, SJTU-SM. All rights reserved.</p>
          <p>Built with care for science &amp; open knowledge.</p>
        </div>
      </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  /* ── Theme Toggle ───────────────────────────────────────── */
  const root = document.documentElement;

  const applyTheme = (theme) => {
    const t = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('aisilab-theme', t); } catch (e) {}
  };

  function initTheme() {
    try {
      const saved = localStorage.getItem('aisilab-theme');
      if (saved) applyTheme(saved);
    } catch (e) {}

    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const cur = root.getAttribute('data-theme') || 'dark';
        applyTheme(cur === 'light' ? 'dark' : 'light');
      });
    }
  }

  /* ── Nav scroll shrink ──────────────────────────────────── */
  function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Hamburger ──────────────────────────────────────────── */
  function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    hamburger.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') navLinks.classList.toggle('open'); });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  /* ── Smooth scroll ──────────────────────────────────────── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  /* ── Scroll-reveal ──────────────────────────────────────── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-group');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.04, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => obs.observe(el));
  }

  /* ── Publication Filters ────────────────────────────────── */
  function initPubFilters() {
    const filterBtns = document.querySelectorAll('.pub-filter-btn');
    const pubCards   = document.querySelectorAll('.pub-card');
    if (!filterBtns.length) return;
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        pubCards.forEach(card => {
          const tags = (card.dataset.tags || '').split(',');
          card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
        });
        // Re-show/hide year groups
        document.querySelectorAll('.pub-year-group').forEach(group => {
          const visible = [...group.querySelectorAll('.pub-card')].some(c => c.style.display !== 'none');
          group.style.display = visible ? '' : 'none';
        });
      });
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    buildFooter();
    initTheme();
    initNavScroll();
    initHamburger();
    initSmoothScroll();
    initReveal();
    initPubFilters();
  });

})();

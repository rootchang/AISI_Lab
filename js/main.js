/* ============================================================
   AISI Lab — Main JavaScript  v2.0
   (components.js handles nav/footer/theme/reveal)
   ============================================================ */
(function () {
  'use strict';

  /* Contact form placeholder */
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      });
    }
  });

})();

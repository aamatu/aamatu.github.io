/* ==========================================================================
   main.js — navigation behaviour and small UI niceties.
   No dependencies.
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- Mobile navigation ------------------------------------------- */
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');

    if (toggle && nav) {
      var setOpen = function (open) {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        nav.classList.toggle('is-open', open);
      };

      toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });

      /* Close on link activation (single-page anchors + navigation) */
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) { setOpen(false); }
      });

      /* Close on Escape, return focus to the toggle */
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          toggle.focus();
        }
      });

      /* Reset state when leaving the mobile breakpoint */
      var mq = window.matchMedia('(min-width: 901px)');
      var onChange = function (ev) { if (ev.matches) { setOpen(false); } };
      if (typeof mq.addEventListener === 'function') {
        mq.addEventListener('change', onChange);
      } else if (typeof mq.addListener === 'function') {
        mq.addListener(onChange);
      }
    }

    /* ---- Light / dark switch ------------------------------------------
       A single button. The stylesheet and data-theme are applied before paint
       by an inline script in head.html; here we handle the click, keep the
       label describing the next action, and persist the choice.
       "light" is the classic stylesheet, "dark" is the modern one. */
    var themeBtn = document.querySelector('.theme-btn[data-theme-toggle]');
    if (themeBtn) {
      var themeLink = document.getElementById('site-css');
      var themes = window.__themes || {};

      var paintThemeButton = function (theme) {
        var toLight = theme === 'dark';
        var label = themeBtn.getAttribute(toLight ? 'data-to-light' : 'data-to-dark');
        themeBtn.setAttribute('aria-label', label);
        themeBtn.setAttribute('title', label);
        themeBtn.setAttribute('aria-pressed', toLight ? 'true' : 'false');
      };

      var applyTheme = function (theme) {
        var style = theme === 'dark' ? 'modern' : 'classic';
        if (themeLink && themes[style]) {
          themeLink.setAttribute('href', themes[style]);
          themeLink.setAttribute('data-style', style);
        }
        document.documentElement.setAttribute('data-theme', theme);
        try { window.localStorage.setItem('theme', theme); } catch (e) {}
        var colour = theme === 'dark' ? '#191816' : '#FCFBF9';
        document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
          m.setAttribute('content', colour);
        });
        paintThemeButton(theme);
      };

      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });

      paintThemeButton(document.documentElement.getAttribute('data-theme') || 'light');
    }

    /* ---- Email de-obfuscation -----------------------------------------
       Address ships base64-encoded in data-mail so it never appears as
       plain "user@host" text in the HTML source. Decoded and wired up
       here, client-side only. */
    var mailLinks = document.querySelectorAll('a.js-mail[data-mail]');
    mailLinks.forEach(function (link) {
      var email;
      try {
        email = atob(link.getAttribute('data-mail'));
      } catch (e) {
        return;
      }
      link.href = 'mailto:' + email;
      var textEl = link.querySelector('.js-mail-text');
      if (textEl) { textEl.textContent = email; }
    });
  });
})();

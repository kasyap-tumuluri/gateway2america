/* ==========================================================================
   Gateway2America — shared site behavior
   No cookies. No localStorage. No network requests. Nothing leaves the browser.
   ========================================================================== */

(function () {
  'use strict';

  const PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Prerendered posts live in /articles/, one level down. They declare the
     prefix on <body data-root="../"> so the shared nav, footer, and article
     links resolve from either depth without absolute URLs. */
  const ROOT = (document.body && document.body.getAttribute('data-root')) || '';
  const url = (path) => ROOT + path;
  const articleUrl = (slug) => ROOT + 'articles/' + encodeURIComponent(slug) + '.html';
  const COUNTER_DURATION_MS = 1400;
  const INQUIRY_EMAIL = 'gateway2america.primary@gmail.com';
  const SITE_ORIGIN = 'https://gateway2america.vercel.app';

  /* ======================================================================
     Utilities
     ====================================================================== */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /** Escape text destined for innerHTML. Used on anything user-typed. */
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /**
   * Parse an ISO date (YYYY-MM-DD) into parts without timezone drift.
   * Passing a bare ISO string to the Date constructor treats it as UTC, which
   * can roll the day backwards for users west of Greenwich.
   */
  function parseIsoDate(iso) {
    const [y, m, d] = String(iso).split('-').map(Number);
    return { year: y, monthIndex: m - 1, day: d };
  }

  function formatLongDate(iso) {
    const { year, monthIndex, day } = parseIsoDate(iso);
    return MONTHS[monthIndex] + ' ' + day + ', ' + year;
  }

  /* ======================================================================
     Shared chrome — nav and footer, defined once
     --------------------------------------------------------------------
     Injected into [data-site-nav] and [data-site-footer] so there is a
     single copy to edit. To add a nav link, edit NAV_LINKS below.
     ====================================================================== */

  const NAV_LINKS = [
    { href: 'about.html',       label: 'Who we are' },
    { href: 'pathways.html',    label: 'Pathways' },
    { href: 'inquiries.html',   label: 'Inquiries' },
    { href: 'redirection.html', label: 'Redirection' },
    { href: 'articles.html',    label: 'Articles' },
    { href: 'terms.html',       label: 'Terms of use' }
  ];

  const BRAND_MARK = '<svg class="brand__mark" viewBox="0 0 32 32" aria-hidden="true">'
    + '<path d="M6 29V14a10 10 0 0 1 20 0v15" fill="none" stroke="#E0A341" stroke-width="2"/>'
    + '<path d="M13 29V15a3 3 0 0 1 6 0v14" fill="none" stroke="#E0A341" stroke-width="1.5" opacity=".65"/>'
    + '</svg>';

  function renderChrome() {
    const navHost = $('[data-site-nav]');
    if (navHost) {
      navHost.className = 'nav';
      navHost.innerHTML = '<div class="wrap nav__inner">'
        + '<a class="brand" href="' + url('index.html') + '">' + BRAND_MARK + 'Gateway2America</a>'
        + '<nav aria-label="Main"><ul class="nav__links" data-nav-links>'
        + NAV_LINKS.map((l) => '<li><a href="' + url(l.href) + '">' + l.label + '</a></li>').join('')
        + '</ul></nav>'
        + '<a class="btn btn--primary nav__cta" href="' + url('inquiries.html') + '">Ask a question</a>'
        + '<button class="nav__toggle" data-nav-toggle aria-expanded="false" aria-label="Open menu">'
        + '<span></span></button>'
        + '</div>';
    }

    const footHost = $('[data-site-footer]');
    if (!footHost) return;
    footHost.className = 'footer';
    footHost.innerHTML = '<div class="wrap">'
      + '<div class="footer__grid">'
      + '<div class="footer__about">'
      + '<a class="brand" href="' + url('index.html') + '" style="margin-bottom:var(--s-4)">' + BRAND_MARK + 'Gateway2America</a>'
      + '<p>A free, volunteer-run service helping people understand the path to '
      + 'U.S. citizenship. Based in Pennsylvania, answering questions from anywhere.</p></div>'
      + '<div><h4>Sections</h4><ul>'
      + NAV_LINKS.slice(0, 5).map((l) => '<li><a href="' + url(l.href) + '">' + l.label + '</a></li>').join('')
      + '</ul></div>'
      + '<div><h4>Official sources</h4><ul>'
      + '<li><a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer">USCIS.gov</a></li>'
      + '<li><a href="https://www.uscis.gov/n-400" target="_blank" rel="noopener noreferrer">Form N-400</a></li>'
      + '<li><a href="https://www.uscis.gov/citizenship" target="_blank" rel="noopener noreferrer">Citizenship resources</a></li>'
      + '<li><a href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener noreferrer">Study materials</a></li>'
      + '</ul></div>'
      + '<div><h4>Legal</h4><ul>'
      + '<li><a href="' + url('terms.html') + '">Terms of use</a></li>'
      + '<li><a href="' + url('terms.html') + '#privacy">Privacy</a></li>'
      + '<li><a href="' + url('terms.html') + '#cookies">Cookies</a></li>'
      + '<li><a href="' + url('terms.html') + '#conduct">Code of conduct</a></li>'
      + '</ul></div></div>'
      + '<p class="footer__disclaimer"><strong>Not legal advice.</strong> Gateway2America is '
      + 'not a law firm and no one here is an attorney or an accredited representative. We '
      + 'share general knowledge about the citizenship process, point you to official '
      + 'resources, and post updates. We cannot advise you on your individual case, '
      + 'represent you, or predict its outcome. For advice about your situation, consult a '
      + 'licensed immigration attorney or a DOJ-accredited representative &mdash; '
      + '<a href="' + url('redirection.html') + '#legal-help">free and low-cost options are listed here</a>.</p>'
      + '<div class="footer__bottom">'
      + '<span>&copy; 2026 Gateway2America. Serving since October 2024.</span>'
      + '<span>Recipient of a Certificate of Special Congressional Recognition, PA-06</span>'
      + '</div></div>';
  }

  /* ======================================================================
     Navigation
     ====================================================================== */

  function initNav() {
    const toggle = $('[data-nav-toggle]');
    const links = $('[data-nav-links]');
    if (!toggle || !links) return;

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      links.setAttribute('data-open', 'false');
    }

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.setAttribute('data-open', String(!isOpen));
    });

    // Close after tapping a link so the next page isn't covered by the menu.
    links.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  }

  /** Mark the nav link matching this page so readers know where they are. */
  function markCurrentPage() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    $$('[data-nav-links] a').forEach((link) => {
      if (link.getAttribute('href') === page) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ======================================================================
     Motion 1 — scroll reveal
     ====================================================================== */

  function initReveal() {
    const targets = $$('[data-reveal]');
    if (!targets.length) return;

    if (PREFERS_REDUCED_MOTION || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay || 0);
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    targets.forEach((el) => observer.observe(el));
  }

  /* ======================================================================
     Motion 2 — stat counters
     ====================================================================== */

  function animateCount(el) {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    if (PREFERS_REDUCED_MOTION || !Number.isFinite(target)) {
      el.textContent = prefix + target + suffix;
      return;
    }

    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / COUNTER_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCount);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach((el) => observer.observe(el));
  }

  /* ======================================================================
     Inquiry form — composes an email, stores nothing
     ====================================================================== */

  function initInquiryForm() {
    const form = $('#inquiry-form');
    if (!form) return;

    const status = $('#inquiry-status');
    const MIN_INQUIRY_LENGTH = 15;
    const MIN_FIELD_LENGTH = 2;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let firstInvalid = null;

      ['origin', 'citizenship', 'inquiry'].forEach((name) => {
        const input = form.elements[name];
        const errorEl = $('#error-' + name);
        const value = input.value.trim();
        const minimum = name === 'inquiry' ? MIN_INQUIRY_LENGTH : MIN_FIELD_LENGTH;
        const isValid = value.length >= minimum;

        input.setAttribute('aria-invalid', String(!isValid));
        if (errorEl) {
          errorEl.textContent = isValid ? '' : (name === 'inquiry'
            ? 'Please describe your question in a little more detail.'
            : 'Please fill this in.');
        }
        if (!isValid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        if (status) status.textContent = 'Please correct the highlighted fields above.';
        return;
      }

      const topic = form.elements.topic ? form.elements.topic.value : 'General question';
      const body = [
        'GATEWAY2AMERICA INQUIRY',
        '',
        'Topic: ' + topic,
        'Where I am writing from: ' + form.elements.origin.value.trim(),
        'My current citizenship: ' + form.elements.citizenship.value.trim(),
        '',
        'My question:',
        form.elements.inquiry.value.trim(),
        '',
        '---',
        'Sent from the inquiry form at gateway2america.org.',
        'Reminder: please do not include your full name, date of birth, A-number,',
        'Social Security number, or passport number in this message.'
      ].join('\n');

      window.location.href = 'mailto:' + INQUIRY_EMAIL
        + '?subject=' + encodeURIComponent('Inquiry: ' + topic)
        + '&body=' + encodeURIComponent(body);

      if (status) {
        status.innerHTML = '<strong>Your email app should now be open</strong> with your '
          + 'question ready to send. Nothing was saved on this website &mdash; your words went '
          + 'straight from this page into your own email draft. If your email app did not '
          + 'open, write to us directly at <a href="mailto:' + INQUIRY_EMAIL + '">'
          + INQUIRY_EMAIL + '</a>.';
      }
    });
  }

  /* ======================================================================
     Articles
     ====================================================================== */

  function articleCardHtml(article) {
    const { year, monthIndex, day } = parseIsoDate(article.date);
    return '<a class="article-card" href="' + articleUrl(article.slug) + '">'
      + '<div class="article-card__date"><b>' + MONTHS_SHORT[monthIndex] + ' ' + day + '</b>' + year + '</div>'
      + '<div><h3>' + escapeHtml(article.title) + '</h3>'
      + '<p>' + escapeHtml(article.summary) + '</p>'
      + '<span class="pill">' + escapeHtml(article.category) + '</span></div></a>';
  }

  function sortedArticles() {
    return window.G2A_ARTICLES.slice().sort((a, b) => b.date.localeCompare(a.date));
  }

  function initArticleIndex() {
    const list = $('#article-list');
    if (!list || !window.G2A_ARTICLES) return;

    const all = sortedArticles();
    const countEl = $('#article-count');
    const searchEl = $('#article-search');
    const emptyEl = $('#article-empty');
    let activeCategory = 'All';

    function render() {
      const query = searchEl ? searchEl.value.trim().toLowerCase() : '';

      const visible = all.filter((article) => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        if (!matchesCategory) return false;
        if (!query) return true;
        const haystack = (article.title + ' ' + article.summary + ' ' + article.category).toLowerCase();
        return haystack.includes(query);
      });

      list.innerHTML = visible.map(articleCardHtml).join('');
      if (countEl) {
        countEl.textContent = visible.length === all.length
          ? all.length + ' posts'
          : visible.length + ' of ' + all.length + ' posts';
      }
      if (emptyEl) emptyEl.hidden = visible.length > 0;
    }

    $$('[data-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.filter;
        $$('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
        render();
      });
    });

    if (searchEl) searchEl.addEventListener('input', render);
    render();
  }

  function initArticleDetail() {
    const host = $('#article-detail');
    if (!host || !window.G2A_ARTICLES) return;
    // Prerendered by tools/build-seo.mjs; the markup is already correct.
    if (host.hasAttribute('data-prerendered')) return;

    const slug = new URLSearchParams(window.location.search).get('a');
    const sorted = sortedArticles();
    const index = sorted.findIndex((item) => item.slug === slug);

    if (index === -1) {
      host.innerHTML = '<div class="prose"><h1>We could not find that post</h1>'
        + '<p>The link may be out of date, or the post may have been renamed.</p>'
        + '<p><a class="btn btn--primary" href="articles.html">Browse all articles</a></p></div>';
      return;
    }

    const article = sorted[index];
    const newer = sorted[index - 1]; // newest sits at index 0
    const older = sorted[index + 1];

    document.title = article.title + ' — Gateway2America';
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', article.summary);
    // This URL is the legacy form. Point indexers at the prerendered page.
    let canonical = $('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', SITE_ORIGIN + '/articles/' + article.slug + '.html');

    let sourcesHtml = '';
    if (article.sources && article.sources.length) {
      sourcesHtml = '<div class="sources"><h4>Where this information comes from</h4><ul>'
        + article.sources.map((s) =>
            '<li><a href="' + escapeHtml(s.url) + '" target="_blank" rel="noopener noreferrer">'
            + escapeHtml(s.label) + '</a></li>').join('')
        + '</ul><p style="font-size:var(--fs-xs);color:var(--slate-soft);margin-top:var(--s-3)">'
        + 'We link to the original source so you can read it yourself. Always confirm anything '
        + 'important against the official page before you act on it.</p></div>';
    }

    let pagerHtml = '';
    if (newer || older) {
      pagerHtml = '<nav class="pager">'
        + (older ? '<a href="' + articleUrl(older.slug) + '"><span>Older</span>' + escapeHtml(older.title) + '</a>' : '<span></span>')
        + (newer ? '<a href="' + articleUrl(newer.slug) + '" style="text-align:right"><span>Newer</span>' + escapeHtml(newer.title) + '</a>' : '<span></span>')
        + '</nav>';
    }

    host.innerHTML = '<header class="article-head">'
      + '<a href="articles.html" style="font-size:var(--fs-sm);font-weight:650;text-decoration:none">&larr; All articles</a>'
      + '<h1 style="margin-top:var(--s-4)">' + escapeHtml(article.title) + '</h1>'
      + '<div class="article-meta"><time datetime="' + escapeHtml(article.date) + '">'
      + formatLongDate(article.date) + '</time>'
      + '<span class="pill">' + escapeHtml(article.category) + '</span></div></header>'
      + '<div class="prose">' + article.body + '</div>'
      + sourcesHtml + pagerHtml;
  }

  /** The three newest posts, shown on the home page. */
  function initLatestArticles() {
    const host = $('#latest-articles');
    if (!host || !window.G2A_ARTICLES) return;
    host.innerHTML = sortedArticles().slice(0, 3).map(articleCardHtml).join('');
  }

  /* ======================================================================
     The landing corridor — pointer parallax and drifting motes

     The arches themselves travel in CSS. This adds the two things CSS
     cannot do: tilt the whole run against the pointer, and float dust
     through the beam. Both are skipped entirely under reduced motion.
     ====================================================================== */

  const MOTE_DENSITY = 0.00006;   // motes per square pixel
  const MOTE_CAP = 70;
  const TILT_LIMIT = 5;           // degrees of parallax at the edges

  function initCorridorParallax(corridor) {
    const stage = corridor.querySelector('.corridor__stage');
    if (!stage) return;

    let queued = false;
    let pointer = { x: 0.5, y: 0.5 };

    function apply() {
      queued = false;
      // Invert X so the run leans away from the cursor, like looking past it.
      const tiltY = (0.5 - pointer.x) * TILT_LIMIT * 2;
      const tiltX = (pointer.y - 0.5) * TILT_LIMIT;
      stage.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
      stage.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
    }

    window.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse') return;
      pointer = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(apply);
    }, { passive: true });

    // Settle back to centre when the pointer leaves the window.
    document.addEventListener('mouseleave', function () {
      pointer = { x: 0.5, y: 0.5 };
      window.requestAnimationFrame(apply);
    });
  }

  function initMotes(canvas) {
    const ctx = canvas.getContext && canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let motes = [];
    let frame = 0;

    function spawn(y) {
      return {
        x: Math.random() * width,
        y: y,
        r: 0.5 + Math.random() * 1.4,
        rise: 0.10 + Math.random() * 0.26,
        sway: 0.2 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.12 + Math.random() * 0.38
      };
    }

    function seed() {
      const target = Math.min(MOTE_CAP, Math.round(width * height * MOTE_DENSITY));
      motes = [];
      for (let i = 0; i < target; i += 1) {
        motes.push(spawn(Math.random() * height));
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      frame = window.requestAnimationFrame(draw);
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < motes.length; i += 1) {
        const m = motes[i];
        m.y -= m.rise;
        m.phase += 0.006;
        if (m.y < -6) {
          motes[i] = spawn(height + 6);
          continue;
        }
        const x = m.x + Math.sin(m.phase) * m.sway * 10;
        ctx.beginPath();
        ctx.arc(x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(242, 200, 126, ' + m.alpha.toFixed(3) + ')';
        ctx.fill();
      }
    }

    // Stop painting when the tab is hidden; nobody is watching.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        window.cancelAnimationFrame(frame);
      } else {
        frame = window.requestAnimationFrame(draw);
      }
    });

    window.addEventListener('resize', resize, { passive: true });
    resize();
    frame = window.requestAnimationFrame(draw);
  }

  function initCorridor() {
    const corridor = document.querySelector('[data-corridor]');
    if (!corridor || PREFERS_REDUCED_MOTION) return;
    initCorridorParallax(corridor);
    const canvas = corridor.querySelector('[data-motes]');
    if (canvas) initMotes(canvas);
  }

  /* ======================================================================
     Boot
     ====================================================================== */

  function init() {
    renderChrome();
    initNav();
    markCurrentPage();
    initReveal();
    initCounters();
    initCorridor();
    initInquiryForm();
    initArticleIndex();
    initArticleDetail();
    initLatestArticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

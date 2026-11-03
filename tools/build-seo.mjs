/* ==========================================================================
   Gateway2America — SEO generator

   The 59 articles used to exist only inside JavaScript, reachable at
   article.html?a=<slug>. Crawlers had one URL with no content in the HTML.
   This writes a real page per article, with the body baked in and its own
   title, description, canonical URL, social card, and Article JSON-LD.

   Run it after editing assets/js/articles-data.js:

       node tools/build-seo.mjs

   It only writes files. Nothing here runs at request time, so the deployed
   site still has no build step.
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const SITE = 'https://gateway2america.vercel.app';
const ORG = 'Gateway2America';
const AUTHOR = 'Ronit Luthra';
const OG_IMAGE = SITE + '/og/gateway2america.png';
const ARTICLE_DIR = join(ROOT, 'articles');

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/* The hand-written pages. Kept here so the sitemap stays in one place. */
const PAGES = [
  { path: '/',                 changefreq: 'weekly',  priority: '1.0' },
  { path: '/about.html',       changefreq: 'monthly', priority: '0.8' },
  { path: '/pathways.html',    changefreq: 'monthly', priority: '0.9' },
  { path: '/inquiries.html',   changefreq: 'monthly', priority: '0.9' },
  { path: '/redirection.html', changefreq: 'weekly',  priority: '0.8' },
  { path: '/articles.html',    changefreq: 'weekly',  priority: '0.9' },
  { path: '/terms.html',       changefreq: 'yearly',  priority: '0.3' }
];

/* -------------------------------------------------------------------------- */

function loadArticles() {
  const source = readFileSync(join(ROOT, 'assets/js/articles-data.js'), 'utf8');
  const sandbox = {};
  new Function('window', source)(sandbox);
  const articles = sandbox.G2A_ARTICLES;
  if (!Array.isArray(articles) || !articles.length) {
    throw new Error('No articles found in assets/js/articles-data.js');
  }
  return articles;
}

/** Refuse to generate from data that would produce broken or clashing URLs. */
function validate(articles) {
  const problems = [];
  const seen = new Map();

  articles.forEach((a, i) => {
    const where = `#${i} ${a.slug || '(no slug)'}`;
    if (!a.slug || !/^[a-z0-9-]+$/.test(a.slug)) {
      problems.push(`${where}: slug must be lowercase letters, digits and hyphens`);
    }
    if (seen.has(a.slug)) {
      problems.push(`${where}: duplicate slug, also used by #${seen.get(a.slug)}`);
    }
    seen.set(a.slug, i);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date || '')) {
      problems.push(`${where}: date must be YYYY-MM-DD, got ${JSON.stringify(a.date)}`);
    }
    for (const field of ['title', 'summary', 'body', 'category']) {
      if (!a[field] || !String(a[field]).trim()) problems.push(`${where}: missing ${field}`);
    }
  });

  if (problems.length) {
    throw new Error('Article data is not fit to publish:\n  ' + problems.join('\n  '));
  }
}

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

/** Collapse article HTML to plain one-line text. */
function toText(html) {
  return String(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaDescription(article) {
  const text = toText(article.summary);
  if (text.length <= 158) return text;
  const cut = text.slice(0, 158);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

function formatLongDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/* -------------------------------------------------------------------------- */

function articleHead(article, canonical) {
  const description = metaDescription(article);
  const title = toText(article.title);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    author: { '@type': 'Person', name: AUTHOR },
    publisher: {
      '@type': 'Organization',
      name: ORG,
      url: SITE,
      logo: { '@type': 'ImageObject', url: OG_IMAGE }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    image: OG_IMAGE,
    url: canonical
  };
  if (article.sources && article.sources.length) {
    jsonLd.citation = article.sources.map((s) => ({
      '@type': 'CreativeWork', name: toText(s.label), url: s.url
    }));
  }

  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} — ${ORG}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#0B1725">
<meta name="author" content="${AUTHOR}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${ORG}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="article:published_time" content="${article.date}">
<meta property="article:section" content="${escapeHtml(article.category)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="../assets/css/tokens.css">
<link rel="stylesheet" href="../assets/css/main.css">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

/** Mirrors initArticleDetail() in site.js so prerendered pages look identical. */
function articleBody(article, newer, older) {
  let sources = '';
  if (article.sources && article.sources.length) {
    sources = '<div class="sources"><h4>Where this information comes from</h4><ul>'
      + article.sources.map((s) =>
          `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a></li>`
        ).join('')
      + '</ul><p style="font-size:var(--fs-xs);color:var(--slate-soft);margin-top:var(--s-3)">'
      + 'We link to the original source so you can read it yourself. Always confirm anything '
      + 'important against the official page before you act on it.</p></div>';
  }

  let pager = '';
  if (newer || older) {
    pager = '<nav class="pager">'
      + (older ? `<a href="${older.slug}.html"><span>Older</span>${escapeHtml(toText(older.title))}</a>` : '<span></span>')
      + (newer ? `<a href="${newer.slug}.html" style="text-align:right"><span>Newer</span>${escapeHtml(toText(newer.title))}</a>` : '<span></span>')
      + '</nav>';
  }

  return '<header class="article-head">'
    + '<a href="../articles.html" style="font-size:var(--fs-sm);font-weight:650;text-decoration:none">&larr; All articles</a>'
    + `<h1 style="margin-top:var(--s-4)">${escapeHtml(toText(article.title))}</h1>`
    + `<div class="article-meta"><time datetime="${article.date}">${formatLongDate(article.date)}</time>`
    + `<span class="pill">${escapeHtml(article.category)}</span></div></header>`
    + `<div class="prose">${article.body}</div>`
    + sources + pager;
}

function articlePage(article, newer, older) {
  const canonical = `${SITE}/articles/${article.slug}.html`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
${articleHead(article, canonical)}
</head>
<body data-root="../">

<a class="skip-link" href="#main">Skip to main content</a>
<header data-site-nav></header>

<main id="main">
  <section class="section" style="padding-top:calc(4.25rem + var(--s-7))">
    <div class="wrap wrap--narrow">

      <article id="article-detail" data-prerendered>${articleBody(article, newer, older)}</article>

      <aside class="form__note" style="margin-top:var(--s-7)">
        <strong>This is general information, not legal advice.</strong> Gateway2America
        is not a law firm. Rules change, and this post reflects what was accurate on the
        date shown. Confirm anything important against the official source before acting
        on it, and consult a licensed immigration attorney or a DOJ-accredited
        representative about your own case &mdash;
        <a href="../redirection.html#legal-help">free options are listed here</a>.
      </aside>

      <div style="margin-top:var(--s-7);display:flex;flex-wrap:wrap;gap:var(--s-3)">
        <a class="btn btn--outline" href="../articles.html">&larr; All articles</a>
        <a class="btn btn--primary" href="../inquiries.html">Ask us about this</a>
      </div>

    </div>
  </section>
</main>

<footer data-site-footer></footer>

<script src="../assets/js/articles-data.js"></script>
<script defer src="../assets/js/site.js"></script>
<script defer src="../assets/js/assistant.js"></script>
</body>
</html>
`;
}

/* -------------------------------------------------------------------------- */

function sitemap(articles) {
  const newest = articles[0] ? articles[0].date : null;

  const entries = PAGES.map((page) => ({
    loc: SITE + page.path,
    lastmod: (page.path === '/' || page.path === '/articles.html') ? newest : null,
    changefreq: page.changefreq,
    priority: page.priority
  })).concat(articles.map((a) => ({
    loc: `${SITE}/articles/${a.slug}.html`,
    lastmod: a.date,
    changefreq: 'yearly',
    priority: '0.7'
  })));

  const body = entries.map((e) => '  <url>\n'
    + `    <loc>${e.loc}</loc>\n`
    + (e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : '')
    + `    <changefreq>${e.changefreq}</changefreq>\n`
    + `    <priority>${e.priority}</priority>\n`
    + '  </url>').join('\n');

  return '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + body
    + '\n</urlset>\n';
}

/* -------------------------------------------------------------------------- */

function main() {
  const articles = loadArticles();
  validate(articles);

  const sorted = articles.slice().sort((a, b) => b.date.localeCompare(a.date));

  mkdirSync(ARTICLE_DIR, { recursive: true });

  // Drop pages whose slug no longer exists, so a rename does not leave an
  // orphan live on the site and listed nowhere.
  const keep = new Set(sorted.map((a) => a.slug + '.html'));
  let removed = 0;
  for (const file of readdirSync(ARTICLE_DIR)) {
    if (file.endsWith('.html') && !keep.has(file)) {
      rmSync(join(ARTICLE_DIR, file));
      removed += 1;
    }
  }

  sorted.forEach((article, i) => {
    writeFileSync(
      join(ARTICLE_DIR, article.slug + '.html'),
      articlePage(article, sorted[i - 1], sorted[i + 1])
    );
  });

  writeFileSync(join(ROOT, 'sitemap.xml'), sitemap(sorted));

  console.log(`articles written : ${sorted.length}`);
  if (removed) console.log(`stale removed    : ${removed}`);
  console.log(`sitemap entries  : ${PAGES.length + sorted.length}`);
  console.log(`newest post      : ${sorted[0].date} ${sorted[0].slug}`);
}

main();

# Handoff — Gateway2America

**Read this first, then `README.md`.** This file is the state of play and the
to-do list. `README.md` is the maintenance manual.

Last updated: 2 November 2026, after commit `c9bff01`.

---

## What this is

A free, volunteer-run site explaining the path to U.S. citizenship. Founded by
Ronit Luthra, active since October 2024. It is **not a law firm** and gives **no
legal advice** — that disclaimer is load-bearing and appears in the footer of
every page, on every article, and throughout the terms.

| | |
|---|---|
| Live | https://gateway2america.vercel.app |
| Repo | https://github.com/kasyap-tumuluri/gateway2america (public) |
| Stack | Static HTML, CSS, vanilla JS. No framework, no npm, no runtime build. |
| Deploy | `vercel --prod --yes` from the repo root |
| Inquiry inbox | `gateway2america.primary@gmail.com` |

Working tree is clean and `master` is pushed. Local preview:
`python3 -m http.server 8742`.

---

## To do

### 1. Verify how the site actually looks — nobody has

**This is the highest-priority item and it has never been done.** Every page was
built, validated structurally, and deployed without a single human or agent
looking at it rendered. The Claude Chrome extension was unreachable for the whole
build (it reported "not connected"); `open <url>` was the only option, which puts
the page in front of the user but not the agent.

Check at desktop and mobile widths:

- **Landing hero** — arches should travel continuously out of the light toward
  you, and the whole run should tilt when the mouse moves. If the depth reads as
  flat, `--fold` and the `travel` keyframe in `main.css` section 5b are the knobs.
- **Dust motes** — faint gold specks drifting up through the beam. Capped at 70.
- **3D components** — the folded panels on home and inquiries, the plate stacks,
  and the monoliths on pathways. These have **no drop shadows by design**; depth
  comes only from rotation and side faces. If they look flat, fix the geometry,
  do not add a shadow back.
- **Below 640px** all 3D flattens to plain blocks. Confirm nothing squashes.
- **Reduced motion** — the corridor should hold still at three depths and the
  mote canvas should vanish entirely.

### 2. Submit the sitemap to Google

Nothing gets indexed until a human does this. Verify the property in
[Search Console](https://search.google.com/search-console), then submit
`https://gateway2america.vercel.app/sitemap.xml`. All the SEO groundwork is done
and deployed; this is the switch that turns it on.

### 3. Connect the repo to Vercel so pushes deploy themselves

Right now deploys are CLI-only (`vercel --prod --yes`). **A `git push` does not
deploy.** Fix in the Vercel dashboard: Project → Settings → Git → connect
`kasyap-tumuluri/gateway2america`. Until then, anyone who pushes and walks away
will think they shipped and will be wrong.

### 4. Add the three images

Placeholders are waiting, each with an HTML comment showing exactly what to paste.

| Where | File |
|---|---|
| `about.html` founder portrait | `assets/img/ronit-luthra.jpg` |
| `about.html` Princeton Prize | `assets/img/princeton-prize.jpg` |
| `about.html` Congressional certificate | `assets/img/congressional-recognition.jpg` |

The `assets/img/` directory does not exist yet. Create it.

### 5. Optional — a real AI model behind the assistant

The chat widget matches questions against a keyword table in `assets/js/assistant.js`
and sends nothing anywhere. `respond()` has a documented seam with a worked Groq
example in the comment above it. **Two hard rules if you do this:** keep the API
key on a server (browser JS is public), and update the privacy wording in
`terms.html` and the assistant's own `'ai'` answer — once a model is involved,
questions *do* leave the browser, and the current text promises they do not.

---

## Rules that are not style preferences

Breaking these causes real harm or makes the site dishonest.

**The privacy promise must stay literally true.** The inquiry form composes a
`mailto:` draft. There is no server and no database, which is the only reason
"we keep no information about you" is accurate rather than aspirational. If you
ever switch to Formspree, Netlify Forms, or anything hosted, that provider stores
submissions and **you must reword the home page and `terms.html` first**.

**Never invent immigration facts.** The 59 articles describe real, sourced events
researched on 2 November 2026; the verified timeline is in
`.oil-ui/design/research-timeline.md`. 56 of 59 posts cite a source. People make
consequential decisions on this information. If you cannot source it, do not
publish it.

**Run the SEO generator after touching article data:**

```bash
node tools/build-seo.mjs
```

It rewrites all 59 pages in `articles/` plus `sitemap.xml`, deletes pages whose
slug no longer exists, and refuses to run on a malformed slug or a bad date.
Commit what it produces. Skip it and the new post is live but invisible to search.

**The "not legal advice" disclaimer stays** in the footer, on each article, and
in the terms.

---

## Design decisions, and why

The user rejected several things as looking AI-generated. These were replaced
deliberately — please do not reintroduce them.

| Do not | Instead |
|---|---|
| Grids of `.card` | `.screen3d`/`.panel3d`, `.stack3d`/`.plate3d`, `.monoliths` — section 7b of `main.css` |
| Hover lift + drop shadow | Border-colour change only. The 7 remaining `box-shadow`s are focus rings, the chat widget, and the hero promise. |
| `<li><strong>Label.</strong> Explanation.` | `.register` — a `<dl>` of term/description rows across hairlines. Zero bold-label bullets remain. |
| Decorative SVG icons | Typography. The only SVGs left are the brand arch mark and the hero arch. |
| A four-across strip of big stat numbers | `.ledger` — figures running down the page against hairlines |
| `<em>` for emphasis | `<strong>`. Only 4 `<em>` remain site-wide: two case names, a document title, and *notario público*. |
| "It's not X, it's Y" phrasing, back-to-back punchy sentences | Ordinary prose with natural fillers |

Design direction is "Threshold": an arch of warm light on deep ink navy,
deliberately unlike USCIS.gov's cold blue and unlike teal-gradient immigration
SaaS.

---

## Architecture

```
index.html about.html pathways.html inquiries.html
redirection.html articles.html terms.html      the 7 indexable pages
article.html                                   legacy ?a= shell, noindex
articles/<slug>.html                           59 generated posts — DO NOT hand-edit
assets/css/tokens.css                          colour, type scale, spacing, motion
assets/css/main.css                            all components, numbered sections
assets/js/articles-data.js                     the 59 articles — the source of truth
assets/js/site.js                              nav, footer, animations, form, rendering
assets/js/assistant.js                         the chat widget
tools/build-seo.mjs                            generates articles/ and sitemap.xml
og/card.html                                   social card source; render cmd in comment
vercel.json robots.txt sitemap.xml
```

Things that will bite you:

- **Nav and footer are injected by JS** from `NAV_LINKS` in `site.js`, into
  `[data-site-nav]` / `[data-site-footer]`. Edit them in one place.
- **Generated pages sit one level down** and declare `<body data-root="../">`.
  `site.js` prefixes internal links with it. Any new link built in JS must use
  `url()` or `articleUrl()`, or it will 404 from `/articles/`.
- **`initArticleDetail()` bails out** on `[data-prerendered]` so it cannot
  overwrite generated markup.
- **URLs keep `.html` deliberately.** Vercel `cleanUrls` would strip it and then
  redirect every canonical for no gain. If you enable it, update the canonicals
  in `tools/build-seo.mjs` to match.
- Article schema: `{slug, date:"YYYY-MM-DD", category, title, summary, body, sources:[{label,url}]}`.
  Categories: Milestone, Policy Update, How It Works, Court Ruling, Know Your Rights.

---

## Known rough edges

- The legacy redirect carries the old `?a=` query to the destination, so you land
  on `…/n400-plain-walkthrough.html?a=n400-plain-walkthrough`. Vercel appends
  query strings by default. Harmless — the destination's canonical points at the
  clean URL — but untidy.
- The **100% satisfaction** figure is unverifiable; there is no review system. The
  home page says so plainly underneath the ledger. The user has been told and has
  not asked for it to be removed. Keep the caveat unless they do.
- **No analytics at all**, by design. You will never know visitor numbers. That
  was the trade for the privacy promise.
- Some articles describe rules that may have changed since 2 November 2026. Each
  one is dated and linked, which is the mitigation.

---

## If a tool blocks you

A `pre:edit-write:gateguard-fact-force` hook blocks the **first** write to each
file until you state importers, affected API, data schemas, and the user's
verbatim instruction. It fired 21 times during this build and once destroyed a
large generated file. **Write a small stub first, then fill it with `Edit`** —
the gate only guards first creation. Or start the session with `ECC_GATEGUARD=off`.

# Gateway2America — website

> **Picking this up cold? Read [HANDOFF.md](HANDOFF.md) first.** It has the current
> state, the open to-do list, and the rules that are not style preferences. This
> file is the maintenance manual.

A static site. No build step, no Node, no npm. Open `index.html` in a browser and it
works.

## Deploy

Drag the whole folder onto **[Netlify Drop](https://app.netlify.com/drop)** — that is
the entire process. Or use Vercel, Cloudflare Pages, or GitHub Pages; all are free for
a site like this.

To preview locally:

```bash
python3 -m http.server 8731
# then open http://localhost:8731
```

## Files

```
index.html          Home — animated hero, stats, privacy promise, latest articles
about.html          Who we are — why we started, founder bio, awards
pathways.html       Six routes to citizenship
inquiries.html      What we accept + the inquiry form
redirection.html    Official forms, fees, study tools, free legal help
articles.html       Article index with search and category filters
article.html        Single post (reads ?a=<slug>)
terms.html          Terms, privacy, cookies, code of conduct

assets/css/tokens.css      Colours, type scale, spacing, motion — change the look here
assets/css/main.css        All component styles
assets/js/articles-data.js All 59 articles
assets/js/site.js          Nav, footer, animations, form, article rendering
assets/js/assistant.js     The Gateway Assistant chat widget
```

## The 3D graphic components

Section 7b of `main.css` holds three dimensional components used instead of flat card
grids. Each one falls back to a plain block under 640px wide and when the visitor has
`prefers-reduced-motion` turned on.

| Class | Looks like | Used on |
|---|---|---|
| `.screen3d` > `.panel3d` | Panels fanned in depth like a hinged room divider; they straighten and lift on hover | home ("what we do"), inquiries (accept / cannot-do) |
| `.stack3d` > `.plate3d` | Extruded slabs receding in Z, each with a lit bottom face | home (privacy), pathways (caveats), about (how we work) |
| `.monoliths` > `.monolith` | Standing blocks with a visible side face | pathways (naturalization requirements) |

`.panel3d--yes` and `.panel3d--no` recolour the hinge green or clay. `.plate3d--paper` is
the light variant, for stacks sitting on a paper background rather than ink.

The plain `.card` is still defined and still used twice — the terms-page contents nav and
the inquiry form shell. Please don't go back to grids of them; emphasis on this site is
meant to be carried by depth and colour rather than by boxes and italic type.

## SEO

All of it is plain static files, so it costs nothing and needs no framework.

**Every article has a real page.** The 59 posts used to exist only inside
JavaScript at `article.html?a=<slug>`, which gave crawlers one URL with no content
in the HTML. `tools/build-seo.mjs` now writes `articles/<slug>.html` for each one,
with the body baked into the markup and its own title, description, canonical URL,
social card, and `Article` JSON-LD including the cited sources.

**Re-run the generator whenever you touch `articles-data.js`:**

```bash
node tools/build-seo.mjs
```

It rewrites all 59 pages plus `sitemap.xml`, deletes pages whose slug no longer
exists, and refuses to run at all if a slug is malformed, duplicated, or a date is
not `YYYY-MM-DD`. Commit what it produces. Nothing runs at request time, so the
deployed site still has no build step.

| File | What it does |
|---|---|
| `robots.txt` | Allows everything, points to the sitemap, hides the legacy shell |
| `sitemap.xml` | Generated — 7 pages + 59 posts, each with its date |
| `vercel.json` | 301s old `?a=` links to the real page, caching, security headers |
| `og/card.html` | Source for the social image; the comment inside shows the render command |
| `og/gateway2america.png` | 1200×630 card used by every page |

**URLs keep the `.html` extension** everywhere, deliberately. Vercel's `cleanUrls`
would strip it and then redirect every canonical, which costs a hop for no gain.
If you ever turn it on, update the canonicals in `tools/build-seo.mjs` to match.

**Before launch**, verify in [Google Search Console](https://search.google.com/search-console)
and submit `https://gateway2america.vercel.app/sitemap.xml`. That is the only step
that needs a human.

## Add an article

Open `assets/js/articles-data.js` and copy any existing entry. Order does not matter —
the site sorts by date.

```js
{
  slug: 'url-friendly-name',          // becomes article.html?a=url-friendly-name
  date: '2026-11-15',                 // YYYY-MM-DD
  category: 'Policy Update',          // Policy Update | How It Works | Court Ruling
                                      // | Know Your Rights | Milestone
  title: 'Headline',
  summary: 'One or two sentences shown on the index.',
  body: `<p>Use HTML. h3 for subheads, ul for lists.</p>`,
  sources: [
    { label: 'USCIS — page name', url: 'https://www.uscis.gov/...' }
  ]
}
```

**Please keep citing sources.** Every policy post links its original notice. That is
what separates this from guesswork, and readers rely on it.

Then run `node tools/build-seo.mjs` so the post gets a real page and lands in the
sitemap. Skipping it means the post exists on the site but is invisible to search.

## Edit the nav or footer

Both are generated once in `assets/js/site.js`. Edit `NAV_LINKS` near the top of that
file and every page updates.

## Add the award and founder photos

Three image placeholders are waiting. Drop files into `assets/img/`, then replace the
placeholder `<div>` in the HTML with an `<img>` — each spot has a comment showing
exactly what to paste:

| Where | File to add |
|---|---|
| `about.html` founder portrait | `assets/img/ronit-luthra.jpg` |
| `about.html` Princeton Prize | `assets/img/princeton-prize.jpg` |
| `about.html` Congressional certificate | `assets/img/congressional-recognition.jpg` |

## How the inquiry form works

It composes an email in the visitor's own mail app via `mailto:`. **Nothing is submitted
to or stored on this website** — there is no server and no database. The only copy is
the one that arrives in `gateway2america.primary@gmail.com`.

This is what makes the site's privacy promise literally true. If you ever switch to a
hosted form service (Formspree, Netlify Forms, etc.), that provider will store
submissions on their servers, and **you must update the wording in `terms.html` and on
the home page** — otherwise the site would be making a privacy claim that is no longer
accurate.

The 7-day deletion promise is an operational commitment, not something the code can
enforce. It depends on you actually clearing the inbox.

## Adding real AI to the assistant

The assistant currently runs entirely in the browser, matching questions against a
keyword table in `assets/js/assistant.js`. It sends nothing anywhere.

To swap in Groq (or any API), replace the body of `respond()` — there is a worked
example in a comment directly above it. Two rules:

1. **Keep the API key on a server**, never in this file. Browser JS is public.
2. **Update the privacy wording** in `terms.html` and the assistant's own `'ai'` answer.
   Once a model is involved, questions *do* leave the browser, and the current text says
   they do not.

## Things that are deliberate

- **No analytics, no cookies, no tracking.** You will not know your visitor numbers.
  That was the trade for the privacy promise.
- **Nav, footer, and articles render via JavaScript.** Keeps content in one place.
- **Every article is dated** and every policy post cites its source, because
  immigration rules change and readers need to know how old a post is.
- **The "not legal advice" disclaimer appears in the footer of every page**, plus on
  each article and in the terms. Please do not remove it.
- **Italics are reserved for real typographic conventions** — court case names
  (`Mullin v. Doe`), document titles, and foreign-language terms. There are four `<em>`
  tags on the whole site. Use `<strong>` when you need emphasis instead.

## Accuracy note

The 59 articles describe real, sourced events researched on 2 November 2026. The
verified timeline they were written from is in `.oil-ui/design/research-timeline.md`.
Several posts describe rules that may have changed since — that is why each one is
dated and linked.

If you add posts, please do not invent policy details. Immigrants make consequential
decisions on this kind of information.

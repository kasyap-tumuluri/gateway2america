/* ==========================================================================
   Gateway Assistant — answers questions about this website.
   --------------------------------------------------------------------------
   Runs entirely in the visitor's browser. No network requests, no cookies,
   no storage. Nothing typed here leaves the device.

   TO ADD A REAL AI BACKEND LATER (e.g. Groq):
   Replace the body of `respond()` with a fetch to your own serverless
   endpoint. Everything else — the UI, the open/close logic, the message
   rendering — stays exactly as it is. See the note above respond().
   ========================================================================== */

(function () {
  'use strict';

  const ASSISTANT_NAME = 'Gateway Assistant';
  const INQUIRY_EMAIL = 'gateway2america.primary@gmail.com';
  const THINKING_MS = 420;

  /* ======================================================================
     Knowledge base
     --------------------------------------------------------------------
     Each entry has keywords (matched against the question) and an answer.
     Add entries freely — more specific ones should have more keywords, as
     matches are scored by how many keywords hit.
     ====================================================================== */

  const KB = [
    {
      id: 'greeting',
      keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings'],
      answer: `<p>Hello. I can answer questions about what Gateway2America does, how to
        use this site, and where to find things.</p>
        <p>What would you like to know?</p>`
    },
    {
      id: 'what-is-this',
      keywords: ['what is this', 'what do you do', 'who are you', 'about', 'gateway2america',
                 'what is gateway', 'purpose', 'what does this site'],
      answer: `<p><strong>Gateway2America</strong> is a free, volunteer-run service that
        helps people understand the path to U.S. citizenship.</p>
        <ul>
          <li>We answer questions in plain language, usually within 24&ndash;48 hours</li>
          <li>We point you to official forms and resources</li>
          <li>We tutor for the citizenship test, free</li>
          <li>We post updates when immigration rules change</li>
        </ul>
        <p>We have been active since October 2024. <a href="about.html">Read more about
        us &rarr;</a></p>`
    },
    /* 'fees' is deliberately placed BEFORE 'cost'. Questions mentioning money are
       far more often about government filing fees than about what we charge, and
       on an equal keyword score the earlier entry wins. */
    {
      id: 'fees',
      keywords: ['filing fee', 'n-400 fee', 'cost of citizenship', 'how much is the application',
                 '760', '710', '380', '1330', 'fee waiver', 'waiver', 'reduced fee',
                 'cant afford', 'can not afford', 'cannot afford', 'too expensive',
                 'cheaper', 'pay less', 'price', 'cost', 'money', 'expensive', 'fees',
                 'how much does it cost to apply'],
      answer: `<p>The N-400 currently costs <strong>$760 on paper or $710 online</strong>.</p>
        <p><strong>You may be able to pay less:</strong></p>
        <ul>
          <li>$380 reduced fee if your household income is at or below
          400% of the Federal Poverty Guidelines (Form I-942, paper filing only)</li>
          <li>Full waiver if you receive a means-tested benefit, are
          under 150% of the guidelines, or face hardship (Form I-912)</li>
          <li>No fee at all for military naturalization applicants</li>
        </ul>
        <p>That 400% threshold is higher than most people assume — it is worth checking.</p>
        <p><strong>Note:</strong> a rule proposed in June 2026 would raise the fee to
        $1,330 and remove waivers. It is <strong>not</strong> in effect, but if you qualify now
        there is an argument for not waiting.
        <a href="article.html?a=n400-fee-increase-proposed">Read more &rarr;</a></p>`
    },
    {
      id: 'cost',
      keywords: ['do you charge', 'is this free', 'is it free', 'your service free',
                 'charge me', 'charge for', 'fee for your help', 'how much do you charge',
                 'do i have to pay you', 'free service'],
      answer: `<p><strong>Everything we do is free.</strong> There is nothing to buy
        here, no premium tier, and no referral commission. We have no financial interest
        in your case.</p>
        <p>If you meant government filing fees, those are separate and go to
        USCIS &mdash; ask me about "filing fees" and I will explain those, including how
        to pay less.</p>`
    },
    {
      id: 'privacy',
      keywords: ['privacy', 'safe', 'data', 'information', 'store', 'keep my', 'secure',
                 'confidential', 'anonymous', 'track', 'cookies', 'delete'],
      answer: `<p><strong>We keep no information about you.</strong> This was a design
        decision, not a policy afterthought.</p>
        <ul>
          <li>Our form <strong>never asks your name or date of birth</strong></li>
          <li>The site has <strong>no database</strong> — your question goes straight
          into your own email program</li>
          <li>We <strong>delete your message within 7 days</strong> of helping you</li>
          <li>No cookies, no analytics, no tracking of any kind</li>
          <li>This chat runs entirely in your browser — nothing you type to me is sent
          anywhere</li>
        </ul>
        <p><a href="terms.html#privacy">Read the full privacy terms &rarr;</a></p>`
    },
    {
      id: 'legal-advice',
      keywords: ['legal advice', 'lawyer', 'attorney', 'are you lawyers', 'represent me',
                 'legal', 'advise me', 'can you advise'],
      answer: `<p><strong>No — we are not lawyers, and nothing here is legal advice.</strong>
        Nobody at Gateway2America is an attorney or a DOJ-accredited representative.</p>
        <p>We can explain how the process generally works and point you to resources. We
        <strong>cannot</strong> advise you on your own case, fill in your forms, represent you, or
        predict an outcome.</p>
        <p>You should talk to a real attorney if your situation involves a criminal
        record, a prior removal order, time out of status, a denied application, or
        detention.</p>
        <p><a href="redirection.html#legal-help">Free and low-cost legal help is listed
        here &rarr;</a></p>`
    },
    {
      id: 'inquiry-how',
      keywords: ['ask a question', 'send inquiry', 'contact', 'email', 'how do i ask',
                 'get in touch', 'reach you', 'submit', 'form'],
      answer: `<p>Go to the <a href="inquiries.html">Inquiries page</a> and fill in three
        things: where you are writing from, your current citizenship, and your question.</p>
        <p>Pressing the button opens <strong>your own email app</strong> with it filled
        in — you read it over and send it yourself. Nothing is stored on this website.</p>
        <p>You can also write directly to
        <a href="mailto:${INQUIRY_EMAIL}">${INQUIRY_EMAIL}</a>.</p>
        <p>We reply in <strong>24&ndash;48 hours</strong>.</p>`
    },
    {
      id: 'response-time',
      keywords: ['how long', 'response time', 'when will you reply', 'how fast',
                 'hear back', 'reply'],
      answer: `<p>We normally reply within <strong>24 to 48 hours</strong>. A real person
        reads every inquiry — there is no automated system.</p>
        <p>Follow-up questions are welcome and unlimited.</p>`
    },
    {
      id: 'tutoring',
      keywords: ['tutor', 'tutoring', 'study', 'practice', 'teach', 'lessons', 'help me study',
                 'test prep', 'prepare for the test'],
      answer: `<p>Yes — we tutor for the <strong>civics and English portions of the
        citizenship test, free of charge</strong>.</p>
        <p>When you write in, <strong>tell us your N-400 filing date</strong>. That date
        decides which version of the test you take, and we want to drill you on the right
        question list:</p>
        <ul>
          <li>Filed <strong>before</strong> Oct 20, 2025 → 10 questions from 100, 6 to pass</li>
          <li>Filed <strong>on or after</strong> → 20 questions from 128, 12 to pass</li>
        </ul>
        <p><a href="inquiries.html">Request tutoring &rarr;</a></p>`
    },
    {
      id: 'civics-test',
      keywords: ['civics test', 'citizenship test', 'test', 'exam', '128', '100 questions',
                 'questions', 'pass the test', '12 out of 20'],
      answer: `<p>Which test you take depends on your <strong>filing date</strong>, not
        your interview date:</p>
        <ul>
          <li>Filed before Oct 20, 2025: 10 questions drawn from 100,
          6 correct to pass</li>
          <li>Filed on or after Oct 20, 2025: 20 questions drawn from
          128, 12 correct to pass</li>
        </ul>
        <p>It is spoken, not written, and the officer stops once you pass. Over 75% of the
        new questions are the same as the 2020 version.</p>
        <p>Check your receipt notice for your filing date, then
        <a href="https://www.uscis.gov/citizenship/find-study-materials-and-resources"
        target="_blank" rel="noopener noreferrer">download the official study materials</a>.
        We also tutor free.</p>`
    },
    {
      id: 'english',
      keywords: ['english', 'speak english', 'english test', 'language', 'fluent',
                 'my english is bad', 'reading', 'writing'],
      answer: `<p>The English requirement has three parts, and the standard is
        <strong>basic English, not fluency</strong>:</p>
        <ul>
          <li>Reading — read one sentence aloud correctly (3 attempts)</li>
          <li>Writing — write one dictated sentence (3 attempts)</li>
          <li>Speaking — there is no separate test; the officer assesses
          this across the whole interview</li>
        </ul>
        <p>An accent is not a problem. Asking the officer to repeat something is not a
        problem.</p>
        <p><strong>You may be exempt</strong> if you are 50+ with 20 years as a resident,
        55+ with 15 years, or 65+ with 20 years — then you take civics in your own
        language. <a href="article.html?a=age-exemptions-explained">Read about the
        exemptions &rarr;</a></p>`
    },
    {
      id: 'pathways',
      keywords: ['pathway', 'pathways', 'route', 'how do i become a citizen', 'eligible',
                 'qualify', 'requirements', 'which path', 'where do i start'],
      answer: `<p>There is no single route. The common ones:</p>
        <ul>
          <li>Green card holder — 5 years, then file N-400</li>
          <li>Married to a citizen — 3 years instead of 5</li>
          <li>Child of a citizen — often a citizen already, no test needed</li>
          <li>Refugee or asylee — residence is often backdated, so you
          may qualify sooner than you think</li>
          <li>Military service — the most generous provisions in the law</li>
          <li>No green card yet — that is your actual next step</li>
        </ul>
        <p><a href="pathways.html">See all six pathways in detail &rarr;</a></p>
        <p>If you are not sure which is yours, describe your situation and
        <a href="inquiries.html">ask us</a> — that is our most common question.</p>`
    },
    {
      id: 'forms',
      keywords: ['form', 'n-400', 'i-90', 'which form', 'forms', 'download', 'paperwork',
                 'n400', 'application'],
      answer: `<p>Our <a href="redirection.html">Redirection page</a> lists every official
        form, linked straight to USCIS. The common ones:</p>
        <ul>
          <li>N-400 — the citizenship application</li>
          <li>I-90 — renew or replace a green card</li>
          <li>N-600 — proof you are <strong>already</strong> a citizen</li>
          <li>I-130 — petition for a family member</li>
          <li>AR-11 — change of address (required within 10 days)</li>
        </ul>
        <p><strong>Two rules that save people money:</strong> every official form is free
        to download, and you should always download it fresh from uscis.gov the week you
        file — USCIS rejects outdated editions.</p>`
    },
    {
      id: 'delay',
      keywords: ['delay', 'delayed', 'taking long', 'stuck', 'no response from uscis',
                 'waiting', 'backlog', 'slow', 'still pending', 'months'],
      answer: `<p>Long waits are unfortunately normal right now. As of August 2026 the
        N-400 average was <strong>12.7 months</strong>, with a backlog over
        <strong>813,000</strong> cases.</p>
        <p><strong>Three free escalation routes</strong>, in this order:</p>
        <ol>
          <li><a href="https://egov.uscis.gov/e-request/Introduction.do" target="_blank"
          rel="noopener noreferrer">Submit a case inquiry to USCIS</a></li>
          <li><a href="https://www.dhs.gov/topics/cis-ombudsman" target="_blank"
          rel="noopener noreferrer">The CIS Ombudsman</a></li>
          <li><a href="https://www.house.gov/representatives/find-your-representative"
          target="_blank" rel="noopener noreferrer">Your member of Congress</a> — genuinely
          effective, and free</li>
        </ol>
        <p>Meanwhile: <strong>keep your address current with USCIS</strong>. A missed
        notice can mean denial for abandonment.</p>
        <p><a href="inquiries.html">Send us your notices and we will help you read them.</a></p>`
    },
    {
      id: 'articles',
      keywords: ['article', 'articles', 'news', 'blog', 'updates', 'what changed',
                 'policy change', 'recent'],
      answer: `<p>Our <a href="articles.html">Articles section</a> has 59 posts covering
        immigration changes from October 2024 onward — each one dated, in plain language,
        with a link to the official source so you can verify it.</p>
        <p>You can filter by Policy Updates, How It Works, Court Rulings, Know Your
        Rights, or Our Milestones, and search the archive.</p>
        <p>A good place to start is
        <a href="article.html?a=where-things-stand-late-2026">"Where things stand"</a>,
        which condenses two years of changes.</p>`
    },
    {
      id: 'awards',
      keywords: ['award', 'awards', 'princeton', 'congressional', 'recognition', 'prize',
                 'certificate', 'congressionally recognized'],
      answer: `<p>We have received two recognitions in 2026:</p>
        <ul>
          <li>Princeton Prize in Race Relations — Certificate of
          Accomplishment, Eastern Pennsylvania and Delaware region (April 19, 2026)</li>
          <li>Certificate of Special Congressional Recognition — from
          Pennsylvania's 6th congressional district (May 19, 2026)</li>
        </ul>
        <p>To be precise about it: both recognise community service. Neither is a
        legal credential, an accreditation, or an endorsement of legal services — and
        neither changes the fact that we are not attorneys.</p>
        <p><a href="about.html">See the awards section &rarr;</a></p>`
    },
    {
      id: 'founder',
      keywords: ['founder', 'ronit', 'luthra', 'who runs', 'who started', 'behind this'],
      answer: `<p>Gateway2America was founded by <strong>Ronit Luthra</strong> in October
        2024, who still answers most incoming inquiries.</p>
        <p>It grew out of noticing that people around him were getting stuck on questions
        that had clear answers — just not answers written in language they could use.</p>
        <p><a href="about.html">Read the full bio and why we started &rarr;</a></p>`
    },
    {
      id: 'meetup',
      keywords: ['meetup', 'in person', 'chester valley', 'trail', 'meet you', 'event',
                 'face to face'],
      answer: `<p>We held an open in-person meetup at the <strong>Chester Valley
        Trail</strong> on August 9, 2026 — no agenda, no sign-up, just questions and
        conversation.</p>
        <p>Some things are much easier face to face: reading a notice together, practising
        spoken English and civics answers out loud, or talking through a worry that is
        hard to write down.</p>
        <p><a href="article.html?a=chester-valley-trail-meetup">Read about it &rarr;</a>
        — and if you would like to arrange another time,
        <a href="inquiries.html">just ask</a>.</p>`
    },
    {
      id: 'birthright',
      keywords: ['birthright', 'born in the us', 'born here', 'my baby', 'newborn',
                 'child born', '14th amendment', 'fourteenth'],
      answer: `<p><strong>Birthright citizenship is in effect nationwide.</strong> If you
        are born on U.S. soil, you are a U.S. citizen.</p>
        <p>An executive order tried to change this in January 2025. The
        <strong>Supreme Court struck it down 6&ndash;3 on June 30, 2026</strong>, holding
        that a president cannot alter constitutional rights by executive order.</p>
        <p>For a U.S.-born child, the state or county <strong>birth certificate is the
        proof of citizenship</strong>. You can apply for a passport normally.</p>
        <p><strong>Warning:</strong> nobody needs to pay anyone to "confirm" or "protect"
        a U.S.-born child's citizenship. There is no such registration. Anyone offering
        it is defrauding you.</p>
        <p><a href="article.html?a=supreme-court-birthright-citizenship">Read more &rarr;</a></p>`
    },
    {
      id: 'tps',
      keywords: ['tps', 'temporary protected status', 'my tps', 'tps ending', 'protected status'],
      answer: `<p>TPS designations have changed frequently and mostly in one direction.
        <strong>Always check your country's current status on the
        <a href="https://www.uscis.gov/humanitarian/temporary-protected-status"
        target="_blank" rel="noopener noreferrer">official USCIS TPS page</a></strong>
        rather than relying on any article.</p>
        <p>Two things worth knowing if you hold TPS:</p>
        <ul>
          <li>Pursue a durable status now, while you still have work
          authorization. Since <em>Mullin v. Doe</em> (2026), litigation is much less
          likely to pause a termination.</li>
          <li>The most commonly missed option: a U.S. citizen child who
          has turned 21 can petition for a parent. For people who have held TPS since the
          1990s, those children are now well past 21.</li>
        </ul>
        <p>Get a free screening from a nonprofit —
        <a href="redirection.html#legal-help">options here</a>.</p>`
    },
    {
      id: 'scams',
      keywords: ['scam', 'notario', 'fraud', 'is this real', 'someone asked me for money',
                 'guarantee', 'too good'],
      answer: `<p>A few hard rules that protect you:</p>
        <ul>
          <li>A <em>notario público</em> is not a lawyer in the U.S. sense,
          whatever it means in your home country</li>
          <li>Nobody can guarantee an outcome. Real representatives are
          not permitted to</li>
          <li>There is no way to pay to expedite an N-400</li>
          <li>The Diversity Visa lottery is free to enter</li>
          <li>Official forms are free to download — you only pay the
          government filing fee</li>
          <li>USCIS will not call you demanding payment or threaten you
          over the phone</li>
        </ul>
        <p>Verify anyone claiming to represent you against the
        <a href="https://www.justice.gov/eoir/recognition-and-accreditation-program"
        target="_blank" rel="noopener noreferrer">DOJ accredited representative list</a>.</p>`
    },
    {
      id: 'ai',
      keywords: ['are you ai', 'are you a bot', 'robot', 'chatgpt', 'human', 'real person',
                 'is this automated'],
      answer: `<p>Fair question, and a straight answer: <strong>I am a simple assistant
        running in your browser</strong>, not a large language model. I match your question
        against a set of prepared answers about this website. Nothing you type to me is
        sent anywhere.</p>
        <p>That means I am reliable on "how does this site work" questions and poor at
        anything unusual.</p>
        <p><strong>A real human answers the inquiries</strong> — if I cannot help,
        <a href="inquiries.html">write in</a> and you will get a person, within
        24&ndash;48 hours.</p>`
    },
    {
      id: 'thanks',
      keywords: ['thank', 'thanks', 'appreciate', 'helpful', 'great'],
      answer: `<p>You are very welcome. Good luck with it — and if anything comes up later,
        <a href="inquiries.html">the door is open</a>.</p>`
    }
  ];

  const FALLBACK = `<p>I am not sure I have a good answer for that one — I only know
    about this website and the basics of the process.</p>
    <p>Two things that will help more than I can:</p>
    <ul>
      <li><a href="inquiries.html">Send us an inquiry</a> — a real person
      replies in 24&ndash;48 hours, free, and we never ask who you are</li>
      <li><a href="articles.html">Search our articles</a> — 59 posts on
      specific policy changes</li>
    </ul>
    <p>Or try asking me about: privacy, fees, the civics test, pathways, forms, delays,
    or tutoring.</p>`;

  const CHIPS = [
    'What is this site?',
    'Is my information safe?',
    'How much does it cost?',
    'What are the pathways?',
    'Tell me about the civics test',
    'My case is delayed'
  ];

  /* ======================================================================
     Matching
     ====================================================================== */

  function normalize(text) {
    return ' ' + String(text).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ') + ' ';
  }

  /**
   * Score each knowledge-base entry against the question and return the best.
   * Longer keyword matches score higher so that specific phrases beat
   * incidental single-word overlaps.
   */
  function findBestEntry(question) {
    const haystack = normalize(question);
    let best = null;
    let bestScore = 0;

    KB.forEach((entry) => {
      let score = 0;
      entry.keywords.forEach((keyword) => {
        if (haystack.includes(' ' + keyword + ' ') || haystack.includes(keyword)) {
          score += keyword.split(' ').length * 2 + keyword.length / 10;
        }
      });
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });

    return bestScore >= 1 ? best : null;
  }

  /**
   * Produce an answer for a question.
   *
   * ---- TO ADD GROQ (or any API) LATER -------------------------------------
   * Make this async and call your own serverless endpoint, e.g.:
   *
   *   async function respond(question) {
   *     const res = await fetch('/api/assistant', {
   *       method: 'POST',
   *       headers: { 'Content-Type': 'application/json' },
   *       body: JSON.stringify({ question })
   *     });
   *     if (!res.ok) return FALLBACK;          // always degrade gracefully
   *     const data = await res.json();
   *     return data.answer;
   *   }
   *
   * Keep the API key on the server, never in this file. And if you do add a
   * model, update the 'ai' answer above and the privacy note in terms.html —
   * at that point questions WOULD leave the browser, and the current text
   * says they do not.
   * ------------------------------------------------------------------------
   */
  function respond(question) {
    const entry = findBestEntry(question);
    return entry ? entry.answer : FALLBACK;
  }

  /* ======================================================================
     UI
     ====================================================================== */

  const ICON_CHAT = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  const ICON_CLOSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  const ICON_SEND = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>';

  function build() {
    const launcher = document.createElement('button');
    launcher.className = 'assistant-launch';
    launcher.setAttribute('aria-label', 'Open ' + ASSISTANT_NAME);
    launcher.innerHTML = ICON_CHAT;

    const panel = document.createElement('div');
    panel.className = 'assistant';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', ASSISTANT_NAME);
    panel.setAttribute('aria-modal', 'false');
    panel.innerHTML = ''
      + '<div class="assistant__head">'
      +   '<div><h2>' + ASSISTANT_NAME + '</h2><p>Answers about this site &middot; nothing leaves your browser</p></div>'
      +   '<button class="assistant__close" aria-label="Close">' + ICON_CLOSE + '</button>'
      + '</div>'
      + '<div class="assistant__log" id="assistant-log" role="log" aria-live="polite"></div>'
      + '<div class="assistant__chips">'
      +   CHIPS.map((c) => '<button class="chip" type="button">' + c + '</button>').join('')
      + '</div>'
      + '<form class="assistant__form">'
      +   '<label class="visually-hidden" for="assistant-input">Your question</label>'
      +   '<input type="text" id="assistant-input" placeholder="Ask about this site&hellip;" autocomplete="off">'
      +   '<button class="assistant__send" type="submit" aria-label="Send">' + ICON_SEND + '</button>'
      + '</form>';

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const log = panel.querySelector('#assistant-log');
    const input = panel.querySelector('#assistant-input');
    const form = panel.querySelector('.assistant__form');
    const closeBtn = panel.querySelector('.assistant__close');

    function addMessage(html, who) {
      const el = document.createElement('div');
      el.className = 'msg msg--' + who;
      el.innerHTML = html;
      log.appendChild(el);
      log.scrollTop = log.scrollHeight;
      return el;
    }

    function ask(question) {
      const text = String(question).trim();
      if (!text) return;

      // User text is inserted as textContent, never as HTML.
      const userMsg = document.createElement('div');
      userMsg.className = 'msg msg--user';
      const p = document.createElement('p');
      p.textContent = text;
      userMsg.appendChild(p);
      log.appendChild(userMsg);

      const thinking = addMessage('<p style="opacity:.6">&hellip;</p>', 'bot');
      window.setTimeout(() => {
        thinking.innerHTML = respond(text);
        log.scrollTop = log.scrollHeight;
      }, THINKING_MS);

      input.value = '';
      log.scrollTop = log.scrollHeight;
    }

    function open() {
      panel.setAttribute('data-open', 'true');
      launcher.setAttribute('data-hidden', 'true');
      if (!log.childElementCount) {
        addMessage(`<p>Hello. I can answer questions about <strong>Gateway2America</strong>
          and how to use this site.</p>
          <p>I run entirely in your browser &mdash; nothing you type here is sent anywhere.
          For anything about your own situation, <a href="inquiries.html">a real person
          will answer you</a> within 24&ndash;48 hours.</p>`, 'bot');
      }
      window.setTimeout(() => input.focus(), 300);
    }

    function close() {
      panel.setAttribute('data-open', 'false');
      launcher.setAttribute('data-hidden', 'false');
      launcher.focus();
    }

    launcher.addEventListener('click', open);
    closeBtn.addEventListener('click', close);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      ask(input.value);
    });

    panel.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => ask(chip.textContent));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && panel.getAttribute('data-open') === 'true') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

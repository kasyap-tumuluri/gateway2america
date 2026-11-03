/* Gateway2America — article archive. Schema:
   {slug, date:"YYYY-MM-DD", category, title, summary, body, sources:[{label,url}]} */
window.G2A_ARTICLES = [
// --- Add new posts anywhere in this array. Order does not matter: the site
// --- sorts by date automatically. Copy the shape of any entry below.
{
  slug: 'we-are-live',
  date: '2024-10-03',
  category: 'Milestone',
  title: 'Gateway2America is open',
  summary: 'We are officially joined and active. Here is why this exists and what we can help you with.',
  body: `
    <p>As of today, Gateway2America is active and taking inquiries.</p>
    <p>The idea came from watching how often people get stuck on the citizenship
    process for reasons that have nothing to do with whether they qualify. They get
    stuck because a form has a name instead of a description. Because an official
    page is written at a reading level most people never needed to reach. Because
    the one question they need answered is too small to pay a lawyer for and too
    specific for a search engine.</p>
    <p>That gap is what we work in. We are not attorneys and we do not give legal
    advice. What we offer is three things:</p>
    <ul>
      <li><strong>Answers to questions</strong> about how the process works, usually
      within 24&ndash;48 hours.</li>
      <li><strong>Redirection</strong> &mdash; pointing you to the correct official
      form, fee schedule, or free legal-aid organization instead of a paid middleman.</li>
      <li><strong>Citizenship test tutoring</strong>, free, for the civics and
      English portions.</li>
    </ul>
    <p>We also keep this articles section, where we translate the policy changes
    that actually affect people into plain language and link the official notice so
    you can verify everything yourself.</p>
    <p>One promise before anything else: we keep no information about you. Our
    inquiry form does not ask your name or date of birth, and we delete your message
    within seven days of helping you.</p>`,
  sources: []
},
{
  slug: 'green-card-renewal-36-months',
  date: '2024-10-14',
  category: 'Policy Update',
  title: 'Your green card renewal receipt now extends your card for 36 months',
  summary: 'USCIS raised the automatic extension from 24 to 36 months. If your card expired while you wait, your receipt notice is your proof of status.',
  body: `
    <p>If you have filed to renew your green card and the card itself expired while
    you were waiting, you are not out of status and you are not undocumented. Your
    receipt notice carries you.</p>
    <p>USCIS raised the automatic extension of green card validity from 24 months to
    <strong>36 months</strong>. Receipt notices reflecting the longer window started
    going out on September 10, 2024.</p>
    <h3>How it works</h3>
    <p>When you file Form I-90 (Application to Replace Permanent Resident Card) with
    the correct fee, USCIS sends you a receipt notice called Form I-797. That notice
    now says your green card is extended for 36 months past the expiration date
    printed on the card.</p>
    <p>To use it, <strong>carry both documents together</strong> &mdash; the expired
    green card and the I-797 receipt notice. On their own, neither one proves what
    you need it to prove. Together they establish your permanent resident status for
    work authorization and for travel.</p>
    <h3>Why this matters</h3>
    <p>Renewal processing has been slow enough that the old 24-month extension was
    running out before cards arrived, leaving people unable to prove status at a new
    job or on re-entry. The longer window is a practical fix.</p>
    <p>If your receipt notice is older and shows only a 24-month extension, you can
    ask USCIS for an updated notice.</p>`,
  sources: [
    { label: 'USCIS — Form I-90, Application to Replace Permanent Resident Card', url: 'https://www.uscis.gov/i-90' }
  ]
},
{
  slug: 'continuous-residence-explained',
  date: '2024-10-22',
  category: 'How It Works',
  title: 'What "continuous residence" actually means',
  summary: 'One of the most misunderstood naturalization requirements. Long trips abroad can reset your clock — here is where the lines are.',
  body: `
    <p>To naturalize, most people must show <strong>continuous residence</strong> as a
    permanent resident &mdash; five years for most applicants, three years for spouses
    of U.S. citizens. People often assume this just means "I have had my green card
    that long." It means more than that.</p>
    <h3>Trips abroad</h3>
    <p>Continuous residence is about whether you kept the United States as your home.
    Long absences can break it:</p>
    <ul>
      <li><strong>Under six months</strong> &mdash; generally no problem.</li>
      <li><strong>Six months to one year</strong> &mdash; USCIS may presume you broke
      continuous residence. You can rebut that presumption with evidence that you kept
      ties here: a home, a job, tax filings, family.</li>
      <li><strong>One year or more</strong> &mdash; this generally breaks continuous
      residence outright, and your clock restarts.</li>
    </ul>
    <h3>Physical presence is a separate test</h3>
    <p>This trips people up. Alongside continuous residence, you must also have been
    physically present in the U.S. for at least half the required period
    &mdash; 30 months out of five years, or 18 months out of three. You can satisfy
    continuous residence and still fail physical presence, or the reverse. Both have
    to be met.</p>
    <h3>Before a long trip</h3>
    <p>If you know you will be outside the country for a long stretch, look into a
    re-entry permit or, for certain employment situations, Form N-470. Plan before
    you go, not after you return.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Volume 12, Citizenship and Naturalization', url: 'https://www.uscis.gov/policy-manual/volume-12' }
  ]
},
{
  slug: 'n400-plain-walkthrough',
  date: '2024-11-12',
  category: 'How It Works',
  title: 'The N-400, explained section by section',
  summary: 'The citizenship application is 20 pages and asks some alarming questions. Here is what each part is really asking for.',
  body: `
    <p>Form N-400 is the Application for Naturalization. It is long, and some
    questions sound more sinister than they are. Here is the shape of it.</p>
    <h3>Parts 1&ndash;3: Who you are and why you qualify</h3>
    <p>Basic identity information, and the basis for your application
    &mdash; five years as a permanent resident, three years as the spouse of a
    citizen, military service, and so on. Picking the wrong basis is a common and
    costly error, so be sure which one applies to you.</p>
    <h3>Parts 4&ndash;8: Your life on paper</h3>
    <p>Addresses, employment, marital history, children, and every trip outside the
    United States in the relevant period. The travel section is where people struggle
    most. Start reconstructing it early from passport stamps and old tickets &mdash;
    you need dates, not approximations.</p>
    <h3>Part 9: The long list of questions</h3>
    <p>This is the part that worries people. It asks about criminal history, past
    immigration violations, tax filings, organizational memberships, and more. Two
    rules: <strong>answer honestly</strong>, and <strong>answer completely</strong>.
    A "yes" is very often survivable once you explain it, whereas a false "no" gets
    treated as fraud and can cost you citizenship later, even after it is granted.</p>
    <p>If any answer here is complicated, this is the point to talk to an actual
    immigration attorney before you file.</p>
    <h3>Parts 10&ndash;18: Oath, signature, accommodations</h3>
    <p>Requests for disability accommodation, requests to modify the oath on
    religious grounds, and your signature.</p>`,
  sources: [
    { label: 'USCIS — Form N-400, Application for Naturalization', url: 'https://www.uscis.gov/n-400' }
  ]
},
{
  slug: 'afghan-oaw-medical-exam-guidance',
  date: '2024-11-18',
  category: 'Policy Update',
  title: 'Guidance issued on medical exams for Afghan arrivals under Operation Allies Welcome',
  summary: 'USCIS clarified how it treats immigration medical examinations already completed by certain Afghan nationals.',
  body: `
    <p>On November 13, 2024, USCIS updated its Policy Manual to address immigration
    medical examinations completed by certain Afghan nationals who arrived in the
    United States through Operation Allies Welcome.</p>
    <p>Many people who arrived through that effort received medical screening on
    arrival, as part of the resettlement process. The question this guidance answers
    is whether that screening counts toward the medical examination requirement when
    they later apply for permanent residence &mdash; or whether they have to pay for
    and repeat the whole exam.</p>
    <p>The update sets out when the earlier examination can be accepted, which
    spares affected applicants a duplicate exam and its cost.</p>
    <h3>Who this affects</h3>
    <p>This is narrow. It matters if you are an Afghan national who arrived under
    Operation Allies Welcome and are now applying for adjustment of status. It does
    not change the medical exam requirement for anyone else.</p>
    <p>If this describes you, it is worth confirming with a resettlement agency or
    an accredited representative whether your existing exam records satisfy the
    requirement before scheduling a new appointment. Many of the organizations that
    handled Operation Allies Welcome arrivals still provide free help with exactly
    this kind of question.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'lpr-rescission-jurisdiction',
  date: '2024-12-16',
  category: 'Policy Update',
  title: 'USCIS clarifies who decides when permanent resident status is rescinded',
  summary: 'A December 2024 guidance update on jurisdiction over rescission of lawful permanent resident status.',
  body: `
    <p>On December 13, 2024, USCIS issued Policy Manual guidance clarifying
    jurisdiction over the <strong>rescission</strong> of lawful permanent resident
    status.</p>
    <p>Rescission is the process of undoing a grant of permanent residence &mdash;
    treating the approval as though it should not have been given. It is distinct
    from removal proceedings, and distinct from abandoning status by living abroad.</p>
    <p>The guidance addresses which body has authority to act in which circumstances:
    when the matter sits with USCIS, and when it belongs to the immigration courts.
    This is procedural rather than substantive. It does not change the grounds on
    which status can be rescinded; it clarifies the path a case travels.</p>
    <h3>What to take from it</h3>
    <p>For most permanent residents this changes nothing about daily life. It matters
    if you have received a notice questioning your green card approval &mdash; in
    which case the identity of the deciding body affects your deadlines, your
    procedural rights, and where you file a response.</p>
    <p>If you receive any notice of intent to rescind, treat it as urgent and get
    real legal representation. This is not a situation to navigate from a website,
    including ours. Our <a href="redirection.html#legal-help">legal help page</a>
    lists free and low-cost options.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'i730-refugee-asylee-relative-guidance',
  date: '2024-12-27',
  category: 'Policy Update',
  title: 'New guidance on bringing family through Form I-730',
  summary: 'USCIS issued consolidated guidance on the Refugee/Asylee Relative Petition — who can file, when, and for whom.',
  body: `
    <p>On December 20, 2024, USCIS issued Policy Manual guidance covering the
    eligibility, filing, and adjudication requirements for <strong>Form I-730</strong>,
    the Refugee/Asylee Relative Petition.</p>
    <p>Form I-730 is how someone granted asylum or admitted as a refugee brings a
    spouse or unmarried child under 21 to join them in the United States. It is often
    called the "follow-to-join" petition.</p>
    <h3>The deadline people miss</h3>
    <p>There is a <strong>two-year filing deadline</strong> running from the date you
    were granted asylum or admitted as a refugee. It can be excused for humanitarian
    reasons, but that is discretionary and not guaranteed. If you have asylum or
    refugee status and family abroad, this deadline deserves a calendar entry today.</p>
    <h3>Relationships must exist at the right time</h3>
    <p>The qualifying relationship generally has to have existed <strong>before</strong> you
    were granted status &mdash; a marriage entered into afterward does not qualify
    under I-730. A child must be unmarried and under 21, with protections for
    children who age out during processing.</p>
    <p>The consolidated guidance pulls scattered rules into one place, which makes it
    easier to check your own situation before filing.</p>`,
  sources: [
    { label: 'USCIS — Form I-730, Refugee/Asylee Relative Petition', url: 'https://www.uscis.gov/i-730' },
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'civics-test-2008-explained',
  date: '2025-01-13',
  category: 'How It Works',
  title: 'The civics test, explained: what you are actually asked',
  summary: 'Ten questions, six correct to pass, drawn from a published list of 100. Here is how the test runs and how to study for it.',
  body: `
    <p>The civics test is the part of naturalization people fear most, and it is the
    part most within your control, largely because the questions are published in
    advance and there are no surprises waiting for you.</p>
    <h3>The format</h3>
    <p>Under the version in use for applications filed before October 20, 2025, the
    officer asks up to <strong>10 questions</strong> drawn from a public list of
    <strong>100</strong>. You need <strong>6 correct</strong> to pass, and the officer
    stops asking as soon as you have got there.</p>
    <p>The test is spoken rather than written, so the officer asks and you answer out
    loud. There is no need to answer in full sentences. "Ninety-nine" is a fine answer to how many
    senators there are.</p>
    <h3>How to study</h3>
    <p>USCIS publishes the full question list, official answers, and free study
    materials &mdash; flash cards, audio, and practice tests. Use the official
    answers rather than your own phrasing, because some questions have several
    acceptable answers and the official list tells you which count.</p>
    <p>A few answers change with elections and appointments: your state's senators,
    your representative, the Speaker of the House, the President and Vice President,
    your governor, your state capital. Check those close to your interview date.</p>
    <h3>If you do not pass</h3>
    <p>You get a second attempt. USCIS reschedules you, normally within 60 to 90
    days, and you are retested only on the portion you failed.</p>
    <p>We tutor for this free of charge. If you want practice with someone,
    <a href="inquiries.html">send us an inquiry</a>.</p>`,
  sources: [
    { label: 'USCIS — Find Study Materials and Resources', url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources' },
    { label: 'USCIS — The Naturalization Interview and Test', url: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test' }
  ]
},
{
  slug: 'social-media-vetting-expands',
  date: '2025-01-27',
  category: 'Policy Update',
  title: 'Social media screening is expanding across immigration forms',
  summary: 'Executive Order 14161, signed January 20, 2025, directs broader collection and review of applicants’ social media.',
  body: `
    <p>Executive Order 14161, signed January 20, 2025, directs expanded screening and
    vetting of people seeking immigration benefits. One concrete effect is the
    formalizing and widening of <strong>social media data collection</strong>, which
    USCIS has moved to apply across roughly nine immigration forms.</p>
    <p>The stated purposes are identity verification, national security screening,
    and inspection. USCIS has also indicated it reviews applicants' social media and
    other statements for what it describes as anti-American ideologies, and may treat
    such findings as a negative factor in discretionary decisions.</p>
    <h3>What this means in practice</h3>
    <p>Assume that what you post publicly can be read by an officer deciding your
    case. That is not a reason to panic or to delete your life &mdash; it is a reason
    for one specific kind of care:</p>
    <ul>
      <li><strong>Consistency matters most.</strong> The real risk is a contradiction
      between your application and your public posts &mdash; an employer, a marriage
      date, a trip, a residence. Officers look for inconsistency.</li>
      <li><strong>Review your own forms against your own timeline.</strong> If your
      posts say something different from your N-400, work out why before an officer
      asks.</li>
      <li><strong>Do not fabricate or scrub to deceive.</strong> Misrepresentation is
      far more damaging than whatever you were trying to hide.</li>
    </ul>
    <p>This is an area where discretion is broad and outcomes are hard to predict. If
    you have a specific worry about your own history, that is an attorney question,
    not a website question.</p>`,
  sources: [
    { label: 'USCIS — Update on Strengthened Screening and Vetting', url: 'https://www.uscis.gov/newsroom/alerts/update-on-uscis-strengthened-screening-and-vetting' }
  ]
},
{
  slug: 'birthright-citizenship-order-issued',
  date: '2025-02-03',
  category: 'Policy Update',
  title: 'The birthright citizenship executive order: what it says, and what it does not change yet',
  summary: 'Executive Order 14160 sought to deny citizenship to some U.S.-born children. Courts blocked it immediately.',
  body: `
    <p>In January 2025, Executive Order 14160 attempted to end birthright citizenship
    for children born in the United States after February 19, 2025, to parents who
    are unlawfully present or in the country temporarily. The order asserted that
    such children are not "subject to the jurisdiction" of the United States and
    therefore fall outside the Fourteenth Amendment.</p>
    <h3>It is not in effect</h3>
    <p>This is the part to hold onto. Federal courts issued injunctions blocking the
    order almost immediately. <strong>Birthright citizenship remains in force
    nationwide</strong>, as it has for more than a century. A child born on U.S. soil
    is a U.S. citizen under the rules that have always applied.</p>
    <h3>If you are expecting a child</h3>
    <p>Do what you would ordinarily do: get the birth certificate from the state or
    county vital records office. That document, plus the hospital record, is the proof
    of citizenship. You can apply for a U.S. passport for your child as normal.</p>
    <p>If anyone tells you your U.S.-born child is not a citizen because of this
    order, they are wrong. If anyone offers to sell you a service to "protect" your
    child's citizenship, that is a scam.</p>
    <p>We will post again when the litigation resolves. The Fourteenth Amendment
    question was always going to end up at the Supreme Court.</p>`,
  sources: [
    { label: 'NAACP Legal Defense Fund — Birthright Citizenship Know Your Rights FAQ', url: 'https://www.naacpldf.org/case-issue/know-your-rights-birthright-citizenship/' }
  ]
},
{
  slug: 'daca-after-fifth-circuit',
  date: '2025-02-17',
  category: 'Court Ruling',
  title: 'DACA after the Fifth Circuit: renewals continue, new applications stall',
  summary: 'A January 17, 2025 ruling declared parts of DACA unlawful while letting current recipients keep status.',
  body: `
    <p>On January 17, 2025, the Fifth Circuit Court of Appeals ruled that parts of
    DACA are unlawful. The decision left current recipients in place while litigation
    continues.</p>
    <h3>Where things stand</h3>
    <ul>
      <li><strong>If you have DACA:</strong> your status and work authorization
      continue. <strong>Renewals are being accepted and processed nationwide</strong>,
      including in Texas.</li>
      <li><strong>If you have never had DACA:</strong> you may submit a first-time
      application, but USCIS <strong>will not process it</strong> at this time. It
      sits pending.</li>
    </ul>
    <h3>What to do if you have DACA</h3>
    <p><strong>Renew early.</strong> File in the window USCIS recommends &mdash;
    roughly 120 to 150 days before your expiration &mdash; and do not let it lapse.
    A gap in DACA is a gap in work authorization, and in some states a gap in your
    driver's license.</p>
    <p>Keep copies of every approval notice you have ever received. Build a document
    file now: proof of continuous presence, school records, employment records. If
    the program's future changes, the people who can establish their history fastest
    will be best positioned.</p>
    <p>DACA has been in and out of court for over a decade now, with decisions
    getting stayed, reversed, and narrowed along the way. Before acting on anything you read &mdash; here or
    anywhere &mdash; check the current status with a legal-aid organization.</p>`,
  sources: [
    { label: 'Informed Immigrant — DACA Court Case Status', url: 'https://www.informedimmigrant.com/resources/daca/daca-court/' }
  ]
},
{
  slug: 'how-long-naturalization-takes',
  date: '2025-03-03',
  category: 'How It Works',
  title: 'How long does naturalization take?',
  summary: 'From filing to oath, the stages and what actually drives the wait.',
  body: `
    <p>There is no single answer, and anyone who gives you a confident one is
    guessing. What you can know is the sequence, and which stages tend to stall.</p>
    <h3>The stages</h3>
    <ol>
      <li><strong>File the N-400.</strong> A receipt notice (I-797) follows within a
      few weeks. Keep it.</li>
      <li><strong>Biometrics.</strong> Fingerprints and photograph at an application
      support center. Often reused if you have given them before.</li>
      <li><strong>Background checks.</strong> The invisible stage, and the usual
      source of long unexplained silences.</li>
      <li><strong>Interview and tests.</strong> An officer reviews your application
      with you and administers the English and civics tests.</li>
      <li><strong>Decision.</strong> Granted, continued (more evidence or a retest),
      or denied.</li>
      <li><strong>Oath ceremony.</strong> You are not a citizen until you take the
      oath. Sometimes same-day, often weeks or months later.</li>
    </ol>
    <h3>Checking your own case</h3>
    <p>USCIS publishes current processing times by form and field office, and your
    receipt number lets you check your specific case online. Use those rather than
    anecdotes &mdash; field offices differ enormously.</p>
    <p>If your case passes well beyond the posted time for your office, there are
    escalation routes: a service request, the USCIS Ombudsman, and a congressional
    inquiry through your representative's office. Those offices do casework like this
    routinely and it is free.</p>`,
  sources: [
    { label: 'USCIS — Check Case Processing Times', url: 'https://egov.uscis.gov/processing-times/' }
  ]
},
{
  slug: 'good-moral-character-explained',
  date: '2025-03-17',
  category: 'How It Works',
  title: '"Good moral character": what it means and what it covers',
  summary: 'A required finding for naturalization, broader than a criminal record check — and assessed more holistically since 2025.',
  body: `
    <p>Naturalization requires a finding of <strong>good moral character</strong>,
    normally over the five years before you file (three for spouses of citizens),
    though officers may look further back.</p>
    <h3>It is wider than a criminal record</h3>
    <p>Some things are permanent bars &mdash; murder, and aggravated felonies as
    immigration law defines them. Others bar you during the statutory period:
    certain crimes, providing false testimony for an immigration benefit, habitual
    drunkenness, illegal gambling, polygamy, smuggling.</p>
    <p>And then there are the ones people genuinely do not expect:</p>
    <ul>
      <li><strong>Unpaid taxes</strong> or unfiled returns.</li>
      <li><strong>Unpaid child support.</strong></li>
      <li><strong>Failure to register for Selective Service</strong>, for men who
      lived here between 18 and 26.</li>
    </ul>
    <p>These are frequently fixable. A payment plan with the IRS, a current child
    support arrangement, or a Selective Service status information letter can resolve
    them &mdash; but resolve them <strong>before</strong> you file, not at the interview.</p>
    <h3>The 2025 shift</h3>
    <p>An August 2025 policy memorandum moved officers away from a checklist and
    toward a broader, holistic judgment of conduct over time, including positive
    contributions to the community rather than only the absence of bad acts. In
    practice that means evidence of community ties, steady work, and volunteer
    history can help, and it means outcomes are less predictable than before.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Volume 12, Citizenship and Naturalization', url: 'https://www.uscis.gov/policy-manual/volume-12' }
  ]
},
{
  slug: 'naturalization-interview-step-by-step',
  date: '2025-03-28',
  category: 'How It Works',
  title: 'The naturalization interview, step by step',
  summary: 'What happens in the room, what to bring, and what the officer is actually evaluating.',
  body: `
    <p>The interview is less an interrogation than a careful read-through of your own
    application. Knowing the shape of it removes most of the fear.</p>
    <h3>What to bring</h3>
    <ul>
      <li>Your interview appointment notice.</li>
      <li>Green card and a state ID or passport.</li>
      <li>Any document the notice specifically asks for.</li>
      <li>Updates since filing: a new address, a new job, a marriage, new travel, any
      new encounter with law enforcement.</li>
    </ul>
    <h3>In the room</h3>
    <p>You will be sworn in to tell the truth. The officer then goes through your
    N-400 with you, section by section, confirming and updating. This is your chance
    to correct anything that has changed &mdash; take it.</p>
    <p>The English and civics tests happen in the same appointment. There is no
    separate speaking test: your ability to speak and understand English is assessed
    across the whole conversation, which is why the officer's small talk is not only
    small talk.</p>
    <h3>At the end</h3>
    <p>You will usually get a form telling you the result: granted, continued, or
    denied. "Continued" most often means a missing document or a retest, not a
    refusal.</p>
    <h3>Two practical notes</h3>
    <p>Say "I don't understand, could you repeat that?" freely. It is not held
    against you, and guessing at a misheard question is worse. And if you do not know
    an answer about your own history, say you do not know rather than inventing one
    &mdash; false testimony is far more serious than a gap in memory.</p>`,
  sources: [
    { label: 'USCIS — The Naturalization Interview and Test', url: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test' }
  ]
},
{
  slug: 'new-n400-edition-april-2025',
  date: '2025-04-08',
  category: 'Policy Update',
  title: 'New N-400 edition takes effect April 4, 2025',
  summary: 'USCIS issued a revised Application for Naturalization. Filing the wrong edition can get your application rejected.',
  body: `
    <p>USCIS issued a new edition of Form N-400 dated January 20, 2025. The effective
    date, originally immediate, was moved to <strong>April 4, 2025</strong>. The
    revision removed the "X" gender marker option that the prior edition had included.</p>
    <h3>The practical risk: filing an outdated form</h3>
    <p>This is the most common way a straightforward application gets rejected, and
    it is entirely avoidable. USCIS accepts only the current edition of a form, and
    an outdated edition can come back unfiled &mdash; costing you months.</p>
    <p>Two habits protect you:</p>
    <ul>
      <li><strong>Download the form fresh from uscis.gov the week you file.</strong>
      Never fill out a PDF you saved months ago, and never use one from a
      third-party site.</li>
      <li><strong>Check the edition date</strong> in the bottom corner of the form
      against the date shown on the official form page.</li>
    </ul>
    <h3>Check the fee at the same time</h3>
    <p>Fees change independently of form editions, and the wrong fee also causes
    rejection. Confirm the current amount on the USCIS fee calculator the same day
    you write the check.</p>
    <p>If you were midway through a paper application when the edition changed, start
    again on the current form. Transcribing is tedious; a rejection is worse.</p>`,
  sources: [
    { label: 'USCIS — Form N-400, Application for Naturalization', url: 'https://www.uscis.gov/n-400' },
    { label: 'USCIS — Fee Calculator', url: 'https://www.uscis.gov/feecalculator' }
  ]
},
{
  slug: 'fee-waivers-and-reduced-fees',
  date: '2025-04-21',
  category: 'How It Works',
  title: 'Can you pay less for citizenship? Fee waivers and reduced fees',
  summary: 'The N-400 costs $760 on paper or $710 online — but a reduced fee and full waivers exist, and most eligible people never apply.',
  body: `
    <p>The naturalization fee is a real barrier, and a lot of people who qualify for
    help never ask for it.</p>
    <h3>Current costs</h3>
    <ul>
      <li><strong>$760</strong> filing on paper.</li>
      <li><strong>$710</strong> filing online &mdash; $50 cheaper for the same
      application.</li>
    </ul>
    <h3>The reduced fee</h3>
    <p>If your household income is at or below <strong>400% of the Federal Poverty
    Guidelines</strong>, you may file for a reduced fee of <strong>$380</strong>, using
    Form I-942. Note that the reduced fee is available on <strong>paper</strong> filings only.</p>
    <p>400% of the guidelines is a higher ceiling than most people assume &mdash; it
    reaches well into working-household income. It is worth checking the current
    table against your actual household size rather than guessing.</p>
    <h3>Full fee waiver</h3>
    <p>Form I-912 requests a complete waiver. You generally qualify if you receive a
    means-tested public benefit, your household income is at or below 150% of the
    poverty guidelines, or you are in financial hardship.</p>
    <h3>Get the application checked</h3>
    <p>Fee waiver requests get denied for missing documentation more than for
    ineligibility, and plenty of nonprofits will review yours for free. Our
    <a href="redirection.html#legal-help">legal help page</a> lists a few ways to find
    one.</p>
    <p>One caution: fee policy is under active review, and a rule proposed in 2026
    would remove both the reduced fee and waivers for the N-400. If you qualify now,
    there is an argument for not waiting.</p>`,
  sources: [
    { label: 'USCIS — Form N-400', url: 'https://www.uscis.gov/n-400' },
    { label: 'USCIS — Form I-912, Request for Fee Waiver', url: 'https://www.uscis.gov/i-912' },
    { label: 'USCIS — Form I-942, Request for Reduced Fee', url: 'https://www.uscis.gov/i-942' }
  ]
},
{
  slug: 'south-sudan-tps-extended',
  date: '2025-05-07',
  category: 'Policy Update',
  title: 'South Sudan TPS automatically extended six months',
  summary: 'The designation set to expire May 3, 2025 was extended through November 3, 2025.',
  body: `
    <p>Temporary Protected Status for South Sudan, which had been set to expire on
    May 3, 2025, was <strong>automatically extended for six months</strong> &mdash;
    from May 4, 2025 through November 3, 2025.</p>
    <h3>What an automatic extension does</h3>
    <p>When TPS is extended, existing beneficiaries keep protection from removal and
    keep work authorization through the new end date. Automatic extensions often also
    extend the validity of existing Employment Authorization Documents even when the
    date printed on the card has passed &mdash; the Federal Register notice is what
    establishes that, and it is the document to show an employer alongside your card.</p>
    <h3>What to do</h3>
    <ul>
      <li><strong>Re-register during the registration period.</strong> Protection
      continues only if you re-register when USCIS tells you to. Missing that window
      is the most common way people lose TPS they were entitled to keep.</li>
      <li><strong>Print the Federal Register notice.</strong> If your EAD shows an
      expired date but is auto-extended, that notice is your proof for Form I-9
      purposes.</li>
      <li><strong>Look beyond TPS.</strong> TPS is temporary by design and does not
      lead to a green card on its own. If you have another possible route &mdash;
      family, employment, asylum &mdash; it is worth getting it assessed.</li>
    </ul>
    <p>TPS designations have been changing frequently and in both directions. Always
    confirm your country's current status on the USCIS TPS page rather than relying
    on an older article.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'venezuela-tps-termination-proceeds',
  date: '2025-05-22',
  category: 'Court Ruling',
  title: 'Supreme Court allows Venezuela TPS termination to proceed',
  summary: 'A May 19, 2025 order let the administration move forward with ending TPS for Venezuela while litigation continued.',
  body: `
    <p>On May 19, 2025, the Supreme Court issued an order permitting the
    administration's termination of Temporary Protected Status for Venezuela to take
    effect while the underlying case continued in the lower courts.</p>
    <p>An order of this kind is not a final ruling on whether the termination was
    lawful. It decides who bears the consequences in the meantime &mdash; and here,
    the practical consequence fell on TPS holders.</p>
    <h3>If you are affected</h3>
    <p>Losing TPS does not automatically mean removal, but it does mean losing
    protection from removal and losing the work authorization that came with it. The
    priority is to find out whether you have any other basis to remain:</p>
    <ul>
      <li><strong>Asylum</strong>, if you fear persecution. Note the general one-year
      filing deadline from arrival, and the exceptions to it.</li>
      <li><strong>Family-based petitions</strong>, through a spouse, parent, or adult
      child who is a citizen or permanent resident.</li>
      <li><strong>Employment-based routes</strong>, or U/T visas if you have been a
      victim of certain crimes or trafficking.</li>
      <li><strong>Pending applications</strong> you may already have that carry their
      own protections.</li>
    </ul>
    <p>This is a situation where free legal screening genuinely changes outcomes.
    Many organizations ran clinics specifically for affected Venezuelan nationals.
    Our <a href="redirection.html#legal-help">legal help page</a> lists directories.</p>
    <p>Be wary of anyone promising a guaranteed fix for a fee. There is no such thing.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'travel-ban-announced-2025',
  date: '2025-06-06',
  category: 'Policy Update',
  title: 'New travel restrictions announced for 19 countries',
  summary: 'A June 4, 2025 proclamation imposed full entry bans on 12 countries and partial restrictions on 7 more, effective June 9.',
  body: `
    <p>On June 4, 2025, a presidential proclamation suspended the entry of certain
    foreign nationals from 19 countries, effective June 9, 2025.</p>
    <h3>Full restrictions &mdash; 12 countries</h3>
    <p>Afghanistan, Burma, Chad, Republic of the Congo, Equatorial Guinea, Eritrea,
    Haiti, Iran, Libya, Somalia, Sudan, and Yemen. Limited exceptions apply.</p>
    <h3>Partial restrictions &mdash; 7 countries</h3>
    <p>Burundi, Cuba, Laos, Sierra Leone, Togo, Turkmenistan, and Venezuela.
    Restrictions here apply to specified visa categories, including F and J student
    and exchange visas.</p>
    <h3>The crucial carve-out</h3>
    <p>The restrictions apply to nationals of these countries who were
    <strong>outside the United States without a valid visa as of June 9, 2025</strong>.</p>
    <p>If you were <strong>inside</strong> the United States on June 9, or outside but
    holding a visa that was valid on that date, you would generally not be covered.
    That distinction matters enormously and it is widely misunderstood &mdash;
    including, at times, by people giving advice.</p>
    <h3>If this touches your family</h3>
    <p>Do not assume a case is hopeless, and do not assume it is fine. Both errors
    are costly. Get the specific facts assessed: nationality, location on June 9,
    visa status on June 9, and visa category. Travelling without confirming your
    status first is the real danger here.</p>`,
  sources: [
    { label: 'Congressional Research Service — Presidential Proclamation of June 4, 2025', url: 'https://www.congress.gov/crs-product/IN12561' }
  ]
},
{
  slug: 'denaturalization-doj-priority',
  date: '2025-06-18',
  category: 'Policy Update',
  title: 'Denaturalization becomes a top Justice Department priority',
  summary: 'A June 11, 2025 DOJ memo made revoking citizenship one of the Civil Division’s five leading enforcement priorities.',
  body: `
    <p>On June 11, 2025, the Justice Department's Civil Division issued an internal
    memorandum listing its enforcement priorities. <strong>Denaturalization</strong>
    &mdash; the civil process of revoking U.S. citizenship &mdash; was named one of
    five top priorities, with attorneys directed to pursue such cases in all
    instances permitted by law and supported by evidence.</p>
    <h3>What denaturalization is</h3>
    <p>It is a civil court action to undo a naturalization that was obtained
    unlawfully &mdash; typically through concealment of a material fact or willful
    misrepresentation during the application process. It is not a power to revoke
    citizenship over conduct that occurred after you naturalized, and it requires a
    federal court, not an agency decision.</p>
    <h3>Context worth keeping</h3>
    <p>Historically these cases were rare and concentrated on serious matters such as
    concealed war crimes. The memo appears to broaden the circumstances pursued, and
    reporting in December 2025 indicated internal guidance asking USCIS field offices
    to refer 100&ndash;200 cases per month to DOJ for the remainder of FY2026.</p>
    <h3>What it means for you</h3>
    <p>If you naturalized and answered your application honestly, this is not aimed
    at you. The lesson it reinforces is for people still applying:
    <strong>accuracy on the N-400 protects you permanently</strong>. A false answer
    is not a problem that ends at the oath ceremony.</p>
    <p>Anyone who receives notice of a denaturalization action needs an attorney
    immediately. Citizenship is at stake, and these are federal court proceedings.</p>`,
  sources: [
    { label: 'Congressional Research Service — Denaturalization: Current Legal Framework', url: 'https://www.congress.gov/crs-product/LSB11437' },
    { label: 'ILRC — FAQs: How Denaturalization Works', url: 'https://www.ilrc.org/community-resources/faqs-how-denaturalization-works' }
  ]
},
{
  slug: 'expanded-visa-screening-2025',
  date: '2025-06-24',
  category: 'Policy Update',
  title: 'State Department expands screening and vetting for visa applicants',
  summary: 'A June 18, 2025 policy broadened the review applied to people applying for U.S. visas abroad.',
  body: `
    <p>On June 18, 2025, the State Department announced expanded screening and vetting
    for visa applicants. USCIS separately issued Policy Manual guidance strengthening
    the screening of family-based immigrant visa petitions.</p>
    <p>Together these mean more review, more requests for evidence, and longer
    timelines across consular processing and family petitions.</p>
    <h3>What to expect</h3>
    <ul>
      <li><strong>Longer waits</strong>, including after an interview that seemed to
      go well. Administrative processing can add weeks or months.</li>
      <li><strong>More documentation requests</strong>, sometimes for records from
      years earlier.</li>
      <li><strong>More attention to online presence</strong> and to consistency
      between your application and everything else about you on record.</li>
    </ul>
    <h3>How to prepare</h3>
    <p>It helps to build your own file before anyone asks for it. Keep every prior
    application and approval notice, along with a dated travel history. Keep proof of the relationship in a
    family case &mdash; not just a marriage certificate, but the ordinary evidence of
    a shared life: a joint lease, joint accounts, photographs with dates, messages.</p>
    <p>Make sure the story your documents tell matches the story your forms tell. Most
    problems at this stage are not fraud; they are a sloppy date or a forgotten trip
    that looks like concealment.</p>
    <p>If you are planning travel around a pending case, build in far more time than
    the posted estimate.</p>`,
  sources: [
    { label: 'USCIS — Update on Strengthened Screening and Vetting', url: 'https://www.uscis.gov/newsroom/alerts/update-on-uscis-strengthened-screening-and-vetting' }
  ]
},
{
  slug: 'nicaragua-tps-expiry',
  date: '2025-07-09',
  category: 'Policy Update',
  title: 'Nicaragua TPS designation reaches its expiration date',
  summary: 'The Nicaragua TPS designation was set to expire July 5, 2025.',
  body: `
    <p>The designation of Nicaragua for Temporary Protected Status was set to expire
    on <strong>July 5, 2025</strong>.</p>
    <p>Nicaragua had been designated for TPS since 1999, following Hurricane Mitch.
    For people who had held that status for more than two decades, its end means the
    loss of both protection from removal and work authorization &mdash; after
    building an entire life here.</p>
    <h3>If you are affected</h3>
    <p>The first step is finding out what else you may be eligible for. Many
    long-term TPS holders have acquired other options over the years without
    realising it:</p>
    <ul>
      <li><strong>A U.S. citizen child who has turned 21</strong> can petition for a
      parent. This is the single most commonly overlooked route among long-term TPS
      holders.</li>
      <li><strong>A spouse</strong> who is a citizen or permanent resident.</li>
      <li><strong>Employment-based options</strong>, if an employer will sponsor.</li>
      <li><strong>U or T visas</strong>, if you have been the victim of certain
      crimes or of trafficking.</li>
      <li><strong>Asylum</strong>, subject to deadline rules.</li>
    </ul>
    <p>Getting a full screening from a nonprofit immigration program is genuinely
    worth the appointment. People routinely discover they have been eligible for
    something for years.</p>
    <p>Keep every TPS approval notice, every EAD, and your evidence of continuous
    residence. That history is an asset.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'visa-validity-three-months',
  date: '2025-07-15',
  category: 'Policy Update',
  title: 'Some visas now issued for three months with a single entry',
  summary: 'Effective July 8, 2025, F-1, J-1, H-1B and other visas issued to certain nationals carry sharply reduced validity.',
  body: `
    <p>Effective July 8, 2025, the State Department changed visa validity and entry
    rules so that F-1, J-1, H-1B and certain other visas issued to nationals of
    specified countries on or after that date are valid for <strong>three months with
    a single entry</strong>.</p>
    <h3>Why this is a bigger deal than it sounds</h3>
    <p>A visa is permission to apply for admission at the border, which is a different
    thing from the status you hold once you are already here. That distinction is
    largely what makes this survivable:</p>
    <ul>
      <li>If you are already in the U.S. in valid status, your <strong>I-94 and your
      program documents</strong> &mdash; not the visa in your passport &mdash; govern
      how long you may stay. An expired visa does not make you out of status.</li>
      <li>The problem arises when you <strong>leave</strong>. With a single-entry
      visa, departing means you need a new visa to return, which means a new consular
      appointment abroad, with current wait times and no guarantee.</li>
    </ul>
    <h3>Practical guidance</h3>
    <p>If you hold one of these visas, treat any international travel as a serious
    decision rather than a routine one. Students and scholars should talk to their
    designated school official or responsible officer <strong>before</strong> booking, not
    after. Check consular appointment waits in the country where you would reapply.</p>
    <p>Keep your I-94 record, your I-20 or DS-2019, and your current program
    documents together and current.</p>`,
  sources: [
    { label: 'U.S. Department of State — Visa Information', url: 'https://travel.state.gov/content/travel/en/us-visas.html' }
  ]
},
{
  slug: 'new-asylum-work-permit-fees',
  date: '2025-07-26',
  category: 'Policy Update',
  title: 'New fees for asylum applications and work permits',
  summary: 'From July 22, 2025, asylum applications carry a $100 fee plus $100 annually, and asylum-based work permits cost $550. None of it can be waived.',
  body: `
    <p>Fees required by the 2025 reconciliation legislation took effect for
    applications postmarked on or after <strong>July 22, 2025</strong>.</p>
    <h3>The new amounts</h3>
    <ul>
      <li><strong>Asylum application (Form I-589):</strong> $100 when you file, plus
      <strong>$100 every year the application remains pending</strong>.</li>
      <li><strong>Work permit (Form I-765)</strong> for asylum applicants, TPS
      holders, and parolees: <strong>$550</strong>.</li>
      <li><strong>Asylum work permit renewal or extension:</strong> $275.</li>
    </ul>
    <h3>These cannot be waived</h3>
    <p>This is the hardest part. The asylum fee and the asylum work permit fee
    <strong>cannot be waived or reduced</strong>, regardless of financial
    circumstances. Given that asylum cases routinely stay pending for years, the
    annual charge compounds.</p>
    <h3>Filing with the wrong fee means rejection</h3>
    <p>USCIS has been explicit that applications submitted with incorrect fees are
    rejected. A rejection is not a correction notice &mdash; your filing does not
    count, and for asylum, where a one-year deadline from arrival applies, a rejection
    that pushes you past that deadline is a serious problem.</p>
    <p><strong>Verify the exact amount on the USCIS fee page the day you file.</strong></p>
    <p>If you cannot afford these fees, talk to a nonprofit legal provider before
    abandoning a claim. Some organizations have hardship funds, and the shape of your
    case may offer options.</p>`,
  sources: [
    { label: 'Federal Register — USCIS Immigration Fees Required by HR-1', url: 'https://www.federalregister.gov/documents/2025/07/22/2025-13738/uscis-immigration-fees-required-by-hr-1-reconciliation-bill' },
    { label: 'National Immigrant Justice Center — July 2025 fee explainer', url: 'https://immigrantjustice.org/wp-content/uploads/2025/07/NIJC-explainer_immigration-fees-increases_July2025.pdf' }
  ]
},
{
  slug: 'english-requirement-explained',
  date: '2025-08-11',
  category: 'How It Works',
  title: 'The English requirement: reading, writing, and the part nobody tells you about',
  summary: 'Three components, one of which runs through your entire interview. The standard is basic English, not fluency.',
  body: `
    <p>The English requirement has three parts, and the third is the one that
    surprises people.</p>
    <h3>Reading</h3>
    <p>You read one sentence aloud correctly, from up to three attempts. The
    vocabulary comes from a published list.</p>
    <h3>Writing</h3>
    <p>You write one sentence correctly, dictated by the officer, from up to three
    attempts. Again, a published vocabulary list. Spelling errors are tolerated if
    the meaning is clear.</p>
    <h3>Speaking and understanding &mdash; the hidden part</h3>
    <p>There is <strong>no separate speaking test</strong>. Your ability to speak and
    understand English is assessed throughout the entire interview &mdash; while the
    officer reviews your application, asks about your background, and administers the
    civics questions. The whole conversation is the test.</p>
    <p>This is why practising only the civics answers is not enough. Practise talking
    about your own life in English: where you work, who lives with you, when you
    travelled and why.</p>
    <h3>The standard is lower than people fear</h3>
    <p>What is being tested here is basic English rather than fluency, so an accent
    really is not a problem. Asking the officer to repeat something is fine too, and
    honestly far better than guessing at what they said.</p>
    <h3>Exemptions</h3>
    <p>You may be exempt from English based on age and time as a permanent resident
    &mdash; the 50/20, 55/15, and 65/20 rules &mdash; or on disability grounds via
    Form N-648. We cover those separately.</p>`,
  sources: [
    { label: 'USCIS — The Naturalization Interview and Test', url: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test' }
  ]
},
{
  slug: 'neighborhood-investigations-return',
  date: '2025-08-26',
  category: 'Policy Update',
  title: 'Neighborhood investigations return after 34 years',
  summary: 'An August 22, 2025 memo revived a dormant authority letting USCIS investigate applicants’ residence, employment, and reputation.',
  body: `
    <p>A policy memorandum dated August 22, 2025 revived <strong>neighborhood
    investigations</strong> for naturalization applicants &mdash; an authority under
    section 335(a) of the Immigration and Nationality Act that had not been used
    since 1991.</p>
    <p>The authority permits USCIS to investigate an applicant's residence,
    employment, and reputation in the community, including by speaking with people
    who know them.</p>
    <h3>It will not happen to everyone</h3>
    <p>This is worth stating plainly, because the coverage alarmed a lot of people:
    <strong>USCIS has indicated it will not conduct investigations for every
    applicant.</strong> The authority exists and is being used in certain cases, not
    as a universal step.</p>
    <h3>If it happens in your case</h3>
    <ul>
      <li><strong>Your own records are your protection.</strong> Leases, utility
      bills, pay stubs, and tax filings that corroborate the addresses and employers
      on your N-400 are what resolve questions.</li>
      <li><strong>Make sure your application is accurate first.</strong> An
      investigation is only a risk if what it finds differs from what you wrote.</li>
      <li><strong>Nobody is obliged to speak to an investigator</strong>, including
      your neighbours and your employer. They may decline.</li>
      <li><strong>Verify identity.</strong> Officials carry credentials. This
      authority is an obvious opening for impersonation scams &mdash; nobody
      legitimate will demand payment or threaten you.</li>
    </ul>
    <p>USCIS formally incorporated this into its Policy Manual in August 2026, which
    we covered separately.</p>`,
  sources: [
    { label: 'ILRC — Changes in the USCIS Policy Manual: Neighborhood Investigations', url: 'https://www.ilrc.org/resources/changes-uscis-policy-manual' }
  ]
},
{
  slug: 'n648-revisions-proposed',
  date: '2025-09-02',
  category: 'Policy Update',
  title: 'Changes proposed to the disability exception form, N-648',
  summary: 'USCIS proposed revisions to the medical certification that waives the English and civics requirements for applicants with disabilities.',
  body: `
    <p>On August 29, 2025, USCIS announced proposed revisions to <strong>Form
    N-648</strong>, the Medical Certification for Disability Exceptions.</p>
    <h3>What N-648 does</h3>
    <p>A licensed medical professional certifies that an applicant cannot meet the
    English and/or civics requirements because of a physical or developmental
    disability or mental impairment. It is the route to naturalization for people who
    are otherwise eligible but cannot satisfy the testing requirements.</p>
    <h3>What was proposed</h3>
    <ul>
      <li>Disqualifying applicants whose condition has <strong>not lasted 12
      months</strong>.</li>
      <li>Disqualifying conditions resulting directly from illegal drug use.</li>
      <li>Eliminating the oath waiver question.</li>
      <li>Requiring the medical professional to explain explicitly the
      <strong>nexus</strong> &mdash; the causal link between the disability and the
      inability to meet the requirements.</li>
    </ul>
    <h3>Pushback</h3>
    <p>The Immigrant Legal Resource Center submitted a comment opposing the revisions,
    arguing they conflict with existing statute, regulation, and the Policy Manual,
    and that the oath-waiver questions ask doctors to answer things outside their
    expertise.</p>
    <h3>If you are preparing an N-648</h3>
    <p>The nexus explanation is already where these are won or lost. A form that
    states a diagnosis without explaining why it prevents learning the material tends
    to be rejected. Give your doctor the time and context to write it properly, and
    have an accredited representative review it before filing.</p>`,
  sources: [
    { label: 'USCIS — Information for Medical Professionals Completing Form N-648', url: 'https://www.uscis.gov/forms/all-forms/information-for-medical-professionals-completing-form-n-648' },
    { label: 'USCIS Policy Manual — Volume 12, Part E, Chapter 3', url: 'https://www.uscis.gov/policy-manual/volume-12-part-e-chapter-3' }
  ]
},
{
  slug: 'honduras-nicaragua-nepal-tps-end',
  date: '2025-09-11',
  category: 'Policy Update',
  title: 'TPS ends for Honduras, Nicaragua, and Nepal',
  summary: 'Nepal’s designation ended August 20, 2025; Honduras and Nicaragua ended September 8, 2025.',
  body: `
    <p>Three Temporary Protected Status designations ended within weeks of each other:
    <strong>Nepal on August 20, 2025</strong>, and <strong>Honduras and Nicaragua on
    September 8, 2025</strong>.</p>
    <p>Honduras and Nicaragua had been designated since 1999. Many beneficiaries had
    lived in the United States for more than 25 years, raising U.S. citizen children
    and building careers on a status that was always labelled temporary.</p>
    <h3>The most overlooked option</h3>
    <p>If you have a <strong>U.S. citizen child who is now 21 or older</strong>, that
    child can petition for you as a parent. For people who have held TPS since 1999,
    children born here in the early years of that status are now well past 21. This is
    the single most commonly missed route among long-term TPS holders &mdash; and in
    many cases it leads to permanent residence.</p>
    <p>It is not automatic and the details matter, particularly how you entered the
    country, which affects whether you can process your case inside the U.S. Get it
    assessed properly.</p>
    <h3>Other possibilities</h3>
    <p>A citizen or resident spouse; employment sponsorship; U or T visas for victims
    of certain crimes or trafficking; asylum, subject to deadline rules; and
    cancellation of removal for some long-residence cases with qualifying relatives.</p>
    <h3>Protect your history</h3>
    <p>Keep every TPS approval notice, EAD, tax return, and proof of residence. For
    nearly every alternative route, your documented history in the United States is
    the foundation of the case.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'new-civics-test-announced',
  date: '2025-09-22',
  category: 'Policy Update',
  title: 'USCIS announces the 2025 civics test: 128 questions, 20 asked, 12 to pass',
  summary: 'Published September 18, 2025, the new test applies to applications filed on or after October 20, 2025.',
  body: `
    <p>USCIS published a Federal Register notice on September 18, 2025 announcing
    implementation of the <strong>2025 Naturalization Civics Test</strong>, applying
    to applications filed on or after <strong>October 20, 2025</strong>.</p>
    <h3>What changes</h3>
    <div class="scroll-x">
    <table>
      <thead><tr><th></th><th>2008 test</th><th>2025 test</th></tr></thead>
      <tbody>
        <tr><td>Question pool</td><td>100</td><td><strong>128</strong></td></tr>
        <tr><td>Questions asked</td><td>10</td><td><strong>20</strong></td></tr>
        <tr><td>Needed to pass</td><td>6</td><td><strong>12</strong></td></tr>
      </tbody>
    </table>
    </div>
    <p>The officer asks questions only until you have either passed or failed.</p>
    <h3>How much is actually new</h3>
    <p>Less than the headline suggests. The 2025 test largely returns to the format of
    the 2020 version: <strong>more than 75% of its questions are identical to the 2020
    test</strong>, roughly 25% are new, and some 2008 questions were dropped entirely.</p>
    <h3>Which test applies to you</h3>
    <p>This is determined by your <strong>filing date</strong>, not your interview
    date:</p>
    <ul>
      <li>Filed <strong>before</strong> October 20, 2025 &rarr; 2008 test (10 of 100,
      6 to pass).</li>
      <li>Filed <strong>on or after</strong> October 20, 2025 &rarr; 2025 test (20 of
      128, 12 to pass).</li>
    </ul>
    <p>So if you filed in September 2025 and interview in 2026, you still take the
    older, shorter test. Study the right one &mdash; check your receipt notice for
    your filing date.</p>
    <p>The English requirements are unchanged.</p>`,
  sources: [
    { label: 'Federal Register — Notice of Implementation of 2025 Naturalization Civics Test', url: 'https://www.federalregister.gov/documents/2025/09/18/2025-18050/notice-of-implementation-of-2025-naturalization-civics-test' },
    { label: 'USCIS — Check for Test Updates', url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates' }
  ]
},
{
  slug: 'new-civics-test-in-effect',
  date: '2025-10-21',
  category: 'Policy Update',
  title: 'The 2025 civics test is now in effect',
  summary: 'From today, applications filed on or after October 20, 2025 are tested on the 128-question pool.',
  body: `
    <p>The 2025 Naturalization Civics Test took effect yesterday,
    <strong>October 20, 2025</strong>. Applications filed from that date forward are
    tested on the 128-question pool, with 20 questions asked and 12 correct answers
    required.</p>
    <h3>First: find out which test is yours</h3>
    <p>Look at your receipt notice (Form I-797) and find your filing date. That date
    &mdash; not your interview date &mdash; decides your test. People are already
    studying the wrong list, so check before you spend months on it.</p>
    <h3>If you are taking the 2025 test</h3>
    <ul>
      <li><strong>Download the official 128-question list and answers</strong> from
      USCIS. Do not study an unofficial list; the official answers are what count.</li>
      <li><strong>Start earlier than you think you need to.</strong> Twelve correct
      out of twenty is a higher bar than six out of ten, and there is more material.</li>
      <li><strong>Learn out loud.</strong> It is a spoken test, and recognising an
      answer on paper is not the same as producing it in a room.</li>
      <li><strong>Check the answers that change</strong> near your interview: your
      senators, your representative, the Speaker, the President and Vice President,
      your governor and state capital.</li>
    </ul>
    <h3>If you do not pass</h3>
    <p>You get a second attempt, normally rescheduled within 60 to 90 days, and you
    are retested only on the part you failed.</p>
    <p>We tutor for both versions of the test, free.
    <a href="inquiries.html">Ask us for practice sessions</a> &mdash; tell us your
    filing date and we will work from the right list.</p>`,
  sources: [
    { label: 'USCIS — Check for Test Updates', url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates' },
    { label: 'USCIS — Find Study Materials and Resources', url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources' }
  ]
},
{
  slug: 'refugee-ceiling-record-low',
  date: '2025-11-05',
  category: 'Policy Update',
  title: 'Refugee admissions ceiling set at 7,500 — the lowest ever',
  summary: 'An October 31, 2025 determination capped FY2026 refugee admissions far below the historic average of roughly 90,700.',
  body: `
    <p>On October 31, 2025, a Presidential Determination set the annual ceiling for
    refugee admissions at <strong>7,500 for fiscal year 2026</strong> &mdash; the
    lowest in United States history.</p>
    <p>For scale: since the Refugee Act of 1980 established the modern resettlement
    program, the annual ceiling has averaged roughly <strong>90,700</strong>. The
    determination also stated that the limited slots would be allocated primarily to
    Afrikaners from South Africa.</p>
    <h3>What the ceiling is</h3>
    <p>It caps how many refugees may be admitted through the U.S. Refugee
    Admissions Program in a fiscal year &mdash; people identified and processed
    abroad, usually through UNHCR referral, then resettled here.</p>
    <h3>What it does not affect</h3>
    <p>This next distinction matters quite a lot: the ceiling does
    <strong>not</strong> limit asylum. Asylum is for people already in the United States or at a port of
    entry, it is a separate legal process, and it has no numerical cap. If you are
    here and fear returning to your country, the refugee ceiling does not close that
    door.</p>
    <p>If you have a pending refugee case abroad, or family waiting on one, expect
    severe delays and talk to the resettlement agency handling the case about what the
    allocation means for you.</p>
    <p>The FY2026 ceiling was later raised to 17,500 by an emergency determination in
    May 2026, which we covered separately.</p>`,
  sources: [
    { label: 'Congressional Research Service — U.S. Refugee Admissions Program in FY2025 and FY2026', url: 'https://www.congress.gov/crs-product/IF13277' },
    { label: 'AILA — Presidential Determination on Refugee Admissions for FY2026', url: 'https://www.aila.org/presidential-determination-on-refugee-admissions-for-fiscal-year-2026' }
  ]
},
{
  slug: 'age-exemptions-explained',
  date: '2025-12-09',
  category: 'How It Works',
  title: 'The 50/20, 55/15, and 65/20 rules: when you can skip the English test',
  summary: 'Older applicants with long permanent residence may be exempt from English and may take civics in their own language.',
  body: `
    <p>If you are an older applicant who has held a green card for a long time, you may
    not have to take the test in English at all. These exemptions are
    under-used, often because nobody mentions them.</p>
    <h3>50/20</h3>
    <p>Age <strong>50 or older</strong> at filing, and a permanent resident for
    <strong>20 years or more</strong>. You are exempt from the English requirement. You
    still take the civics test, but <strong>in your language of choice</strong>, with an
    interpreter you bring.</p>
    <h3>55/15</h3>
    <p>Age <strong>55 or older</strong>, permanent resident for <strong>15 years or
    more</strong>. Same deal: no English requirement, civics in your own language.</p>
    <h3>65/20</h3>
    <p>Age <strong>65 or older</strong>, permanent resident for <strong>20 years or
    more</strong>. Exempt from English, <strong>and</strong> you take a
    <strong>reduced civics set</strong> &mdash; a smaller number of designated
    questions, in your own language.</p>
    <h3>How to use an exemption</h3>
    <ul>
      <li><strong>Count carefully.</strong> Both the age and the years as a permanent
      resident are measured at the time of filing. Someone close to a threshold may
      benefit from waiting a few months.</li>
      <li><strong>Bring your own interpreter</strong>, who must be capable of
      interpreting faithfully. USCIS does not supply one.</li>
      <li><strong>Note what is not exempted:</strong> the civics knowledge itself, and
      every other requirement &mdash; continuous residence, physical presence, good
      moral character, the oath.</li>
    </ul>
    <p>If you are helping an older parent or grandparent apply, check these rules
    first. They change how you prepare entirely.</p>`,
  sources: [
    { label: 'USCIS — Exceptions and Accommodations', url: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/exceptions-and-accommodations' }
  ]
},
{
  slug: 'south-sudan-tps-blocked',
  date: '2025-12-31',
  category: 'Court Ruling',
  title: 'Court temporarily blocks the end of TPS for South Sudan',
  summary: 'A December 30, 2025 order kept South Sudan TPS protections in place until further notice.',
  body: `
    <p>On December 30, 2025, a court temporarily blocked the federal government from
    ending Temporary Protected Status protections for <strong>South Sudan</strong>.
    Protections remain valid until further notice.</p>
    <h3>What "temporarily blocked" means</h3>
    <p>A court order pausing a termination is not a permanent guarantee. It preserves
    the status quo while a case is decided, and it can be narrowed, lifted on appeal,
    or replaced by a different outcome. Treat it as breathing room, not as a
    resolution.</p>
    <h3>What to do with the time</h3>
    <ul>
      <li><strong>Keep re-registering</strong> whenever USCIS opens a registration
      period. Court protection does not excuse you from the paperwork, and missing a
      window is how people lose status they were entitled to keep.</li>
      <li><strong>Use the pause to find a durable option.</strong> Get a full
      screening from a nonprofit immigration program: family petitions, employment
      routes, asylum, U or T visas, cancellation of removal.</li>
      <li><strong>Keep your documents current</strong> &mdash; approval notices, EADs,
      proof of continuous residence, tax filings.</li>
    </ul>
    <h3>Verify before you act</h3>
    <p>TPS litigation moved in both directions through 2025 and 2026, and a Supreme
    Court decision in 2026 significantly limited judicial review of TPS terminations.
    Confirm your country's current status on the official USCIS TPS page rather than
    relying on any article, including this one.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'somalia-tps-terminated',
  date: '2026-01-16',
  category: 'Policy Update',
  title: 'DHS terminates TPS for Somalia',
  summary: 'The Department of Homeland Security announced the end of Somalia’s TPS designation on January 13, 2026.',
  body: `
    <p>On January 13, 2026, the Department of Homeland Security announced the
    termination of Temporary Protected Status for <strong>Somalia</strong>.</p>
    <p>Somalia had been designated for TPS since 1991 &mdash; one of the longest-running
    designations in the program's history. Beneficiaries include people who have lived
    in the United States for over three decades.</p>
    <h3>Immediate steps</h3>
    <ul>
      <li><strong>Find the official notice</strong> and note the exact dates. A
      termination usually comes with a wind-down period during which status and work
      authorization continue. Know your real last date rather than assuming the worst
      or the best.</li>
      <li><strong>Get screened for alternatives</strong> now, not later. After 30+
      years, many people have options they have never examined &mdash; most commonly a
      U.S. citizen child over 21 who can petition for a parent.</li>
      <li><strong>Gather your history.</strong> Every TPS approval, every EAD, tax
      returns, proof of residence. This documentation underpins almost every
      alternative route.</li>
    </ul>
    <h3>On asylum</h3>
    <p>Asylum generally carries a one-year filing deadline from arrival, which is long
    past for most long-term TPS holders. There are exceptions, including
    changed circumstances in your home country and extraordinary
    circumstances in your own situation. Whether an exception applies is a
    genuinely legal question &mdash; get it assessed rather than assuming.</p>
    <p>Be cautious of anyone guaranteeing results for a fee. Our
    <a href="redirection.html#legal-help">legal help page</a> lists free options.</p>`,
  sources: [
    { label: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' }
  ]
},
{
  slug: 'ceremonies-suspended-39-countries',
  date: '2026-01-28',
  category: 'Policy Update',
  title: 'Oath ceremonies suspended and cases paused for applicants from 39 countries',
  summary: 'In January 2026, naturalization ceremonies were suspended and adjudication halted for applicants from a list of 39 countries.',
  body: `
    <p>In January 2026, naturalization oath ceremonies were suspended and immigration
    case adjudication halted for applicants from <strong>39 countries</strong>.
    Separately, ceremonies were cancelled in individual cities &mdash; Austin halted
    its ceremonies on January 23, 2026, one local instance of a national pattern.</p>
    <h3>Why the oath matters so much</h3>
    <p>You are not a U.S. citizen until you take the Oath of Allegiance. Someone whose
    application was approved but whose ceremony is cancelled is in a genuinely
    difficult position: approved, but not yet a citizen, and unable to get a passport,
    register to vote, or petition for relatives as a citizen.</p>
    <h3>If your ceremony was cancelled</h3>
    <ul>
      <li><strong>Keep every notice</strong>, including the cancelled appointment
      notice. It is evidence of where your case stands.</li>
      <li><strong>Do not let other documents lapse.</strong> If your green card or
      work authorization expires while you wait, renew it. Approval of naturalization
      is not a substitute for valid status documents.</li>
      <li><strong>Contact your congressional representative's office.</strong> They do
      immigration casework for constituents at no charge, and cancelled ceremonies are
      exactly the kind of problem they take up &mdash; 26 members of Congress formally
      questioned USCIS about these cancellations in October 2026.</li>
      <li><strong>Watch your mail closely</strong> for a rescheduled notice.</li>
    </ul>
    <p>If you are in this position and want help understanding your notices or drafting
    an inquiry to your representative, <a href="inquiries.html">write to us</a>.</p>`,
  sources: [
    { label: 'Rep. Carson — Seeking Answers on Canceled Naturalization Ceremonies', url: 'https://carson.house.gov/media/press-releases/rep-carson-seeks-answers-canceled-naturalization-ceremonies' }
  ]
},
{
  slug: 'marriage-fraud-indictments',
  date: '2026-02-17',
  category: 'Know Your Rights',
  title: 'Marriage fraud indictments, and how to protect a real marriage case',
  summary: 'A February 2026 investigation produced 11 indictments. Genuine couples should know how these cases are examined.',
  body: `
    <p>On February 10, 2026, USCIS assisted an investigation into a marriage fraud
    conspiracy that resulted in <strong>11 indictments</strong>.</p>
    <p>We cover this not as crime news but because enforcement of this kind raises
    scrutiny for everyone, and honest couples are the ones caught off guard by it.</p>
    <h3>What officers look for</h3>
    <p>The question in a marriage-based case is whether the marriage is bona
    fide &mdash; entered into for a shared life, not to obtain an immigration
    benefit. Officers assess that through documentation and, where there are doubts,
    through separate interviews of each spouse.</p>
    <h3>Documenting a real marriage</h3>
    <p>Real marriages sometimes look thin on paper, especially for couples who keep
    finances separate or live with family. Build the record deliberately:</p>
    <ul>
      <li>Joint lease or mortgage, joint utility accounts.</li>
      <li>Joint bank accounts, and each of you named on the other's insurance,
      retirement beneficiary forms, and emergency contacts.</li>
      <li>Joint tax returns.</li>
      <li>Dated photographs across time and with each other's families.</li>
      <li>Travel records together; correspondence during separations.</li>
      <li>Affidavits from people who know you both.</li>
    </ul>
    <h3>If you are a victim rather than a participant</h3>
    <p>If someone married you in order to use your status, or if you are experiencing
    abuse in a marriage your immigration case depends on, there are specific
    protections &mdash; including VAWA self-petitions, which let you file without your
    spouse's knowledge or involvement. Talk to a legal-aid organization or the
    National Domestic Violence Hotline.</p>`,
  sources: [
    { label: 'USCIS — Form I-130, Petition for Alien Relative', url: 'https://www.uscis.gov/i-130' }
  ]
},
{
  slug: 'premium-processing-fee-increase',
  date: '2026-03-04',
  category: 'Policy Update',
  title: 'Premium processing fees rise March 1, 2026',
  summary: 'A final rule increased the cost of expedited USCIS processing. It is worth knowing what premium processing does and does not do.',
  body: `
    <p>A Department of Homeland Security final rule increased USCIS premium processing
    fees effective <strong>March 1, 2026</strong>.</p>
    <h3>What premium processing is</h3>
    <p>Premium processing (Form I-907) buys a <strong>faster decision</strong> on
    certain petitions &mdash; USCIS commits to acting within a set number of business
    days. It applies mainly to employment-based petitions such as the I-129 and
    certain I-140 categories.</p>
    <h3>What it does not do</h3>
    <p>Two misunderstandings cost people money:</p>
    <ul>
      <li><strong>It does not improve your chances.</strong> You are buying speed, not
      favour. A weak petition gets denied faster.</li>
      <li><strong>It is not available for the N-400.</strong> There is no way to pay
      to expedite a naturalization application. If anyone offers to, it is a scam.</li>
    </ul>
    <h3>Expedite requests are different, and free</h3>
    <p>Separately from premium processing, USCIS has an <strong>expedite request</strong>
    process that costs nothing. The criteria are narrow &mdash; severe financial loss
    to a company or person, emergencies and urgent humanitarian situations, nonprofit
    interests, government interests, or clear USCIS error. Requests need real
    documentation, and most are denied, but the request itself is free.</p>
    <p>If your case is simply taking longer than the published time, the free routes
    are a service request, the USCIS Ombudsman, and a congressional inquiry through
    your representative &mdash; not a payment.</p>`,
  sources: [
    { label: 'USCIS — To Increase Premium Processing Fees', url: 'https://www.uscis.gov/newsroom/alerts/uscis-to-increase-premium-processing-fees' },
    { label: 'USCIS — Expedite Requests', url: 'https://www.uscis.gov/forms/filing-guidance/expedite-requests' }
  ]
},
{
  slug: 'h1b-registration-wage-rule',
  date: '2026-03-23',
  category: 'Policy Update',
  title: 'H-1B selection now weighted by wage level',
  summary: 'A rule effective February 27, 2026 changed the H-1B lottery so higher-wage registrations receive more entries.',
  body: `
    <p>A final rule effective <strong>February 27, 2026</strong> changed how the H-1B
    cap selection works. Rather than each registration having an equal chance, each
    now receives a number of entries <strong>based on wage level</strong> &mdash;
    higher offered wages receive more entries and therefore a better chance of
    selection.</p>
    <p>The FY2027 registration period ran from <strong>March 4 to March 19, 2026</strong>,
    with the petition filing window opening <strong>April 1, 2026</strong>. USCIS also
    reached the H-2B cap for the second half of FY2026 on March 20, 2026.</p>
    <h3>Who this affects</h3>
    <p>Mostly employers and people on student visas moving toward work sponsorship. It
    disadvantages entry-level roles and favours senior positions, which has real
    consequences for recent graduates on F-1 status using OPT.</p>
    <h3>If you are on F-1 and hoping for H-1B</h3>
    <ul>
      <li><strong>Know your OPT and STEM OPT timelines precisely.</strong> Your runway
      determines how many lottery cycles you get.</li>
      <li><strong>Ask where your offered wage sits</strong> relative to the prevailing
      wage levels for your role and location. It now directly affects your odds.</li>
      <li><strong>Consider cap-exempt employers.</strong> Universities, affiliated
      nonprofit research organizations, and some nonprofit research institutions are
      not subject to the cap &mdash; no lottery at all.</li>
      <li><strong>Look at other categories:</strong> O-1 for extraordinary ability,
      cap-exempt options, or country-specific routes such as TN, E-3, or H-1B1.</li>
    </ul>
    <p>Work with your school's international office and your employer's immigration
    counsel. Timing errors here are expensive and hard to undo.</p>`,
  sources: [
    { label: 'USCIS — H-1B Specialty Occupations', url: 'https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations' }
  ]
},
{
  slug: 'visa-bulletin-moves-forward',
  date: '2026-04-07',
  category: 'How It Works',
  title: 'April 2026 Visa Bulletin shows significant forward movement',
  summary: 'Several categories advanced. Here is how to read the Visa Bulletin and know when your turn arrives.',
  body: `
    <p>The April 2026 Visa Bulletin showed significant forward movement in several
    categories &mdash; welcome news after a long period of stagnation.</p>
    <h3>How the Visa Bulletin works</h3>
    <p>Most green card categories are numerically limited, with per-country caps. When
    demand exceeds supply, a queue forms, and your place in it is your
    <strong>priority date</strong> &mdash; usually the date your petition was filed.</p>
    <p>The monthly bulletin publishes two sets of dates per category and country:</p>
    <ul>
      <li><strong>Final Action Dates</strong> &mdash; when a green card can actually
      be approved for someone with that priority date.</li>
      <li><strong>Dates for Filing</strong> &mdash; when you may submit your
      application, ahead of approval.</li>
    </ul>
    <p>USCIS announces each month which chart applies for adjustment of status, so
    check that alongside the bulletin itself.</p>
    <h3>Reading your own row</h3>
    <p>Find your category, then your country of chargeability. If the listed date is
    <strong>later</strong> than your priority date, your turn has come. "C" means current
    &mdash; no backlog.</p>
    <h3>Important caution</h3>
    <p>Dates move backwards as well as forwards, and <strong>retrogression</strong>
    is real enough that it happens fairly regularly. Forward movement in one month is not a trend, and
    nobody can tell you reliably when your date will be reached.</p>
    <p>When your date does become current, act promptly &mdash; and keep your address
    updated with USCIS so you do not miss the notice.</p>`,
  sources: [
    { label: 'U.S. Department of State — The Visa Bulletin', url: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html' }
  ]
},
{
  slug: 'princeton-prize-race-relations',
  date: '2026-04-19',
  category: 'Milestone',
  title: 'Gateway2America receives the Princeton Prize in Race Relations certificate',
  summary: 'We have been awarded a Certificate of Accomplishment in the Princeton Prize in Race Relations for the Eastern Pennsylvania and Delaware region.',
  body: `
    <p>Gateway2America has received a <strong>Certificate of Accomplishment in the
    Princeton Prize in Race Relations</strong> for the Eastern Pennsylvania and
    Delaware region.</p>
    <p>The Princeton Prize in Race Relations recognises young people whose efforts have
    had a significant, positive effect on race relations in their schools or
    communities. Being recognised in the Eastern Pennsylvania and Delaware region
    means a great deal, because it is recognition from the community this work was
    built for.</p>
    <h3>What the recognition is really for</h3>
    <p>It is not for the website. It is for the hundred-plus individual conversations
    behind it &mdash; people who wrote in not knowing where to start, and who got a
    real answer in plain language within a day or two.</p>
    <p>Immigration bureaucracy is not neutral in its effects. Whether you can navigate
    it depends heavily on your English, your education, your money, and whether you
    happen to know somebody who has done it before. People who have those advantages
    find the system difficult. People who do not often find it impossible. Closing
    even part of that gap is the point of this work.</p>
    <h3>Thank you</h3>
    <p>To everyone who wrote in, trusted us with a question, or passed our name along
    to a friend or a relative: this is yours as much as ours.</p>
    <p>The work continues, and it is still free. If you have a question, the door is
    open &mdash; <a href="inquiries.html">send us an inquiry</a>.</p>`,
  sources: [
    { label: 'Princeton Prize in Race Relations', url: 'https://pprize.princeton.edu/' }
  ]
},
{
  slug: 'enhanced-security-checks-mandated',
  date: '2026-04-30',
  category: 'Policy Update',
  title: 'USCIS mandates enhanced security checks across many application types',
  summary: 'On April 27, 2026, officers were directed to resubmit pending cases for expanded FBI background screening.',
  body: `
    <p>On April 27, 2026, USCIS mandated <strong>enhanced security checks</strong> for a
    wide range of immigration applications, directing officers to resubmit pending
    cases for expanded FBI background screening.</p>
    <p>This followed a period in which USCIS had placed <strong>holds</strong> on
    several categories of applications as part of broader screening changes, beginning
    to lift some of those holds selectively from March 30, 2026.</p>
    <p>Separately during 2026, USCIS activated the FBI's Next Generation
    Identification system, which required millions of applicants' archived fingerprints
    to be resubmitted and temporarily halted adjudications.</p>
    <h3>What this looks like from your side</h3>
    <p>Mostly, it looks like silence. A case sitting at "case was received" or
    "fingerprint review was completed" for many months, with no request for evidence
    and no interview notice. This is the single most common question we receive, and
    the answer is usually that nothing is wrong with your case &mdash; it is in a
    queue you cannot see.</p>
    <h3>What you can do</h3>
    <ul>
      <li><strong>Keep your address current with USCIS.</strong> A missed notice can
      mean a denial for abandonment. Update it directly with USCIS, not just with the
      postal service.</li>
      <li><strong>Respond to any request for evidence immediately</strong> and within
      the deadline.</li>
      <li><strong>Renew documents that expire while you wait</strong> &mdash; work
      authorization, travel documents, green cards.</li>
      <li><strong>Escalate if you are past the published processing time:</strong> a
      service request, then the USCIS Ombudsman, then a congressional inquiry. All free.</li>
    </ul>`,
  sources: [
    { label: 'USCIS — Update on Strengthened Screening and Vetting', url: 'https://www.uscis.gov/newsroom/alerts/update-on-uscis-strengthened-screening-and-vetting' },
    { label: 'USCIS — Check Case Processing Times', url: 'https://egov.uscis.gov/processing-times/' }
  ]
},
{
  slug: 'congressional-recognition',
  date: '2026-05-19',
  category: 'Milestone',
  title: 'Gateway2America receives a Certificate of Special Congressional Recognition',
  summary: 'We have been recognised by Pennsylvania’s 6th congressional district with a Certificate of Special Congressional Recognition.',
  body: `
    <p>Gateway2America has received a <strong>Certificate of Special Congressional
    Recognition</strong> from Pennsylvania's 6th congressional district.</p>
    <p>A month after the Princeton Prize certificate, this recognition from our own
    congressional district is humbling. It is a thank-you from the place where this
    work happens, for work done on behalf of people who live here.</p>
    <h3>What this does and does not mean</h3>
    <p>We want to be precise, because precision matters in this field and because
    overstating it would undercut everything else we tell you.</p>
    <p>This certificate is <strong>recognition of community service</strong>. It is
    not a federal licence, an accreditation, or an endorsement of legal services. It
    does not make us attorneys or accredited representatives, and it does not change
    what we are able to do for you.</p>
    <p>We still cannot give legal advice. We still cannot represent you or advise on
    your individual case. What we do is exactly what we did before: explain the
    process in plain language, point you to official resources and to real legal help
    when you need it, tutor for the citizenship test, and post updates you can verify
    against the original source.</p>
    <h3>Thank you</h3>
    <p>To the constituent services staff who do quiet, unglamorous immigration casework
    every day &mdash; and who are often the reason a stalled case finally moves &mdash;
    thank you. If your case is stuck beyond the published processing time, your own
    representative's office can help, free of charge.</p>`,
  sources: []
},
{
  slug: 'adjustment-of-status-extraordinary',
  date: '2026-05-26',
  category: 'Policy Update',
  title: 'USCIS reframes adjustment of status as "extraordinary relief"',
  summary: 'A May 21, 2026 memo directs officers to treat applying for a green card from inside the U.S. as a discretionary exception, not a routine path.',
  body: `
    <p>On May 21, 2026, USCIS issued Policy Memorandum <strong>PM-602-0199</strong>,
    recharacterising adjustment of status as a matter of discretion and
    "administrative grace" &mdash; an <strong>extraordinary relief</strong> that lets
    applicants skip the ordinary consular visa process.</p>
    <h3>What is actually changing</h3>
    <p>Adjustment of status is how someone already inside the United States applies for
    a green card without leaving (Form I-485). The alternative is consular processing:
    applying at a U.S. consulate abroad.</p>
    <p>The memo directs officers to treat consular processing as the
    <strong>expected</strong> route, and adjustment as a discretionary exception that
    the applicant must affirmatively justify. Officers weigh a totality of
    circumstances: immigration history, status or parole violations, unauthorized
    employment, fraud or false testimony, failure to depart after a temporary
    admission, family ties, moral character, and humanitarian factors.</p>
    <p>As practitioners have described it, the default shifted from "approve unless
    there is a reason not to" toward requiring extraordinary circumstances.</p>
    <h3>What it does not do</h3>
    <p>Importantly, the memo <strong>does not prohibit filing</strong>. People who are
    eligible for an immigrant visa may still apply for adjustment of status.</p>
    <h3>Why this matters so much</h3>
    <p>Leaving the United States is not a neutral alternative. For people who have
    accrued unlawful presence, departing can trigger three- and ten-year bars on
    returning. "Just go process abroad" can mean years of separation from family.</p>
    <p>If you have a pending or planned I-485, this is a conversation to have with an
    immigration attorney before taking any action &mdash; especially before travelling.</p>`,
  sources: [
    { label: 'AILA — Featured Issue: New Policy on Adjustment of Status', url: 'https://www.aila.org/library/featured-issue-new-policy-on-adjustment-of-status-as-act-of-extraordinary-discretion' },
    { label: 'ILRC — FAQ: USCIS Memo on Adjustment of Status', url: 'https://www.ilrc.org/community-resources/faq-uscis-memo-adjustment-status' }
  ]
},
{
  slug: 'refugee-ceiling-raised',
  date: '2026-06-02',
  category: 'Policy Update',
  title: 'Refugee ceiling raised from 7,500 to 17,500',
  summary: 'An emergency determination on May 21, 2026 more than doubled the FY2026 refugee admissions cap.',
  body: `
    <p>On May 21, 2026, an Emergency Presidential Determination raised the fiscal year
    2026 refugee admissions ceiling from <strong>7,500 to 17,500</strong>. The
    additional admissions were allocated to Afrikaners from South Africa.</p>
    <h3>Context</h3>
    <p>The original FY2026 ceiling of 7,500, set in October 2025, was the lowest in
    U.S. history &mdash; against a historic average of roughly 90,700 since the Refugee
    Act of 1980. The revised figure of 17,500 remains far below that average.</p>
    <p>The allocation of the increase to a single population is itself notable, since
    the refugee program has historically been structured around regional allocations
    responding to displacement worldwide.</p>
    <h3>What this means in practice</h3>
    <p>If you have a refugee case pending abroad, or family waiting on one, the
    additional slots are unlikely to help unless your case falls within the designated
    allocation. Talk to the resettlement agency handling the case about where it
    actually stands.</p>
    <h3>The distinction to hold onto</h3>
    <p>The refugee ceiling governs refugee admissions from abroad. It does
    <strong>not</strong> cap asylum, which is for people already in the United
    States or at a port of entry and has no numerical limit.</p>
    <p>If you are here and fear returning to your country, the ceiling does not apply
    to you. Asylum has its own rules &mdash; including a general one-year filing
    deadline from arrival, with exceptions &mdash; and it is worth getting screened by
    a nonprofit legal provider rather than assuming you are out of options.</p>`,
  sources: [
    { label: 'AILA — Presidential Determination Increasing Refugee Admissions for FY26', url: 'https://www.aila.org/library/presidential-determination-increasing-refugee-admissions-for-fy26' }
  ]
},
{
  slug: 'documents-to-gather-before-filing',
  date: '2026-06-15',
  category: 'How It Works',
  title: 'The document file to build before you file anything',
  summary: 'Nearly every immigration application draws on the same underlying records. Assembling them early turns a scramble into a filing.',
  body: `
    <p>Whatever route you are on, the same records keep being requested. Building this
    file once &mdash; before you need it &mdash; is the most useful preparation you can
    do.</p>
    <h3>Identity and status</h3>
    <ul>
      <li>Passports, including expired ones. Every page with a stamp matters.</li>
      <li>Green card, front and back. Any prior work permits.</li>
      <li>Your <strong>A-number</strong>, and every USCIS receipt number you have ever
      had.</li>
      <li><strong>Every notice USCIS has ever sent you</strong> &mdash; receipts,
      approvals, denials, requests for evidence. Keep the originals, scan everything.</li>
      <li>Birth certificate, with a certified translation if it is not in English.</li>
      <li>Marriage certificates; divorce decrees or death certificates ending prior
      marriages.</li>
    </ul>
    <h3>Residence and work history</h3>
    <ul>
      <li>Every address for the last five years, with exact move-in and move-out dates.</li>
      <li>Every employer for the last five years, with addresses and dates.</li>
      <li>Tax returns and transcripts. The IRS provides transcripts free.</li>
      <li>Leases, mortgage statements, utility bills.</li>
    </ul>
    <h3>Travel</h3>
    <p>This is where people lose weeks. Reconstruct <strong>every trip outside the
    United States</strong> with departure and return dates. Use passport stamps, old
    boarding passes, email confirmations, and your I-94 travel history, which is
    available free online from CBP.</p>
    <h3>Anything involving law enforcement</h3>
    <p>Certified dispositions for every arrest, charge, or citation &mdash; even if
    dismissed, expunged, or resolved without a conviction. "It was dropped" is not
    enough; you need the court record.</p>
    <h3>Two habits</h3>
    <p>Scan everything and keep a backup somewhere you can reach from anywhere. And
    keep a single running timeline document of addresses, jobs, and trips. Update it as
    life happens, so you are never reconstructing five years from memory.</p>`,
  sources: [
    { label: 'CBP — I-94 Travel History', url: 'https://i94.cbp.dhs.gov/' },
    { label: 'IRS — Get Transcript', url: 'https://www.irs.gov/individuals/get-transcript' }
  ]
},
{
  slug: 'n400-fee-increase-proposed',
  date: '2026-06-26',
  category: 'Policy Update',
  title: 'Proposed rule would raise the citizenship fee to $1,330 and end fee waivers',
  summary: 'A June 2026 proposal would increase the N-400 fee by 75% and eliminate both the reduced fee and fee waivers. It is not final.',
  body: `
    <p>DHS published a notice of proposed rulemaking on <strong>June 22, 2026</strong>
    that would substantially raise filing fees for naturalization.</p>
    <h3>What is proposed</h3>
    <div class="scroll-x">
    <table>
      <thead><tr><th>Form</th><th>Now</th><th>Proposed</th></tr></thead>
      <tbody>
        <tr><td>N-400, paper</td><td>$760</td><td><strong>$1,330</strong></td></tr>
        <tr><td>N-400, online</td><td>$710</td><td><strong>$1,280</strong></td></tr>
        <tr><td>N-336 appeal, online</td><td>$780</td><td>$1,425</td></tr>
        <tr><td>N-336 appeal, mail</td><td>$830</td><td>$1,475</td></tr>
      </tbody>
    </table>
    </div>
    <p>That is roughly a <strong>75% increase</strong> on the N-400. The proposal would
    also <strong>eliminate the reduced fee option and fee waivers</strong> for the
    N-400 &mdash; which is, for many families, the more consequential change.</p>
    <h3>It is not in effect</h3>
    <p>This is a <strong>proposed</strong> rule. A 60-day public comment period ran from June
    22, 2026, and <strong>current fees remain in effect until a final rule is published
    and takes effect</strong>. Do not pay $1,330 because you read that it is the new
    price. Check the USCIS fee page the day you file.</p>
    <h3>What to do if you are eligible now</h3>
    <p>If you already qualify to naturalize, there is a straightforward argument for
    not waiting. Filing under current fees &mdash; and under the current reduced-fee and
    waiver rules, if you qualify for them &mdash; locks in today's cost.</p>
    <p>If cost is what has been stopping you, look hard at the
    <a href="article.html?a=fee-waivers-and-reduced-fees">reduced fee and waiver
    options</a> while they exist. The 400%-of-poverty-guidelines threshold for the $380
    reduced fee reaches further into working-household income than most people expect.</p>
    <p>Rules can still change quite a bit before they become final, so we will post
    again once there is an actual final rule.</p>`,
  sources: [
    { label: 'Fragomen — DHS Proposes Significant Increase in Filing Fees for Naturalization', url: 'https://www.fragomen.com/insights/united-states-dhs-proposes-significant-increase-in-filing-fees-for-naturalization-applications-and-related-filings.html' },
    { label: 'USCIS — Fee Calculator', url: 'https://www.uscis.gov/feecalculator' }
  ]
},
{
  slug: 'supreme-court-birthright-citizenship',
  date: '2026-07-02',
  category: 'Court Ruling',
  title: 'Supreme Court upholds birthright citizenship, 6–3',
  summary: 'On June 30, 2026, the Court struck down Executive Order 14160, holding that a president cannot alter constitutional rights by executive order.',
  body: `
    <p>On <strong>June 30, 2026</strong>, the Supreme Court struck down Executive Order
    14160 by a vote of <strong>6&ndash;3</strong>. The order had sought to deny
    citizenship to U.S.-born children of undocumented parents.</p>
    <p>The Court held that the order contradicted the plain language of the
    <strong>Fourteenth Amendment</strong>, and confirmed that a president cannot change
    constitutional rights through an executive order alone.</p>
    <h3>What this settles</h3>
    <p><strong>Birthright citizenship remains in effect nationwide</strong>, exactly as
    it has for more than a century. If you are born on United States soil, you are a
    United States citizen. That is constitutional text, now reaffirmed by the Court.</p>
    <p>This is about as clear an answer as this area of law produces, and it closes a
    question that caused real fear for a year and a half &mdash; particularly for
    parents who were pregnant when the order was signed.</p>
    <h3>If you have a U.S.-born child</h3>
    <p>Nothing unusual is required. The state or county birth certificate is the proof
    of citizenship. You can apply for a U.S. passport for your child in the normal way,
    and a passport is useful documentary proof of citizenship to have on hand.</p>
    <h3>A warning</h3>
    <p>Moments like this generate scams. Nobody needs to pay anyone to "confirm",
    "restore", or "protect" a U.S.-born child's citizenship. There is no special
    registration, no fee, and no application. If someone tells you otherwise, they are
    attempting to defraud you.</p>`,
  sources: [
    { label: 'Brookings — Supreme Court upholds birthright citizenship, rejects Trump order', url: 'https://www.brookings.edu/articles/supreme-court-upholds-birthright-citizenship-rejects-trump-order/' },
    { label: 'ACLU — Supreme Court Rules to Protect Birthright Citizenship', url: 'https://www.aclu.org/news/immigrants-rights/supreme-court-rules-to-protect-birthright-citizenship-in-landmark-case' }
  ]
},
{
  slug: 'mullin-v-doe-tps',
  date: '2026-07-10',
  category: 'Court Ruling',
  title: 'Mullin v. Doe: Supreme Court limits review of TPS terminations',
  summary: 'The Court allowed TPS to end for Syria and Haiti and held that federal law generally bars judicial review of TPS decisions.',
  body: `
    <p>In <em>Mullin v. Doe</em>, decided in June 2026, the Supreme Court ruled
    <strong>6&ndash;3</strong> that the administration may cancel Temporary Protected
    Status for <strong>Syria</strong> and <strong>Haiti</strong>.</p>
    <p>The more far-reaching part of the decision is structural: the Court held that
    federal law <strong>generally bars judicial review</strong> of TPS designation and
    termination decisions. Constitutional challenges remain available.</p>
    <h3>Why this matters beyond Syria and Haiti</h3>
    <p>Until now, litigation has been the main brake on TPS terminations &mdash; the
    reason protections for several countries stayed in place well past their announced
    end dates. This decision substantially removes that brake.</p>
    <p>Practically: if TPS for your country is terminated, a lawsuit is much less likely
    to pause it. <strong>Do not plan on litigation buying you time.</strong></p>
    <h3>What to do if you hold TPS from any country</h3>
    <ul>
      <li><strong>Pursue a durable status now</strong>, while you have work
      authorization and lawful presence. Do not wait for a termination announcement.</li>
      <li><strong>Get a full screening</strong> from a nonprofit immigration program.
      The most commonly missed option among long-term TPS holders is a U.S. citizen
      child aged 21 or over petitioning for a parent.</li>
      <li><strong>Keep re-registering</strong> in every registration window.</li>
      <li><strong>Preserve your documentation</strong> &mdash; approvals, EADs, tax
      returns, proof of continuous residence.</li>
    </ul>
    <p>Advocates have turned toward Congress, since legislation is now the clearer route
    to permanent protection for long-term TPS holders.</p>`,
  sources: [
    { label: 'Supreme Court of the United States — Opinion (25-1083)', url: 'https://www.supremecourt.gov/opinions/25pdf/25-1083_f204.pdf' },
    { label: 'Haitian Bridge Alliance — Supreme Court Limits Review of TPS Terminations', url: 'https://haitianbridgealliance.org/supreme-court-limits-courts-power-to-review-tps-terminations-but-preserves-constitutional-challenges-the-fight-continues/' }
  ]
},
{
  slug: 'public-charge-rule-published',
  date: '2026-07-27',
  category: 'Policy Update',
  title: 'New public charge rule published, effective September 18',
  summary: 'DHS rescinded the 2022 public charge rule. From September 18, 2026, officers weigh all pertinent facts case by case.',
  body: `
    <p>A final rule published in the Federal Register on <strong>July 20, 2026</strong>
    rescinds the 2022 public charge rule, effective <strong>September 18, 2026</strong>.</p>
    <h3>What public charge means</h3>
    <p>Most people applying for a green card must show they are not likely to become a
    public charge &mdash; primarily dependent on government support. How
    narrowly that is assessed has swung repeatedly between administrations.</p>
    <h3>What changes</h3>
    <p>Under the 2022 rule, officers were limited to considering public
    <strong>cash</strong> assistance for income maintenance and long-term
    institutionalization at government expense. From September 18, 2026, officers are
    directed to <strong>weigh all pertinent facts</strong>, case by case.</p>
    <h3>Which rule applies to you</h3>
    <ul>
      <li>Filed <strong>before</strong> September 18, 2026 &rarr; generally reviewed
      under the 2022 rule.</li>
      <li>Filed <strong>on or after</strong> &rarr; the new framework.</li>
    </ul>
    <h3>Benefits: timing matters</h3>
    <p>This distinction is important and easy to miss:</p>
    <ul>
      <li>Benefits received <strong>before</strong> September 18, 2026 &mdash; only cash
      assistance for income maintenance and long-term institutionalization count
      against you.</li>
      <li>Benefits received <strong>on or after</strong> &mdash; any means-tested
      benefit may be considered.</li>
    </ul>
    <h3>Please do not drop benefits out of fear</h3>
    <p>Many benefits have never counted, and many people are not subject to public
    charge rules at all &mdash; including refugees, asylees, VAWA self-petitioners, and
    certain other categories. Benefits used by your children are generally not
    attributed to you.</p>
    <p>Families disenrolling from food and medical assistance they are lawfully entitled
    to, out of fear, is a recurring and avoidable harm. Get advice about your specific
    situation before giving anything up.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'chester-valley-trail-meetup',
  date: '2026-08-09',
  category: 'Milestone',
  title: 'Come meet us in person at the Chester Valley Trail',
  summary: 'An open, in-person meetup for anyone with questions — or for anyone who just wants to say hello.',
  body: `
    <p>We are holding an <strong>in-person meetup at the Chester Valley Trail</strong>,
    open to anyone.</p>
    <p>There is no agenda and no sign-up. Come with questions about the citizenship
    process, come to talk through where you are stuck, come for test practice, or come
    just to meet the people behind the emails. Bring a friend or a family member who
    has been meaning to ask something.</p>
    <h3>Why in person</h3>
    <p>Nearly all of our work happens over email, which is efficient but has limits.
    Some things are much easier face to face: looking at a notice together and working
    out what it is actually asking for, practising spoken English and civics answers
    out loud, or talking through a worry that is hard to put in writing.</p>
    <p>There is also something to be said for discovering that other people in your
    area are working through the same process. Most of our inquiries begin with some
    version of "I don't know where to start," and it helps to learn that is the normal
    starting point rather than a personal failing.</p>
    <h3>What to bring, and what not to</h3>
    <p>Bring your questions, and bring along any notice you would like help
    reading.</p>
    <p>Please <strong>do not bring original documents</strong> you cannot replace
    &mdash; your green card, passport, or original civil records. Photocopies or phone
    photos are fine for anything we would look at together.</p>
    <p>Our usual rule holds in person as well: we will not ask for your full name, date
    of birth, or A-number, and you should not share them with us. Nothing from the
    conversation is written down or kept.</p>
    <p>The trail is public and free. If you want details, or cannot make it and would
    like to arrange another time, <a href="inquiries.html">send us an inquiry</a>.</p>`,
  sources: []
},
{
  slug: 'neighborhood-investigations-policy-manual',
  date: '2026-08-18',
  category: 'Policy Update',
  title: 'Neighborhood investigations formally added to the Policy Manual',
  summary: 'An August 25, 2026 policy alert incorporated investigations of applicants’ conduct, residence, and reputation into official guidance.',
  body: `
    <p>On <strong>August 25, 2026</strong>, USCIS issued a policy alert on
    <em>Investigations and Examinations for Naturalization Eligibility</em>, formally
    incorporating <strong>neighborhood investigations</strong> into the Policy Manual.</p>
    <p>This follows the August 2025 memorandum that revived the authority under INA
    section 335(a), dormant since 1991. Moving it into the Policy Manual makes it
    settled operating guidance rather than a memo.</p>
    <p>The guidance covers investigation of an applicant's <strong>conduct, residence,
    and reputation</strong> in the community.</p>
    <h3>What to actually do about it</h3>
    <p>The protective step is the same one that protects you against everything else in
    this process: <strong>make sure your application is accurate, and be able to prove
    it.</strong> An investigation only creates a problem if what it finds differs from
    what you wrote.</p>
    <ul>
      <li><strong>Corroborate your N-400.</strong> For each address and employer you
      listed, be able to produce a lease, a utility bill, pay stubs, or a tax document
      covering those dates.</li>
      <li><strong>Fix discrepancies before the interview</strong>, not during it. If a
      date is wrong, correct it yourself.</li>
      <li><strong>Nobody has to talk to an investigator.</strong> Your neighbours,
      landlord, and employer may decline. That is their right and it is not evidence
      against you.</li>
      <li><strong>Check credentials.</strong> Real officials carry them. No legitimate
      officer will demand payment, threaten you, or ask for your password. This
      authority is an obvious cover story for scams.</li>
    </ul>
    <p>USCIS has indicated these investigations will not occur in every case. If one
    happens in yours and you are uncertain how to respond, that is the point to consult
    an immigration attorney.</p>`,
  sources: [
    { label: 'USCIS — Investigations for Naturalization Eligibility (policy alert PDF)', url: 'https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20260825-InvestigationsForNatzEligibility.pdf' },
    { label: 'ILRC — Practice Advisory: Neighborhood Investigation', url: 'https://www.ilrc.org/sites/default/files/2026-10/10-26%20neighborhood%20investigation.pdf' }
  ]
},
{
  slug: 'ice-courthouse-arrests-struck-down',
  date: '2026-08-27',
  category: 'Know Your Rights',
  title: 'Court strikes down ICE courthouse arrest policy nationwide',
  summary: 'A federal court found the mass immigration-court arrest policy arbitrary and capricious, restoring prior limits on courthouse arrests.',
  body: `
    <p>A federal court struck down ICE's immigration-courthouse arrest policy
    <strong>nationwide</strong>, finding it arbitrary and capricious under the
    Administrative Procedure Act and restoring the pre-existing policies that barred
    courthouse arrests except in rare circumstances.</p>
    <p>The policy at issue grew out of a May 2025 internal memo directing ICE trial
    attorneys to support deportation officers by moving to dismiss immigration cases,
    enabling arrests at the courthouse. Under the ruling, officers may not conduct civil
    immigration enforcement in or near immigration courthouses except in limited
    circumstances.</p>
    <h3>Why it mattered</h3>
    <p>Being arrested for attending your own hearing creates an impossible choice:
    appear and risk detention, or skip it and get an automatic removal order. People
    stopped showing up to proceedings they were legally required to attend.</p>
    <h3>Know your rights at any courthouse appearance</h3>
    <ul>
      <li><strong>Always attend your hearing.</strong> Missing it generally produces an
      in-absentia removal order, which is far worse than any risk of attending.</li>
      <li><strong>You have the right to remain silent.</strong> You do not have to
      answer questions about where you were born, your immigration status, or how you
      entered.</li>
      <li><strong>Do not sign anything</strong> without talking to a lawyer &mdash;
      especially a document waiving your right to a hearing, such as a voluntary
      departure or stipulated removal form.</li>
      <li><strong>If detained:</strong> do not run, do not resist, do not lie. Stay
      silent and ask for your attorney.</li>
    </ul>
    <h3>Preparing</h3>
    <p>Know your immigration history, your courthouse, and your judge. Appear remotely
    if that is permitted in your case. Bring the documents you need and leave the ones
    you do not. Have a written family plan &mdash; childcare, finances, important
    documents, phone numbers &mdash; in case the worst happens.</p>`,
  sources: [
    { label: 'ACLU — Federal Court Strikes Down ICE’s Courthouse Arrest Policy Nationwide', url: 'https://www.aclu.org/press-releases/federal-court-strikes-down-ices-courthouse-arrest-policy-nationwide' }
  ]
},
{
  slug: 'oath-ceremony-voter-registration-restored',
  date: '2026-09-08',
  category: 'Policy Update',
  title: 'Nonprofits can again register voters at naturalization ceremonies',
  summary: 'A policy alert on August 12, 2026 reinstated NGO participation, and in October a court permanently voided the earlier ban.',
  body: `
    <p>USCIS rescinded its August 29, 2025 policy and reinstated guidance
    (<strong>PA-2026-11</strong>) in the Policy Manual on <strong>August 12, 2026</strong>,
    permitting nonprofit and nonpartisan organizations to participate in administrative
    naturalization ceremonies by distributing and collecting voter registration
    applications for new citizens.</p>
    <p>The 2025 policy had limited voter registration services at ceremonies to state
    and local election officials. On <strong>October 16, 2026</strong>, a court
    permanently voided that ban, and the government waived its appeal &mdash; making the
    restoration durable rather than discretionary.</p>
    <h3>Why the ceremony is the right moment</h3>
    <p>Registering immediately after the oath has long been standard practice, for a
    practical reason: the people in that room have just become eligible to vote, they
    are all together, and the barrier to registering is at its lowest it will ever be.
    Registration rates drop sharply once everyone goes home.</p>
    <h3>For organizations</h3>
    <p>NGOs wishing to provide voter registration services must submit a
    <strong>written request to the appropriate local USCIS office at least 60 days
    before the ceremony</strong>. Plan well ahead.</p>
    <h3>For new citizens</h3>
    <p>Congratulations &mdash; take the oath first, then register. If nobody is offering
    registration at your ceremony, you can register through your state election office,
    at the DMV, or by mail. Deadlines vary by state, so check yours.</p>
    <p>Guidance was also updated to clarify that the Oath of Allegiance is the final
    step of naturalization, and to add background on the oath's history.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Administrative Naturalization Ceremonies', url: 'https://www.uscis.gov/policy-manual/volume-12-part-j-chapter-5' },
    { label: 'USCIS — Voter Registration at Naturalization Ceremonies (policy alert PDF)', url: 'https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20260812-VoterRegNatzCeremonies.pdf' }
  ]
},
{
  slug: 'public-charge-rule-in-effect',
  date: '2026-09-21',
  category: 'Policy Update',
  title: 'The new public charge rule is now in effect',
  summary: 'From September 18, 2026, officers weigh all pertinent facts in public charge determinations. Your filing date decides which rule applies.',
  body: `
    <p>The new public charge framework took effect on <strong>September 18, 2026</strong>.
    USCIS issued Policy Manual guidance on August 18, 2026 explaining how officers
    should apply it.</p>
    <h3>The two things to know</h3>
    <p><strong>1. Your filing date decides your rule.</strong> Applications filed before
    September 18, 2026 are generally reviewed under the 2022 rule. Applications filed on
    or after that date fall under the new framework, in which officers are no longer
    limited to cash assistance and long-term institutionalization but weigh all
    pertinent facts case by case.</p>
    <p><strong>2. When you received a benefit matters.</strong> Benefits received before
    September 18, 2026 are assessed under the narrower standard &mdash; only cash
    assistance for income maintenance and long-term institutionalization count. Benefits
    received on or after that date may be considered more broadly, including
    means-tested benefits.</p>
    <h3>Who is not subject to public charge at all</h3>
    <p>This is the part most worth knowing, because fear here is widespread and often
    misplaced. Public charge rules do not apply to many categories, including refugees,
    asylees, VAWA self-petitioners, certain U and T visa holders, and others. If you are
    in one of these categories, benefit use does not create a public charge problem for
    you.</p>
    <h3>Please get advice before dropping benefits</h3>
    <p>Every time this rule changes, families disenroll from food assistance and medical
    coverage they are lawfully entitled to, including coverage for U.S. citizen children
    &mdash; whose benefits are generally not attributed to the parent anyway.</p>
    <p>Before giving up any benefit, talk to a nonprofit legal provider or a benefits
    counsellor about your specific situation. Going without food or medical care to
    protect a case that was never at risk is a real and preventable harm.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'denaturalization-referral-guidance',
  date: '2026-09-28',
  category: 'Policy Update',
  title: 'USCIS issues guidance on when it refers citizenship revocation cases',
  summary: 'Policy alert PA-2026-13, published September 14, 2026, sets out the circumstances and priorities for denaturalization referrals.',
  body: `
    <p>On <strong>September 14, 2026</strong>, USCIS published policy alert
    <strong>PA-2026-13</strong>, "Revocation of Naturalization Referrals," setting out
    the circumstances in which USCIS refers cases for revocation of naturalization and
    when such cases are prioritized for referral.</p>
    <p>This builds on the June 2025 DOJ memo that made denaturalization a top
    enforcement priority, and follows reporting of internal guidance seeking
    100&ndash;200 referrals per month from field offices for the remainder of FY2026.</p>
    <h3>What denaturalization requires</h3>
    <p>It is worth being clear about the limits, because the reporting has caused
    considerable anxiety among naturalized citizens:</p>
    <ul>
      <li>It is a <strong>civil court action</strong>, decided by a federal judge. An
      agency cannot revoke your citizenship by itself.</li>
      <li>The grounds are essentially about <strong>how citizenship was obtained</strong>
      &mdash; concealment of a material fact or willful misrepresentation during the
      process, or certain ineligibility that existed at the time.</li>
      <li>It is <strong>not</strong> a mechanism for revoking citizenship over conduct
      after naturalization, or over speech or political views.</li>
      <li>The government bears a heavy burden of proof.</li>
    </ul>
    <h3>What this means for you</h3>
    <p>If you naturalized and answered your application truthfully, this is not aimed at
    you. Referral guidance is not a prediction about your case.</p>
    <p>The enduring lesson is for people still applying: <strong>accuracy on the N-400
    protects you permanently.</strong> Disclose and explain rather than omit. A
    disclosed problem is usually survivable; a concealed one can follow you past the
    oath ceremony.</p>
    <p>If you ever receive notice of a denaturalization action, get an attorney
    immediately.</p>`,
  sources: [
    { label: 'USCIS — Revocation Referrals (policy alert PDF)', url: 'https://www.uscis.gov/sites/default/files/document/policy-manual-updates/20260914-RevocationReferrals.pdf' },
    { label: 'ILRC — FAQs: How Denaturalization Works', url: 'https://www.ilrc.org/community-resources/faqs-how-denaturalization-works' }
  ]
},
{
  slug: 'naturalization-backlog-813000',
  date: '2026-10-13',
  category: 'Policy Update',
  title: 'Naturalization backlog tops 813,000 as waits reach 12.7 months',
  summary: 'Processing times nearly doubled during 2026 and approvals fell sharply. Here is what to do while you wait.',
  body: `
    <p>The naturalization backlog reached <strong>813,453 pending N-400
    applications</strong> as of August 2026, with average processing time at
    <strong>12.7 months</strong> &mdash; up from just over seven months at the start of
    2026. About <strong>63%</strong> of pending cases had been waiting more than six
    months.</p>
    <p>Decisions fell steeply. USCIS approved <strong>54,974</strong> naturalization
    applications in the third quarter of FY2026, against <strong>236,924</strong> in the
    same quarter a year earlier. Roughly 71,000 applications were decided between April
    and June 2026, compared with 265,000 in the same period of 2025.</p>
    <h3>Why</h3>
    <p>Several causes compound: expanded screening and vetting requirements, adjudication
    holds through early 2026, the revival of neighborhood investigations, and the
    activation of the FBI's Next Generation Identification system, which required
    millions of archived fingerprints to be resubmitted and temporarily stopped
    adjudications.</p>
    <h3>What to do while you wait</h3>
    <ul>
      <li><strong>Keep your address current with USCIS.</strong> The most common
      self-inflicted disaster in a long wait is a missed notice leading to denial for
      abandonment. Update it with USCIS directly.</li>
      <li><strong>Renew anything that expires.</strong> A pending N-400 does not extend
      your green card. If it expires while you wait, file the I-90.</li>
      <li><strong>Keep studying.</strong> A twelve-month wait is long enough to forget
      material you had learned.</li>
      <li><strong>Check your case and the posted times</strong> for your field office,
      which vary enormously.</li>
      <li><strong>Escalate if you are beyond the posted time:</strong> a service
      request, the USCIS Ombudsman, and a congressional inquiry. All free.</li>
    </ul>
    <p>If your case has gone quiet and you are unsure whether that is normal,
    <a href="inquiries.html">write to us</a> &mdash; we can help you read your notices
    and find the right escalation route.</p>`,
  sources: [
    { label: 'USCIS — Check Case Processing Times', url: 'https://egov.uscis.gov/processing-times/' },
    { label: 'DHS — CIS Ombudsman', url: 'https://www.dhs.gov/topics/cis-ombudsman' }
  ]
},
{
  slug: 'ceremonies-cancelled-shutdown',
  date: '2026-10-26',
  category: 'Policy Update',
  title: 'Government shutdown cancels naturalization ceremonies nationwide',
  summary: 'From October into mid-November, ceremonies were cancelled across the country, often at the last minute.',
  body: `
    <p>From October into mid-November 2026, naturalization ceremonies were cancelled
    across the country as a result of the government shutdown &mdash; frequently at the
    last minute and without explanation.</p>
    <p>In early October 2026, Congressman Andr&eacute; Carson led <strong>26 members of
    Congress</strong> in seeking answers from USCIS about repeated ceremony
    cancellations. In some cities, field offices cancelled ceremonies citing a "lack of
    candidates" while simultaneously holding pending applications awaiting action.</p>
    <h3>What this means if it happened to you</h3>
    <p>You are approved but not yet a citizen. You cannot get a U.S. passport, register
    to vote, or petition for relatives as a citizen until you take the Oath of
    Allegiance. People had family travel for ceremonies that were cancelled the day
    before.</p>
    <h3>Practical steps</h3>
    <ul>
      <li><strong>Keep every notice</strong>, including the cancellation. It documents
      where your case stands.</li>
      <li><strong>Do not let status documents lapse.</strong> If your green card expires
      while you wait for a ceremony, renew it. Approval is not a substitute for valid
      documents.</li>
      <li><strong>Contact your congressional representative's office.</strong> This is
      precisely the casework they do, at no charge, and they were already engaged on
      this issue.</li>
      <li><strong>Watch your mail and your online case status closely</strong> for a
      rescheduled date, and keep your address current.</li>
      <li><strong>Be careful about travel.</strong> A rescheduled notice can arrive with
      little warning, and missing a ceremony creates further delay.</li>
    </ul>
    <p>If you are in this position and want help understanding your notices or writing
    to your representative, <a href="inquiries.html">send us an inquiry</a>. This is
    exactly the kind of thing we are here for.</p>`,
  sources: [
    { label: 'Rep. Carson — Seeks Answers on Canceled Naturalization Ceremonies', url: 'https://carson.house.gov/media/press-releases/rep-carson-seeks-answers-canceled-naturalization-ceremonies' }
  ]
},
{
  slug: 'filing-deadline-day-definition',
  date: '2026-10-29',
  category: 'Policy Update',
  title: 'USCIS clarifies how "day" is counted for filing deadlines',
  summary: 'Guidance effective October 23, 2026 explains how the regulatory definition of “day” applies to deadlines. Small rule, large consequences.',
  body: `
    <p>USCIS issued policy guidance, effective <strong>October 23, 2026</strong>,
    clarifying how it applies the regulatory definition of <strong>"day"</strong> to
    filing deadlines.</p>
    <p>This sounds like housekeeping. It is not, if you are the person who filed one day
    late.</p>
    <h3>Why deadline counting matters so much</h3>
    <p>Immigration deadlines are generally unforgiving, and several carry consequences
    that are difficult or impossible to undo:</p>
    <ul>
      <li><strong>Responses to requests for evidence.</strong> Late means your case is
      decided on the record as it stands &mdash; usually a denial.</li>
      <li><strong>Appeals and motions</strong>, which have short windows.</li>
      <li><strong>The asylum one-year filing deadline</strong> from arrival.</li>
      <li><strong>The I-730 two-year deadline</strong> for follow-to-join relatives.</li>
      <li><strong>TPS re-registration periods.</strong></li>
    </ul>
    <h3>Practical rules that protect you</h3>
    <ul>
      <li><strong>Read the deadline on your own notice</strong> rather than relying on a
      general rule. The notice governs.</li>
      <li><strong>File early, not on the last day.</strong> Aim for a week ahead. This
      single habit prevents most deadline disasters.</li>
      <li><strong>Keep proof of filing</strong> &mdash; tracked, signed-for mail, or the
      online confirmation and receipt number.</li>
      <li><strong>Watch out for weekends and federal holidays</strong>, which is exactly
      the ambiguity this guidance addresses.</li>
      <li><strong>Do not wait for complete evidence</strong> if a deadline is near. File
      what you have with an explanation rather than missing the date.</li>
    </ul>
    <p>If you have a notice and are not certain when the deadline actually falls,
    <a href="inquiries.html">ask us</a> &mdash; we will help you read it. For a missed
    deadline, talk to an attorney promptly; some have remedies, but they are
    time-sensitive too.</p>`,
  sources: [
    { label: 'USCIS Policy Manual — Updates', url: 'https://www.uscis.gov/policy-manual/updates' }
  ]
},
{
  slug: 'where-things-stand-late-2026',
  date: '2026-11-01',
  category: 'How It Works',
  title: 'Where things stand: a plain summary for anyone starting now',
  summary: 'Two years of changes, condensed. What applies to you, what does not, and what to do first.',
  body: `
    <p>If you are at the beginning of this process, the last two years of news is a lot
    to absorb. Here is the short version.</p>
    <h3>What has become harder</h3>
    <ul>
      <li><strong>Waits are much longer.</strong> N-400 processing averaged 12.7 months
      by August 2026, with a backlog over 813,000 and approvals down sharply.</li>
      <li><strong>Scrutiny is broader.</strong> Expanded vetting, social media review,
      revived neighborhood investigations, and a holistic good-moral-character
      assessment.</li>
      <li><strong>The civics test is longer</strong> for anyone filing on or after
      October 20, 2025 &mdash; 20 questions from a pool of 128, with 12 correct to pass.</li>
      <li><strong>Fees may rise steeply.</strong> A proposed rule would take the N-400 to
      $1,330 and remove fee waivers. <strong>Not yet in effect.</strong></li>
      <li><strong>TPS is far more precarious</strong>, and litigation is much less likely
      to pause a termination.</li>
    </ul>
    <h3>What has not changed</h3>
    <ul>
      <li><strong>Birthright citizenship stands.</strong> The Supreme Court confirmed it
      6&ndash;3 in June 2026.</li>
      <li><strong>The eligibility rules are the same:</strong> five years as a permanent
      resident (three if married to a citizen), continuous residence, physical presence,
      good moral character, English and civics, the oath.</li>
      <li><strong>The English standard is basic English</strong>, not fluency &mdash; and
      age-based exemptions still exist.</li>
      <li><strong>Current fees still apply</strong> until a final rule says otherwise,
      including the $380 reduced fee and waivers.</li>
      <li><strong>Honesty still protects you</strong> more than anything else.</li>
    </ul>
    <h3>What to do first</h3>
    <ol>
      <li><strong>Confirm you are eligible</strong> &mdash; count your years, your trips,
      your physical presence.</li>
      <li><strong>Build your document file</strong> before you fill in anything.</li>
      <li><strong>Check fees and the current form edition</strong> on uscis.gov the week
      you file, and apply for a reduced fee or waiver if you qualify.</li>
      <li><strong>File online if you can</strong> &mdash; it is cheaper and easier to
      track.</li>
      <li><strong>Start studying</strong> the right version of the test for your filing
      date.</li>
      <li><strong>Get a real attorney</strong> if anything in your history is
      complicated.</li>
    </ol>
    <p>And if you are not sure where you fit in any of this,
    <a href="inquiries.html">just ask us</a>. "I don't know where to start" is the most
    common message we get, and it is a perfectly good place to begin.</p>`,
  sources: [
    { label: 'USCIS — Citizenship Resource Center', url: 'https://www.uscis.gov/citizenship' },
    { label: 'USCIS — Form N-400', url: 'https://www.uscis.gov/n-400' }
  ]
},
// --- end of posts ---
];

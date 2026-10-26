import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/mental-health-and-marriage`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mental Health and Marriage: What Do You Actually Need to Discuss?",
  description:
    "What should you discuss about mental health before marriage? Therapy, medication, emotional needs, privacy and family expectations, without shame.",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: {
    "@type": "Person",
    name: "Naina Agarwal",
    url: `${SITE_URL}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "The Butterfly Effect",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
  },
  inLanguage: "en-IN",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mental Health and Marriage: What Do You Actually Need to Discuss?",
      item: POST_URL,
    },
  ],
};

export default function MentalHealthAndMarriage() {
  return (
    <>
      <Head>
        <title>Mental Health and Marriage: What to Discuss</title>
        <meta
          name="description"
          content="What should you discuss about mental health before marriage? Therapy, medication, emotional needs, privacy and family expectations, without shame."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Mental Health and Marriage: What to Discuss"
        />
        <meta
          property="og:description"
          content="What should you discuss about mental health before marriage? Therapy, medication, emotional needs, privacy and family expectations, without shame."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Mental+Health+and+Marriage%3A+What+to+Discuss`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mental Health and Marriage: What to Discuss"
        />
        <meta
          name="twitter:description"
          content="What should you discuss about mental health before marriage? Therapy, medication, emotional needs, privacy and family expectations, without shame."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Mental+Health+and+Marriage%3A+What+to+Discuss`}
        />

        <JsonLd data={blogPostingSchema} />
        <JsonLd data={breadcrumbSchema} />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--tbe-cream)",
          overflowX: "hidden",
        }}
      >
        <Navbar visible={true} />

        <main id="main-content">
        <article className="max-w-2xl mx-auto px-6 md:px-8 pt-40 pb-32">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/blog"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.82rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--tbe-warm-brown)",
                textDecoration: "none",
              }}
            >
              &larr; All Posts
            </Link>
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--tbe-warm-brown)",
              marginBottom: "1rem",
            }}
          >
            26 October 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--tbe-dark-brown)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Mental Health and Marriage: What Do You Actually Need to Discuss?
          </motion.h1>

          {/* Byline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.82rem",
              letterSpacing: "0.18em",
              color: "var(--tbe-warm-brown)",
              marginBottom: "2.5rem",
            }}
          >
            By Naina Agarwal &middot; Published 26 October 2026
          </motion.p>

          {/* Topic hub tag */}
          <p style={{ marginBottom: "2rem", marginTop: "-1.5rem" }}>
            <Link
              href="/blog/topics/getting-married"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                color: "var(--tbe-warm-brown)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(121,2,8,0.3)",
                paddingBottom: "1px",
              }}
            >
              Part of: Getting married? →
            </Link>
          </p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              height: "1px",
              background: "rgba(47,35,35,0.18)",
              marginBottom: "2.5rem",
              transformOrigin: "left",
            }}
          />

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55 }}
            className="blog-body"
          >
            <p>
              There are certain questions that come up when you&rsquo;re considering
              marriage.
            </p>
            <p>
              What do you do for a living?<br />
              Do you want children?<br />
              Where do you see yourself living in five years?<br />
              How involved do you expect our families to be?
            </p>
            <p>
              And then there are the questions that make everyone suddenly very interested
              in their chai.
            </p>
            <p>
              Have you ever been to therapy?<br />
              Do you take medication?<br />
              Have you struggled with your mental health?<br />
              What happens when you&rsquo;re not doing okay?
            </p>
            <p>
              In some families, mentioning mental health difficulties can change how a
              marriage proposal is viewed. Suddenly, something that deserves care and
              understanding becomes something to hide, explain away or defend.
            </p>
            <p>
              But here&rsquo;s the thing: mental health is relevant to relationships. It is
              not a measure of someone&rsquo;s worth or automatic suitability for marriage.
            </p>
            <p>So, what should you actually discuss with a potential partner?</p>
            <p>
              If the relationship side of this feels relevant, you can read more about{" "}
              <Link href="/therapy-for-relationship-issues">therapy for relationship issues</Link>.
            </p>

            <h2>
              1. Having a mental health condition doesn&rsquo;t tell someone everything
              about you
            </h2>

            <p>A diagnosis is not a complete description of a person.</p>
            <p>
              It doesn&rsquo;t tell someone how you treat people, whether you can
              communicate, how you handle responsibility, what you value or what kind of
              partner you might be.
            </p>
            <p>
              Likewise, not having a diagnosis doesn&rsquo;t automatically make someone
              emotionally available, self-aware or good at navigating conflict.
            </p>
            <p>
              Two people with the same diagnosis may have very different experiences, support
              needs and ways of managing their lives.
            </p>
            <p>
              So, if you or your potential partner has experienced mental health difficulties,
              try to move beyond the label.
            </p>
            <p>
              Instead of asking only, &ldquo;Do you have a mental health condition?&rdquo;,
              consider what you actually need to understand about each other&rsquo;s lives.
            </p>
            <p>For example:</p>
            <ul>
              <li>How has this experience affected your everyday life, if at all?</li>
              <li>Is it something you currently manage or receive support for?</li>
              <li>
                Are there particular circumstances in which you need additional support?
              </li>
              <li>
                Is there anything you would want a partner to understand about your
                experience?
              </li>
            </ul>
            <p>You don&rsquo;t need to turn a conversation into a clinical assessment.</p>
            <p>You&rsquo;re getting to know a person, not evaluating a case history.</p>

            <h2>2. What role does mental health care play in your life?</h2>

            <p>
              Therapy, psychiatric care and medication can be important parts of
              someone&rsquo;s life. They can also be private matters.
            </p>
            <p>
              If either of you is receiving treatment, it may be useful to discuss the
              practical aspects that could affect your shared life.
            </p>
            <p>You might ask:</p>
            <ul>
              <li>Is professional support currently part of your routine?</li>
              <li>
                Are there ongoing needs or responsibilities that could affect our plans
                together?
              </li>
              <li>How do you feel about seeking help when you need it?</li>
              <li>What are your beliefs about therapy and psychiatric medication?</li>
              <li>
                How would we respond if one of us needed additional support in the future?
              </li>
            </ul>
            <p>
              You don&rsquo;t need to exchange private therapy notes or disclose every
              detail of a treatment history.
            </p>
            <p>
              The aim is to understand what is relevant to the life you&rsquo;re considering
              building together.
            </p>
            <p>
              And if your potential partner takes medication, that fact alone does not tell
              you whether the treatment is necessary, effective or likely to affect your
              relationship. Those questions depend on the individual and, where appropriate,
              their treating clinician.
            </p>
            <p>
              Needing professional support is not a character flaw. Being able to discuss
              support needs is a useful part of understanding each other.
            </p>

            <h2>3. What happens when one of you is struggling?</h2>

            <p>
              It&rsquo;s easy to imagine how a relationship will work when both people are
              feeling well, work is manageable and life is relatively predictable.
            </p>
            <p>
              It&rsquo;s harder to know what will happen when one person is overwhelmed,
              unwell or having a difficult period.
            </p>
            <p>
              You don&rsquo;t need to predict every future situation. But you can discuss
              how you generally approach difficult times.
            </p>
            <p>Ask each other:</p>
            <ul>
              <li>When you&rsquo;re struggling, what kind of support helps you?</li>
              <li>
                Do you prefer talking, practical help, reassurance or some time to yourself?
              </li>
              <li>How do you usually communicate when you&rsquo;re overwhelmed?</li>
              <li>How would you tell your partner that you need help?</li>
              <li>
                What would you do if both of us were struggling at the same time?
              </li>
            </ul>
            <p>There are no universally correct answers.</p>
            <p>
              One person might want to talk immediately. Another might need time to process
              before having a conversation. One might appreciate practical help, while
              another might prefer to handle certain things independently.
            </p>
            <p>
              The goal is to understand these differences before assuming that your partner
              should instinctively know what to do.
            </p>
            <p>
              And remember: supporting a partner does not mean becoming responsible for
              managing their entire mental health.
            </p>
            <p>
              A relationship can provide care, reassurance and companionship. It cannot
              replace appropriate professional treatment or a wider support system when those
              are needed.
            </p>

            <h2>4. Can you disagree without making each other feel unsafe?</h2>

            <p>Conflict is not automatically a sign that a relationship is unhealthy.</p>
            <p>
              People disagree. They misunderstand each other. They sometimes react poorly
              and need to repair the interaction.
            </p>
            <p>What matters is how those moments are handled.</p>
            <p>Consider discussing:</p>
            <ul>
              <li>What happens when you feel hurt or misunderstood?</li>
              <li>
                Do you prefer to resolve disagreements immediately or take time to cool
                down?
              </li>
              <li>How do you usually apologise?</li>
              <li>What helps you feel heard during a disagreement?</li>
              <li>What behaviour would be unacceptable during an argument?</li>
            </ul>
            <p>
              You might have different conflict styles. That&rsquo;s something you can learn
              about and work through.
            </p>
            <p>
              But repeated humiliation, intimidation, threats, coercion or controlling
              behaviour should not be dismissed as a communication style or explained away
              by a mental health condition.
            </p>
            <p>
              A diagnosis does not excuse mistreating a partner. Nor does a
              partner&rsquo;s distress give someone else permission to control, threaten or
              humiliate them.
            </p>
            <p>
              You can have compassion for someone&rsquo;s difficulties while maintaining
              boundaries around how you are treated.
            </p>

            <h2>5. How much privacy will you have from each other&rsquo;s families?</h2>

            <p>
              In an arranged-marriage context, a personal conversation can quickly become a
              family conversation.
            </p>
            <p>
              Something you shared privately with your potential partner might be discussed
              with their parents, siblings or relatives before you&rsquo;ve even agreed to
              the marriage.
            </p>
            <p>
              If mental health is a sensitive subject in either family, this is worth
              discussing explicitly.
            </p>
            <p>You might ask:</p>
            <ul>
              <li>What do you consider private information in a relationship?</li>
              <li>Would you share my mental health history with your family?</li>
              <li>
                If your parents had concerns about therapy or medication, how would you
                respond?
              </li>
              <li>
                How would we handle a family member making dismissive comments about mental
                health?
              </li>
              <li>Who would we involve if one of us needed additional support?</li>
            </ul>
            <p>
              Couples can seek support from trusted people without making every personal
              detail available to everyone.
            </p>
            <p>
              It is reasonable to expect respect for your privacy. There may be situations
              involving immediate safety where outside support is necessary, but that is
              different from routinely sharing private information without permission.
            </p>
            <p>
              Marriage does not mean your personal history becomes public property.
            </p>

            <h2>6. What if your family doesn&rsquo;t understand mental health?</h2>

            <p>
              Your potential partner may have a supportive attitude towards mental health,
              while their family holds very different beliefs.
            </p>
            <p>
              Or perhaps your own family believes therapy is unnecessary, medication is
              shameful or emotional difficulties should simply be endured.
            </p>
            <p>You cannot control what every relative believes.</p>
            <p>But you can discuss how the two of you would respond to those beliefs.</p>
            <p>For example:</p>
            <ul>
              <li>
                Would you feel comfortable continuing treatment if your family disapproved?
              </li>
              <li>
                Would you expect your spouse to conceal their treatment to protect the
                family&rsquo;s reputation?
              </li>
              <li>
                How would we handle pressure to stop medication or avoid therapy?
              </li>
              <li>
                Could we make decisions about our health without requiring extended family
                approval?
              </li>
            </ul>
            <p>
              A partner doesn&rsquo;t have to agree with every choice you make to respect
              your right to seek appropriate care.
            </p>
            <p>
              If someone expects you to abandon treatment solely because it makes them
              uncomfortable, that deserves serious discussion.
            </p>
            <p>
              You should not have to choose between being accepted into a family and being
              allowed to look after your health.
            </p>

            <h2>7. What are you expected to disclose before marriage?</h2>

            <p>This is often the most complicated question.</p>
            <p>
              Some people fear that sharing a mental health history will lead to rejection.
              Others worry that not sharing enough will be interpreted as dishonesty later.
            </p>
            <p>
              There isn&rsquo;t one universal disclosure script that works for every person
              and situation.
            </p>
            <p>
              You are entitled to privacy. You do not need to disclose every thought, past
              experience, therapy conversation or personal detail to someone you have only
              recently met.
            </p>
            <p>
              As the relationship progresses towards marriage, however, it is important to
              discuss information that is materially relevant to your shared life.
            </p>
            <p>
              Depending on the circumstances, that might include ongoing support needs,
              significant treatment commitments or health-related considerations that could
              affect shared responsibilities and decisions.
            </p>
            <p>You might reflect on:</p>
            <ul>
              <li>
                Is this information relevant to our current plans or future
                responsibilities?
              </li>
              <li>
                Is there something my partner reasonably needs to understand to make an
                informed decision?
              </li>
              <li>
                Am I choosing privacy because I am not ready to share, or am I concealing
                something because I fear the consequences?
              </li>
              <li>What would I want to understand if our positions were reversed?</li>
            </ul>
            <p>
              You can share information gradually as trust develops. You can also seek
              professional advice if you are unsure how to navigate a complex health or
              disclosure question.
            </p>
            <p>
              The aim is not to create a rule that everyone must disclose everything by a
              particular meeting.
            </p>
            <p>
              It is to approach a significant shared decision with appropriate honesty,
              respect and consideration for both people&rsquo;s ability to choose.
            </p>

            <h2>8. What if your potential partner has a mental health condition?</h2>

            <p>The same principles apply in the other direction.</p>
            <p>
              You are allowed to ask respectful questions. You are allowed to understand
              what a condition means in that person&rsquo;s life. You are allowed to
              consider whether your needs, expectations and capacities are compatible.
            </p>
            <p>
              You do not have to pretend that practical considerations don&rsquo;t matter.
            </p>
            <p>
              For example, you might need to understand how a person&rsquo;s ongoing support
              needs fit alongside work, finances, caregiving or other shared
              responsibilities.
            </p>
            <p>
              But avoid treating a diagnosis as a prediction of everything that will happen
              in the relationship.
            </p>
            <p>
              Instead of asking, &ldquo;Can I marry someone with this diagnosis?&rdquo;,
              consider asking:
            </p>
            <ul>
              <li>What is their experience of this condition?</li>
              <li>How do they understand and manage it?</li>
              <li>What support do they have?</li>
              <li>What might they need from a partner?</li>
              <li>What support would I feel comfortable providing?</li>
              <li>Are we able to discuss these questions without shame or pressure?</li>
            </ul>
            <p>
              You are not obligated to become someone&rsquo;s therapist, and you are not
              required to ignore your own limits.
            </p>
            <p>
              Equally, someone is not automatically unsuitable for marriage because they
              have needed mental health care.
            </p>
            <p>
              The decision deserves to be based on the person, the relationship, the
              circumstances and the choices available to both people&mdash;not a label alone.
            </p>

            <h2>9. What if one of you struggles after marriage?</h2>

            <p>
              This is worth considering because mental health can change over time.
            </p>
            <p>
              Someone who is doing well now may experience difficulties in the future.
              Someone who has struggled in the past may be doing well for a long time.
            </p>
            <p>No premarital conversation can guarantee what will happen.</p>
            <p>
              What you can discuss is how you would approach unexpected difficulties.
            </p>
            <p>
              Would you be willing to seek professional support if necessary? Could you talk
              about changing needs? How would you handle responsibilities if one person
              temporarily needed more help? What would happen if the situation became
              difficult for both of you?
            </p>
            <p>
              These questions are not about predicting illness or making someone promise
              that they will never struggle.
            </p>
            <p>
              They are about understanding how each of you approaches uncertainty,
              responsibility and support.
            </p>
            <p>A useful question is:</p>
            <p>
              When life becomes more difficult than either of us expected, can we talk about
              what is happening and work out what support is needed?
            </p>
            <p>You don&rsquo;t need to have every answer today.</p>
            <p>
              You do need to know whether the other person is willing to have the
              conversation.
            </p>

            <h2>10. Pay attention to how they respond, not just what they say.</h2>

            <p>Someone may tell you that they are supportive of mental health care.</p>
            <p>That is a useful starting point. It is not the whole picture.</p>
            <p>
              Notice how they respond when you express a preference they don&rsquo;t share.
              What happens when you ask for privacy? How do they talk about people who seek
              therapy? Can they acknowledge something they don&rsquo;t understand without
              immediately judging it?
            </p>
            <p>Also notice your own responses.</p>
            <p>
              Can you listen to their concerns without assuming that every question is an
              attack? Can you communicate your needs without expecting them to read your
              mind? Can you respect their privacy while asking for information relevant to
              your shared future?
            </p>
            <p>
              You don&rsquo;t need to evaluate someone based on a single imperfect
              conversation. People may need time to understand something unfamiliar.
            </p>
            <p>
              Look for the broader pattern: curiosity, respect, accountability, boundaries
              and a willingness to learn.
            </p>
            <p>
              Those qualities matter far more than whether someone knows exactly what to say
              in every conversation about mental health.
            </p>

            <h2>Before you say yes, ask yourself:</h2>

            <ul>
              <li>
                Can we talk about mental health without treating it as a source of shame?
              </li>
              <li>Do we understand each other&rsquo;s relevant needs and expectations?</li>
              <li>
                Can we discuss therapy, medication and professional support respectfully?
              </li>
              <li>Do we agree about privacy and family involvement?</li>
              <li>Can we disagree without threats, humiliation or coercion?</li>
              <li>Are we both willing to seek appropriate support if we need it?</li>
              <li>
                Can we recognise each other&rsquo;s limits without treating those limits as
                a lack of love?
              </li>
            </ul>
            <p>
              You do not need to turn these questions into a formal interview. They are
              conversations to have over time, as trust develops and the relationship becomes
              more serious.
            </p>
            <p>
              And you do not need to have identical experiences or beliefs about every aspect
              of mental health.
            </p>
            <p>
              What matters is whether you can approach differences with honesty, respect and
              a willingness to understand.
            </p>

            <h2>A final thought</h2>

            <p>You don&rsquo;t need to find someone who has never struggled.</p>
            <p>
              You don&rsquo;t need to disclose every private experience to prove that you
              are honest.
            </p>
            <p>
              And you don&rsquo;t need to accept every difficulty without question to prove
              that you are compassionate.
            </p>
            <p>
              Mental health is one part of a person&rsquo;s life. It can affect a
              relationship, sometimes significantly, but it does not tell the whole story of
              who someone is or what kind of partner they can be.
            </p>
            <p>The goal isn&rsquo;t to find a person who will never need support.</p>
            <p>
              It is to understand each other well enough to make an informed decision about
              the life you want to build together.
            </p>
            <p>
              You deserve to discuss mental health without being reduced to it. And so does
              the person you marry.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(47,35,35,0.18)",
                margin: "3rem 0",
              }}
            />

            <h2>Research note</h2>

            <p>
              Mental health stigma can influence disclosure and help-seeking, while
              autonomy, privacy and respectful communication are relevant to relationship
              decisions. However, there is no universal checklist establishing exactly what
              every person must disclose before marriage. Disclosure should be considered in
              context, with attention to privacy, informed decision-making and any needs
              relevant to shared responsibilities.
            </p>
          </motion.div>

          {/* Safety note */}
          <div className="mt-10">
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.88rem",
                color: "var(--tbe-dark-brown)",
                opacity: 0.72,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              If you&rsquo;re struggling right now, please reach out to someone you trust
              or a mental health professional. If you take prescribed medication, please
              speak to your prescriber before changing it. If you&rsquo;re in immediate
              danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources for further reading</h2>
            <ul>
              <li>
                World Health Organization (2023). Mental health: Promoting and protecting
                human rights.{" "}
                <a
                  href="https://www.who.int/news-room/q-a-detail/mental-health-promoting-and-protecting-human-rights"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.who.int/news-room/q-a-detail/mental-health-promoting-and-protecting-human-rights
                </a>
              </li>
              <li>
                Raghavan, R., Brown, B., Horne, F., &amp; Kumar, S. (2023). Stigma and
                mental health problems in an Indian context: Perceptions of people with
                mental disorders in urban, rural and tribal areas of Kerala.{" "}
                <em>International Journal of Social Psychiatry</em>, 69(2), 362&ndash;369.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9983047"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC9983047
                </a>
              </li>
              <li>
                Gnainsky, M., Roe, D., Negri-Schwartz, O., Cohen-Chazani, Y., Lavidor, M.,
                &amp; Hasson-Ohayon, I. (2025). To disclose or not to disclose: A
                systematic review of factors associated with disclosure and concealment of
                mental illnesses. <em>Clinical Psychology Review</em>, 122, 102660.{" "}
                <a
                  href="https://cris.haifa.ac.il/en/publications/to-disclose-or-not-to-disclose-a-systematic-review-of-factors-ass/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cris.haifa.ac.il/en/publications/to-disclose-or-not-to-disclose-a-systematic-review-of-factors-ass/
                </a>
              </li>
            </ul>
          </div>

          {/* Book a Session */}
          <div className="mt-10 mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("blog - mental health and marriage")}
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Book a Session &rarr;
            </a>
            <p
              className="text-sm mt-3"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.55,
                letterSpacing: "0.03em",
              }}
            >
              No pressure. Just a message to begin.
            </p>
          </div>

          {/* Author box */}
          <div
            style={{
              borderTop: "1px solid rgba(47,35,35,0.14)",
              paddingTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "0.85rem",
                color: "var(--tbe-dark-brown)",
                opacity: 0.7,
                lineHeight: 1.7,
              }}
            >
              <strong>About the author:</strong>{" "}
              <Link
                href="/about"
                style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "3px" }}
              >
                Naina Agarwal
              </Link>{" "}
              is a mental health practitioner based in Hyderabad, offering online therapy
              and counselling across India. BA Psychology, St. Francis College for Women;
              MSc Psychology, Jain University.
            </p>
          </div>
        </article>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto px-6 md:px-8 pb-12">
          <p
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.82rem",
              color: "var(--tbe-dark-brown)",
              opacity: 0.45,
              fontStyle: "italic",
              letterSpacing: "0.01em",
            }}
          >
            This article is for general educational purposes and is not a substitute for
            individual assessment or treatment.
          </p>
        </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

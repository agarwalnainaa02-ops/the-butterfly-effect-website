import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/good-wife-good-husband-expectations`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "What Does Being a Good Wife—or a Good Husband—Actually Mean to You?",
  description:
    "Good wife, good husband: whose job description is it? Explore inherited expectations, adjustment and what a fair partnership means to you.",
  datePublished: "2026-10-26",
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
      name: "What Does Being a Good Wife—or a Good Husband—Actually Mean to You?",
      item: POST_URL,
    },
  ],
};

export default function GoodWifeGoodHusbandExpectations() {
  return (
    <>
      <Head>
        <title>What Does Being a Good Wife or Husband Mean to You?</title>
        <meta
          name="description"
          content="Good wife, good husband: whose job description is it? Explore inherited expectations, adjustment and what a fair partnership means to you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="What Does Being a Good Wife or Husband Mean to You?"
        />
        <meta
          property="og:description"
          content="Good wife, good husband: whose job description is it? Explore inherited expectations, adjustment and what a fair partnership means to you."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=What+Does+Being+a+Good+Wife+or+Husband+Mean+to+You%3F`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What Does Being a Good Wife or Husband Mean to You?"
        />
        <meta
          name="twitter:description"
          content="Good wife, good husband: whose job description is it? Explore inherited expectations, adjustment and what a fair partnership means to you."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=What+Does+Being+a+Good+Wife+or+Husband+Mean+to+You%3F`}
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
                opacity: 0.72,
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
              opacity: 0.72,
              marginBottom: "1rem",
            }}
          >
            26 October 2026
          </motion.p>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--tbe-dark-brown)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            What Does Being a Good Wife&mdash;or a Good Husband&mdash;Actually Mean to
            You?
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
              opacity: 0.65,
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
                opacity: 0.72,
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
              Somewhere between childhood weddings, family WhatsApp groups and unsolicited
              advice from relatives, most of us have acquired a fairly detailed job
              description for marriage.
            </p>
            <p>
              A good wife is understanding. She adjusts. She respects his family. She knows
              how to keep a home running. Ideally, she does all this while maintaining a
              career, looking good, being emotionally available and never making anyone
              uncomfortable.
            </p>
            <p>
              A good husband is responsible. He provides. He protects. He takes care of his
              family. He makes decisions. He is emotionally available, but not too emotional.
              He is ambitious, but always available. He is a partner, a provider, a son, a
              brother and, occasionally, a human being who would also like to sit quietly
              without being asked to fix something.
            </p>
            <p>Notice anything?</p>
            <p>
              We have a whole list of expectations for the people we marry. But how often do
              we stop and ask whether these are expectations we personally agree
              with&mdash;or simply the ones we grew up hearing?
            </p>
            {/* TODO: once the marriage posts are live, add one-line contextual links to the other marriage posts. Also link the Indian families service page once live. */}

            <h2>Who wrote the job description?</h2>

            <p>Try finishing these sentences:</p>
            <ul>
              <li>A good wife should always&hellip;</li>
              <li>A good husband should never&hellip;</li>
              <li>In a marriage, it is the woman&rsquo;s responsibility to&hellip;</li>
              <li>In a marriage, it is the man&rsquo;s responsibility to&hellip;</li>
              <li>
                If my spouse disagrees with my parents, I would expect them to&hellip;
              </li>
              <li>
                If my career required a major change in our routine, I would expect my
                partner to&hellip;
              </li>
            </ul>
            <p>
              Now ask yourself a slightly uncomfortable question: Where did these answers
              come from?
            </p>
            <p>
              Your parents? Your relatives? Religious or cultural beliefs? Movies? Things
              you have watched happen in other marriages? Or experiences that have genuinely
              helped you understand what makes a relationship work?
            </p>
            <p>
              There is nothing automatically wrong with inheriting values from your family.
              We all learn about relationships somewhere. The important part is being able
              to examine those values instead of treating them as instructions that cannot
              be questioned.
            </p>
            <p>A belief can be familiar without being right for you.</p>
            <p>
              And a belief can be important to you without being a universal rule for
              everyone else.
            </p>

            <h2>The problem with &ldquo;adjustment&rdquo;</h2>

            <p>
              Adjustment is often described as an essential part of marriage. And, to be
              fair, two people building a life together will need to negotiate differences.
            </p>
            <p>
              You may have different routines, communication styles, spending habits,
              preferences about socialising and ideas about how often to visit family.
              Nobody is going to find a partner who arrives with identical settings.
            </p>
            <p>
              But adjustment is not the same as one person repeatedly making themselves
              smaller so that the other person&rsquo;s life can continue exactly as before.
            </p>
            <p>
              If one person changes their career plans, social life, living arrangements,
              relationship with their family and daily routine after marriage, while the
              other person changes approximately nothing, calling it &ldquo;compromise&rdquo;
              doesn&rsquo;t make the arrangement equal.
            </p>
            <p>
              Research using India&rsquo;s 2019 Time Use Survey found substantial gender
              differences in unpaid domestic and care work. A 2024 analysis reported that
              women spent, on average, a little over three additional hours per day on
              unpaid housework compared with men in the data examined.
            </p>
            <p>
              This doesn&rsquo;t describe every household, and it doesn&rsquo;t tell us
              what any particular couple will do. It does, however, give us a reason to
              discuss the division of work before marriage instead of assuming it will
              somehow sort itself out.
            </p>
            <p>
              Because apparently, love does not automatically teach a person how to notice
              that the kitchen exists.
            </p>

            <h2>What does being a good partner look like?</h2>

            <p>
              Instead of asking only whether you will be a good wife or husband, consider
              what you believe both partners owe each other.
            </p>
            <p>Can both people disagree without being punished for it?</p>
            <p>
              Can either person say no without being made to feel guilty, frightened or
              ungrateful?
            </p>
            <p>
              Can both have careers, friendships, interests and identities outside the
              marriage?
            </p>
            <p>
              When household work needs doing, will one person be expected to notice, plan
              and delegate while the other waits for instructions?
            </p>
            <p>
              Can both people talk about money, intimacy, family expectations and difficult
              feelings without the conversation becoming a test of loyalty?
            </p>
            <p>
              Can you acknowledge that your partner&rsquo;s experience may be different
              from yours without immediately deciding that one of you must be wrong?
            </p>
            <p>
              These are not questions with one universally correct answer. Couples can make
              different arrangements and still build healthy relationships. One partner may
              genuinely prefer managing the home; another may want to take on more paid
              work. What matters is whether the arrangement is freely chosen, discussed
              honestly and open to reconsideration&mdash;not simply assigned according to
              gender.
            </p>
            <p>
              Research on autonomy in romantic relationships suggests that feeling able to
              act from one&rsquo;s own values, rather than from pressure or control, is
              associated with more constructive responses to conflict and relationship
              satisfaction. Autonomy does not mean doing whatever you want regardless of
              your partner. It means being able to participate in the relationship as a
              person with a voice.
            </p>
            <p>
              That is rather different from being a very efficient supporting character in
              somebody else&rsquo;s life.
            </p>

            <h2>What if your expectations are traditional?</h2>

            <p>
              Traditional does not automatically mean unhealthy. Modern does not
              automatically mean fair.
            </p>
            <p>
              You may want a marriage where one person earns more, where family is closely
              involved, where religious practices are important or where both partners have
              clearly defined roles. Those preferences are yours to explore.
            </p>
            <p>The useful questions are:</p>
            <ul>
              <li>Is this what I want, or what I have been told I should want?</li>
              <li>
                Would I still consider this arrangement fair if our roles were reversed?
              </li>
              <li>
                Can we discuss the arrangement without one person being labelled selfish,
                disrespectful or insufficiently committed?
              </li>
              <li>What happens if our circumstances change?</li>
              <li>Do both of us have a meaningful say in the life we are building?</li>
            </ul>
            <p>
              A role is not necessarily a problem. An unquestionable role, imposed on
              someone who cannot safely refuse it, is a different matter.
            </p>

            <h2>Before you get married, ask yourself this</h2>

            <p>
              Don&rsquo;t only ask, &ldquo;Will I be a good wife?&rdquo; or &ldquo;Will I
              be a good husband?&rdquo;
            </p>
            <p>Ask:</p>
            <p>
              What kind of partner do I want to be&mdash;and what kind of partnership am I
              willing to build?
            </p>
            <p>
              You are allowed to care about family, commitment, responsibility and
              tradition. You are also allowed to want rest, privacy, independence,
              affection, ambition and a life that feels like your own.
            </p>
            <p>
              The point isn&rsquo;t to enter marriage without expectations. It&rsquo;s to
              know which expectations you are choosing, which ones you need to negotiate and
              which ones you have never actually agreed to.
            </p>
            <p>Because marriage is a relationship, not a performance review.</p>
            <p>
              And neither of you should have to spend the rest of your life trying to earn
              the title of &ldquo;good spouse&rdquo; according to a job description nobody
              bothered to discuss.
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
              If you feel unsafe at home or in a relationship, please reach out to someone
              you trust. If you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources</h2>
            <ul>
              <li>
                Exploring Time Use Patterns and Influences on Unpaid Work: Findings from
                the 2019 Indian Time Use Survey (2024).{" "}
                <a
                  href="https://www.researchgate.net/publication/382383784_Exploring_Time_Use_Patterns_and_Influences_on_Unpaid_Work_Findings_from_the_2019_Indian_Time_Use_Survey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.researchgate.net/publication/382383784_Exploring_Time_Use_Patterns_and_Influences_on_Unpaid_Work_Findings_from_the_2019_Indian_Time_Use_Survey
                </a>
              </li>
              <li>
                Knee, C. R., Lonsbary, C., Canevello, A., &amp; Patrick, H. (2005).
                Self-determination and conflict in romantic relationships.{" "}
                <em>Journal of Personality and Social Psychology</em>, 89(6), 997&ndash;1009.{" "}
                <a
                  href="https://doi.org/10.1037/0022-3514.89.6.997"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1037/0022-3514.89.6.997
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
              onClick={() => trackWhatsApp("blog - good wife good husband")}
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

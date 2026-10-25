import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/partner-or-family-fit-arranged-marriage`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Are You Looking for a Partner—or Someone Who Fits Into Your Family?",
  description:
    "In an arranged marriage, are you choosing a partner or someone who fits your family? Explore compatibility, adjustment, family roles and consent.",
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
      name: "Are You Looking for a Partner—or Someone Who Fits Into Your Family?",
      item: POST_URL,
    },
  ],
};

export default function PartnerOrFamilyFitArrangedMarriage() {
  return (
    <>
      <Head>
        <title>Arranged Marriage: Looking for a Partner or a Family Fit?</title>
        <meta
          name="description"
          content="In an arranged marriage, are you choosing a partner or someone who fits your family? Explore compatibility, adjustment, family roles and consent."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Arranged Marriage: Looking for a Partner or a Family Fit?"
        />
        <meta
          property="og:description"
          content="In an arranged marriage, are you choosing a partner or someone who fits your family? Explore compatibility, adjustment, family roles and consent."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Arranged+Marriage%3A+Looking+for+a+Partner+or+a+Family+Fit%3F`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arranged Marriage: Looking for a Partner or a Family Fit?"
        />
        <meta
          name="twitter:description"
          content="In an arranged marriage, are you choosing a partner or someone who fits your family? Explore compatibility, adjustment, family roles and consent."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Arranged+Marriage%3A+Looking+for+a+Partner+or+a+Family+Fit%3F`}
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
            Are You Looking for a Partner&mdash;or Someone Who Fits Into Your Family?
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
              In the arranged marriage process, you may be asked about education, career,
              family background, location, lifestyle, community and whether you are
              &ldquo;adjusting.&rdquo;
            </p>
            <p>
              Somewhere along the way, the potential partner can start to feel like one item
              in a much larger family decision.
            </p>
            <p>
              Will our families get along? Will they have similar values? Will this person
              fit into our lifestyle? Will they be comfortable with how things work in our
              house?
            </p>
            <p>
              These are not necessarily unreasonable questions. Marriage often brings
              families into closer contact, and family relationships can have a real impact
              on everyday life.
            </p>
            <p>But there is a question that deserves just as much attention:</p>
            <p>
              Do I want to build a life with this person, or am I mainly evaluating how
              easily they will fit into the life my family already has?
            </p>
            <p>
              Ideally, you get to consider both. The trouble begins when the second question
              quietly replaces the first.
            </p>
            {/* TODO: once the marriage posts are live, add one-line contextual links to the other marriage posts. Also link the Indian families service page once live. */}

            <h2>
              &ldquo;Our families are compatible&rdquo; is not the same as &ldquo;we are
              compatible&rdquo;
            </h2>

            <p>
              Your families may share similar backgrounds, customs, food preferences, social
              circles and ideas about how a wedding should happen.
            </p>
            <p>Wonderful. Nobody is suggesting that family compatibility is irrelevant.</p>
            <p>
              But two families agreeing on the wedding venue does not tell you whether two
              people can resolve a disagreement.
            </p>
            <p>
              Shared backgrounds do not automatically establish shared expectations about
              money, children, careers, household work, privacy or where you will live.
            </p>
            <p>
              And a person who is excellent at making a good impression at a family
              gathering may still have very different expectations of marriage behind closed
              doors.
            </p>
            <p>
              The reverse is also true: someone being different from your family does not
              automatically make them incompatible with you.
            </p>
            <p>
              The question is not whether they are a carbon copy of your household. It is
              whether the two of you can understand your differences, discuss them and make
              decisions together.
            </p>

            <h2>When &ldquo;adjustment&rdquo; only goes one way</h2>

            <p>
              Imagine a potential partner says they are happy for you to continue working
              after marriage.
            </p>
            <p>That sounds promising.</p>
            <p>
              But have you discussed what happens when your work requires late hours? Who
              takes responsibility for household tasks? What if you receive an opportunity
              in another city? What if you want to study further? What if your work becomes
              financially more successful than theirs?
            </p>
            <p>
              &ldquo;I have no problem with a working wife&rdquo; is a starting point, not
              a complete conversation.
            </p>
            <p>
              Similarly, saying that a husband will be &ldquo;supported&rdquo; by his wife
              may sound positive until support is understood to mean that she must organise
              her life around his career, manage his family&rsquo;s expectations and absorb
              the inconvenience whenever his priorities take precedence.
            </p>
            <p>
              The practical details matter because people can sincerely believe in equality
              while carrying very different assumptions about what equality looks like on an
              ordinary Tuesday.
            </p>
            <p>
              Research from India shows that unpaid domestic and care work is distributed
              unequally between women and men. Research examining the position of
              daughters-in-law has also found differences in domestic work and participation
              in paid employment compared with unmarried daughters in similar households.
              These findings do not mean every family follows the same pattern. They do show
              why it is worth discussing how family expectations become everyday
              responsibilities.
            </p>

            <h2>
              You are marrying a person, not applying for a vacancy
            </h2>

            <p>
              Sometimes, marriage conversations begin to sound suspiciously like
              recruitment.
            </p>
            <p>
              Must be family-oriented. Must be ambitious. Must be respectful. Must be
              willing to adjust. Must fit in with the family. Must have no inconvenient
              preferences that require anyone else to reconsider their routine.
            </p>
            <p>And, of course, must be &ldquo;modern but traditional.&rdquo;</p>
            <p>
              Which is a fascinating requirement, given that nobody has supplied a job
              description for what that means.
            </p>
            <p>
              It is reasonable to have preferences and non-negotiables. The problem is when
              one person is expected to prove their suitability while the other
              person&rsquo;s life, habits and family expectations are treated as the default
              setting.
            </p>
            <p>A more useful conversation goes both ways.</p>
            <p>
              What would you expect your partner to change after marriage? What would you be
              willing to change yourself? Which family traditions are important to you?
              Which are optional? What decisions belong to the couple? What role do you
              expect parents to have in those decisions?
            </p>
            <p>
              And perhaps the most revealing question: If your family disagreed with a
              decision you made together, what would happen next?
            </p>
            <p>
              Not what you hope would happen in an ideal world. What would actually happen?
            </p>

            <h2>What role will your families have in your marriage?</h2>

            <p>
              Close family relationships can be a source of support, belonging and practical
              help. Involving parents in decisions can also be a meaningful preference for
              some couples.
            </p>
            <p>There is no single correct level of family involvement.</p>
            <p>
              But there is a difference between involving family and giving family members
              the final say over decisions that fundamentally belong to the couple.
            </p>
            <p>
              Will you make decisions about where to live together? Can either partner speak
              privately with their spouse? Will parents have access to personal information
              about your relationship, finances or health? What happens if one partner needs
              a boundary with the other&rsquo;s family?
            </p>
            <p>
              You do not need to treat every family suggestion as interference. You do need
              to know whether you and your potential partner can make decisions together
              when family members have different opinions.
            </p>
            <p>
              Research on marriage decision-making in India has linked differences in young
              women&rsquo;s participation in marriage decisions with differences in several
              measures of agency and autonomy. The findings come from particular populations
              and should not be applied indiscriminately to all arranged marriages. They do,
              however, reinforce an important distinction: family involvement and meaningful
              personal consent are not the same thing.
            </p>
            <p>
              An arranged introduction can lead to a freely chosen relationship. A love
              marriage can still involve pressure and control. The label alone does not tell
              you whether both people have a genuine say.
            </p>

            <h2>Questions worth asking before you say yes</h2>

            <p>
              Try moving beyond &ldquo;Will your family like me?&rdquo; and ask:
            </p>
            <ul>
              <li>What decisions do you expect us to make together?</li>
              <li>What decisions do you expect your parents to make?</li>
              <li>
                If your family and I disagree, how would you handle it?
              </li>
              <li>What does respecting your parents mean to you in practice?</li>
              <li>
                What would you expect me to adjust to after marriage? What would you be
                willing to adjust to?
              </li>
              <li>
                How do you imagine household responsibilities being divided?
              </li>
              <li>
                What would happen if one of us wanted a different living arrangement?
              </li>
              <li>
                Are there expectations about my career, clothing, friendships, travel or
                relationship with my own family that I should know about?
              </li>
              <li>
                If we disagree about a family decision, can we discuss it privately and
                decide together?
              </li>
            </ul>
            <p>
              You are not looking for answers that sound impressive. You are looking for
              answers you can examine, clarify and compare with how the person actually
              behaves.
            </p>

            <h2>The question underneath all the questions</h2>

            <p>
              It is understandable to want your family to be happy with your choice. Their
              concerns may come from love, experience or a genuine wish to protect you.
            </p>
            <p>
              But family approval cannot tell you everything you need to know about the
              person you will be sharing your daily life with.
            </p>
            <p>
              You are allowed to consider family compatibility. You are also allowed to ask
              whether you feel comfortable, respected, interested and free to be yourself
              with the person sitting across from you.
            </p>
            <p>
              The goal is not to find someone who fits into your family without creating a
              single inconvenience. It is to find out whether the two of you can build a
              life that makes room for both of you&mdash;and work out how your families will
              fit into it.
            </p>
            <p>
              Because a marriage is not successful simply because the family group chat
              approves.
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
                Gupta, T., &amp; Negi, D. S. (2021). Daughter vs. daughter-in-law: Kinship
                roles and women&rsquo;s time use in India. IGIDR Working Paper 2021-002.{" "}
                <a
                  href="http://www.igidr.ac.in/pdf/publication/WP-2021-002.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://www.igidr.ac.in/pdf/publication/WP-2021-002.pdf
                </a>
              </li>
              <li>
                Jejeebhoy, S. J., Santhya, K. G., et al. (2013). Marriage-related
                decision-making and young women&rsquo;s marital relations and agency.{" "}
                <em>Culture, Health &amp; Sexuality</em>.{" "}
                <a
                  href="https://knowledgecommons.popcouncil.org/departments_sbsr-pgy/1198"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://knowledgecommons.popcouncil.org/departments_sbsr-pgy/1198
                </a>
              </li>
              <li>
                Jejeebhoy, S. J., et al. (2022). Marriage without meaningful consent and
                compromised agency in married life: Evidence from married girls in
                Jharkhand, India.{" "}
                <em>Journal of Adolescent Health</em>, 70(3S), S78&ndash;S85.{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/35184837/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pubmed.ncbi.nlm.nih.gov/35184837/
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
              onClick={() => trackWhatsApp("blog - partner or family fit")}
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

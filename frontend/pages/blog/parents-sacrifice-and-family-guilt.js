import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/parents-sacrifice-and-family-guilt`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "When Your Parents’ Sacrifice Becomes Your Responsibility",
  description:
    "Do you feel guilty for disappointing your parents after everything they’ve done for you? Explore family obligation, guilt, boundaries, and adult identity.",
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
      name: "When Your Parents’ Sacrifice Becomes Your Responsibility",
      item: POST_URL,
    },
  ],
};

export default function ParentsSacrificeAndFamilyGuilt() {
  return (
    <>
      <Head>
        <title>When Parents&apos; Sacrifice Becomes Guilt: Family Boundaries</title>
        <meta
          name="description"
          content="Do you feel guilty for disappointing your parents after everything they've done for you? Explore family obligation, guilt, boundaries, and adult identity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="When Parents' Sacrifice Becomes Guilt: Family Boundaries"
        />
        <meta
          property="og:description"
          content="Do you feel guilty for disappointing your parents after everything they've done for you? Explore family obligation, guilt, boundaries, and adult identity."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=When+Parents%27+Sacrifice+Becomes+Guilt`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="When Parents' Sacrifice Becomes Guilt: Family Boundaries"
        />
        <meta
          name="twitter:description"
          content="Do you feel guilty for disappointing your parents after everything they've done for you? Explore family obligation, guilt, boundaries, and adult identity."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=When+Parents%27+Sacrifice+Becomes+Guilt`}
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
            When Your Parents&rsquo; Sacrifice Becomes Your Responsibility
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
            <p>&ldquo;Humne tumhare liye itna kuch kiya hai.&rdquo;</p>
            <p>
              And just like that, a conversation about what you want becomes a presentation on
              your parents&rsquo; return on investment.
            </p>
            <p>You wanted to choose a different career. Now you&rsquo;re ungrateful.</p>
            <p>
              You said you weren&rsquo;t ready for marriage. Now you don&rsquo;t value family.
            </p>
            <p>
              You wanted to move out. Apparently, the concept of personal space has personally
              offended everyone who raised you.
            </p>
            <p>Funny? Sometimes. Exhausting? Often.</p>
            <p>
              Because when your parents have sacrificed a lot for you, wanting a life of your
              own can feel less like growing up and more like committing a moral offence.
            </p>

            <h2>When gratitude starts feeling like debt</h2>

            <p>
              Your parents may genuinely have worked hard to give you opportunities they never
              had. They may have put their needs aside, made financial sacrifices, or built their
              lives around yours.
            </p>
            <p>Those sacrifices can deserve acknowledgement.</p>
            <p>
              But appreciating what someone has done for you is not the same as agreeing to
              every expectation they have of you.
            </p>
            <p>
              Research on psychological control in parenting distinguishes between supporting a
              child&rsquo;s development and attempting to control their thoughts, feelings, or
              choices through guilt, pressure, or emotional manipulation. Psychological control
              has been associated with poorer emotional and psychological adjustment in children
              and adolescents.
            </p>
            <p>
              That doesn&rsquo;t mean every reminder of parental sacrifice is manipulation.
              Context matters. A parent expressing hurt is not automatically controlling; a
              parent repeatedly using guilt to make disagreement feel unacceptable is a different
              matter.
            </p>
            <p>
              The question isn&rsquo;t whether your parents sacrificed for you.
            </p>
            <p>
              It&rsquo;s whether those sacrifices have become a reason you&rsquo;re no longer
              allowed to make choices for yourself.
            </p>

            <h2>The family balance sheet nobody asked for</h2>

            <p>
              Somewhere along the way, the relationship can start to feel transactional.
            </p>
            <p>
              They paid for your education. So you owe them the career they approve of.
            </p>
            <p>
              They raised you. So you owe them a marriage they feel comfortable explaining to
              relatives.
            </p>
            <p>
              They supported you through difficult years. So you owe them access to every
              decision you make as an adult.
            </p>
            <p>
              Nobody may have explicitly written these terms down. Yet you may find yourself
              following them as if you&rsquo;ve signed a contract.
            </p>
            <p>
              And the most confusing part? You might love your parents deeply while resenting
              the pressure you feel around them.
            </p>
            <p>Both can be true.</p>
            <p>
              Psychology doesn&rsquo;t require us to turn people into villains before
              we&rsquo;re allowed to acknowledge that a relationship hurts.
            </p>

            <h2>Why saying no can feel so terrible</h2>

            <p>Guilt is an emotion, not a verdict.</p>
            <p>
              It can signal that we&rsquo;ve acted against our values or harmed someone. But
              guilt can also arise when we violate a rule we&rsquo;ve internalised&mdash;even
              when that rule is unfair, outdated, or no longer fits the life we&rsquo;re trying
              to build.
            </p>
            <p>
              If you&rsquo;ve learned that being a good child means being agreeable, available,
              successful, and emotionally undemanding, ordinary adult decisions may feel loaded
              with guilt.
            </p>
            <p>
              You can understand intellectually that you&rsquo;re allowed to disagree with your
              parents and still feel physically anxious when you try.
            </p>
            <p>
              That doesn&rsquo;t necessarily mean your decision is wrong. It may mean the
              decision conflicts with a familiar expectation.
            </p>
            <p>
              And if your family has treated disagreement as disrespect for years, one perfectly
              reasonable boundary probably won&rsquo;t make you feel magically liberated by
              Tuesday.
            </p>
            <p>Patterns are learned over time. Changing them can take time, too.</p>
            <p>
              If you also find yourself explaining every decision, you may recognise yourself
              in{" "}
              <Link href="/blog/why-do-i-keep-explaining-myself-to-my-parents">Why Do I Keep Explaining Myself to My Parents?</Link>
            </p>

            <h2>
              You can understand your parents without becoming responsible for every feeling they
              have
            </h2>

            <p>This is where things get complicated.</p>
            <p>
              Your parents may have grown up with limited choices themselves. They may associate
              financial security with a particular career, marriage with safety, or obedience
              with family stability. Their expectations may come from love, fear, social
              pressure, personal experience&mdash;or a combination of all four.
            </p>
            <p>Understanding that context can help you respond with empathy.</p>
            <p>
              But understanding why someone feels a certain way doesn&rsquo;t automatically make
              you responsible for resolving that feeling.
            </p>
            <p>
              You can listen to your mother&rsquo;s worries without making every decision
              designed to prevent her from worrying.
            </p>
            <p>
              You can recognise your father&rsquo;s sacrifices without choosing a life solely to
              prove that they were worth it.
            </p>
            <p>
              You can care about your family&rsquo;s reputation without making your entire
              existence a public relations exercise.
            </p>
            <p>
              Empathy asks you to consider another person&rsquo;s experience. It doesn&rsquo;t
              require you to surrender your own.
            </p>

            <h2>So, what do you actually owe your parents?</h2>

            <p>
              There isn&rsquo;t one universal answer. Family obligations vary across
              relationships, cultures, financial circumstances, and personal values.
            </p>
            <p>
              You may choose to contribute financially, provide care, spend time with your
              parents, or make compromises because these things matter to you.
            </p>
            <p>Those can be meaningful expressions of love and responsibility.</p>
            <p>
              But it&rsquo;s worth separating the responsibilities you&rsquo;ve consciously
              chosen from the expectations you&rsquo;ve never felt permitted to question.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                If I weren&rsquo;t afraid of being called selfish, would I still make this
                choice?
              </li>
              <li>
                Am I agreeing because I genuinely want to, or because I need the guilt to stop?
              </li>
              <li>
                Is this a compromise both sides are making, or am I the only one expected to
                adjust?
              </li>
              <li>
                Can I acknowledge what my parents have done for me without agreeing that they
                should decide what happens next?
              </li>
              <li>
                What kind of relationship do I want with my parents as an adult&mdash;not just
                what kind of child do I want them to see?
              </li>
            </ul>
            <p>
              You don&rsquo;t need to answer all of these questions today. And you don&rsquo;t
              need to turn every family conversation into a courtroom cross-examination.
            </p>
            <p>
              Sometimes, the first step is simply noticing that &ldquo;I don&rsquo;t want to
              disappoint them&rdquo; and &ldquo;I want to do this&rdquo; are two different
              statements.
            </p>

            <h2>Boundaries aren&rsquo;t always dramatic</h2>

            <p>The internet makes boundaries look wonderfully straightforward.</p>
            <p>
              You state your boundary. The other person respects it. You both drink water and
              continue healing.
            </p>
            <p>Real life can be considerably less cinematic.</p>
            <p>
              Especially when you live with your parents, depend on them financially, or know
              that disagreement could lead to punishment, threats, or restrictions.
            </p>
            <p>
              In those circumstances, boundaries may involve gradual changes, practical
              planning, choosing what to disclose, or seeking support before confronting a
              difficult situation. You don&rsquo;t have to take a dramatic stand to prove that
              you&rsquo;re becoming your own person.
            </p>
            <p>
              And if asserting yourself could put your safety, housing, education, or financial
              stability at risk, it&rsquo;s reasonable to plan carefully rather than act
              impulsively.
            </p>
            <p>The goal isn&rsquo;t to win an argument.</p>
            <p>
              It&rsquo;s to build a life in which your needs, preferences, and values have a
              place alongside your relationships with the people you love.
            </p>

            <h2>You are allowed to become someone your parents didn&rsquo;t plan for</h2>

            <p>
              Growing up means developing your own beliefs, preferences, relationships, and
              sense of identity. Sometimes those will align with your family&rsquo;s
              expectations. Sometimes they won&rsquo;t.
            </p>
            <p>
              Your parents can be good people who worked incredibly hard for you and still
              struggle to accept some of your choices.
            </p>
            <p>
              You can be grateful and frustrated. Loving and angry. Considerate and unwilling
              to comply.
            </p>
            <p>
              You can recognise the opportunities their sacrifices gave you without treating
              those sacrifices as a lifetime subscription to parental approval.
            </p>
            <p>
              And perhaps the hardest part is accepting that you might make a thoughtful,
              considered decision&mdash;and someone you love might still be disappointed.
            </p>
            <p>
              Their disappointment matters. But it doesn&rsquo;t automatically settle the
              question of what you should do.
            </p>
            <p>
              You can appreciate the life your parents worked to give you without having to live
              it exactly as they imagined.
            </p>
            <p>
              And no, wanting a say in your own life isn&rsquo;t a betrayal of everything
              they&rsquo;ve done for you.
            </p>
            <p>It&rsquo;s part of becoming an adult.</p>
            <p>
              For more on telling your own wants apart from inherited expectations, see{" "}
              <Link href="/blog/family-pressure-and-identity">Family Pressure and Identity: How Do You Know What You Actually Want?</Link>
            </p>
            <p>
              If you&rsquo;re trying to understand where family expectations end and your own
              identity begins, therapy can offer space to explore that tension without reducing
              the conversation to either &ldquo;obey your parents&rdquo; or &ldquo;cut them
              off.&rdquo;
            </p>
            <p>Because sometimes the work isn&rsquo;t learning how to stop loving your family.</p>
            <p>It&rsquo;s learning how to remain a person within it.</p>
            {/* TODO: link to the Indian families service page once it is live. */}
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
              If speaking up at home could put your safety at risk, please reach out to someone
              you trust. If you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources</h2>
            <ul>
              <li>
                Barber, B. K. (1996). Parental psychological control: Revisiting a neglected
                construct. <em>Child Development</em>, 67(6), 3296&ndash;3319.{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/9071782/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pubmed.ncbi.nlm.nih.gov/9071782/
                </a>
              </li>
              <li>
                Chyung, Y. J., Lee, Y. A., Ahn, S. J., &amp; Bang, H. S. (2022). Associations
                of perceived parental psychological control with depression, anxiety in children
                and adolescents: A meta-analysis. <em>Marriage &amp; Family Review</em>,
                58(2), 158&ndash;197.{" "}
                <a
                  href="https://scholarworks.sookmyung.ac.kr/handle/2020.sw.sookmyung/145873"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scholarworks.sookmyung.ac.kr/handle/2020.sw.sookmyung/145873
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
              onClick={() => trackWhatsApp("blog - parents sacrifice and guilt")}
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
              is a mental health practitioner based in Hyderabad, offering online therapy and
              counselling across India. BA Psychology, St. Francis College for Women; MSc
              Psychology, Jain University.
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

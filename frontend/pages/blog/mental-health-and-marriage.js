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
    "Considering marriage? Here's how to approach conversations about mental health, therapy, medication, emotional needs and privacy without shame or pressure.",
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
          content="Considering marriage? Here's how to approach conversations about mental health, therapy, medication, emotional needs and privacy without shame or pressure."
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
          content="Considering marriage? Here's how to approach conversations about mental health, therapy, medication, emotional needs and privacy without shame or pressure."
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
          content="Considering marriage? Here's how to approach conversations about mental health, therapy, medication, emotional needs and privacy without shame or pressure."
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
              There are a few questions that come up in the process of getting married.
            </p>
            <p>
              What do you do for a living?<br />
              Do you want children?<br />
              Will you live with your parents or separately?<br />
              What are your expectations from marriage?
            </p>
            <p>
              And then there are the questions people often find much harder to ask.
            </p>
            <p>
              Have you ever been to therapy?<br />
              Do you take medication?<br />
              Have you struggled with your mental health?<br />
              What happens when you&rsquo;re not doing okay?
            </p>
            <p>
              In some families, even mentioning therapy can change how a marriage proposal is
              viewed. Research from India, including a qualitative study in Kerala, has
              documented how mental health stigma can affect marriage prospects and lead people
              and families to conceal mental health difficulties. That stigma is part of the
              problem, not proof that someone is unsuitable for marriage.
            </p>
            <p>
              So, if you&rsquo;re considering marriage, what do you actually need to discuss?
            </p>
            <p>Let&rsquo;s start here.</p>
            {/* TODO: once the marriage posts are live, add one-line contextual links to /blog/questions-to-ask-partner-before-marriage and /blog/things-its-okay-to-want-in-marriage. Also link the relationships service page once live. */}

            <h2>
              1. You are not your diagnosis. But your experiences may matter in a
              relationship.
            </h2>

            <p>
              Having experienced depression, anxiety, trauma or another mental health
              difficulty does not automatically make someone a bad partner.
            </p>
            <p>
              Nor does having no diagnosis guarantee that someone will be emotionally
              available, kind or capable of handling conflict.
            </p>
            <p>
              A diagnosis tells you something about a person&rsquo;s experiences. It does not
              tell you everything about their personality, their capacity for intimacy, or how
              they will treat you.
            </p>
            <p>What matters is understanding the person beyond the label.</p>
            <p>
              If you have experienced mental health difficulties, you might consider sharing
              what feels relevant to the relationship: how it has affected your life, what
              support you currently use, what you have learned about yourself, and whether
              there are needs or circumstances a partner should understand.
            </p>
            <p>You do not have to present your history as a confession.</p>
            <p>You are having a conversation about the life you may build together.</p>

            <h2>2. Talk about what mental health looks like in everyday life.</h2>

            <p>
              Sometimes, people talk about mental health as though it exists separately from
              ordinary life.
            </p>
            <p>But its effects, when present, can show up in very ordinary places.</p>
            <p>
              Getting through a difficult week.<br />
              Managing responsibilities when you feel overwhelmed.<br />
              Asking for space after an argument.<br />
              Recognising when you need help.<br />
              Trying to communicate when you do not have the words yet.
            </p>
            <p>
              If you have experienced mental health difficulties, it may help to discuss what
              support looks like for you.
            </p>
            <p>For example:</p>
            <ul>
              <li>
                When you are struggling, do you prefer company, practical help or some time
                alone?
              </li>
              <li>
                Are there particular signs that tell you that you need additional support?
              </li>
              <li>Do you have an existing support system or professional care?</li>
              <li>
                Are there ways a partner can support you without becoming responsible for
                managing your mental health?
              </li>
              <li>
                Are there recurring difficulties that could affect shared responsibilities or
                your relationship?
              </li>
            </ul>
            <p>You do not need to predict every future difficulty. Nobody can.</p>
            <p>
              The point is to understand each other better, not to negotiate a contract
              guaranteeing that neither person will ever struggle.
            </p>

            <h2>3. Can you talk about therapy and medication without shame?</h2>

            <p>
              If either person is in therapy, takes medication, or has sought psychiatric care,
              the conversation should not automatically become an interrogation.
            </p>
            <p>
              Questions such as &ldquo;Why do you need medication?&rdquo; or &ldquo;Will you
              ever be normal?&rdquo; can turn a conversation about support into a judgement
              about someone&rsquo;s worth.
            </p>
            <p>A more useful conversation might sound like:</p>
            <ul>
              <li>
                Is mental health care something you currently use or may need in the future?
              </li>
              <li>How do you feel about seeking professional help?</li>
              <li>What are your beliefs about psychiatric medication?</li>
              <li>If one of us needed additional support, how would we approach that?</li>
              <li>
                Would either of us feel pressured to stop treatment because of family
                opinions?
              </li>
            </ul>
            <p>
              People can have genuine concerns about the practical implications of a
              partner&rsquo;s health needs. Those concerns can be discussed respectfully,
              without treating mental health care itself as a character flaw.
            </p>
            <p>
              The question is not whether someone has ever needed help. It is whether both
              people can talk honestly about their needs and make informed decisions about
              their shared life.
            </p>

            <h2>4. What does emotional support mean to each of you?</h2>

            <p>
              &ldquo;I want someone emotionally available&rdquo; sounds straightforward until
              two people realise they have completely different ideas of what emotional
              availability looks like.
            </p>
            <p>
              For one person, it might mean talking things through immediately. For another,
              it might mean having time to process before speaking.
            </p>
            <p>
              One person may want reassurance during conflict. Another may find it difficult to
              respond when emotions are intense.
            </p>
            <p>
              Neither difference automatically makes a relationship unhealthy. What matters is
              whether both people can understand those differences and work out ways of
              responding to them.
            </p>
            <p>You could ask each other:</p>
            <ul>
              <li>What helps you feel supported when you are upset?</li>
              <li>How do you usually respond when someone you love is struggling?</li>
              <li>
                What happens when you need emotional support but the other person is
                overwhelmed too?
              </li>
              <li>
                How comfortable are you apologising, repairing conflict and asking for help?
              </li>
              <li>
                What would you do if we found ourselves stuck in the same argument
                repeatedly?
              </li>
            </ul>
            <p>You are not looking for someone who always knows what to say.</p>
            <p>
              You are looking for someone who is willing to listen, learn and take
              responsibility for their part in the relationship.
            </p>
            <p>
              And, importantly, someone who expects the same willingness from you.
            </p>

            <h2>5. How much privacy will you have from each other&rsquo;s families?</h2>

            <p>
              In an arranged-marriage context, a conversation between two people can quickly
              become a conversation involving two families.
            </p>
            <p>
              That makes privacy worth discussing before marriage, particularly when it comes
              to health information.
            </p>
            <p>Consider questions such as:</p>
            <ul>
              <li>
                If one of us is struggling emotionally, who gets to know about it?
              </li>
              <li>
                Would you discuss our private disagreements or personal information with your
                parents?
              </li>
              <li>
                What happens if your family has strong opinions about therapy or medication?
              </li>
              <li>
                If one of us shares something vulnerable, can we expect it to remain private?
              </li>
              <li>
                What information do we believe is ours to share as a couple, and what should
                remain personal?
              </li>
            </ul>
            <p>
              Being married does not mean that every private detail of your partner&rsquo;s
              life becomes family information.
            </p>
            <p>
              You can involve family in decisions that affect them without giving them
              unrestricted access to your partner&rsquo;s personal history.
            </p>
            <p>
              A partner who cares about you should be able to distinguish between seeking
              support and sharing your private information without your permission.
            </p>
            <p>
              There may be situations in which involving someone else is necessary for safety.
              But ordinary vulnerability should not automatically become family news.
            </p>

            <h2>
              6. What happens when your mental health needs conflict with family expectations?
            </h2>

            <p>
              Imagine one partner is experiencing significant distress and needs time to
              recover, attend appointments or adjust their responsibilities.
            </p>
            <p>
              The family expects them to attend every function, fulfil every obligation and
              behave as though nothing is happening.
            </p>
            <p>What happens next?</p>
            <p>
              Does the couple discuss what is manageable? Does the partner offer support in
              navigating family expectations? Or is the person struggling expected to hide
              everything and carry on?
            </p>
            <p>You might discuss:</p>
            <ul>
              <li>How would we handle family pressure during a difficult period?</li>
              <li>
                Would we be able to say no to an obligation if one of us genuinely needed rest
                or support?
              </li>
              <li>
                How would we respond if a family member dismissed mental health difficulties
                as laziness or overreaction?
              </li>
              <li>
                What happens if one person&rsquo;s needs conflict with a family tradition or
                expectation?
              </li>
              <li>
                Can we make decisions together, even when our families disagree?
              </li>
            </ul>
            <p>
              These questions are not only about mental health. They are also about boundaries,
              shared responsibility and how the two of you will navigate competing
              expectations.
            </p>
            <p>You cannot predict every situation before marriage.</p>
            <p>
              But you can begin to understand whether you and your potential partner are
              willing to approach difficult situations as a team.
            </p>

            <h2>7. What should you disclose before marriage?</h2>

            <p>
              This is often the most uncomfortable question, especially when there is a fear
              that sharing something personal could end a marriage proposal.
            </p>
            <p>
              There is no single script that works for every person or every relationship.
              Disclosure depends on the information, the context, the level of trust and the
              potential implications for shared life.
            </p>
            <p>
              A systematic review of research on mental health disclosure found that the
              effects of disclosure vary across contexts. People may also choose selective
              disclosure rather than sharing everything with everyone.
            </p>
            <p>That matters because privacy and honesty are not opposites.</p>
            <p>
              You are allowed to take time before sharing deeply personal experiences. You are
              allowed to decide who has earned your trust. You are allowed to keep details of
              your therapy sessions private.
            </p>
            <p>
              At the same time, as a relationship moves towards marriage, it is important to
              discuss information that is materially relevant to the life you are planning
              together. This may include ongoing health needs, significant treatment or support
              requirements, and circumstances that could substantially affect shared
              responsibilities.
            </p>
            <p>A useful starting point is to ask yourself:</p>
            <ul>
              <li>Is this something that affects my current life in a meaningful way?</li>
              <li>
                Could it affect a shared decision or responsibility we are making?
              </li>
              <li>
                Am I withholding this because I need more time and safety, or because I am
                afraid the other person will reject me?
              </li>
              <li>
                What would I reasonably want to understand if our positions were reversed?
              </li>
            </ul>
            <p>
              You do not have to share everything in one conversation. You can have these
              discussions gradually as trust develops.
            </p>
            <p>
              If you are uncertain about what information is relevant to disclose, particularly
              where complex health or legal questions are involved, seek appropriate
              professional guidance rather than relying on a blanket rule.
            </p>
            <p>
              And remember: another person&rsquo;s response to your vulnerability can tell you
              something important about their attitudes. It does not determine your worth.
            </p>

            <h2>8. What if the other person has a mental health history?</h2>

            <p>Everything above applies to both people.</p>
            <p>
              If your potential partner tells you that they have experienced depression, take
              medication, attend therapy or have another mental health condition, you are
              allowed to have questions.
            </p>
            <p>
              You are allowed to want to understand how it affects their life. You are allowed
              to discuss the practical, emotional and financial implications of ongoing care.
              You are allowed to consider your own capacity, needs and boundaries when deciding
              whether to marry.
            </p>
            <p>
              What is not helpful is assuming that a diagnosis tells you everything you need to
              know.
            </p>
            <p>
              Instead of asking, &ldquo;Can I marry someone with a mental health
              condition?&rdquo; try asking:
            </p>
            <ul>
              <li>What does this experience look like in their life currently?</li>
              <li>How do they understand and manage it?</li>
              <li>What support do they have?</li>
              <li>What might they need from a partner?</li>
              <li>
                What would I be comfortable offering, and what would be beyond my capacity?
              </li>
              <li>
                Can we talk about this without either person feeling shamed or pressured?
              </li>
            </ul>
            <p>
              You are not required to become someone&rsquo;s therapist. Your partner is not
              required to be yours.
            </p>
            <p>
              A relationship can include mutual care while recognising that professional
              support, personal responsibility and a wider support system may also be
              necessary.
            </p>

            <h2>9. Pay attention to how the conversation feels.</h2>

            <p>
              You can prepare thoughtful questions. You can research mental health. You can
              discuss treatment, expectations and future needs.
            </p>
            <p>
              But also pay attention to what happens when the conversation becomes
              uncomfortable.
            </p>
            <p>
              Does the other person ask questions because they want to understand, or because
              they want to catch you out?
            </p>
            <p>Can they acknowledge what they do not know?</p>
            <p>
              Do they treat your experiences with respect, even when they have concerns?
            </p>
            <p>
              Can you disagree without being threatened, mocked or pressured into sharing more
              than you are ready to share?
            </p>
            <p>And are you extending the same respect to them?</p>
            <p>
              One awkward conversation does not tell you everything about a person. People may
              need time to process unfamiliar information. What matters is the broader pattern:
              whether there is room for honesty, curiosity, boundaries and repair.
            </p>
            <p>
              You are not looking for a person who responds perfectly to every difficult
              conversation.
            </p>
            <p>
              You are trying to understand whether difficult conversations can happen safely
              and honestly in this relationship.
            </p>

            <h2>10. A few things worth remembering</h2>

            <ul>
              <li>
                Having a mental health condition does not automatically make someone unsuitable
                for marriage.
              </li>
              <li>
                A diagnosis alone does not tell you how someone will behave as a partner.
              </li>
              <li>
                You can protect your privacy while having honest conversations about
                information relevant to your shared future.
              </li>
              <li>
                You are allowed to ask practical questions about treatment, support and
                responsibilities.
              </li>
              <li>
                You are not responsible for becoming your partner&rsquo;s therapist.
              </li>
              <li>
                Your partner&rsquo;s family is not automatically entitled to your private
                health information.
              </li>
              <li>
                You should not be pressured to stop treatment to make yourself more acceptable
                to a potential partner or their family.
              </li>
              <li>
                You can take time to decide what you are comfortable sharing and whom you
                trust with it.
              </li>
              <li>
                If you feel unsafe, threatened or coerced, prioritise your safety and seek
                support from someone you trust.
              </li>
            </ul>
            <p>
              Most importantly, mental health should not become another box on a marriage
              checklist, where a person is judged as either acceptable or unacceptable.
            </p>
            <p>The goal is not to find someone who has never struggled.</p>
            <p>
              It is to understand the person you are considering building a life with,
              including how you might navigate difficulty together.
            </p>
            <p>
              Because marriage will involve uncertainty, change and moments when neither of you
              knows exactly what to do.
            </p>
            <p>You deserve a relationship in which those moments can be discussed without shame.</p>
            <p>And so does the person you marry.</p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(47,35,35,0.18)",
                margin: "3rem 0",
              }}
            />

            <h2>A note on the research</h2>

            <p>
              Research on mental health disclosure suggests that decisions about sharing
              personal information are shaped by context, stigma and the anticipated response
              of others. Indian research has also documented how mental health stigma can
              affect marriage prospects and encourage concealment. These findings help explain
              why disclosure can feel particularly high-stakes in some marriage settings; they
              do not establish a universal rule about exactly what everyone must disclose or
              when.
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
              If you&rsquo;re struggling right now, please reach out to someone you trust or a
              mental health professional. If you&rsquo;re in immediate danger in India, call
              112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources for further reading</h2>
            <ul>
              <li>
                Gnainsky, M., Roe, D., Negri-Schwartz, O., Cohen-Chazani, Y., Lavidor, M.,
                &amp; Hasson-Ohayon, I. (2025). To disclose or not to disclose: A systematic
                review of factors associated with disclosure and concealment of mental
                illnesses. <em>Clinical Psychology Review</em>, 122, 102660.{" "}
                <a
                  href="https://cris.haifa.ac.il/en/publications/to-disclose-or-not-to-disclose-a-systematic-review-of-factors-ass/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cris.haifa.ac.il/en/publications/to-disclose-or-not-to-disclose-a-systematic-review-of-factors-ass/
                </a>
              </li>
              <li>
                Raghavan, R., Brown, B., Horne, F., &amp; Kumar, S. (2023). Stigma and mental
                health problems in an Indian context: Perceptions of people with mental
                disorders in urban, rural and tribal areas of Kerala.{" "}
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

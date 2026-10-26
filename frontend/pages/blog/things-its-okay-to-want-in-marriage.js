import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/things-its-okay-to-want-in-marriage`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Things That Are Okay to Want When Considering Marriage",
  description:
    "You can want attraction, emotional availability, independence and shared responsibility in an arranged marriage. Here's what you're allowed to want.",
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
      name: "Things That Are Okay to Want When Considering Marriage",
      item: POST_URL,
    },
  ],
};

export default function ThingsItsOkayToWantInMarriage() {
  return (
    <>
      <Head>
        <title>Things It&apos;s Okay to Want in a Marriage | Arranged Marriage</title>
        <meta
          name="description"
          content="You can want attraction, emotional availability, independence and shared responsibility in an arranged marriage. Here's what you're allowed to want."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Things It's Okay to Want in a Marriage | Arranged Marriage"
        />
        <meta
          property="og:description"
          content="You can want attraction, emotional availability, independence and shared responsibility in an arranged marriage. Here's what you're allowed to want."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Things+It%27s+Okay+to+Want+in+a+Marriage`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Things It's Okay to Want in a Marriage | Arranged Marriage"
        />
        <meta
          name="twitter:description"
          content="You can want attraction, emotional availability, independence and shared responsibility in an arranged marriage. Here's what you're allowed to want."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Things+It%27s+Okay+to+Want+in+a+Marriage`}
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
            Things That Are Okay to Want When Considering Marriage
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
              At some point during the arranged-marriage process, you might find yourself
              wondering whether you&rsquo;re asking for too much.
            </p>
            <p>You want someone kind. Obviously.</p>
            <p>Someone emotionally available. Reasonable.</p>
            <p>Someone you&rsquo;re attracted to. Well, looks aren&rsquo;t everything, are they?</p>
            <p>
              Someone who respects your career, understands your boundaries, communicates
              honestly, and doesn&rsquo;t expect you to become a completely different person
              after marriage.
            </p>
            <p>
              And then someone says, &ldquo;Itna sab toh nahi mil sakta. You have to
              adjust.&rdquo;
            </p>
            <p>
              Suddenly, you&rsquo;re wondering whether wanting a compatible partner makes you
              unrealistic.
            </p>
            <p>Let&rsquo;s get something straight.</p>
            <p>
              Being willing to compromise is not the same as having to abandon your preferences
              to prove you&rsquo;re marriageable.
            </p>
            <p>
              No partner will meet every expectation you have. No relationship will be free
              from conflict or disappointment. But that doesn&rsquo;t mean you should enter a
              marriage without considering what matters to you.
            </p>
            <p>
              Research on relationship functioning suggests that autonomy, communication,
              conflict management, and how partners respond to one another are important aspects
              of relationship quality. That doesn&rsquo;t mean there is one scientifically
              perfect partner&mdash;or that a checklist can guarantee a successful marriage.
            </p>
            <p>
              It does mean that the quality of a relationship involves more than whether two
              people look compatible on paper.
            </p>
            <p>So, let&rsquo;s talk about things you&rsquo;re allowed to want.</p>
            {/* TODO: once /blog/questions-to-ask-yourself-before-marriage and /blog/questions-to-ask-partner-before-marriage are live, add one-line contextual links to both. Also link the Indian families and relationships service pages once live. */}

            <h2>1. You&rsquo;re allowed to want to be attracted to your partner</h2>

            <p>
              Yes, personality matters. Yes, attraction can develop. Yes, physical appearance
              changes over time.
            </p>
            <p>
              And no, none of those statements means you must feel romantic or physical
              attraction towards someone simply because they&rsquo;re a good person.
            </p>
            <p>
              Attraction is personal. For some people, it develops gradually as emotional
              closeness grows. For others, some initial attraction matters. Neither experience
              needs to be identical.
            </p>
            <p>
              You don&rsquo;t have to justify your preferences by producing a PowerPoint
              presentation on facial symmetry.
            </p>
            <p>
              Ask yourself whether you feel some genuine interest in this person, whether
              you&rsquo;re curious about getting closer to them, and whether the thought of
              physical affection feels comfortable or appealing to you.
            </p>
            <p>You don&rsquo;t need instant fireworks.</p>
            <p>
              But you also don&rsquo;t have to convince yourself that attraction is irrelevant
              because someone ticks every other box.
            </p>
            <p>
              Someone can be a wonderful person and still not be the right romantic partner for
              you.
            </p>
            <p>That isn&rsquo;t an insult. It&rsquo;s compatibility.</p>

            <h2>2. You&rsquo;re allowed to want emotional availability</h2>

            <p>
              You might want someone who can talk about difficult things, listen without
              immediately dismissing your feelings, and acknowledge when something has hurt you.
            </p>
            <p>
              That&rsquo;s not the same as expecting your partner to read your mind, agree
              with every emotion you experience, or become your personal therapist.
            </p>
            <p>
              Emotional availability can look like being willing to have an uncomfortable
              conversation, showing curiosity about your perspective, offering support when
              you&rsquo;re struggling, and taking responsibility after a disagreement.
            </p>
            <p>
              Research on adult attachment and relationship functioning has explored how
              emotional responsiveness, security, and patterns of seeking or providing support
              relate to relationship experiences.
            </p>
            <p>You don&rsquo;t need to look for someone who never struggles with vulnerability.</p>
            <p>You can look for someone who is willing to work on it with you.</p>
            <p>
              Because &ldquo;I&rsquo;m not good at talking about feelings&rdquo; can be an
              honest starting point.
            </p>
            <p>It shouldn&rsquo;t have to be the end of every conversation about them.</p>

            <h2>3. You&rsquo;re allowed to want a life beyond your marriage</h2>

            <p>You can want a spouse and still want your friends.</p>
            <p>You can want companionship and still enjoy spending time alone.</p>
            <p>
              You can be committed to your marriage and still care about your career, hobbies,
              education, and personal ambitions.
            </p>
            <p>These things are not necessarily competing with your relationship.</p>
            <p>
              Research on autonomy in romantic relationships distinguishes between having
              personal agency and being disconnected from a partner. A close relationship can
              allow both people to feel connected while retaining a sense of individuality.
            </p>
            <p>
              In practical terms, you might want a marriage where both partners can:
            </p>
            <ul>
              <li>Maintain friendships and interests outside the relationship.</li>
              <li>Pursue education or career goals.</li>
              <li>Spend time alone without it being interpreted as rejection.</li>
              <li>
                Make ordinary personal decisions without seeking unnecessary permission.
              </li>
              <li>Grow and change without being accused of becoming a different person.</li>
            </ul>
            <p>
              You don&rsquo;t have to become less of an individual to prove that you&rsquo;re
              committed.
            </p>
            <p>
              Marriage is a shared life, not a merger in which both personalities are expected
              to dissolve into one joint account.
            </p>

            <h2>4. You&rsquo;re allowed to want a partner who respects your career</h2>

            <p>
              Perhaps you want to build a business, pursue further education, work long hours
              in a field you love, or take a career break someday.
            </p>
            <p>Whatever your plans, it&rsquo;s reasonable to discuss how they might fit into married life.</p>
            <p>
              Someone can support your career in theory while expecting you to be the one who
              adjusts whenever family responsibilities arise.
            </p>
            <p>That&rsquo;s why the practical conversation matters.</p>
            <p>
              You can want a partner who takes your ambitions seriously, discusses major
              decisions with you, and treats both people&rsquo;s professional lives as worthy
              of consideration.
            </p>
            <p>
              This doesn&rsquo;t mean every decision must be split exactly 50&ndash;50.
              Couples have different circumstances, and there may be periods when one
              person&rsquo;s needs take priority.
            </p>
            <p>It means those arrangements should be discussed rather than silently assumed.</p>
            <p>You are allowed to ask:</p>
            <ul>
              <li>Would my partner support me if I wanted to change careers?</li>
              <li>How would we approach a decision involving relocation?</li>
              <li>Would my professional ambitions be taken as seriously as theirs?</li>
              <li>
                What would happen if both of us needed to prioritise work at the same time?
              </li>
            </ul>
            <p>
              You don&rsquo;t have to prove that your career is important enough to deserve a
              place in your marriage.
            </p>
            <p>
              You do need to understand whether the person you&rsquo;re considering marrying
              can genuinely make room for it.
            </p>

            <h2>5. You&rsquo;re allowed to want shared responsibility</h2>

            <p>
              You might want a partner who cooks, cleans, plans, remembers appointments,
              notices when the household needs something, and takes responsibility without
              requiring detailed instructions.
            </p>
            <p>
              These aren&rsquo;t exclusively women&rsquo;s responsibilities. Nor are they
              exclusively men&rsquo;s.
            </p>
            <p>
              They&rsquo;re the ordinary work involved in maintaining a home and a shared life.
            </p>
            <p>
              Research on the division of household labour has examined its relationship with
              perceived fairness, relationship satisfaction, and conflict. The precise effects
              vary across couples and circumstances, but the distribution of domestic work is a
              legitimate topic to discuss before marriage.
            </p>
            <p>
              And there&rsquo;s a difference between someone who occasionally helps when asked
              and someone who considers themselves equally responsible for the household.
            </p>
            <p>
              One person shouldn&rsquo;t have to become the household manager, calendar
              administrator, meal planner, and reminder notification system simply because
              they&rsquo;re better at noticing what needs to be done.
            </p>
            <p>You can want a partner who participates in the work of your shared life.</p>
            <p>That&rsquo;s not an extravagant demand.</p>
            <p>That&rsquo;s a conversation about how the two of you intend to live.</p>
            <p>
              For more on where our ideas of a &lsquo;good spouse&rsquo; come from, see{" "}
              <Link href="/blog/good-wife-good-husband-expectations">What Does Being a Good Wife&mdash;or a Good Husband&mdash;Actually Mean to You?</Link>
            </p>

            <h2>6. You&rsquo;re allowed to want financial honesty</h2>

            <p>
              You don&rsquo;t need to marry someone who earns a particular amount simply
              because society has decided that a salary is a personality trait.
            </p>
            <p>
              But you are allowed to care about financial stability, spending habits, debt,
              saving, and how money will be managed after marriage.
            </p>
            <p>You can want transparency about significant financial commitments.</p>
            <p>
              You can want to understand whether you&rsquo;ll share expenses, maintain
              separate accounts, support family members, or make major purchases jointly.
            </p>
            <p>
              You can also want financial independence, depending on your circumstances and
              preferences.
            </p>
            <p>
              Money affects everyday decisions and long-term plans. Avoiding the subject
              because it feels awkward doesn&rsquo;t make those decisions disappear.
            </p>
            <p>
              It just means you may be making a major commitment without understanding an
              important part of the life you&rsquo;re entering.
            </p>
            <p>You don&rsquo;t need to know someone&rsquo;s entire financial history over your first coffee.</p>
            <p>
              But before marriage, you should be able to have a direct, respectful conversation
              about it.
            </p>

            <h2>7. You&rsquo;re allowed to want boundaries with your families</h2>

            <p>You can love your parents and want to remain closely involved in their lives.</p>
            <p>You can respect your in-laws and value family traditions.</p>
            <p>
              You can also want privacy, independent decision-making, and a say in where you
              live.
            </p>
            <p>These preferences can coexist.</p>
            <p>
              Family involvement looks different across households and cultures. Some couples
              prefer a joint family arrangement; others want a separate home. Some share
              finances with their parents; others maintain separate financial responsibilities.
            </p>
            <p>
              The important thing is to understand what each person expects and whether those
              expectations are compatible.
            </p>
            <p>
              You can want a spouse who is willing to discuss family disagreements, respect
              your boundaries, and make decisions about your shared life with you.
            </p>
            <p>You don&rsquo;t have to want a partner who cuts off their family.</p>
            <p>
              You can want someone who understands that being a good son or daughter and being
              a considerate spouse are responsibilities that may sometimes require negotiation.
            </p>
            <p>
              And if your family expects you to accommodate everyone automatically, you&rsquo;re
              allowed to question whether that arrangement works for you.
            </p>
            <p>
              Respecting your family doesn&rsquo;t mean every family member gets a vote on
              every decision in your marriage.
            </p>
            <p>
              More on this in{" "}
              <Link href="/blog/marriage-in-laws-family-boundaries">You&rsquo;re Not Just Marrying a Person. You&rsquo;re Negotiating a Family System.</Link>
            </p>

            <h2>8. You&rsquo;re allowed to want someone who can apologise</h2>

            <p>Not someone who never makes mistakes.</p>
            <p>Not someone who agrees with you just to keep the peace.</p>
            <p>
              Someone who can recognise when they&rsquo;ve hurt you, take responsibility for
              their actions, and participate in repairing the relationship.
            </p>
            <p>
              Relationship research has repeatedly examined how couples manage conflict, respond
              to one another, and recover after disagreements. The ability to communicate
              constructively matters because long-term relationships inevitably involve moments
              when people disappoint one another.
            </p>
            <p>An apology doesn&rsquo;t have to be a perfectly worded speech.</p>
            <p>
              It does need to involve more than saying &ldquo;sorry&rdquo; so the conversation
              can end.
            </p>
            <p>
              You can want a partner who is willing to reflect, hear your perspective, and make
              an effort to change repeated behaviours that cause harm.
            </p>
            <p>And you should be prepared to offer that same willingness in return.</p>
            <p>The goal isn&rsquo;t to find someone who is always wrong and eventually admits it.</p>
            <p>
              It&rsquo;s to build a relationship where neither person has to win every
              disagreement to feel respected.
            </p>

            <h2>9. You&rsquo;re allowed to want emotional and physical safety</h2>

            <p>
              You are allowed to want a relationship where you can disagree without being
              threatened, express discomfort without being mocked, and say no without fearing
              retaliation.
            </p>
            <p>
              You&rsquo;re allowed to expect respect for your physical boundaries, privacy,
              and personal decisions.
            </p>
            <p>
              Marriage does not eliminate your right to consent. It doesn&rsquo;t give another
              person ownership over your body, friendships, movements, or choices.
            </p>
            <p>Safety also includes recognising when behaviour crosses a line.</p>
            <p>
              Repeated intimidation, coercion, humiliation, threats, and controlling behaviour
              are not simply different communication styles.
            </p>
            <p>
              You don&rsquo;t need to be perfectly calm, endlessly patient, or exceptionally
              skilled at conflict resolution to deserve respectful treatment.
            </p>
            <p>
              And you don&rsquo;t need to wait until a situation becomes extreme before taking
              your discomfort seriously.
            </p>
            <p>Wanting to feel safe with the person you marry isn&rsquo;t asking for too much.</p>
            <p>It&rsquo;s a fundamental consideration when deciding whether to enter a relationship.</p>

            <h2>10. You&rsquo;re allowed to want someone who is curious about you</h2>

            <p>Not just your education.</p>
            <p>
              Not just your family background, salary, appearance, or whether you can cook.
            </p>
            <p>
              You can want someone who wants to know how you think, what makes you laugh, what
              you&rsquo;re passionate about, what worries you, and what kind of life you hope
              to build.
            </p>
            <p>
              Someone who asks follow-up questions instead of simply waiting for their turn to
              speak.
            </p>
            <p>Someone who remembers things you&rsquo;ve told them.</p>
            <p>
              Someone who is interested in the person you are, rather than only the role you
              might fulfil in their life.
            </p>
            <p>
              Curiosity doesn&rsquo;t guarantee compatibility, of course. But it creates
              opportunities for people to understand one another beyond their initial
              impressions.
            </p>
            <p>
              And in an arranged-marriage setting, where conversations can become focused on
              suitability and family approval, that distinction matters.
            </p>
            <p>
              You&rsquo;re not merely looking for someone who thinks you would make a good
              spouse.
            </p>
            <p>You&rsquo;re getting to know a person you may want to share your life with.</p>
            <p>You are allowed to want that process to feel human.</p>

            <h2>11. You&rsquo;re allowed to want time to decide</h2>

            <p>
              You don&rsquo;t have to know whether you want to marry someone after two
              meetings.
            </p>
            <p>
              You don&rsquo;t have to agree to a timeline because both families have become
              enthusiastic.
            </p>
            <p>
              You don&rsquo;t have to interpret uncertainty as proof that something is wrong
              with you.
            </p>
            <p>
              Some people develop a clear sense of compatibility relatively quickly. Others
              need more time and more conversations. Neither experience automatically tells you
              whether a marriage will succeed.
            </p>
            <p>
              What matters is whether you have enough information to make a considered decision
              and whether you&rsquo;re genuinely free to make it.
            </p>
            <p>
              You can want time to discuss important subjects, observe how someone
              communicates, and understand your own feelings.
            </p>
            <p>You can ask for another meeting.</p>
            <p>You can say you&rsquo;re unsure.</p>
            <p>And you can change your mind.</p>
            <p>
              A promising match doesn&rsquo;t become the right match simply because everyone
              is eager to finalise it.
            </p>

            <h2>12. You&rsquo;re allowed to say no to a good person</h2>

            <p>
              This deserves its own section because people often confuse rejecting a match with
              judging someone&rsquo;s worth.
            </p>
            <p>
              Someone can be kind, respectful, successful, and genuinely interested in you.
            </p>
            <p>Their family can be lovely.</p>
            <p>Your relatives can approve.</p>
            <p>And you can still decide that you don&rsquo;t want to marry them.</p>
            <p>
              Perhaps you don&rsquo;t feel a romantic connection. Perhaps your values differ in
              ways that matter to you. Perhaps you want different lives. Perhaps you simply
              don&rsquo;t feel ready.
            </p>
            <p>
              You don&rsquo;t have to prove that the other person is bad to justify your
              decision.
            </p>
            <p>Compatibility isn&rsquo;t a moral ranking.</p>
            <p>
              Saying no doesn&rsquo;t mean someone is inadequate. It means you don&rsquo;t
              want to make this particular commitment.
            </p>
            <p>
              And if you&rsquo;re unable to identify a dramatic reason, that doesn&rsquo;t
              automatically make your decision invalid.
            </p>
            <p>
              You can appreciate someone&rsquo;s qualities without choosing them as your
              spouse.
            </p>

            <h2>
              13. You&rsquo;re allowed to want a marriage that feels right for you&mdash;not
              just one that looks right to everyone else
            </h2>

            <p>This is where all the other questions come together.</p>
            <p>
              You might want a partner who earns less than your relatives expect but shares
              your values.
            </p>
            <p>
              You might want to live independently even when your family prefers a joint
              household.
            </p>
            <p>You might want children, or you might not.</p>
            <p>
              You might want a traditional marriage in some ways and a less traditional
              arrangement in others.
            </p>
            <p>
              You might care about religion, culture, family involvement, career ambitions, or
              personal freedom in combinations that don&rsquo;t fit anyone else&rsquo;s
              template.
            </p>
            <p>You&rsquo;re allowed to think carefully about what matters to you.</p>
            <p>
              That doesn&rsquo;t mean every preference must be accommodated, or that you
              should expect a partner to abandon their own needs. Marriage involves two people
              negotiating the lives they want to build.
            </p>
            <p>But the negotiation has to include both people.</p>
            <p>
              Your preferences aren&rsquo;t automatically unreasonable because they differ
              from your family&rsquo;s expectations.
            </p>
            <p>
              And they aren&rsquo;t automatically reasonable just because they&rsquo;re yours,
              either. You can examine them, understand where they come from, and decide which
              ones are essential and which you&rsquo;re willing to reconsider.
            </p>
            <p>You don&rsquo;t need to have every answer.</p>
            <p>You need the freedom to ask the questions.</p>
            <p>
              And when you&rsquo;re ready to ask them, here are{" "}
              <Link href="/blog/questions-to-ask-partner-before-marriage">questions to ask your potential partner</Link>.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(47,35,35,0.18)",
                margin: "3rem 0",
              }}
            />

            <h2>One last thing</h2>

            <p>
              There&rsquo;s a difference between having standards and expecting perfection.
            </p>
            <p>
              You can want emotional availability while recognising that vulnerability takes
              practice.
            </p>
            <p>
              You can want shared responsibility while accepting that the division of work may
              change over time.
            </p>
            <p>
              You can want attraction while understanding that physical appearance and desire
              can evolve.
            </p>
            <p>
              You can want independence while recognising that marriage involves
              interdependence, compromise, and shared decisions.
            </p>
            <p>The goal isn&rsquo;t to find someone who never disappoints you.</p>
            <p>
              It&rsquo;s to find someone whose values, expectations, and way of relating to
              you make a shared life feel possible&mdash;and to offer that same consideration
              in return.
            </p>
            <p>
              So the next time someone tells you that you&rsquo;re asking for too much, pause
              before assuming they&rsquo;re right.
            </p>
            <p>Ask yourself what you&rsquo;re actually asking for.</p>
            <p>Is it perfection?</p>
            <p>
              Or is it respect, compatibility, attraction, autonomy, and the opportunity to
              make an informed decision about your own future?
            </p>
            <p>Those are different things.</p>
            <p>
              You don&rsquo;t have to want less from marriage just to make the process of
              finding a partner easier for everyone else.
            </p>
            <p>
              You do have to be honest about what matters to you, open to understanding what
              matters to the other person, and willing to recognise when your lives may not fit.
            </p>
            <p>Because the point of getting married isn&rsquo;t simply to be chosen.</p>
            <p>It&rsquo;s to make a choice you can stand behind.</p>
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
              If you feel unsafe at home or in a relationship, please reach out to someone you
              trust. If you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources</h2>
            <ul>
              <li>
                Knee, C. R., Hadden, B. W., Porter, B., &amp; Rodriguez, L. M. (2013).
                Self-determination theory and romantic relationship processes.{" "}
                <em>Personality and Social Psychology Review</em>, 17, 307&ndash;324.{" "}
                <a
                  href="https://doi.org/10.1177/1088868313498000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1177/1088868313498000
                </a>
              </li>
              <li>
                Overall, N. C., &amp; McNulty, J. K. (2017). What type of communication
                during conflict is beneficial for intimate relationships?{" "}
                <em>Current Opinion in Psychology</em>, 13, 1&ndash;5.{" "}
                <a
                  href="https://doi.org/10.1016/j.copsyc.2016.03.002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1016/j.copsyc.2016.03.002
                </a>
              </li>
              <li>
                Fraley, R. C. Adult attachment theory and research: A brief overview.{" "}
                <a
                  href="https://labs.psychology.illinois.edu/~rcfraley/attachment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://labs.psychology.illinois.edu/~rcfraley/attachment
                </a>
              </li>
              <li>
                Frisco, M. L., &amp; Williams, K. (2003). Perceived housework equity, marital
                happiness, and divorce in dual-earner households.{" "}
                <em>Journal of Family Issues</em>, 24, 51&ndash;73.{" "}
                <a
                  href="https://pure.psu.edu/en/publications/perceived-housework-equity-marital-happiness-and-divorce-in-dual-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pure.psu.edu/en/publications/perceived-housework-equity-marital-happiness-and-divorce-in-dual-/
                </a>
              </li>
              <li>
                Fincham, F. D., Beach, S. R. H., &amp; Davila, J. (2004). Forgiveness and
                conflict resolution in marriage.{" "}
                <em>Journal of Family Psychology</em>, 18(1), 72&ndash;81.{" "}
                <a
                  href="https://doi.org/10.1037/0893-3200.18.1.72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1037/0893-3200.18.1.72
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
              onClick={() => trackWhatsApp("blog - okay to want in marriage")}
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

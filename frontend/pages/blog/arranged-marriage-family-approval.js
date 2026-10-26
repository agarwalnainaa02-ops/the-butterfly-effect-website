import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/arranged-marriage-family-approval`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Your Parents Approve. But Do You?",
  description:
    "Your family approves of the match, but are you ready to say yes? Explore family pressure, personal choice, compatibility and consent in arranged marriage.",
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
      name: "Your Parents Approve. But Do You?",
      item: POST_URL,
    },
  ],
};

export default function ArrangedMarriageFamilyApproval() {
  return (
    <>
      <Head>
        <title>Arranged Marriage: How to Know If You Want to Say Yes</title>
        <meta
          name="description"
          content="Your family approves of the match, but are you ready to say yes? Explore family pressure, personal choice, compatibility and consent in arranged marriage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Arranged Marriage: How to Know If You Want to Say Yes"
        />
        <meta
          property="og:description"
          content="Your family approves of the match, but are you ready to say yes? Explore family pressure, personal choice, compatibility and consent in arranged marriage."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Arranged+Marriage%3A+How+to+Know+If+You+Want+to+Say+Yes`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arranged Marriage: How to Know If You Want to Say Yes"
        />
        <meta
          name="twitter:description"
          content="Your family approves of the match, but are you ready to say yes? Explore family pressure, personal choice, compatibility and consent in arranged marriage."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Arranged+Marriage%3A+How+to+Know+If+You+Want+to+Say+Yes`}
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
            Your Parents Approve. But Do You?
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
            <p>The biodata looks good.</p>
            <p>
              The family is nice. The relatives have approved. Someone has already started
              discussing dates, and your mother has told three people that this one looks
              promising.
            </p>
            <p>Everyone seems happy.</p>
            <p>
              Except you haven&rsquo;t quite figured out how you feel about the person
              you&rsquo;re supposed to marry.
            </p>
            <p>
              You don&rsquo;t dislike them. They seem nice. The conversation was fine. Your
              families get along, your backgrounds are compatible, and there aren&rsquo;t any
              obvious reasons to say no.
            </p>
            <p>So why aren&rsquo;t you saying yes?</p>
            <p>
              Or perhaps you are saying yes, but mostly because you can&rsquo;t think of a
              good enough reason to say no.
            </p>
            <p>
              If you&rsquo;ve grown up in a family where marriage is a collective decision,
              it can be surprisingly difficult to distinguish between wanting something and
              wanting everyone to be happy with your decision.
            </p>
            <p>And that distinction deserves more attention than it gets.</p>
            {/* TODO: once the marriage posts are live, add one-line contextual links to the other marriage posts. Also link the Indian families service page once live. */}

            <h2>1. Is this what you want, or what makes sense on paper?</h2>

            <p>
              There&rsquo;s nothing inherently wrong with considering practical factors when
              choosing a partner.
            </p>
            <p>
              Shared values, financial expectations, family compatibility, career plans and
              long-term goals can all matter when you&rsquo;re deciding whether to build a
              life with someone.
            </p>
            <p>
              But a person can look excellent on paper and still not be someone you want to
              marry.
            </p>
            <p>
              Perhaps you don&rsquo;t feel comfortable around them. Perhaps your conversations
              feel like job interviews. Perhaps you can&rsquo;t imagine being yourself with
              them, or you simply need more time to know them.
            </p>
            <p>
              You don&rsquo;t have to dismiss these feelings just because the match appears
              sensible.
            </p>
            <p>Try asking yourself:</p>
            <ul>
              <li>
                If my family had no opinion about this match, would I still want to explore
                it?
              </li>
              <li>
                Am I interested in this person, or mainly reassured by their qualifications
                and family background?
              </li>
              <li>Do I feel comfortable enough to express my opinions around them?</li>
              <li>Am I curious to know them better?</li>
              <li>What, specifically, makes me want to move forward?</li>
            </ul>
            <p>You don&rsquo;t need to feel instant chemistry or certainty.</p>
            <p>
              But there is a difference between being open to discovering a connection and
              feeling obligated to manufacture one.
            </p>
            <p>
              Compatibility on paper can be a reason to get to know someone. It isn&rsquo;t
              a substitute for wanting to.
            </p>

            <h2>
              2. Are you afraid of making the wrong choice, or afraid of disappointing your
              parents?
            </h2>

            <p>These fears can feel remarkably similar.</p>
            <p>
              You might worry that rejecting a good match means you are being unrealistic.
              You might wonder whether someone better will come along. You might worry about
              wasting your parents&rsquo; time, disappointing relatives or having to explain
              yourself to everyone.
            </p>
            <p>
              When the consequences of saying no feel enormous, it can become difficult to
              hear your own preferences.
            </p>
            <p>
              Instead of asking yourself whether you want to marry this person, you may start
              asking:
            </p>
            <p>Will my parents be upset if I say no?</p>
            <p>Will everyone think I&rsquo;m too picky?</p>
            <p>What if I regret rejecting them?</p>
            <p>What if I don&rsquo;t get another proposal like this?</p>
            <p>
              These are understandable concerns, especially when marriage is treated as a
              family milestone rather than a personal decision.
            </p>
            <p>But they are different questions from whether you want this relationship.</p>
            <p>Try separating them.</p>
            <p>
              Question one: What do I think about this person and the possibility of building
              a life with them?
            </p>
            <p>
              Question two: What am I afraid will happen if I decide not to proceed?
            </p>
            <p>
              Both deserve attention. But the second question shouldn&rsquo;t quietly answer
              the first.
            </p>

            <h2>3. Do you feel free to say no?</h2>

            <p>This is one of the most important questions to consider.</p>
            <p>
              Not because you should reject a match to prove your independence, but because a
              decision is different when you know you are allowed to make either choice.
            </p>
            <p>Imagine two situations.</p>
            <p>
              In the first, your parents introduce you to someone. They like the person and
              hope things work out, but they tell you to take your time. They may be
              disappointed if you decline, but they will listen.
            </p>
            <p>
              In the second, your parents remind you how much effort they have put into the
              process. They tell you that you are being unreasonable, that the family has
              already given its word, or that rejecting the match will damage your
              reputation.
            </p>
            <p>You may eventually make the same decision in either situation.</p>
            <p>
              But the conditions under which you make it are very different.
            </p>
            <p>
              Research on marital decision-making in India has highlighted the importance of
              agency and meaningful consent, including how social and family circumstances
              can constrain young women&rsquo;s choices. Findings from particular populations
              should not be generalised to every Indian family, but they reinforce an
              important point: a decision made under pressure is not the same as a decision
              made freely.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                Can I ask for more time without being punished emotionally?
              </li>
              <li>Can I express doubts without being called ungrateful?</li>
              <li>
                Can I decline without fearing threats, humiliation or serious repercussions?
              </li>
              <li>
                Am I being given information and space to decide, or am I being pushed
                towards a decision that has already been made for me?
              </li>
            </ul>
            <p>
              You do not have to be completely free of family influence to make a meaningful
              choice. Families influence most major life decisions in some way.
            </p>
            <p>
              But you should be able to express your own wishes and have them taken
              seriously.
            </p>
            <p>
              If saying no could put your safety, housing or financial security at risk,
              think carefully about support and practical safety before confronting anyone.
              You deserve to make decisions without being threatened or harmed.
            </p>

            <h2>
              4. Are you saying yes because you like them, or because you like being chosen?
            </h2>

            <p>Being considered a good match can feel validating.</p>
            <p>
              Someone likes your background. Their family approves of you. Your parents are
              pleased. People tell you that you should be grateful to have found someone so
              suitable.
            </p>
            <p>And suddenly, declining the match can feel like rejecting something valuable.</p>
            <p>But being wanted and wanting someone are not the same experience.</p>
            <p>
              You can appreciate that a person likes you without being obligated to return
              their feelings.
            </p>
            <p>
              You can feel relieved that your family approves without interpreting that relief
              as romantic interest.
            </p>
            <p>You can be flattered by the proposal and still need more time.</p>
            <p>
              This doesn&rsquo;t mean your feelings are wrong or that you should distrust
              every positive emotion. It simply means that approval, validation and attraction
              can coexist without necessarily being the same thing.
            </p>
            <p>Ask yourself:</p>
            <p>
              If I knew this person would still think well of me if I said no, what would I
              want to do?
            </p>
            <p>It may be difficult to answer honestly. That&rsquo;s okay.</p>
            <p>
              The aim isn&rsquo;t to find a perfectly pure motivation. Most decisions involve
              several feelings at once.
            </p>
            <p>The aim is to understand which feelings are actually guiding you.</p>

            <h2>
              5. Are you waiting for a reason that is good enough to justify saying no?
            </h2>

            <p>
              Sometimes, people assume that declining a proposal requires a serious flaw.
            </p>
            <p>
              The person must be rude. There must be a major incompatibility. Something must
              be objectively wrong.
            </p>
            <p>Otherwise, why would you reject a perfectly good match?</p>
            <p>But choosing a partner is not the same as evaluating a job applicant.</p>
            <p>
              Someone can be kind, accomplished, financially stable and well-liked by your
              family without being the person you want to marry.
            </p>
            <p>
              You may not have enough in common. You may not feel comfortable. Your
              expectations for married life may differ. Or you may simply not want to proceed.
            </p>
            <p>Not every mismatch comes with a dramatic explanation.</p>
            <p>
              And not every feeling of hesitation means the person is unsuitable. Sometimes
              you need more information, more conversations or time to distinguish uncertainty
              from a genuine lack of interest.
            </p>
            <p>
              The important thing is to explore your hesitation rather than automatically
              dismiss it.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>What specifically am I uncertain about?</li>
              <li>Is there information I still need?</li>
              <li>
                Is my hesitation about this person, the idea of marriage, the timing or the
                pressure surrounding the decision?
              </li>
              <li>Would more time or another conversation help me understand my feelings?</li>
              <li>
                If I had all the time I needed, would I want to continue getting to know
                them?
              </li>
            </ul>
            <p>
              You don&rsquo;t need to invent a flaw in someone to make your own preference
              legitimate.
            </p>

            <h2>6. What if you don&rsquo;t feel a spark?</h2>

            <p>Let&rsquo;s be fair to the other side, too.</p>
            <p>
              Not everyone experiences attraction immediately. Some people feel more
              comfortable and interested as they get to know someone. Others know fairly
              quickly that they aren&rsquo;t interested.
            </p>
            <p>Neither experience is a universal rule for choosing a partner.</p>
            <p>
              A first meeting can be awkward. Both people may be nervous. The conversation
              might be overly formal because everyone knows what&rsquo;s at stake.
            </p>
            <p>
              So, if you&rsquo;re uncertain, it can help to distinguish between a lack of
              instant chemistry and a lack of willingness to explore the connection.
            </p>
            <p>You might ask:</p>
            <ul>
              <li>Do I want to have another conversation with this person?</li>
              <li>
                Did I feel able to be myself, or was I performing the version of myself I
                thought they would like?
              </li>
              <li>Am I curious about their thoughts and experiences?</li>
              <li>Do I feel comfortable enough to disagree with them?</li>
              <li>
                Is there something about the interaction that made me uncomfortable, or am I
                simply not sure yet?
              </li>
            </ul>
            <p>You don&rsquo;t have to feel butterflies.</p>
            <p>
              You also don&rsquo;t have to convince yourself that the absence of butterflies
              means the person is right for you.
            </p>
            <p>
              Give yourself permission to notice what is actually there, rather than forcing
              yourself into either excitement or rejection.
            </p>

            <h2>
              7. Are you choosing a marriage, or trying to escape a situation?
            </h2>

            <p>
              This question can be particularly difficult when you are tired of being asked
              about marriage.
            </p>
            <p>Perhaps every family gathering includes questions about your timeline.</p>
            <p>
              Perhaps you are exhausted by the process of meeting new people, answering the
              same questions and having your life evaluated.
            </p>
            <p>
              Perhaps you want the conversations to stop. You want your parents to relax. You
              want to stop feeling as though something is wrong with you because you
              haven&rsquo;t settled down yet.
            </p>
            <p>
              When that pressure becomes exhausting, saying yes can start to look like a way
              out.
            </p>
            <p>
              But there is a difference between wanting to get married and wanting the
              pressure surrounding marriage to end.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                If nobody asked me about marriage for the next six months, would I still want
                to proceed with this match?
              </li>
              <li>
                Am I interested in the life I could build with this person, or mainly in
                ending the uncertainty?
              </li>
              <li>
                Am I choosing this because it feels right for me, or because I cannot
                tolerate another round of family discussions?
              </li>
              <li>If the pressure disappeared tomorrow, what would I want?</li>
            </ul>
            <p>
              You may genuinely want marriage and still feel exhausted by the process.
            </p>
            <p>
              You may also discover that you want more time, or that marriage is not what you
              want right now.
            </p>
            <p>
              Neither answer needs to be forced into a deadline simply because other people
              are ready for one.
            </p>

            <h2>8. Can you imagine being honest with this person?</h2>

            <p>
              You don&rsquo;t need to share every private detail of your life during the
              first few meetings.
            </p>
            <p>Trust develops over time, and everyone is entitled to privacy.</p>
            <p>
              But as you consider moving towards marriage, notice whether you feel able to
              express ordinary differences and personal preferences.
            </p>
            <p>Can you say that you want to continue working after marriage?</p>
            <p>Can you admit that you disagree with a family expectation?</p>
            <p>Can you ask for more time before making a decision?</p>
            <p>
              Can you talk about something important to you without immediately worrying that
              it will make you less desirable?
            </p>
            <p>
              You may not know the answers after one meeting. That&rsquo;s precisely why
              conversations matter.
            </p>
            <p>
              Notice not only what the other person says, but how they respond when your
              preferences differ from theirs.
            </p>
            <p>Do they ask questions? Do they listen? Can they tolerate disagreement?</p>
            <p>And can you offer them the same freedom?</p>
            <p>
              You are not looking for someone who agrees with everything you say. You are
              trying to understand whether the two of you can build a relationship in which
              both people are allowed to be real.
            </p>

            <h2>9. What if your parents genuinely know something you don&rsquo;t?</h2>

            <p>Family approval is not automatically a problem.</p>
            <p>
              Your parents may notice practical considerations you have overlooked. They may
              have experience that helps them ask useful questions. They may recognise
              compatibility in areas that matter to you.
            </p>
            <p>You can listen to their perspective without handing over your decision.</p>
            <p>
              Try asking them what specifically makes them think the match is suitable.
            </p>
            <p>
              Is it shared values? Similar expectations? How the person treats others?
              Something they observed during the conversation?
            </p>
            <p>Then consider those observations for yourself.</p>
            <p>
              You can also ask what concerns they might have, rather than only discussing
              what they like.
            </p>
            <p>The point is not to reject family involvement. It is to make it useful.</p>
            <p>
              Your parents can offer information, perspective and advice. They cannot
              experience the relationship on your behalf.
            </p>
            <p>
              You can respect someone&rsquo;s opinion without making it the final authority
              on your life.
            </p>

            <h2>10. You don&rsquo;t need to be certain. But you should be able to choose.</h2>

            <p>Marriage is a significant decision, and certainty is not always available.</p>
            <p>
              You cannot know exactly how a person will behave in every future situation. You
              cannot guarantee that your expectations will never change or that the
              relationship will always feel easy.
            </p>
            <p>
              What you can do is learn about the person, discuss the things that matter,
              notice how you feel around them and decide whether you want to continue.
            </p>
            <p>You can ask for more time.</p>
            <p>You can change your mind as you learn more.</p>
            <p>You can decide that a person is good but not right for you.</p>
            <p>
              And you can decide to proceed even when you feel nervous, provided that
              nervousness is not being mistaken for a warning you need to ignore or a lack of
              certainty you must eliminate.
            </p>
            <p>The goal is not to make a decision without any anxiety.</p>
            <p>
              It is to make a decision that reflects your own considered wishes, values and
              understanding of the situation.
            </p>

            <h2>Before you say yes, ask yourself:</h2>

            <ul>
              <li>What do I genuinely like about this person?</li>
              <li>What do I still need to understand about them?</li>
              <li>
                What concerns have I been dismissing because my family approves?
              </li>
              <li>Do I feel free to ask for more time or say no?</li>
              <li>
                Am I interested in this marriage, or am I trying to escape the pressure
                surrounding it?
              </li>
              <li>
                If my family supported either decision equally, what would I choose?
              </li>
            </ul>
            <p>You don&rsquo;t have to answer every question immediately.</p>
            <p>
              Sometimes the most useful thing you can do is give yourself enough quiet to
              hear your own answer.
            </p>

            <h2>A final thought</h2>

            <p>
              Your parents may have hopes for your marriage. They may have worked hard to
              find a suitable match. They may genuinely believe that the person they have
              chosen is right for you.
            </p>
            <p>You can appreciate all of that.</p>
            <p>
              You can listen to their advice, consider their concerns and acknowledge the
              effort they have put into the process.
            </p>
            <p>
              And you can still decide that you don&rsquo;t want to marry this person.
            </p>
            <p>
              Their approval can be part of the decision. It does not have to become the
              decision itself.
            </p>
            <p>
              A good match is not just someone your family can imagine you marrying. It is
              someone you can freely choose to build a life with.
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
              If you feel unable to say no to a marriage, or you&rsquo;re afraid of what
              could happen if you refuse, please reach out to someone you trust. If
              you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>Sources</h2>
            <ul>
              <li>
                Jejeebhoy, S. J., et al. (2022). Marriage without meaningful consent and
                compromised agency in married life: Evidence from married girls in Jharkhand,
                India.{" "}
                <em>Journal of Adolescent Health</em>, 70(3S), S78&ndash;S85.{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/35184837/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pubmed.ncbi.nlm.nih.gov/35184837/
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
            </ul>
          </div>

          {/* Book a Session */}
          <div className="mt-10 mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("blog - parents approve but do you")}
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

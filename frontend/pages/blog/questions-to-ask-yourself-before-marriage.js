import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/questions-to-ask-yourself-before-marriage`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions You Should Ask Yourself Before Getting Married (Especially in an Arranged Marriage)",
  description:
    "Considering an arranged marriage? Evidence-informed questions about readiness, autonomy and whether you genuinely want to get married.",
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
      name: "Questions You Should Ask Yourself Before Getting Married",
      item: POST_URL,
    },
  ],
};

export default function QuestionsToAskBeforeMarriage() {
  return (
    <>
      <Head>
        <title>Questions to Ask Yourself Before an Arranged Marriage</title>
        <meta
          name="description"
          content="Considering an arranged marriage? Evidence-informed questions about readiness, autonomy and whether you genuinely want to get married."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Questions to Ask Yourself Before an Arranged Marriage"
        />
        <meta
          property="og:description"
          content="Considering an arranged marriage? Evidence-informed questions about readiness, autonomy and whether you genuinely want to get married."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Questions+to+Ask+Yourself+Before+an+Arranged+Marriage`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Questions to Ask Yourself Before an Arranged Marriage"
        />
        <meta
          name="twitter:description"
          content="Considering an arranged marriage? Evidence-informed questions about readiness, autonomy and whether you genuinely want to get married."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Questions+to+Ask+Yourself+Before+an+Arranged+Marriage`}
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
            Questions You Should Ask Yourself Before Getting Married (Especially in an Arranged Marriage)
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
            <p>Let&rsquo;s start with a question.</p>
            <p>
              If your parents weren&rsquo;t involved in this decision, would you still be
              considering this person?
            </p>
            <p>
              Not because arranged marriages are inherently a problem. They&rsquo;re not. Not
              because choosing your own partner automatically guarantees a happy marriage. It
              doesn&rsquo;t.
            </p>
            <p>
              But there&rsquo;s a difference between choosing someone with your family&rsquo;s
              support and choosing someone because your family has decided they&rsquo;re right
              for you.
            </p>
            <p>
              And when a process involves biodatas, family meetings, compatibility discussions,
              and the occasional relative who seems to have made your wedding their full-time
              project, it can be surprisingly easy to forget that you&rsquo;re the person who
              will actually be getting married.
            </p>
            <p>
              So before you ask whether the person is earning enough, whether your families are
              compatible, or whether your horoscopes have received clearance from the universe,
              take a moment to ask yourself a few questions.
            </p>
            <p>Not to find the perfect person.</p>
            <p>
              To understand the person you are bringing into this decision: you.
            </p>

            <h2>1. Do I actually want to get married right now?</h2>

            <p>
              Not eventually. Not because everyone your age seems to be getting married. Not
              because your parents have started saying things like, &ldquo;We just want to see
              you settled.&rdquo;
            </p>
            <p>Right now.</p>
            <p>
              There&rsquo;s a difference between wanting a marriage and wanting the uncertainty
              of the marriage-search process to end.
            </p>
            <p>
              You might genuinely want companionship, emotional intimacy, a shared life, or
              children. You might also be exhausted by the pressure to meet someone, make a
              decision, and reassure everyone that your future is progressing according to
              schedule.
            </p>
            <p>These feelings can coexist.</p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                If nobody were asking me about marriage, would I be actively looking for a
                partner right now?
              </li>
              <li>
                Am I excited about building a life with someone, or mainly relieved at the
                thought of finally getting this decision over with?
              </li>
              <li>Do I have the emotional and practical space to get to know someone?</li>
              <li>If I asked for another six months, what would I be afraid of losing?</li>
            </ul>
            <p>
              You don&rsquo;t have to feel completely ready for every aspect of marriage. But
              it matters whether you&rsquo;re moving towards something you want or trying to
              escape the discomfort of disappointing other people.
            </p>
            <p>
              Your family can help you find a partner. They cannot supply your consent on your
              behalf.
            </p>

            <h2>2. Am I choosing this person, or choosing the relief of being chosen?</h2>

            <p>
              Being liked feels good. Being considered a suitable match can feel reassuring,
              especially when the process comes with considerable scrutiny.
            </p>
            <p>
              Someone likes your education, your family, your appearance, your career, your
              values. Their family approves. Your family approves. Everyone seems happy.
            </p>
            <p>And suddenly, you&rsquo;re wondering whether you should like them back.</p>
            <p>
              But being a good match on paper and wanting a life with someone are different
              things.
            </p>
            <p>
              Research on autonomy in romantic relationships suggests that feeling able to make
              choices freely, rather than under pressure, is associated with healthier
              relationship processes. Autonomy doesn&rsquo;t mean being independent of
              everyone; it means having meaningful ownership of your decisions. (Knee et al.,
              2013.)
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                If this person hadn&rsquo;t expressed interest in me first, would I still be
                interested in them?
              </li>
              <li>
                Am I curious about who they are, or mostly pleased that someone suitable wants
                to marry me?
              </li>
              <li>Do I feel free to say, &ldquo;I need more time&rdquo;?</li>
              <li>
                Am I afraid of losing a good match, even though I&rsquo;m not sure I want the
                match?
              </li>
            </ul>
            <p>
              You don&rsquo;t owe someone romantic interest because they&rsquo;ve been
              respectful, impressive, or enthusiastic about you.
            </p>
            <p>And you don&rsquo;t have to reject them either.</p>
            <p>You are allowed to take the time to work out what you feel.</p>
            <p>
              If you tend to get attached to people quickly,{" "}
              <Link href="/blog/why-do-i-get-attached-so-quickly">Why Do I Get Attached to People So Quickly?</Link>{" "}
              might also help.
            </p>

            <h2>3. What does a good marriage actually look like to me?</h2>

            <p>Be specific.</p>
            <p>
              &ldquo;Someone understanding&rdquo; is lovely. What does understanding look like
              when you&rsquo;re upset?
            </p>
            <p>
              &ldquo;Someone supportive&rdquo; sounds reassuring. Supportive of which
              decisions, exactly?
            </p>
            <p>
              &ldquo;Someone family-oriented&rdquo; can mean spending Sunday lunches together.
              It can also mean expecting your parents-in-law to have a say in every major
              decision.
            </p>
            <p>The same words can describe very different lives.</p>
            <p>
              Before assessing whether someone fits your idea of a good spouse, work out what
              that idea actually contains.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>What would an ordinary Tuesday in my ideal married life look like?</li>
              <li>
                How much time would I want to spend with my spouse, friends, and family?
              </li>
              <li>What would privacy look like in our relationship?</li>
              <li>
                How would I want decisions about money, careers, children, and where we live
                to be made?
              </li>
              <li>What does emotional support look like to me?</li>
              <li>
                Which compromises am I comfortable making, and which would fundamentally
                change the life I want?
              </li>
            </ul>
            <p>This isn&rsquo;t about creating a 47-point specification for a human being.</p>
            <p>
              It&rsquo;s about understanding your priorities well enough to recognise
              compatibility when you encounter it.
            </p>

            <h2>4. Which expectations are genuinely mine?</h2>

            <p>Think about the things you believe you should want.</p>
            <p>
              A high-earning partner. A joint family. A particular lifestyle. Children by a
              certain age. A wedding that makes everyone happy. A marriage that reassures your
              relatives that everything is going well.
            </p>
            <p>Now ask yourself where those expectations came from.</p>
            <p>
              Some may genuinely reflect your values. Others may be things you&rsquo;ve
              absorbed because they were repeatedly presented as the obvious next step.
            </p>
            <p>
              Psychological research on self-determination distinguishes between actions that
              feel personally endorsed and actions driven primarily by external pressure or
              internalised demands. The distinction matters because doing something willingly is
              not psychologically equivalent to feeling compelled to do it. (Knee et al., 2013.)
            </p>
            <p>Try asking:</p>
            <ul>
              <li>Would I want this if nobody praised me for choosing it?</li>
              <li>
                Would I still consider it important if my family had no opinion about it?
              </li>
              <li>
                Am I pursuing this because it fits my values, or because I&rsquo;m afraid of
                what it would mean not to?
              </li>
              <li>
                Which parts of my imagined married life feel exciting, and which feel like
                obligations?
              </li>
            </ul>
            <p>
              You don&rsquo;t have to discard traditions or family values to make an authentic
              choice.
            </p>
            <p>
              You do need room to decide which of them you genuinely want to carry forward.
            </p>
            <p>
              If you&rsquo;re worried you&rsquo;re asking for too much,{" "}
              <Link href="/blog/things-its-okay-to-want-in-marriage">Things That Are Okay to Want When Considering Marriage</Link>{" "}
              is worth a read.
            </p>

            <h2>5. What am I unwilling to give up about myself?</h2>

            <p>
              Marriage changes things. Any close, long-term relationship involves adjustment,
              negotiation, and compromise.
            </p>
            <p>But compromise and self-erasure aren&rsquo;t synonyms.</p>
            <p>
              Perhaps your career matters deeply to you. Perhaps you need time alone. Perhaps
              you want to maintain friendships, travel, pursue further education, or continue
              making decisions about your appearance and lifestyle.
            </p>
            <p>These aren&rsquo;t automatically incompatible with marriage.</p>
            <p>
              The important question is whether the life you&rsquo;re imagining allows space
              for the person you already are&mdash;and the person you&rsquo;re still becoming.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>Which parts of my identity do I want to preserve after marriage?</li>
              <li>
                What role do my career, friendships, hobbies, and personal interests play in
                my life?
              </li>
              <li>
                Am I assuming I&rsquo;ll have to give something up before anyone has even
                asked me to?
              </li>
              <li>What changes would I willingly make for a relationship?</li>
              <li>
                What changes would leave me feeling that I&rsquo;ve lost ownership of my own
                life?
              </li>
            </ul>
            <p>
              Research on autonomy in romantic relationships supports the importance of feeling
              able to act with personal agency within a relationship. It doesn&rsquo;t mean
              partners must do everything independently; it means closeness needn&rsquo;t
              require abandoning your sense of self.
            </p>
            <p>
              You can build a shared life without becoming a shared Google Calendar with no
              individual entries.
            </p>

            <h2>6. How comfortable am I with disagreement?</h2>

            <p>You don&rsquo;t need to be an expert at conflict before getting married.</p>
            <p>
              But it&rsquo;s worth understanding what happens when someone disagrees with you.
            </p>
            <p>
              Do you become defensive? Do you go quiet? Do you immediately try to make the
              other person happy? Do you agree in the moment and feel resentful later?
            </p>
            <p>
              These patterns matter because marriage will eventually involve competing
              preferences, stress, misunderstandings, and decisions that affect both people.
            </p>
            <p>
              Research on premarital education suggests that couples can improve their
              communication skills, although the evidence that such programs improve
              relationship satisfaction is mixed and modest. (Fawcett et al., 2010.) The same
              caution applies to any list of questions, including this one: it can help you
              reflect, but it can&rsquo;t predict how a marriage will go.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                Can I express a preference when I know someone might dislike it?
              </li>
              <li>Can I admit that I&rsquo;m wrong without feeling humiliated?</li>
              <li>
                Do I expect disagreements to be resolved through discussion, or do I tend to
                avoid them?
              </li>
              <li>
                Can I listen to someone else&rsquo;s perspective without automatically
                treating it as a threat?
              </li>
              <li>When I&rsquo;m upset, what helps me communicate more constructively?</li>
            </ul>
            <p>You don&rsquo;t need perfect answers.</p>
            <p>
              You need enough self-awareness to recognise the patterns you may bring into a
              relationship.
            </p>
            <p>
              And if you struggle with conflict, that doesn&rsquo;t automatically mean
              you&rsquo;re unfit for marriage. It may simply be something worth understanding
              and practising before making a lifelong commitment.
            </p>

            <h2>7. Am I confusing family approval with compatibility?</h2>

            <p>
              In an arranged-marriage process, your families may be assessing education,
              finances, background, lifestyle, values, and long-term expectations.
            </p>
            <p>
              These factors can matter. Family relationships may also become a significant part
              of married life, particularly when couples live with or near their families or
              share caregiving and financial responsibilities.
            </p>
            <p>
              But family approval is information about how the families perceive the match. It
              isn&rsquo;t proof that the two people will be compatible.
            </p>
            <p>
              A study of married girls and young women in Jharkhand found associations between
              how marriages were arranged and aspects of autonomy and agency within married
              life. The findings concern a particular population and cannot be generalised to
              every arranged marriage in India. They do, however, reinforce the importance of
              meaningful consent and having a voice in the decision. (Jejeebhoy et al., 2022.)
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                If my family loved this person but I felt uncertain, would I feel allowed to
                say so?
              </li>
              <li>
                Am I treating my family&rsquo;s confidence as evidence that I should be
                confident too?
              </li>
              <li>
                What do I know about this person from my own conversations with them?
              </li>
              <li>
                Am I considering the relationship itself, or mostly how well our families fit
                together?
              </li>
              <li>
                If the marriage became difficult, would I feel that I had chosen it&mdash;or
                that I had been carried into it?
              </li>
            </ul>
            <p>Family involvement can be valuable. The issue isn&rsquo;t whether your family has a voice.</p>
            <p>It&rsquo;s whether you have one, too.</p>

            <h2>8. What does marriage mean for my relationship with my family?</h2>

            <p>
              This question deserves particular attention when family involvement is already a
              major part of the process.
            </p>
            <p>
              You might expect to remain closely involved with your parents after marriage. You
              might want to live with your in-laws. You might prefer a separate household. You
              might be happy to provide financial or practical support to your family.
            </p>
            <p>There is no single arrangement that works for everyone.</p>
            <p>
              But it&rsquo;s worth recognising that your expectations may differ from your
              family&rsquo;s expectations&mdash;and that these differences can affect your
              married life.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                How involved do I want my parents to be in major decisions after marriage?
              </li>
              <li>What kind of relationship do I want with my in-laws?</li>
              <li>
                How would I feel if my spouse and I disagreed with our families about an
                important decision?
              </li>
              <li>
                What responsibilities do I expect to have towards my parents as they grow
                older?
              </li>
              <li>
                Do I expect my spouse to share those responsibilities? If so, what would that
                look like?
              </li>
              <li>
                Am I assuming that marriage will automatically change my family&rsquo;s
                expectations of me?
              </li>
            </ul>
            <p>
              These aren&rsquo;t questions about choosing your spouse over your family.
            </p>
            <p>
              They&rsquo;re questions about how you want to manage multiple important
              relationships without expecting one person to silently absorb every conflict.
            </p>

            <h2>9. Am I prepared to learn about someone, rather than just assess them?</h2>

            <p>
              The arranged-marriage process can encourage a very particular way of thinking.
            </p>
            <p>
              You meet someone. You gather information. You compare qualifications, values,
              career plans, and family backgrounds. You decide whether the match is suitable.
            </p>
            <p>There&rsquo;s nothing inherently wrong with wanting to make an informed decision.</p>
            <p>
              But a person isn&rsquo;t a product listing, and compatibility isn&rsquo;t a
              score you can calculate from a biodata.
            </p>
            <p>
              You can learn a lot about someone&rsquo;s circumstances during a few
              conversations. You cannot learn everything about how they behave under stress,
              respond to disappointment, or navigate years of shared responsibilities.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                Am I genuinely curious about this person, including things that don&rsquo;t
                directly affect their suitability as a spouse?
              </li>
              <li>Can I admit that I don&rsquo;t know enough yet?</li>
              <li>
                Am I allowing myself to notice both positive qualities and areas of
                uncertainty?
              </li>
              <li>
                Am I rushing towards a decision because the process has a timeline?
              </li>
              <li>
                Do I feel comfortable asking for more opportunities to get to know them?
              </li>
            </ul>
            <p>You don&rsquo;t need to feel certain after every meeting.</p>
            <p>
              Sometimes, the most sensible conclusion is simply: I&rsquo;d like to know more.
            </p>
            <p>That&rsquo;s not indecisiveness. It&rsquo;s an acknowledgement that major decisions deserve adequate information.</p>

            <h2>10. Can I say no, even if everyone else says yes?</h2>

            <p>This may be the most important question on the list.</p>
            <p>
              Imagine that your parents are delighted. The families get along. The person is
              kind, educated, financially stable, and seems perfectly reasonable.
            </p>
            <p>But something about the match doesn&rsquo;t feel right to you.</p>
            <p>
              Perhaps you don&rsquo;t feel interested. Perhaps you have important unanswered
              questions. Perhaps you&rsquo;re not ready to marry anyone. Perhaps you simply
              don&rsquo;t want this relationship.
            </p>
            <p>Can you say no?</p>
            <p>
              Not without anyone feeling disappointed. Not without difficult conversations. Not
              necessarily without consequences.
            </p>
            <p>
              But can you make that decision without being forced, threatened, or made to feel
              that your consent is irrelevant?
            </p>
            <p>
              A marriage decision requires meaningful, freely given consent. Research on
              marriage decision-making in India has specifically highlighted the importance of
              agency and the right to free and full consent.
            </p>
            <p>Ask yourself:</p>
            <ul>
              <li>
                Do I believe I&rsquo;m allowed to decline a match that looks good on paper?
              </li>
              <li>
                Would I feel able to ask for more time without being treated as unreasonable?
              </li>
              <li>
                Am I worried that saying no will make me responsible for my parents&rsquo;
                disappointment?
              </li>
              <li>
                Am I agreeing because I want this marriage, or because I don&rsquo;t believe
                refusal is a real option?
              </li>
            </ul>
            <p>
              If you cannot safely refuse, the immediate issue isn&rsquo;t finding a better
              list of compatibility questions. It&rsquo;s getting appropriate support and
              considering how to protect your autonomy and safety.
            </p>
            <p>A decision isn&rsquo;t fully yours if you&rsquo;re not allowed to choose otherwise.</p>
            <p>
              If family approval is making this harder to untangle, see{" "}
              <Link href="/blog/arranged-marriage-family-approval">Your Parents Approve. But Do You?</Link>
            </p>

            <h2>Before you go, remember this</h2>

            <p>You don&rsquo;t need to answer every question perfectly before getting married.</p>
            <p>
              You don&rsquo;t need to eliminate all uncertainty, resolve every family
              disagreement, or become a completely self-assured person first.
            </p>
            <p>
              Marriage is a decision made with incomplete information. The point is not to
              manufacture certainty where none exists.
            </p>
            <p>
              It&rsquo;s to make sure that, as far as possible, you&rsquo;re making the
              decision with your eyes open, your values in view, and your own voice included.
            </p>
            <p>Your parents can have preferences. Your relatives can have opinions. Your potential partner can have expectations.</p>
            <p>
              And you can take all of that into consideration without treating it as a
              substitute for your own judgement.
            </p>
            <p>
              The question isn&rsquo;t just whether this person would make a good spouse.
              It&rsquo;s whether this is a marriage you freely want to enter&mdash;and a life
              you can genuinely see yourself choosing.
            </p>
            <p>Because you&rsquo;re not merely being evaluated for a role in someone else&rsquo;s family.</p>
            <p>You&rsquo;re choosing the person with whom you may build a life of your own.</p>
            <p>
              When you&rsquo;re ready to talk to the other person,{" "}
              <Link href="/blog/questions-to-ask-partner-before-marriage">Questions You Should Ask Your Potential Partner Before Getting Married</Link>{" "}
              has a list for that conversation.
            </p>
            {/* TODO: link to the Indian families service page and the relationships service page once they are live. */}
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
              If you feel unable to say no to a marriage, or you&rsquo;re afraid of what could
              happen if you refuse, please reach out to someone you trust. If you&rsquo;re in
              immediate danger in India, call 112.
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
                Fawcett, E. B., Hawkins, A. J., Blanchard, V. L., &amp; Carroll, J. S.
                (2010). Do premarital education programs really work? A meta-analytic study.{" "}
                <em>Family Relations</em>, 59(3), 232&ndash;239.{" "}
                <a
                  href="https://scholarsarchive.byu.edu/facpub/4230"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scholarsarchive.byu.edu/facpub/4230
                </a>
              </li>
              <li>
                Jejeebhoy, S. J., et al. (2022). Marriage without meaningful consent and
                compromised agency in married life: Evidence from married girls in Jharkhand,
                India. <em>Journal of Adolescent Health</em>, 70(3S), S78&ndash;S85.{" "}
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
                  href="https://doi.org/10.1080/17441730.2012.736699"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1080/17441730.2012.736699
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
              onClick={() => trackWhatsApp("blog - questions before marriage")}
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

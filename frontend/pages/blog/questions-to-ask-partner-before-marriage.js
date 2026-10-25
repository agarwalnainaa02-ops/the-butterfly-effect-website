import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/questions-to-ask-partner-before-marriage`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Questions You Should Ask Your Potential Partner Before Getting Married",
  description:
    "Considering an arranged marriage? Questions to discuss values, family boundaries, money, careers, children and conflict before saying yes.",
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
      name: "Questions You Should Ask Your Potential Partner Before Getting Married",
      item: POST_URL,
    },
  ],
};

export default function QuestionsToAskPartnerBeforeMarriage() {
  return (
    <>
      <Head>
        <title>Questions to Ask Your Potential Partner Before Marriage</title>
        <meta
          name="description"
          content="Considering an arranged marriage? Questions to discuss values, family boundaries, money, careers, children and conflict before saying yes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Questions to Ask Your Potential Partner Before Marriage"
        />
        <meta
          property="og:description"
          content="Considering an arranged marriage? Questions to discuss values, family boundaries, money, careers, children and conflict before saying yes."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Questions+to+Ask+Your+Potential+Partner+Before+Marriage`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Questions to Ask Your Potential Partner Before Marriage"
        />
        <meta
          name="twitter:description"
          content="Considering an arranged marriage? Questions to discuss values, family boundaries, money, careers, children and conflict before saying yes."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Questions+to+Ask+Your+Potential+Partner+Before+Marriage`}
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
            Questions You Should Ask Your Potential Partner Before Getting Married
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
              Let&rsquo;s be honest. In an arranged-marriage setup, the first few
              conversations can sometimes feel like a job interview where both candidates have
              been told to smile, make a good impression, and avoid saying anything that might
              jeopardise the offer.
            </p>
            <p>&ldquo;So, tell me about yourself.&rdquo;</p>
            <p>&ldquo;Where do you see yourself in five years?&rdquo;</p>
            <p>&ldquo;Do you like travelling?&rdquo;</p>
            <p>
              Meanwhile, both of you are quietly trying to determine whether you could live
              with this person for the next several decades.
            </p>
            <p>No pressure.</p>
            <p>
              The problem isn&rsquo;t asking about someone&rsquo;s career, education, or
              interests. Those things matter. It&rsquo;s assuming that knowing their
              qualifications, salary, and favourite holiday destination tells you enough about
              what sharing a life with them might look like.
            </p>
            <p>
              You&rsquo;re not just choosing someone to go on dates with. You&rsquo;re
              exploring whether you can build a life together.
            </p>
            <p>
              Research on relationships has long focused on how couples communicate, handle
              conflict and respond to one another. Premarital conversations can help you notice
              areas of compatibility and disagreement&mdash;but the goal isn&rsquo;t to get
              every answer right. It&rsquo;s to understand each other honestly.
            </p>
            <p>Here are questions worth making room for before you decide.</p>
            {/* TODO: once /blog/questions-to-ask-yourself-before-marriage is live, add a one-line link to it near the start of this post. Also link the Indian families and relationships service pages once live. */}

            <h2>1. What does marriage mean to you?</h2>

            <p>
              Two people can want to get married and have completely different ideas about what
              marriage involves.
            </p>
            <p>
              For one person, it might mean building an independent life together. For another,
              it might mean becoming part of a larger family unit with shared routines,
              responsibilities, and traditions.
            </p>
            <p>
              Neither description automatically makes someone a better partner. But the
              difference matters if one person expects privacy and the other expects family
              involvement in nearly every decision.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>What does a good marriage look like to you?</li>
              <li>
                What do you think changes after marriage, and what shouldn&rsquo;t change?
              </li>
              <li>What are you most looking forward to about being married?</li>
              <li>What do you think will be the most difficult part of married life?</li>
              <li>What do you believe makes someone a good husband or wife?</li>
              <li>
                What expectations do you have of your spouse that you think are important to
                discuss now?
              </li>
            </ul>
            <p>Listen for more than whether your answers match.</p>
            <p>
              Notice whether they can explain their expectations, acknowledge that you may see
              things differently, and show curiosity about your perspective.
            </p>

            <h2>2. What would our everyday life actually look like?</h2>

            <p>
              Compatibility isn&rsquo;t only about major life goals. It&rsquo;s also about the
              ordinary Tuesday evenings, the household chores, the weekend plans, and who
              remembers that the electricity bill exists.
            </p>
            <p>
              You might agree on the big things and still have very different expectations
              about daily life.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>
                Where do you imagine living after marriage: independently, with your parents,
                or somewhere else?
              </li>
              <li>How would you like to divide household responsibilities?</li>
              <li>What does a typical working day look like for you?</li>
              <li>
                How much time do you expect us to spend together, and how much time do you
                need for yourself?
              </li>
              <li>
                How important are friendships, hobbies, and individual interests after
                marriage?
              </li>
              <li>What would you expect weekends and holidays to look like?</li>
              <li>
                How would we decide whose plans take priority when we have competing
                commitments?
              </li>
            </ul>
            <p>
              Don&rsquo;t assume that someone who says they&rsquo;re happy to share
              responsibilities has thought through what that means in practice.
            </p>
            <p>
              &ldquo;Of course, we&rsquo;ll share the work&rdquo; sounds wonderful. The more
              useful conversation is about what happens when both people are tired, both have
              deadlines, and the kitchen somehow still needs to be cleaned.
            </p>

            <h2>3. What are your expectations about careers and independence?</h2>

            <p>
              This conversation matters particularly when one or both partners have career
              ambitions, are still studying, or expect their work circumstances to change.
            </p>
            <p>
              Someone may say they support your career while imagining that you&rsquo;ll
              eventually prioritise the household. Another person may assume both partners will
              continue working and share responsibilities equally.
            </p>
            <p>Neither assumption should be left unexamined.</p>
            <p>Ask them:</p>
            <ul>
              <li>How important is your career to you over the next five to ten years?</li>
              <li>What are your expectations about my career after marriage?</li>
              <li>
                How would we approach a situation where one person&rsquo;s job requires
                relocation?
              </li>
              <li>
                What would happen if one of us wanted to study further, change careers, or
                start a business?
              </li>
              <li>What are your thoughts about both partners working full-time?</li>
              <li>
                If one person&rsquo;s career temporarily became more demanding, how would we
                manage responsibilities at home?
              </li>
              <li>
                Would you expect either of us to give up work after having children? Why?
              </li>
            </ul>
            <p>Pay attention to whether support is mutual.</p>
            <p>
              It&rsquo;s easy to agree that both careers matter when nobody has to make a
              difficult decision. The more revealing question is how you&rsquo;ll approach it
              when both careers matter at the same time.
            </p>

            <h2>4. How involved do you expect our families to be?</h2>

            <p>
              In an arranged marriage, you&rsquo;re often getting to know someone whose family
              may already be closely involved in the process.
            </p>
            <p>
              That involvement can be supportive and meaningful. It can also create
              expectations that need to be discussed before they become sources of conflict.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>
                How involved do you expect your parents to be in our decisions after marriage?
              </li>
              <li>What does a healthy relationship with in-laws look like to you?</li>
              <li>How would you handle a disagreement between me and your parents?</li>
              <li>
                What would you do if your family expected something from us that we
                weren&rsquo;t comfortable with?
              </li>
              <li>
                How often would you expect us to visit or spend time with our respective
                families?
              </li>
              <li>
                What financial or caregiving responsibilities do you expect to have towards
                your parents?
              </li>
              <li>
                If we disagreed with our families about where to live, how to raise children,
                or how to spend money, how would you want us to handle it?
              </li>
            </ul>
            <p>One particularly useful question is:</p>
            <p>
              &ldquo;If your parents and I disagreed about something that affected our
              marriage, how do you think we should make that decision?&rdquo;
            </p>
            <p>
              You&rsquo;re not asking them to choose between you and their parents in every
              situation. You&rsquo;re trying to understand how they approach competing
              responsibilities, boundaries, and decisions that affect the two of you.
            </p>
            <p>
              Also, don&rsquo;t stop at a reassuring answer. Ask for an example of how
              they&rsquo;ve handled a difficult family disagreement before, if they&rsquo;re
              comfortable sharing.
            </p>

            <h2>5. How do you handle conflict when you&rsquo;re upset?</h2>

            <p>
              Every relationship encounters disagreement. What matters is not whether two
              people ever argue, but how they respond when they do.
            </p>
            <p>
              Research on couples has linked destructive conflict patterns&mdash;such as
              hostility and persistent withdrawal&mdash;to relationship difficulties. At the
              same time, taking a pause to regulate emotions is not inherently unhealthy; what
              matters is whether partners can return to the conversation and work towards
              resolution.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>What do you usually do when you&rsquo;re angry?</li>
              <li>
                Do you prefer to talk things through immediately or take time to cool down?
              </li>
              <li>What helps you feel heard during an argument?</li>
              <li>How do you usually apologise when you&rsquo;ve hurt someone?</li>
              <li>
                What would you do if we strongly disagreed about something important?
              </li>
              <li>
                How would you feel if I told you that something you&rsquo;d done had upset me?
              </li>
              <li>What does a fair resolution to a disagreement look like to you?</li>
            </ul>
            <p>
              You don&rsquo;t need someone who promises never to get angry. That isn&rsquo;t
              a realistic standard.
            </p>
            <p>
              Look for the ability to reflect, take responsibility, tolerate disagreement, and
              repair a relationship after conflict.
            </p>
            <p>
              Someone saying &ldquo;I don&rsquo;t like fighting&rdquo; tells you relatively
              little. Someone explaining how they manage anger, listen to another perspective,
              and return to difficult conversations gives you more to work with.
            </p>

            <h2>6. What are your expectations about money?</h2>

            <p>
              Money isn&rsquo;t just arithmetic. It can represent security, independence,
              status, responsibility, or freedom.
            </p>
            <p>
              And two people can have similar incomes but very different financial habits and
              expectations.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>How do you usually manage your money?</li>
              <li>Do you prefer to save, invest, spend, or maintain a balance?</li>
              <li>
                What are your thoughts on joint finances versus maintaining individual
                accounts?
              </li>
              <li>
                Do you have any existing financial commitments or significant debts that would
                affect our shared plans?
              </li>
              <li>How would we approach major purchases?</li>
              <li>
                What financial responsibilities do you expect to have towards your parents or
                other family members?
              </li>
              <li>
                How would we handle a situation where one of us earned substantially more than
                the other?
              </li>
              <li>
                What are your expectations about financial transparency within a marriage?
              </li>
            </ul>
            <p>
              You don&rsquo;t need to exchange bank statements over coffee on your second
              meeting.
            </p>
            <p>
              But before making a commitment, you should have enough information to understand
              significant financial obligations, expectations, and potential sources of
              conflict.
            </p>
            <p>
              And if someone treats basic financial questions as an insult rather than an
              ordinary part of planning a shared life, that&rsquo;s worth exploring.
            </p>

            <h2>7. Do we want similar things regarding children?</h2>

            <p>
              This is one area where vague agreement can create very real difficulties later.
            </p>
            <p>
              &ldquo;I like children&rdquo; doesn&rsquo;t tell you whether someone wants to
              become a parent.
            </p>
            <p>
              &ldquo;We&rsquo;ll figure it out&rdquo; may be a sincere response when someone
              genuinely doesn&rsquo;t know. It can also conceal a difference neither person
              wants to address.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>
                Do you want children? If so, what kind of timeline do you imagine?
              </li>
              <li>
                How would you feel if having biological children turned out to be difficult or
                impossible?
              </li>
              <li>What are your thoughts on adoption?</li>
              <li>
                What role do you imagine each parent playing in childcare?
              </li>
              <li>
                How would we approach discipline and major parenting decisions?
              </li>
              <li>
                What would happen if one of us wanted children and the other changed their
                mind?
              </li>
              <li>
                How would we balance parenting with careers and individual lives?
              </li>
            </ul>
            <p>You don&rsquo;t need to settle every hypothetical before marriage.</p>
            <p>
              You do need to identify fundamental differences rather than assume love will make
              them disappear.
            </p>

            <h2>8. What are your expectations about intimacy and affection?</h2>

            <p>
              Intimacy can be difficult to discuss when the process of getting to know someone
              is structured, formal, or closely supervised by families.
            </p>
            <p>
              But emotional and physical intimacy are important parts of married life for many
              people, and assumptions can create avoidable misunderstandings.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>What helps you feel emotionally close to someone?</li>
              <li>
                How comfortable are you talking about feelings and vulnerability?
              </li>
              <li>How important is physical affection to you?</li>
              <li>
                What are your expectations about physical intimacy in marriage?
              </li>
              <li>
                How do you think partners should handle differences in desire or comfort?
              </li>
              <li>What does consent mean to you within a marriage?</li>
              <li>
                How would you want us to approach a conversation about intimacy if one of us
                felt uncomfortable?
              </li>
            </ul>
            <p>You don&rsquo;t have to share intimate details before you&rsquo;re ready.</p>
            <p>
              The point is to understand whether both of you can approach intimacy with
              respect, communication, and an appreciation that marriage does not remove either
              person&rsquo;s right to consent.
            </p>

            <h2>9. What happens when life doesn&rsquo;t go according to plan?</h2>

            <p>
              It&rsquo;s relatively easy to imagine being a good partner when everyone is
              healthy, financially comfortable, and happy with their careers.
            </p>
            <p>
              Long-term relationships also involve uncertainty: illness, job loss, grief,
              financial strain, caregiving, and unexpected changes.
            </p>
            <p>
              You cannot predict exactly how someone will respond to every future difficulty.
              You can, however, explore how they think about responsibility and support.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>How do you usually respond when life becomes stressful?</li>
              <li>
                What kind of support do you find helpful during difficult periods?
              </li>
              <li>
                How would you approach a situation where one of us became seriously ill?
              </li>
              <li>
                What would happen if one of us lost our job or experienced a financial
                setback?
              </li>
              <li>
                How do you feel about seeking professional help, including couples therapy, if
                we struggled?
              </li>
              <li>
                What do you think partners owe each other during difficult periods?
              </li>
              <li>
                Can you think of a time when you had to change your plans significantly? How
                did you handle it?
              </li>
            </ul>
            <p>
              Don&rsquo;t look for someone who promises that nothing will ever go wrong.
            </p>
            <p>
              Look for someone who can talk realistically about uncertainty, responsibility,
              and asking for help.
            </p>

            <h2>10. What do you believe about gender roles?</h2>

            <p>
              You may both identify as modern, progressive, traditional, or some combination
              of these.
            </p>
            <p>
              Those labels don&rsquo;t tell you how you&rsquo;ll divide labour, make
              decisions, or navigate expectations once you&rsquo;re married.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>What does being a husband or wife mean to you?</li>
              <li>
                How do you think household responsibilities should be divided?
              </li>
              <li>
                What are your expectations about cooking, cleaning, and caregiving?
              </li>
              <li>
                Do you believe both partners should have an equal say in major decisions?
              </li>
              <li>
                What are your thoughts about each partner maintaining friendships and interests
                independently?
              </li>
              <li>How do you feel about a spouse earning more than you?</li>
              <li>
                Would you expect different standards of behaviour from yourself and your
                partner because of gender?
              </li>
            </ul>
            <p>
              Don&rsquo;t just listen for whether someone says they believe in equality.
            </p>
            <p>Explore what equality means to them in everyday life.</p>
            <p>
              A person may sincerely value fairness but have grown up with assumptions they
              haven&rsquo;t examined. The ability to discuss those assumptions and negotiate
              responsibilities matters.
            </p>

            <h2>11. What are your non-negotiables?</h2>

            <p>Everyone has preferences. Some are flexible; others reflect fundamental values, safety, or the kind of life a person wants to build.</p>
            <p>It&rsquo;s helpful to know the difference.</p>
            <p>Ask them:</p>
            <ul>
              <li>What are the things you consider essential in a marriage?</li>
              <li>Which differences do you think couples can work through?</li>
              <li>
                Are there any lifestyle choices or values that would make a relationship
                incompatible for you?
              </li>
              <li>
                What are your expectations around religion, cultural practices, or family
                traditions?
              </li>
              <li>What boundaries are important to you?</li>
              <li>What would be difficult for you to compromise on?</li>
            </ul>
            <p>Be prepared to answer these questions yourself, too.</p>
            <p>
              The purpose isn&rsquo;t to eliminate every difference. It&rsquo;s to identify
              differences that could meaningfully affect your shared life.
            </p>
            <p>
              And remember: a non-negotiable is not automatically reasonable simply because
              someone calls it one. You&rsquo;re allowed to decide that an expectation
              doesn&rsquo;t work for you.
            </p>

            <h2>12. What are you still figuring out about yourself?</h2>

            <p>This question doesn&rsquo;t get asked enough.</p>
            <p>
              People are often expected to arrive at the marriage process with their careers,
              values, goals, and personalities neatly organised into a convincing presentation.
            </p>
            <p>Real people are more complicated.</p>
            <p>
              Someone might be uncertain about where they want to live, still learning how to
              communicate, or reconsidering what they want from their career.
            </p>
            <p>
              Uncertainty doesn&rsquo;t automatically make someone unsuitable. What matters is
              whether they can acknowledge it honestly and discuss how it might affect a shared
              future.
            </p>
            <p>Ask them:</p>
            <ul>
              <li>What are you still learning about yourself?</li>
              <li>Is there anything about marriage that makes you nervous?</li>
              <li>
                What do you think you would need to work on to be a good partner?
              </li>
              <li>What are you hoping to learn about me before making a decision?</li>
              <li>
                Is there anything important you think we haven&rsquo;t discussed yet?
              </li>
            </ul>
            <p>
              And notice whether you feel able to answer these questions honestly yourself.
            </p>
            <p>
              You don&rsquo;t need to present yourself as a perfectly finished person.
              You&rsquo;re exploring whether two imperfect, developing people can build
              something that works for both of them.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(47,35,35,0.18)",
                margin: "3rem 0",
              }}
            />

            <h2>A few things to remember before you use this list</h2>

            <h3>You don&rsquo;t need to ask all these questions in one sitting.</h3>

            <p>
              Please don&rsquo;t turn your next meeting into a six-hour audit of another
              person&rsquo;s childhood, finances, and conflict-resolution strategies.
            </p>
            <p>
              Let the conversations develop naturally. Return to important topics over time.
              Ask follow-up questions when an answer is unclear.
            </p>

            <h3>Pay attention to behaviour as well as answers.</h3>

            <p>
              Someone might say they value your independence but repeatedly dismiss your
              opinions. They might say they communicate openly but become hostile when you ask
              a reasonable question.
            </p>
            <p>
              One awkward conversation doesn&rsquo;t establish a pattern. But repeated
              behaviour can tell you things that a polished answer cannot.
            </p>

            <h3>Look for compatibility, not perfect agreement.</h3>

            <p>
              You don&rsquo;t have to share every preference. You do need to understand which
              differences are manageable, which require negotiation, and which are fundamental.
            </p>

            <h3>Remember that consent applies throughout the process.</h3>

            <p>
              You can ask for more time, change your mind, or decline a match. You don&rsquo;t
              owe someone a yes because the families have agreed, the conversations have gone
              well, or everyone else is excited.
            </p>
            <p>
              And finally, you are allowed to ask questions that make the conversation a little
              uncomfortable.
            </p>
            <p>Not because you want to catch someone out.</p>
            <p>
              Because a marriage is a significant decision, and you deserve enough information
              to make it freely.
            </p>
            <p>
              The goal isn&rsquo;t to find someone who gives all the right answers. It&rsquo;s
              to find out whether the two of you can have the honest conversations that a
              shared life will require.
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
                Schrodt, P., Witt, P. L., &amp; Shimkowski, J. R. (2014). A meta-analytical
                review of the demand/withdraw pattern of interaction and its associations with
                individual, relational, and communicative outcomes.{" "}
                <em>Communication Monographs</em>, 81(1).{" "}
                <a
                  href="https://doi.org/10.1080/03637751.2013.813632"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1080/03637751.2013.813632
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
                Utah State University Extension. When emotions take over: Learning to
                P.A.U.S.E. before you react.{" "}
                <a
                  href="https://extension.usu.edu/strongermarriage/blog/when-emotions-take-over-learning-to-p-a-u-s-e-before-you-react.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://extension.usu.edu/strongermarriage/blog/when-emotions-take-over-learning-to-p-a-u-s-e-before-you-react.php
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
              onClick={() => trackWhatsApp("blog - questions for partner")}
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

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/family-pressure-and-identity`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Family Pressure and Identity: How Do You Know What You Actually Want?",
  description:
    "Growing up with family expectations can make it hard to know what you want. Here is what psychology says about identity, autonomy and conditional approval.",
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
      name: "Family Pressure and Identity: How Do You Know What You Actually Want?",
      item: POST_URL,
    },
  ],
};

export default function FamilyPressureAndIdentity() {
  return (
    <>
      <Head>
        <title>Family Pressure and Identity: What Do You Want?</title>
        <meta
          name="description"
          content="Growing up with family expectations can make it hard to know what you want. Here is what psychology says about identity, autonomy and conditional approval."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Family Pressure and Identity: What Do You Want?"
        />
        <meta
          property="og:description"
          content="Growing up with family expectations can make it hard to know what you want. Here is what psychology says about identity, autonomy and conditional approval."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Family+Pressure+and+Identity`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Family Pressure and Identity: What Do You Want?"
        />
        <meta
          name="twitter:description"
          content="Growing up with family expectations can make it hard to know what you want. Here is what psychology says about identity, autonomy and conditional approval."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Family+Pressure+and+Identity`}
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
            Family Pressure and Identity: How Do You Know What You Actually Want?
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
              At some point growing up, most of us get asked what we want to do with our lives.
            </p>
            <p>
              And if you&rsquo;re growing up in an Indian family, there&rsquo;s a reasonable
              chance that the question comes with a few suggestions, some unsolicited advice, and
              a detailed explanation of why the career you just mentioned might not be a good
              idea.
            </p>
            <p>
              Sometimes, the suggestions are helpful. Sometimes, they&rsquo;re coming from a
              place of genuine concern. And sometimes, you&rsquo;ve barely finished explaining
              your plans when someone has already started discussing your future marriage.
            </p>
            <p>But here&rsquo;s something I&rsquo;ve been thinking about.</p>
            <p>
              How do you figure out who you want to be when you&rsquo;ve spent so much time
              learning who you&rsquo;re supposed to be?
            </p>
            <p>It&rsquo;s a surprisingly complicated question.</p>
            <p>
              Because family expectations don&rsquo;t just influence our decisions. They can
              also influence how we see ourselves, what we believe we&rsquo;re capable of, and
              what we consider acceptable to want in the first place.
            </p>
            <p>And psychology has a few interesting things to say about this.</p>

            <h2>1. When your life plan arrives before you do</h2>

            <p>
              Developmental psychologist James Marcia built on Erik Erikson&rsquo;s work on
              identity development to explore how people develop a sense of who they are.
            </p>
            <p>His framework looks at two processes: exploration and commitment.</p>
            <p>
              Exploration involves considering different possibilities, beliefs, values and
              directions for your life.
            </p>
            <p>
              Commitment involves making choices and investing in particular goals, beliefs or
              identities.
            </p>
            <p>
              Marcia described four identity statuses based on these two processes. One of them
              is called identity foreclosure.
            </p>
            <p>
              Despite sounding like something your bank would threaten you with, it refers to a
              situation in which someone commits to an identity without much prior exploration of
              alternatives.
            </p>
            <p>
              For example, someone might decide to pursue a particular career because it&rsquo;s
              what their parents have always expected of them. Or they might accept a particular
              set of beliefs without having had much opportunity to question them.
            </p>
            <p>
              The important distinction is that the person has made a commitment, but
              hasn&rsquo;t necessarily explored what the alternatives might look like.
            </p>
            <p>
              You can read more about Marcia&rsquo;s framework in{" "}
              <a
                href="https://openbooks.library.baylor.edu/lifespanhumandevelopment/chapter/identity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this overview of identity development
              </a>
              .
            </p>
            <p>
              Now, this doesn&rsquo;t mean that everyone who follows their parents&rsquo; advice
              has an identity problem.
            </p>
            <p>
              Your parents might suggest a career, you might explore your options, and you might
              conclude that they&rsquo;re right. Revolutionary, I know.
            </p>
            <p>The issue isn&rsquo;t whether your choices resemble your family&rsquo;s choices.</p>
            <p>
              It&rsquo;s whether you&rsquo;ve had the opportunity to examine those choices and
              decide what you believe in for yourself.
            </p>
            <p>
              Because there&rsquo;s a difference between choosing something and never realising
              that you had a choice.
            </p>
            <p>And from the outside, these two situations can look remarkably similar.</p>
            <p>
              Two people might pursue the same career. One genuinely enjoys it. The other has
              spent years believing that choosing anything else would make them a disappointment.
            </p>
            <p>
              Same degree. Same job title. Very different relationship with the decision.
            </p>

            <h2>2. But isn&rsquo;t family supposed to influence our decisions?</h2>

            <p>Of course it is.</p>
            <p>
              We don&rsquo;t develop an identity in isolation. Our families, friendships,
              cultural environments and social experiences all contribute to how we understand
              ourselves.
            </p>
            <p>
              And in many Indian families, decisions are not understood as entirely individual
              matters. Career choices, marriage, finances and living arrangements can affect the
              entire family.
            </p>
            <p>There can be genuine value in this.</p>
            <p>
              Family members share resources, offer support, help one another navigate
              difficulties and make sacrifices for each other. Sometimes, considering your
              family&rsquo;s needs is an expression of love rather than an inability to make
              your own decisions.
            </p>
            <p>
              So I don&rsquo;t think the goal is to become a person who makes every decision
              without consulting anyone.
            </p>
            <p>That sounds exhausting, not emotionally liberated.</p>
            <p>
              The more interesting question is what happens when family involvement leaves very
              little room for individual preferences.
            </p>
            <p>
              Psychologists Edward Deci and Richard Ryan&rsquo;s self-determination theory
              identifies three basic psychological needs: autonomy, competence and relatedness.
            </p>
            <p>
              Autonomy refers to experiencing a sense of ownership over your actions. Relatedness
              concerns feeling connected to and cared for by other people.
            </p>
            <p>
              And these two needs are particularly relevant here because autonomy and family
              connection are not opposites.
            </p>
            <p>You can love your family and still want to make your own decisions.</p>
            <p>
              You can value your parents&rsquo; opinions without treating them as instructions.
            </p>
            <p>
              You can choose to follow a family tradition because it matters to you, rather than
              because questioning it feels unacceptable.
            </p>
            <p>
              The distinction is between doing something because you personally endorse it and
              doing something because you feel pressured into it.
            </p>
            <p>
              The behaviour might look identical. The experience of making that choice can be
              very different.
            </p>
            <p>And this is where family pressure becomes complicated.</p>
            <p>
              Because sometimes, the problem isn&rsquo;t that your family has an opinion about
              your life.
            </p>
            <p>It&rsquo;s that their opinion becomes the only one you&rsquo;re allowed to have.</p>

            <h2>
              3. The good child, the responsible child, the child who understands everything
            </h2>

            <p>Every family has its own dynamics.</p>
            <p>But many of us grow up with particular roles.</p>
            <p>The responsible one.</p>
            <p>The academically successful one.</p>
            <p>The one who doesn&rsquo;t argue.</p>
            <p>The one who understands why everyone is upset.</p>
            <p>The one who can always be trusted to adjust.</p>
            <p>
              And these roles aren&rsquo;t necessarily bad. Being responsible, considerate and
              dependable are useful qualities.
            </p>
            <p>
              The problem begins when a role becomes an expectation you aren&rsquo;t allowed to
              step outside.
            </p>
            <p>Consider the child who&rsquo;s always praised for being mature.</p>
            <p>
              They learn to understand their parents&rsquo; worries, accommodate other
              people&rsquo;s needs and avoid creating unnecessary conflict.
            </p>
            <p>Over time, being understanding becomes part of how they see themselves.</p>
            <p>But what happens when they&rsquo;re the ones who need understanding?</p>
            <p>
              What happens when they disagree with their parents, make a decision someone
              dislikes, or simply don&rsquo;t have the capacity to accommodate everyone?
            </p>
            <p>Suddenly, they&rsquo;re no longer being mature.</p>
            <p>They&rsquo;re being difficult.</p>
            <p>Ungrateful.</p>
            <p>Selfish.</p>
            <p>
              Interesting how quickly a personality trait can become a character flaw when it
              stops being convenient for everyone else.
            </p>
            <p>
              Of course, not every disagreement means a family is being unfair, and not every
              expectation is unreasonable.
            </p>
            <p>
              But it&rsquo;s worth examining what happens when a person feels they must
              consistently fulfil a particular role to remain accepted.
            </p>
            <p>
              Research on parental conditional regard is relevant here. This refers to situations
              in which parents give or withdraw affection and approval depending on whether their
              children meet particular expectations.
            </p>
            <p>
              A 2023 meta-analysis by Haines and Schutte examined research on parental
              conditional regard. Across 31 samples, greater conditional regard was associated
              with more introjected regulation, more contingent self-esteem, greater depressive
              symptoms and lower relatedness. These are associations, not proof that conditional
              regard causes every one of these outcomes.
            </p>
            <p>
              You can read{" "}
              <a
                href="https://doi.org/10.1002/jad.12111"
                target="_blank"
                rel="noopener noreferrer"
              >
                the published meta-analysis
              </a>
              .
            </p>
            <p>
              The concept is worth understanding because it highlights a distinction between
              being encouraged to do something and feeling that your worth or acceptance depends
              on doing it.
            </p>
            <p>A child might learn to work hard because they find their work meaningful.</p>
            <p>
              Another might learn to work hard because falling short feels like evidence that
              they&rsquo;re not good enough.
            </p>
            <p>Both might become excellent students.</p>
            <p>
              But one has learnt that effort can be rewarding. The other might have learnt that
              mistakes are dangerous to their sense of worth.
            </p>
            <p>
              And when that second person grows up, they may continue to measure themselves
              against expectations even when nobody is actively enforcing them.
            </p>
            <p>Which brings us to the part that I think deserves more attention.</p>
            <p>
              Sometimes, the pressure doesn&rsquo;t need to be repeated because you&rsquo;ve
              already learnt how to apply it to yourself.
            </p>

            <h2>4. When you become your own strictest parent</h2>

            <p>
              You know that feeling when you&rsquo;re about to make a decision and, before
              you&rsquo;ve even considered what you want, you can already hear the objections?
            </p>
            <p>What will they think?</p>
            <p>What if they get upset?</p>
            <p>What if they think I&rsquo;ve changed?</p>
            <p>What if this makes me a bad daughter?</p>
            <p>
              Nobody has said anything yet. You&rsquo;ve simply opened an imaginary family
              meeting in your head, and somehow everyone has already disagreed with you.
            </p>
            <p>
              This kind of anticipation can make it difficult to recognise your own preferences.
            </p>
            <p>
              You might dismiss an idea before exploring it because you already know it
              won&rsquo;t be approved of.
            </p>
            <p>
              You might feel guilty for wanting something that hasn&rsquo;t actually hurt
              anyone.
            </p>
            <p>
              You might find yourself explaining your decisions to people who haven&rsquo;t even
              questioned them.
            </p>
            <p>
              And sometimes, you might stop wanting something simply because wanting it feels
              like too much trouble.
            </p>
            <p>
              It&rsquo;s important not to confuse all guilt with unhealthy family pressure.
              Guilt can be useful when we&rsquo;ve genuinely hurt someone or failed to meet a
              responsibility we care about.
            </p>
            <p>
              But guilt can also arise when we violate an expectation, even if that expectation
              isn&rsquo;t one we personally agree with.
            </p>
            <p>
              Feeling guilty about a decision doesn&rsquo;t automatically mean the decision is
              wrong.
            </p>
            <p>It does, however, give you something worth examining.</p>
            <p>What exactly do you believe you&rsquo;ve done wrong?</p>
            <p>Have you hurt someone? Broken a commitment? Ignored a responsibility?</p>
            <p>Or have you made a choice that someone else might not approve of?</p>
            <p>
              These are different situations, even if they produce a very similar feeling.
            </p>
            <p>
              And learning to distinguish between them can be an important part of developing a
              stronger sense of identity.
            </p>
            <p>
              If guilt about what your parents have done for you is part of this, there&rsquo;s
              more in{" "}
              <Link href="/blog/parents-sacrifice-and-family-guilt">When Your Parents&rsquo; Sacrifice Becomes Your Responsibility</Link>.
            </p>

            <h2>5. Independence doesn&rsquo;t have to mean rejecting your family</h2>

            <p>
              I think conversations about family pressure sometimes fall into an unhelpful
              binary.
            </p>
            <p>
              Either you follow your family&rsquo;s expectations, or you become completely
              independent of them.
            </p>
            <p>Either you prioritise your family, or you prioritise yourself.</p>
            <p>But real relationships are rarely that straightforward.</p>
            <p>
              You can make decisions independently and still care about how they affect other
              people.
            </p>
            <p>You can disagree with your parents and still respect them.</p>
            <p>
              You can value traditions while questioning whether every tradition needs to
              determine your future.
            </p>
            <p>
              And you can choose to make sacrifices for your family without assuming that
              you&rsquo;re always the person who should have to make them.
            </p>
            <p>
              The important question is whether these decisions involve genuine choice.
            </p>
            <p>
              A person who lives with their parents, consults them regularly and considers their
              opinions can still have a strong sense of autonomy.
            </p>
            <p>
              Someone who lives independently, earns their own money and makes decisions without
              consulting anyone can still be deeply influenced by the fear of disappointing their
              family.
            </p>
            <p>
              Autonomy isn&rsquo;t measured by how far away you live from your parents.
            </p>
            <p>
              Moving out might change the logistics. It doesn&rsquo;t automatically uninstall
              every expectation you&rsquo;ve internalised.
            </p>
            <p>
              The question is whether you can consider your family&rsquo;s wishes without
              automatically treating them as your own.
            </p>
            <p>
              And whether you can disagree without feeling that the relationship itself is under
              threat.
            </p>

            <h2>6. Why this gets particularly complicated for Indian women</h2>

            <p>
              Family expectations don&rsquo;t operate in a vacuum. They&rsquo;re shaped by
              culture, gender, financial circumstances and the roles people are expected to
              occupy.
            </p>
            <p>
              And in many Indian families, women may find their personal decisions closely
              connected to broader expectations about respectability, marriage, mobility and
              family responsibility.
            </p>
            <p>
              A woman might be encouraged to pursue a career, provided it doesn&rsquo;t
              interfere with other expectations.
            </p>
            <p>
              She might be financially independent but still expected to consult family members
              about where she lives.
            </p>
            <p>
              She might be told that her happiness matters while being given a fairly specific
              description of what that happiness should look like.
            </p>
            <p>
              And sometimes, these expectations are communicated as concern rather than control.
            </p>
            <p>The family wants her to be safe.</p>
            <p>They want her to have a good future.</p>
            <p>They want her to make sensible decisions.</p>
            <p>
              These concerns can be genuine. But genuine concern doesn&rsquo;t automatically
              mean that someone else&rsquo;s understanding of your future should take precedence
              over your own.
            </p>
            <p>
              A 2026 qualitative study by Ali Abbas Rizvi examined women&rsquo;s autonomy in
              household decision-making in Kurla, Maharashtra. Based on interviews with 24
              married women, the study explored decisions involving marriage, reproductive
              health, mobility, social visits, household expenses and living arrangements.
            </p>
            <p>
              The findings highlighted how women&rsquo;s decision-making was negotiated within
              intergenerational hierarchies, gender norms and socioeconomic circumstances.
              Extended family influence appeared in different forms across joint and nuclear
              households.
            </p>
            <p>
              The study is small and context-specific, so it cannot tell us how all Indian
              families function. But it offers a useful illustration of why household structure
              alone doesn&rsquo;t determine someone&rsquo;s autonomy.
            </p>
            <p>
              You can read{" "}
              <a
                href="https://www.tandfonline.com/doi/abs/10.1080/13691058.2026.2627461"
                target="_blank"
                rel="noopener noreferrer"
              >
                the study on women&rsquo;s decision-making in India
              </a>
              .
            </p>
            <p>
              What I find particularly interesting is that family influence doesn&rsquo;t always
              look like someone explicitly telling you what to do.
            </p>
            <p>
              Sometimes, it&rsquo;s an expectation you already know how to anticipate.
            </p>
            <p>You know which choices will be questioned.</p>
            <p>You know which decisions will require an explanation.</p>
            <p>You know who will be disappointed and who will be expected to adjust.</p>
            <p>
              And if you&rsquo;ve spent years navigating these expectations, you might begin to
              organise your life around them without consciously deciding to.
            </p>
            <p>Which raises a difficult question.</p>
            <p>
              If a woman technically has the freedom to make a decision but knows that exercising
              that freedom will come with significant emotional, financial or relational
              consequences, how much freedom does she experience in practice?
            </p>
            <p>It&rsquo;s worth asking without assuming that every family operates in the same way.</p>
            <p>Because the point isn&rsquo;t to declare families good or bad.</p>
            <p>
              It&rsquo;s to understand how decisions are actually made, whose preferences carry
              the most weight, and who bears the cost when people disagree.
            </p>
            <p>
              For more on how family values are defined, and what they ask of the people inside
              a family, see{" "}
              <Link href="/blog/does-your-course-teach-you-family-values">Does your course teach you family values?</Link>
            </p>

            <h2>7. So, how do you figure out what you actually want?</h2>

            <p>
              Unfortunately, there isn&rsquo;t a psychological worksheet that will reveal your
              authentic self in seven easy steps.
            </p>
            <p>I know. Very inconsiderate of psychology.</p>
            <p>
              But there are questions that can help you start examining the difference between
              your preferences and your expectations.
            </p>

            <h3>Start by noticing your automatic answers.</h3>

            <p>
              When someone asks what you want to do with your life, what is your immediate
              response?
            </p>
            <p>
              Is it something you&rsquo;ve genuinely considered? Or is it the answer you know
              will be easiest to explain?
            </p>
            <p>
              Neither answer automatically tells you whether a choice is right for you. But
              noticing the difference can help you identify where exploration might be useful.
            </p>
            <p>
              If you also find yourself justifying every choice, you may recognise yourself in{" "}
              <Link href="/blog/why-do-i-keep-explaining-myself-to-my-parents">Why Do I Keep Explaining Myself to My Parents?</Link>
            </p>

            <h3>Ask yourself what you would choose if disagreement were allowed.</h3>

            <p>Not if nobody ever felt disappointed. That&rsquo;s probably unrealistic.</p>
            <p>
              But if disagreement didn&rsquo;t automatically mean disrespect, and if changing
              your mind didn&rsquo;t make you ungrateful, what possibilities would you be more
              willing to consider?
            </p>

            <h3>Separate your values from the rules attached to them.</h3>

            <p>You might genuinely value family.</p>
            <p>But does valuing family mean agreeing with every family decision?</p>
            <p>You might value respect.</p>
            <p>But does respect mean never expressing disagreement?</p>
            <p>You might value responsibility.</p>
            <p>
              But does being responsible mean taking care of everyone at the expense of your own
              needs?
            </p>
            <p>
              Sometimes, the underlying value is important to you. It&rsquo;s the particular
              rule you&rsquo;ve learnt to associate with it that deserves another look.
            </p>

            <h3>
              Give yourself permission to explore without immediately committing.
            </h3>

            <p>
              Marcia&rsquo;s framework is useful here because exploration and commitment are
              distinct processes.
            </p>
            <p>
              You don&rsquo;t have to know exactly what you want before you&rsquo;re allowed to
              consider alternatives.
            </p>
            <p>
              You can investigate a career without committing to it. You can question a belief
              without rejecting it. You can reconsider an expectation without deciding that your
              family is wrong about everything.
            </p>
            <p>
              Sometimes, the most useful thing you can do is allow yourself to consider a
              possibility without immediately turning it into a decision.
            </p>
            <p>
              And finally, remember that developing an identity isn&rsquo;t a one-time event.
            </p>
            <p>
              Your preferences can change. Your circumstances can change. Something you once
              rejected might eventually become meaningful to you, and something you once wanted
              might no longer fit.
            </p>
            <p>That doesn&rsquo;t necessarily mean you don&rsquo;t know yourself.</p>
            <p>It means knowing yourself involves continuing to pay attention.</p>

            <h2>The point isn&rsquo;t to become someone your family doesn&rsquo;t recognise</h2>

            <p>
              It&rsquo;s tempting to think that developing your own identity means becoming
              completely different from the people who raised you.
            </p>
            <p>But that&rsquo;s not necessarily the goal.</p>
            <p>Some of the values you inherited will genuinely matter to you.</p>
            <p>Some traditions will feel meaningful.</p>
            <p>Some responsibilities will be ones you willingly accept.</p>
            <p>
              And you might eventually choose a life that looks remarkably similar to the one
              your family imagined for you.
            </p>
            <p>
              The difference is that you&rsquo;ll have had the opportunity to examine those
              choices and make them your own.
            </p>
            <p>
              You can be grateful for what your family has given you without believing that
              gratitude means surrendering the right to make decisions about your future.
            </p>
            <p>
              You can love your parents without agreeing with every opinion they hold.
            </p>
            <p>
              You can consider your family&rsquo;s needs without assuming that yours must always
              come second.
            </p>
            <p>
              And you can become someone they didn&rsquo;t anticipate without becoming someone
              who no longer cares about them.
            </p>
            <p>
              Because perhaps developing an identity isn&rsquo;t about deciding whether your
              family or you matter more.
            </p>
            <p>Perhaps it&rsquo;s about making room for both.</p>
            <p>
              And if you&rsquo;ve spent a long time being the good child, the responsible one or
              the person who always understands, you might have a little exploring to do.
            </p>
            <p>Not because everything you&rsquo;ve learnt is wrong.</p>
            <p>
              But because you deserve the opportunity to decide which parts of it you actually
              want to carry forward.
            </p>
            {/* TODO: link to the Indian families service page once it is live. */}
          </motion.div>

          {/* Sources */}
          <div className="blog-body mt-12">
            <h2>Sources</h2>
            <ul>
              <li>
                Ryan, R. M., &amp; Deci, E. L. (2000). Self-determination theory and the
                facilitation of intrinsic motivation, social development, and well-being.{" "}
                <em>American Psychologist</em>, 55(1), 68&ndash;78.{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/11392867/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pubmed.ncbi.nlm.nih.gov/11392867/
                </a>
              </li>
              <li>
                Haines, J. E., &amp; Schutte, N. S. (2023). Parental conditional regard: A
                meta-analysis. <em>Journal of Adolescence</em>, 95(2).{" "}
                <a
                  href="https://doi.org/10.1002/jad.12111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1002/jad.12111
                </a>
              </li>
              <li>
                Rizvi (2026). We decide together, but not equally: extended family influence on
                women&rsquo;s decision-making in India.{" "}
                <em>Culture, Health &amp; Sexuality</em>.{" "}
                <a
                  href="https://www.tandfonline.com/doi/abs/10.1080/13691058.2026.2627461"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.tandfonline.com/doi/abs/10.1080/13691058.2026.2627461
                </a>
              </li>
              <li>
                Overview of Marcia&rsquo;s identity statuses: Lifespan Human Development (open
                textbook), chapter &ldquo;Identity&rdquo;.{" "}
                <a
                  href="https://openbooks.library.baylor.edu/lifespanhumandevelopment/chapter/identity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://openbooks.library.baylor.edu/lifespanhumandevelopment/chapter/identity/
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
              onClick={() => trackWhatsApp("blog - family pressure and identity")}
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

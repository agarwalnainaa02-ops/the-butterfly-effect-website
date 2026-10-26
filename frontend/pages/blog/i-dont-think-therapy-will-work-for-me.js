import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/i-dont-think-therapy-will-work-for-me`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "“I Don’t Think Therapy Will Work for Me.” But How Do You Know?",
  description:
    "Think therapy won’t work for you? Explore common misconceptions about therapy, why it sometimes doesn’t help, and how to know whether it’s worth trying.",
  datePublished: "2026-10-27",
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
      name: "“I Don’t Think Therapy Will Work for Me.” But How Do You Know?",
      item: POST_URL,
    },
  ],
};

export default function IDontThinkTherapyWillWorkForMe() {
  return (
    <>
      <Head>
        <title>Think Therapy Won&rsquo;t Work for You? What to Consider</title>
        <meta
          name="description"
          content="Think therapy won’t work for you? Explore common misconceptions about therapy, why it sometimes doesn’t help, and how to know whether it’s worth trying."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Think Therapy Won’t Work for You? What to Consider"
        />
        <meta
          property="og:description"
          content="Think therapy won’t work for you? Explore common misconceptions about therapy, why it sometimes doesn’t help, and how to know whether it’s worth trying."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-27" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Think+Therapy+Won%27t+Work+for+You%3F`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Think Therapy Won’t Work for You? What to Consider"
        />
        <meta
          name="twitter:description"
          content="Think therapy won’t work for you? Explore common misconceptions about therapy, why it sometimes doesn’t help, and how to know whether it’s worth trying."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Think+Therapy+Won%27t+Work+for+You%3F`}
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
              27 October 2026
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
              &ldquo;I Don&rsquo;t Think Therapy Will Work for Me.&rdquo; But How Do You Know?
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
              By Naina Agarwal &middot; Published 27 October 2026
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
                &ldquo;I don&rsquo;t think I need therapy.&rdquo;
              </p>
              <p>
                &ldquo;I don&rsquo;t think talking to a stranger will help.&rdquo;
              </p>
              <p>
                &ldquo;I already know what my problems are. I just need to fix them.&rdquo;
              </p>
              <p>And my personal favourite:</p>
              <p>&ldquo;I don&rsquo;t think therapy will work for me.&rdquo;</p>
              <p>Interesting.</p>
              <p>Have you tried it?</p>
              <p>&ldquo;No.&rdquo;</p>
              <p>
                Okay. So we&rsquo;re ruling out an entire form of support based on&hellip; a
                feeling?
              </p>
              <p>
                Now, I&rsquo;m not saying everyone needs therapy. I&rsquo;m not saying therapy is
                the answer to every problem, that every therapist is good at their job, or that a
                few sessions will magically transform your life.
              </p>
              <p>
                But if you&rsquo;ve never tried therapy, how do you know it won&rsquo;t work for
                you?
              </p>
              <p>
                And if you have tried it and it didn&rsquo;t help, what exactly didn&rsquo;t work?
              </p>
              <p>
                Because these are two very different conversations. And I think we need to have
                both.
              </p>

              <h2>1. &ldquo;I already know what my problems are.&rdquo;</h2>

              <p>You know why you overthink.</p>
              <p>You know why you struggle to say no.</p>
              <p>You know why you keep choosing people who are emotionally unavailable.</p>
              <p>
                You&rsquo;ve watched the videos. Read the books. Sent the Instagram posts to your
                friends with a very specific &ldquo;this is literally me.&rdquo;
              </p>
              <p>
                You have the self-awareness. You can explain your childhood, identify your triggers
                and probably use the word dysregulation in a sentence.
              </p>
              <p>And yet, somehow, you&rsquo;re still doing the thing.</p>
              <p>So what&rsquo;s missing?</p>
              <p>
                Sometimes, it&rsquo;s not insight. It&rsquo;s the ability to respond differently
                when the situation actually happens.
              </p>
              <p>
                Knowing that you people-please because you fear rejection doesn&rsquo;t
                automatically make it easier to disappoint someone.
              </p>
              <p>
                Understanding that your thoughts aren&rsquo;t facts doesn&rsquo;t stop your brain
                from presenting a three-hour documentary about why that person hasn&rsquo;t
                replied.
              </p>
              <p>
                Recognising a pattern is important. But recognising it and changing it are
                different tasks.
              </p>
              <p>
                This is one reason therapy involves more than simply talking about your problems.
                Depending on the approach and your needs, therapy may involve identifying patterns,
                examining beliefs, practising new behaviours, developing emotional regulation
                skills and reviewing what happens when you try something differently.
              </p>
              <p>
                In other words, we aren&rsquo;t necessarily looking for another explanation of why
                you do what you do.
              </p>
              <p>
                Sometimes, we&rsquo;re trying to work out what happens between &ldquo;I know
                better&rdquo; and &ldquo;I did it again.&rdquo;
              </p>
              <p>And that gap can be worth exploring.</p>

              <h2>2. &ldquo;I can just talk to my friends.&rdquo;</h2>

              <p>Please continue talking to your friends.</p>
              <p>
                Tell them what happened. Ask for support. Cry on their sofa. Send the voice note.
                Get the chai.
              </p>
              <p>
                Human connection matters, and you do not need to turn every difficult feeling into
                a therapy appointment.
              </p>
              <p>But friendship and therapy serve different purposes.</p>
              <p>
                Your friends know you personally. They may offer affection, shared experiences,
                reassurance and perspectives shaped by their own lives.
              </p>
              <p>
                A therapist brings training and a structured process for understanding
                psychological difficulties and working towards agreed goals.
              </p>
              <p>
                That process may involve asking questions you haven&rsquo;t considered, noticing
                patterns that are difficult to see from inside your own experience, examining
                assumptions or helping you practise specific skills.
              </p>
              <p>
                It also offers a relationship with different boundaries from those of a friendship.
              </p>
              <p>
                Your friend might tell you that your ex is an idiot. A therapist might help you
                explore why the relationship was difficult to leave, what you experienced within it
                and what you want to do differently in the future.
              </p>
              <p>Both conversations can be useful. They simply aren&rsquo;t doing the same job.</p>
              <p>
                And no, going to therapy doesn&rsquo;t mean your friends are suddenly disqualified
                from listening to you.
              </p>
              <p>
                It means you can have support from different sources, each with its own role.
              </p>

              <h2>3. &ldquo;I don&rsquo;t have problems serious enough for therapy.&rdquo;</h2>

              <p>
                There&rsquo;s a strange idea that you need to reach a particular level of
                suffering before you&rsquo;re allowed to ask for help.
              </p>
              <p>
                As though there&rsquo;s a minimum amount of emotional damage required before you
                can book an appointment.
              </p>
              <p>
                You should be fine until you&rsquo;re not fine. Then you should wait until
                you&rsquo;re really not fine. And only then, perhaps, consider doing something
                about it.
              </p>
              <p>We are excellent at making help unnecessarily difficult to access.</p>
              <p>
                Therapy is used for a range of mental health difficulties, but people also seek
                help with relationship concerns, life transitions, persistent patterns of behaviour
                and difficulties that affect their everyday functioning.
              </p>
              <p>
                You don&rsquo;t have to wait until you&rsquo;re unable to get out of bed to
                explore why you feel unhappy.
              </p>
              <p>You don&rsquo;t have to be in a crisis to work on boundaries.</p>
              <p>
                You don&rsquo;t need a diagnosis to want to understand why the same relationship
                dynamic keeps showing up in your life.
              </p>
              <p>
                And you don&rsquo;t need to prove that your problems are serious enough to deserve
                attention.
              </p>
              <p>
                The more useful question is whether something is troubling you, affecting your life
                or getting in the way of the changes you want to make.
              </p>
              <p>If it is, seeking help is an option.</p>
              <p>
                That doesn&rsquo;t mean therapy is necessary for every difficulty. Sometimes,
                rest, practical changes, social support or a change in circumstances may be more
                appropriate.
              </p>
              <p>
                But you are allowed to consider your options before things become unbearable.
              </p>

              <h2>
                4. &ldquo;I don&rsquo;t want to pay someone to tell me things I already
                know.&rdquo;
              </h2>

              <p>Fair.</p>
              <p>
                If you spend an hour explaining your problems and leave with nothing except a
                reminder to practise self-care, I can understand why you&rsquo;d question the
                experience.
              </p>
              <p>
                But effective therapy is not supposed to be a particularly expensive version of
                someone nodding while you speak.
              </p>
              <p>The process should have a purpose that you and your therapist can discuss.</p>
              <p>
                What are you hoping to change? What might be maintaining the difficulty? What
                approaches could help? How will you evaluate whether the work is useful?
              </p>
              <p>
                The answers will depend on your concerns and the type of therapy you&rsquo;re
                receiving.
              </p>
              <p>
                For some people, the work may involve understanding recurring patterns. For others,
                it may involve practising specific skills, gradually approaching avoided
                situations, examining unhelpful thinking patterns or making difficult decisions.
              </p>
              <p>
                Sometimes, understanding something in a new way is valuable. Sometimes, the
                important part is what you do with that understanding.
              </p>
              <p>
                And sometimes, the first thing you discover is that your current circumstances are
                contributing to your distress in ways that cannot be solved by changing your
                mindset alone.
              </p>
              <p>
                Therapy should not turn every legitimate problem into a personal thinking error.
              </p>
              <p>You do not need to be taught to tolerate everything. Some things need to change.</p>

              <h2>5. &ldquo;What if I go to therapy and it doesn&rsquo;t work?&rdquo;</h2>

              <p>Now this is a fair question.</p>
              <p>
                Therapy isn&rsquo;t a guaranteed outcome. Its effectiveness varies depending on
                the person, the difficulties being addressed, the intervention, the therapeutic
                relationship and other factors.
              </p>
              <p>
                Research supports therapy for a range of psychological difficulties, but that does
                not mean every treatment works for every person.
              </p>
              <p>And the quality of the experience matters.</p>
              <p>
                Do you feel that your therapist understands what you&rsquo;re trying to
                communicate? Have you discussed what you want from therapy? Does the approach make
                sense to you? Are you working towards goals that matter to you?
              </p>
              <p>
                The therapeutic relationship is an important part of therapy. Research has
                consistently examined the association between the working alliance&mdash;how well
                the therapist and client collaborate on goals and the work itself&mdash;and
                treatment outcomes.
              </p>
              <p>
                That doesn&rsquo;t mean you must like everything your therapist says or feel
                comfortable every second of every session.
              </p>
              <p>
                It does mean you should have room to ask questions, disagree, raise concerns and
                discuss whether the work is helping.
              </p>
              <p>
                If therapy doesn&rsquo;t seem to be working, that deserves a conversation.
              </p>
              <p>
                Perhaps the goals need to be clearer. Perhaps the approach needs adjusting. Perhaps
                you and your therapist aren&rsquo;t a good fit. Perhaps a different intervention
                or another form of support would be more appropriate.
              </p>
              <p>
                And sometimes, despite reasonable efforts, a particular course of therapy may not
                help as hoped.
              </p>
              <p>That is possible.</p>
              <p>
                But &ldquo;therapy didn&rsquo;t work for me&rdquo; is a conclusion worth
                understanding, not an experience you need to predict before you&rsquo;ve begun.
              </p>

              <h2>6. &ldquo;I&rsquo;ve tried therapy before. It didn&rsquo;t help.&rdquo;</h2>

              <p>
                This is different from deciding therapy won&rsquo;t work without having
                experienced it.
              </p>
              <p>And I don&rsquo;t want to dismiss it.</p>
              <p>
                Perhaps you felt judged. Perhaps you spent session after session talking without
                understanding what the work was meant to achieve. Perhaps the therapist
                didn&rsquo;t understand your circumstances, the approach didn&rsquo;t fit your
                needs, or you simply didn&rsquo;t feel that the relationship was right.
              </p>
              <p>
                Perhaps you did the work and didn&rsquo;t experience the change you hoped for.
              </p>
              <p>
                You are allowed to be disappointed by an experience of therapy. You are not
                obligated to keep seeing a therapist whose approach isn&rsquo;t helping you.
              </p>
              <p>
                But one difficult experience does not necessarily tell you how every other
                therapeutic experience will go.
              </p>
              <p>It may help to ask yourself a few questions:</p>
              <ul>
                <li>Did I feel understood by the therapist?</li>
                <li>Did we agree on what I wanted help with?</li>
                <li>Did I understand the approach we were using and why?</li>
                <li>Did we discuss whether I was making progress?</li>
                <li>Was the treatment appropriate for the difficulties I was experiencing?</li>
                <li>
                  Was there something about the timing, circumstances or practical demands that
                  made the work difficult?
                </li>
                <li>What would I want to be different if I tried again?</li>
              </ul>
              <p>
                These questions aren&rsquo;t intended to place the responsibility for unsuccessful
                therapy on you.
              </p>
              <p>The therapist and the treatment approach matter, too.</p>
              <p>
                They can simply help you identify what you learned from the experience and what you
                might look for if you decide to seek support again.
              </p>
              <p>You don&rsquo;t have to give therapy another chance.</p>
              <p>
                But you are allowed to make a different choice based on what you understand now,
                rather than assuming the next experience must be identical to the last.
              </p>

              <h2>7. &ldquo;I don&rsquo;t want to talk about my childhood.&rdquo;</h2>

              <p>
                Good news: therapy does not automatically require you to lie on a couch and
                recount every childhood memory in chronological order.
              </p>
              <p>
                Not every approach focuses on childhood. Not every concern requires an extensive
                exploration of the past.
              </p>
              <p>
                Depending on the problem and the treatment approach, a therapist may focus on what
                is happening in your life now, the patterns that maintain your difficulties, the
                skills you want to develop or the decisions you are trying to make.
              </p>
              <p>
                Your past may be relevant. It may help explain how certain beliefs or responses
                developed.
              </p>
              <p>
                But understanding your history is not the same as assuming that every problem can
                be traced back to it.
              </p>
              <p>
                You can also ask your therapist why a particular topic is relevant to your
                treatment.
              </p>
              <p>
                Therapy should be a collaborative process, not an interrogation in which
                you&rsquo;re expected to answer every question without understanding its purpose.
              </p>
              <p>
                And no, you do not need to uncover a repressed memory, identify a childhood
                villain or have a dramatic breakthrough in every session.
              </p>
              <p>Sometimes, progress is much less cinematic.</p>
              <p>
                Sometimes, you notice that you handled a difficult conversation differently this
                week.
              </p>
              <p>
                Sometimes, you realise you don&rsquo;t need to respond to every uncomfortable
                thought.
              </p>
              <p>Sometimes, you make a decision you have been avoiding for months.</p>
              <p>No background music required.</p>

              <h2>
                8. &ldquo;I don&rsquo;t think therapy can change my situation.&rdquo;
              </h2>

              <p>This is an important distinction.</p>
              <p>Therapy cannot change everything about your circumstances.</p>
              <p>
                It cannot make someone love you, force your parents to understand you, guarantee
                that a relationship will work or remove every practical barrier in your life.
              </p>
              <p>
                It cannot turn an unsafe environment into a safe one simply by teaching you to
                think differently.
              </p>
              <p>And it should not pretend otherwise.</p>
              <p>
                Sometimes, distress is a response to difficult circumstances. Financial insecurity,
                family pressure, discrimination, relationship conflict and limited choices can have
                real consequences for a person&rsquo;s well-being.
              </p>
              <p>
                The work may involve understanding what is within your control, finding ways to
                cope with what isn&rsquo;t, identifying practical options and deciding what
                changes are possible.
              </p>
              <p>
                Sometimes, you may discover that a situation requires action beyond therapy.
              </p>
              <p>
                Sometimes, the most useful outcome is not learning to feel differently about a
                situation. It is becoming clearer about what you want to do next.
              </p>
              <p>
                Therapy can help you examine your responses and options. It cannot guarantee that
                the world around you will cooperate.
              </p>
              <p>
                That is not a reason to dismiss it. It is a reason to have realistic expectations
                of what it can offer.
              </p>
              <p>
                If relationship patterns are what you&rsquo;re hoping to understand, you can read
                more about{" "}
                <Link
                  href="/therapy-for-relationship-issues"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "3px" }}
                >
                  therapy for relationship issues
                </Link>
                .
              </p>

              <h2>So, how do you know whether therapy is worth trying?</h2>

              <p>You don&rsquo;t need to be completely convinced before your first session.</p>
              <p>
                You also don&rsquo;t need to force yourself into therapy because someone told you
                that you need it.
              </p>
              <p>You can start by asking yourself:</p>
              <p>What am I hoping will be different?</p>
              <p>
                Perhaps you want to understand a recurring pattern. Perhaps you want help with a
                specific difficulty. Perhaps you&rsquo;re tired of trying the same solutions and
                getting the same results.
              </p>
              <p>
                You can discuss these concerns with a therapist, ask how they would approach the
                work and decide whether it feels appropriate for you.
              </p>
              <p>
                You can ask about the evidence for the proposed treatment, what the process
                involves, how progress might be evaluated and what alternatives are available.
              </p>
              <p>You can also decide that now isn&rsquo;t the right time.</p>
              <p>
                Choosing not to pursue therapy is still a choice. The point isn&rsquo;t to make
                everyone a therapy client.
              </p>
              <p>
                It&rsquo;s to make that choice with enough information to understand what
                you&rsquo;re accepting or declining.
              </p>
              <p>
                And if you do begin, remember that therapy is not something a therapist does to
                you while you sit there waiting to be fixed.
              </p>
              <p>
                It&rsquo;s collaborative work. Your therapist brings training and a structured
                approach; you bring your experiences, priorities, questions and participation.
              </p>
              <p>You don&rsquo;t need to arrive knowing exactly what you want to discuss.</p>
              <p>You do deserve to understand what you&rsquo;re working towards.</p>

              <h2>
                Maybe therapy won&rsquo;t work for you. But let&rsquo;s not decide that based on
                a stereotype.
              </h2>

              <p>
                Perhaps you&rsquo;ve imagined therapy as someone asking how you feel every five
                minutes.
              </p>
              <p>
                Perhaps you think it will involve blaming your parents, analysing your childhood or
                telling you to meditate.
              </p>
              <p>Perhaps you believe you should be able to solve everything independently.</p>
              <p>
                Or perhaps you&rsquo;ve had an experience that genuinely left you disappointed.
              </p>
              <p>
                Those are different starting points. They deserve different conversations.
              </p>
              <p>
                Therapy has evidence supporting its use for many psychological difficulties. It
                also has limitations, and its outcomes are not guaranteed.
              </p>
              <p>The answer isn&rsquo;t that everyone needs therapy.</p>
              <p>
                The answer is that you deserve a more informed basis for deciding whether it&rsquo;s
                right for you than an assumption about what happens inside a therapy room.
              </p>
              <p>You can be curious without being convinced.</p>
              <p>You can ask questions without committing to treatment.</p>
              <p>
                And you can decide that therapy isn&rsquo;t for you after considering what it
                actually involves&mdash;not just what you&rsquo;ve heard about it.
              </p>
              <p>
                Because sometimes, the most useful first step isn&rsquo;t deciding that therapy
                will change your life.
              </p>
              <p>
                It&rsquo;s being willing to find out whether it could help with the part of your
                life you&rsquo;re struggling to change.
              </p>
            </motion.div>

            {/* Research note */}
            <div className="mt-10">
              <p
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "0.85rem",
                  color: "var(--tbe-dark-brown)",
                  opacity: 0.65,
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                Research on the therapeutic alliance shows an association between how well
                therapist and client collaborate and treatment outcomes. It cannot show that a good
                alliance causes improvement, and individual results vary. The American Psychological
                Association&rsquo;s review summarises evidence that therapy helps with a range of
                mental and behavioural health conditions; it does not mean that every approach
                works for every difficulty or every person.
              </p>
            </div>

            {/* Scope / safety note */}
            <div className="mt-6">
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
                I work with concerns within my scope of practice. If you need a different level of
                support, I&rsquo;ll help you explore appropriate options. If you&rsquo;re in
                immediate danger in India, call 112.
              </p>
            </div>

            {/* Sources */}
            <div className="blog-body mt-10">
              <h2>Sources</h2>
              <ol>
                <li>
                  Fl&uuml;ckiger, C., Del Re, A. C., Wampold, B. E., &amp; Horvath, A. O. (2018).
                  The alliance in adult psychotherapy: A meta-analytic synthesis.{" "}
                  <em>Psychotherapy</em>, 55(4).{" "}
                  <a
                    href="https://doi.org/10.1037/pst0000172"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.1037/pst0000172
                  </a>
                </li>
                <li>
                  American Psychological Association. (2012, August 9). Research shows
                  psychotherapy is effective but underutilized [Press release].{" "}
                  <a
                    href="https://www.apa.org/news/press/releases/2012/08/psychotherapy-effective"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.apa.org/news/press/releases/2012/08/psychotherapy-effective
                  </a>
                </li>
                <li>
                  American Psychological Association. Resolution on the recognition of
                  psychotherapy effectiveness.{" "}
                  <a
                    href="https://www.apa.org/about/policy/resolution-psychotherapy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.apa.org/about/policy/resolution-psychotherapy
                  </a>
                </li>
              </ol>
            </div>

            {/* TODO: link to a future "what to expect in your first therapy session" post */}

            {/* Book a Session */}
            <div className="mt-10 mb-12">
              <ul
                className="blog-body mb-6 pl-0"
                style={{
                  listStyle: "disc",
                  paddingLeft: "1.4rem",
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  color: "var(--tbe-dark-brown)",
                  opacity: 0.88,
                  lineHeight: 1.8,
                }}
              >
                <li><strong>Format:</strong> Online video sessions</li>
                <li><strong>Availability:</strong> Across India</li>
                <li><strong>Languages:</strong> Hindi and English</li>
                <li><strong>Fees:</strong> Starting at &#8377;1,000 per session</li>
                <li><strong>First step:</strong> A free 15-minute introductory call</li>
              </ul>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("blog-therapy-wont-work")}
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

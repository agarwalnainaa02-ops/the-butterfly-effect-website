import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const PAGE_URL = `${SITE_URL}/therapy-for-relationship-issues`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Therapy for Relationship Issues",
      url: PAGE_URL,
      description:
        "Online therapy for relationship patterns, attachment, communication, boundaries and people-pleasing. Sessions in Hindi and English, across India.",
      areaServed: "India",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Therapy for relationship issues",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const Divider = () => (
  <div
    className="max-w-4xl mx-auto px-6 md:px-12 my-2"
    style={{ height: "1px", background: "rgba(47,35,35,0.13)" }}
  />
);

const bodyStyle = {
  fontFamily: "'EB Garamond', serif",
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  color: "var(--tbe-dark-brown)",
  opacity: 0.88,
  lineHeight: 1.8,
};

export default function TherapyForRelationshipIssues() {
  return (
    <>
      <Head>
        <title>Online Therapy for Relationship Issues in India</title>
        <meta
          name="description"
          content="Online therapy for relationship patterns, attachment, communication, boundaries and people-pleasing. Sessions in Hindi and English, across India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Online Therapy for Relationship Issues in India" />
        <meta
          property="og:description"
          content="Online therapy for relationship patterns, attachment, communication, boundaries and people-pleasing. Sessions in Hindi and English, across India."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Therapy+for+Relationship+Issues&sub=Naina+Agarwal+%C2%B7+Online+Therapist`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Therapy for Relationship Issues in India" />
        <meta
          name="twitter:description"
          content="Online therapy for relationship patterns, attachment, communication, boundaries and people-pleasing. Sessions in Hindi and English, across India."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Therapy+for+Relationship+Issues&sub=Naina+Agarwal+%C2%B7+Online+Therapist`}
        />
        <JsonLd data={schema} />
      </Head>

      <div className="App">
        <Navbar visible={true} />

        <main id="main-content">

          {/* ── Hero ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 pt-40 md:pt-52 pb-16 md:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="eyebrow-body mb-8"
            >
              Mental Health Practitioner &mdash; Naina Agarwal
            </motion.p>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="h-display mb-12"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}
            >
              Therapy for Relationship Issues
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="space-y-6 max-w-2xl"
              style={bodyStyle}
            >
              <p>
                You can know all the psychology and still text your best friend,
                &ldquo;Girl, what does this mean?&rdquo;
              </p>
              <p>
                You know communication is important. You know you should have boundaries.
                You&rsquo;ve probably told someone else not to settle for the bare minimum.
              </p>
              <p>
                And yet, here you are. Analysing a three-word reply. Rehearsing a
                conversation you may never have. Saying &ldquo;it&rsquo;s fine&rdquo; when it
                is, in fact, not fine. Or wondering why you keep finding yourself in
                relationships that feel different at first and strangely familiar later.
              </p>
              <p>
                Perhaps you get attached quickly. Perhaps you struggle to trust people.
                Perhaps you are always the understanding one, the accommodating one, the
                one who can see everyone&rsquo;s perspective except, occasionally, your own.
              </p>
              <p>
                Or perhaps you&rsquo;re simply tired of trying to figure out whether a
                relationship is difficult because relationships are difficult or because
                something about this particular dynamic isn&rsquo;t working for you.
              </p>
              <p>
                You don&rsquo;t have to become a perfectly healed, endlessly patient,
                emotionally unbothered person to have a healthier relationship. (Also,
                we&rsquo;re not sure that person exists.)
              </p>
              <p>
                But understanding how you relate to others can change how you navigate
                relationships&mdash;and the choices you make within them.
              </p>
            </motion.div>
          </section>

          <Divider />

          {/* ── So, what's happening in your relationships? ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                So, what&rsquo;s happening in your relationships?
              </h2>
              <div className="space-y-6 max-w-2xl mb-8" style={bodyStyle}>
                <p>
                  Relationship difficulties don&rsquo;t always arrive with dramatic
                  arguments and a soundtrack.
                </p>
                <p>Sometimes, they look like:</p>
              </div>
              <ul
                className="space-y-3 max-w-2xl mb-8 pl-0"
                style={{ listStyle: "disc", paddingLeft: "1.4rem", ...bodyStyle }}
              >
                <li>
                  Reading a message repeatedly to work out whether the full stop means
                  they&rsquo;re angry.
                </li>
                <li>Saying yes because saying no feels like it might end the relationship.</li>
                <li>Wanting reassurance but feeling embarrassed about needing it.</li>
                <li>
                  Explaining your point for the eighth time because surely, surely, a
                  ninth explanation will do the trick.
                </li>
                <li>
                  Feeling responsible for fixing someone&rsquo;s mood, even when you
                  weren&rsquo;t the reason it changed.
                </li>
                <li>
                  Getting so caught up in whether someone likes you that you forget to
                  ask whether you actually like them.
                </li>
                <li>
                  Avoiding difficult conversations until the issue has become a collection
                  of seventeen smaller issues and one spectacular argument.
                </li>
                <li>
                  Knowing you need a boundary and then feeling guilty the moment you try
                  to establish one.
                </li>
              </ul>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>Sound familiar?</p>
                <p>
                  These experiences can have different explanations. Sometimes they
                  reflect learned relationship patterns. Sometimes they are responses to
                  uncertainty or past experiences. Sometimes the other person really is
                  being inconsistent, dismissive or difficult to understand.
                </p>
                <p>
                  Not every uncomfortable relationship experience is evidence of an
                  attachment issue. And not every relationship problem is a personal
                  growth opportunity.
                </p>
                <p>
                  Sometimes you have a pattern worth exploring. Sometimes you have a
                  legitimate problem with the situation you&rsquo;re in. Often, it&rsquo;s
                  worth understanding both.
                </p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── Why do we keep doing things we know aren't helping? ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                Why do we keep doing things we know aren&rsquo;t helping?
              </h2>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>Knowing better and doing differently are two separate psychological tasks.</p>
                <p>
                  You can know that you don&rsquo;t need to reply immediately and still
                  feel compelled to check your phone. You can know that another
                  person&rsquo;s disappointment isn&rsquo;t an emergency and still feel an
                  overwhelming urge to make everything okay.
                </p>
                <p>
                  This is partly because our responses in emotionally charged situations
                  aren&rsquo;t always guided by calm, deliberate reasoning. Thoughts,
                  emotions, learned expectations and immediate attempts to reduce
                  discomfort can all influence what we do next.
                </p>
                <p>
                  For example, imagine someone you care about suddenly becomes less
                  responsive.
                </p>
                <p>
                  You might interpret the change as rejection. That interpretation brings
                  up anxiety, so you send another message, seek reassurance or mentally
                  replay your last conversation.
                </p>
                <p>
                  The reassurance might help briefly. But if every uncertain moment leads
                  to another round of checking, the uncertainty can become even harder to
                  sit with.
                </p>
                <p>
                  Cognitive behavioural approaches examine how situations,
                  interpretations, emotions and behaviours interact. The point isn&rsquo;t
                  to convince yourself that everything is fine. It&rsquo;s to examine what
                  you know, what you&rsquo;re assuming and whether your response is helping
                  you navigate the situation.
                </p>
                <p>
                  Because sometimes the message really is ambiguous. Sometimes your
                  interpretation needs examining. And sometimes you need to ask the person
                  a question instead of conducting a full psychological assessment of
                  their punctuation.
                </p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── What about attachment styles? ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                What about attachment styles?
              </h2>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>Anxious. Avoidant. Disorganised.</p>
                <p>
                  The internet has given us a vocabulary for relationship experiences.
                  Unfortunately, it has also made it remarkably easy to diagnose yourself,
                  your ex and the person your ex dated after you.
                </p>
                <p>
                  Attachment research can help us understand how people experience
                  closeness, respond to perceived rejection and navigate security in
                  relationships. But attachment patterns are not fixed identities, and a
                  few behaviours cannot tell us everything about a person.
                </p>
                <p>
                  Getting attached quickly doesn&rsquo;t automatically mean you have an
                  anxious attachment style.
                </p>
                <p>Wanting space doesn&rsquo;t automatically make someone avoidant.</p>
                <p>
                  And having a difficult relationship doesn&rsquo;t necessarily mean your
                  childhood has finally come to collect its dues.
                </p>
                <p>
                  In therapy, attachment can be one useful lens among several. We can
                  explore how you experience closeness, what happens when you feel
                  uncertain, what you expect from other people and how these expectations
                  influence your behaviour.
                </p>
                <p>
                  The goal isn&rsquo;t to find your attachment label and put it in your
                  Instagram bio.
                </p>
                <p>It&rsquo;s to understand yourself more clearly.</p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── What can we actually work on? ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-12"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                What can we actually work on?
              </h2>

              <div className="space-y-14 max-w-2xl">

                {/* 01 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    01.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    The patterns you keep finding yourself in
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>Different relationship. Different person. Same familiar feeling.</p>
                    <p>
                      Maybe you tend to over-accommodate, withdraw when things become
                      uncomfortable or become preoccupied with whether someone is losing
                      interest.
                    </p>
                    <p>
                      We&rsquo;ll explore what happens before, during and after these
                      patterns, what might be maintaining them and what alternatives you
                      could practise.
                    </p>
                    <p>
                      Not to prove that you&rsquo;re the problem. To understand which parts
                      of the dynamic are within your control&mdash;and which aren&rsquo;t.
                    </p>
                  </div>
                </div>

                {/* 02 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    02.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Communication that goes beyond &ldquo;just communicate&rdquo;
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>Communication is important. Thank you, every relationship advice post on the internet.</p>
                    <p>
                      But how you communicate matters, as do the circumstances in which
                      you&rsquo;re communicating.
                    </p>
                    <p>
                      Do you bring up concerns directly or wait until resentment does the
                      talking? Do you become defensive when you feel criticised? Do you
                      withdraw because you need space, or because you don&rsquo;t know how
                      to continue the conversation?
                    </p>
                    <p>
                      Psychological approaches can help you recognise these patterns and
                      develop more constructive ways of expressing concerns, listening,
                      negotiating disagreements and repairing ruptures.
                    </p>
                    <p>
                      Research on couples, including the Gottman Institute&rsquo;s work,
                      describes interaction patterns such as criticism, contempt,
                      defensiveness and stonewalling. These concepts can help explain why
                      certain conflict cycles become unproductive.
                    </p>
                    <p>
                      Individual therapy can help you examine your own responses and
                      practise different skills. It cannot guarantee that another person
                      will change their behaviour.
                    </p>
                    <p>
                      Because unfortunately, learning excellent communication skills does
                      not give you remote control over somebody else&rsquo;s emotional
                      maturity.
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    03.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Boundaries without the guilt spiral
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>You know you can say no.</p>
                    <p>
                      You just wish your nervous system would stop behaving as though
                      declining a dinner invitation is a declaration of war.
                    </p>
                    <p>
                      Perhaps you feel responsible for other people&rsquo;s reactions.
                      Perhaps you worry that expressing a preference will make you
                      difficult, selfish or unlovable.
                    </p>
                    <p>
                      We can explore the beliefs and fears that make boundaries difficult,
                      practise assertiveness and work on tolerating the discomfort that
                      can come with disappointing someone.
                    </p>
                    <p>
                      The aim isn&rsquo;t to stop caring about other people&rsquo;s
                      feelings. It&rsquo;s to understand that their feelings and your
                      decisions can coexist.
                    </p>
                    <p>
                      Someone can be disappointed with your boundary without that boundary
                      being wrong.
                    </p>
                  </div>
                </div>

                {/* 04 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    04.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    The overthinking, reassurance and uncertainty
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>
                      What did they mean? Are they upset? Should I ask? What if asking
                      makes it worse? What if not asking makes it worse?
                    </p>
                    <p>
                      And now we&rsquo;re on page fourteen of a conversation that
                      hasn&rsquo;t happened.
                    </p>
                    <p>
                      Cognitive behavioural techniques can help examine interpretations
                      and identify patterns of checking, reassurance-seeking or avoidance
                      that may maintain anxiety.
                    </p>
                    <p>
                      ACT offers another perspective: learning to make room for
                      uncomfortable thoughts and feelings without automatically acting on
                      them, while choosing responses that reflect your values.
                    </p>
                    <p>
                      This doesn&rsquo;t mean ignoring genuine concerns or convincing
                      yourself that everything is fine.
                    </p>
                    <p>
                      It means developing the ability to distinguish between a problem
                      that needs addressing and an uncomfortable feeling that doesn&rsquo;t
                      require an immediate solution.
                    </p>
                  </div>
                </div>

                {/* 05 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    05.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Self-worth, people-pleasing and the fear of being difficult
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>
                      If you&rsquo;ve learnt to be the understanding one, asking for
                      something can feel surprisingly uncomfortable.
                    </p>
                    <p>
                      You might minimise your needs, justify your preferences or keep
                      adjusting until you can no longer remember what you wanted in the
                      first place.
                    </p>
                    <p>
                      We can explore how you understand your own worth within
                      relationships, what you believe makes you lovable and why certain
                      situations make it difficult to advocate for yourself.
                    </p>
                    <p>
                      The aim isn&rsquo;t to become someone who never compromises. Healthy
                      relationships require flexibility from both people.
                    </p>
                    <p>
                      It&rsquo;s to recognise when compromise is mutual and when
                      you&rsquo;re repeatedly the only person expected to make it.
                    </p>
                  </div>
                </div>

                {/* 06 */}
                <div>
                  <p
                    className="font-display italic"
                    style={{ color: "var(--tbe-dusty-coral)", fontSize: "0.9rem", marginBottom: "0.35rem" }}
                  >
                    06.
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Figuring out whether the relationship is right for you
                  </h3>
                  <div className="space-y-5" style={bodyStyle}>
                    <p>Not every relationship needs to be saved.</p>
                    <p>
                      Some need better communication. Some need changes in behaviour. Some
                      reveal genuine incompatibilities. And some leave you trying so hard
                      to make things work that you rarely stop to ask whether you want
                      them to.
                    </p>
                    <p>
                      Therapy can help you clarify your needs, values and
                      non-negotiables, examine the evidence you&rsquo;re working with and
                      consider your options.
                    </p>
                    <p>
                      You don&rsquo;t need to prove that someone is a terrible person
                      before deciding that a relationship isn&rsquo;t right for you.
                    </p>
                    <p>
                      And you don&rsquo;t have to turn every breakup into a lesson about
                      what you did wrong.
                    </p>
                    <p>
                      Sometimes, two people are not compatible. Sometimes, a relationship
                      has become harmful. Sometimes, you simply want different things.
                    </p>
                    <p>
                      Understanding which situation you&rsquo;re in matters more than
                      finding a sufficiently profound explanation for it.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── What does therapy actually look like? ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                What does therapy actually look like?
              </h2>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>
                  There&rsquo;s no universal formula for relationship difficulties, because
                  there&rsquo;s no universal relationship.
                </p>
                <p>
                  Our work begins with understanding what you&rsquo;re experiencing, the
                  patterns you&rsquo;ve noticed and what you&rsquo;d like to change.
                </p>
                <p>
                  My approach is eclectic. I draw on CBT, DBT, ACT and IFS-informed work,
                  and I keep learning so I can support the people I work with better.
                </p>
                <p>
                  We might examine recurring thoughts and behaviours, explore your
                  expectations about closeness and conflict, practise communication skills
                  or work on responding differently to guilt, anxiety and uncertainty.
                </p>
                <p>
                  We won&rsquo;t assume that every problem comes from childhood, that every
                  difficult feeling needs fixing or that you need to become better at
                  tolerating situations that are genuinely not working for you.
                </p>
                <p>
                  And no, you don&rsquo;t need to arrive with a perfectly organised
                  explanation of your problems.
                </p>
                <p>
                  &ldquo;I don&rsquo;t know why I keep doing this&rdquo; is a perfectly
                  reasonable place to start.
                </p>
              </div>

              {/* Safety note */}
              <div className="max-w-2xl mt-10">
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "0.88rem",
                    color: "var(--tbe-warm-brown)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  If you feel unsafe in your relationship, or someone is controlling,
                  threatening or harming you, your safety comes first. I work with
                  concerns within my scope of practice. If you need a different level of
                  support, I&rsquo;ll help you explore appropriate options. If
                  you&rsquo;re in immediate danger in India, call 112.
                </p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── One last thing ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-10"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                One last thing.
              </h2>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>
                  You can work on yourself without making yourself responsible for
                  everyone else&rsquo;s behaviour.
                </p>
                <p>
                  You can become better at communicating without accepting disrespect.
                </p>
                <p>
                  You can understand someone&rsquo;s perspective without agreeing with it.
                </p>
                <p>You can love someone and still need boundaries.</p>
                <p>
                  And you can recognise your own patterns without assuming that every
                  relationship problem is your fault.
                </p>
                <p>
                  The goal isn&rsquo;t to become so good at relationships that nothing ever
                  hurts. It&rsquo;s to understand yourself well enough to navigate the
                  difficult parts without continually abandoning yourself in the process.
                </p>
                <p>
                  You deserve relationships in which you can be considerate without being
                  constantly accommodating, emotionally open without being ashamed of your
                  needs, and connected to someone without becoming disconnected from
                  yourself.
                </p>
                <p>You don&rsquo;t have to figure all of that out alone.</p>
                <p>Let&rsquo;s start there.</p>
                <p>
                  If you&rsquo;re ready to explore what&rsquo;s been happening in your
                  relationships, you&rsquo;re welcome to message me.
                </p>
                <p>You don&rsquo;t need to have it all figured out first.</p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── Related reading ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-12">
            <p className="eyebrow mb-6">Related reading</p>
            <ul className="space-y-3 list-none p-0">
              <li>
                <Link
                  href="/blog/why-do-i-get-attached-so-quickly"
                  className="font-display text-lg transition-colors duration-500"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
                >
                  Why Do I Get Attached So Quickly? &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/why-do-i-keep-explaining-myself-to-my-parents"
                  className="font-display text-lg transition-colors duration-500"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
                >
                  Why Do I Keep Explaining Myself to My Parents? &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/things-its-okay-to-want-in-marriage"
                  className="font-display text-lg transition-colors duration-500"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
                >
                  Things It&rsquo;s Okay to Want in a Marriage &rarr;
                </Link>
              </li>
            </ul>
          </section>

          <Divider />

          {/* ── Booking block ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <ul
                className="space-y-3 max-w-2xl mb-10 pl-0"
                style={{ listStyle: "disc", paddingLeft: "1.4rem", ...bodyStyle }}
              >
                <li><strong>Format:</strong> Online video sessions</li>
                <li><strong>Availability:</strong> Across India</li>
                <li><strong>Languages:</strong> Hindi and English</li>
                <li><strong>Fees:</strong> Starting at &#8377;1,000 per session</li>
                <li><strong>First step:</strong> A free 15-minute introductory call</li>
              </ul>
              <div className="flex flex-col items-start gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("service-relationships")}
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  Book a Session &rarr;
                </a>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "var(--tbe-warm-brown)",
                    letterSpacing: "0.03em",
                  }}
                >
                  No pressure. Just a message to begin.
                </p>
              </div>
            </motion.div>
          </section>

        </main>

        <Footer />
        <StickyWhatsApp />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

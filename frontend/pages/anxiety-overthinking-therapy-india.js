import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import StickyWhatsApp from "../src/components/StickyWhatsApp";
import JsonLd from "../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const PAGE_URL = `${SITE_URL}/anxiety-overthinking-therapy-india`;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Anxiety & Overthinking Therapy",
      item: PAGE_URL,
    },
  ],
};

const faqs = [
  {
    q: "Can online therapy help with anxiety and overthinking?",
    a: [
      "Online therapy can be a helpful option for many people experiencing anxiety. It provides an opportunity to understand your difficulties, work on unhelpful patterns, and develop different ways of responding to anxious thoughts and feelings.",
      "You can attend sessions from a private, comfortable space without having to travel to a clinic.",
      "Whether online therapy is appropriate for you depends on your individual needs and the level of support you’re looking for. If you’re unsure, we can discuss this during the introductory call.",
    ],
  },
  {
    q: "Do I need therapy if I’m functioning normally?",
    a: [
      "You don’t have to be in crisis for your experiences to matter.",
      "You can go to work, maintain relationships, meet deadlines and appear perfectly fine to everyone around you while spending an exhausting amount of time managing your thoughts and feelings.",
      "Sometimes, the more useful question isn’t whether you’re functioning. It’s how much effort it takes to keep functioning, and what that effort is costing you.",
      "If anxiety is affecting your sleep, relationships, decisions, or ability to enjoy your life, it’s worth exploring.",
    ],
  },
  {
    q: "How many sessions will I need for anxiety?",
    a: [
      "There’s no universal number. It depends on what you’re experiencing, your goals, and how therapy progresses.",
      "We’ll discuss what you’d like to work towards and review our progress together. Therapy should have direction, but I wouldn’t want to promise a particular outcome within a fixed number of sessions.",
    ],
  },
  {
    q: "What if I don’t know what to talk about in therapy?",
    a: [
      "That’s okay. You don’t need to arrive knowing exactly what’s wrong or what you want to change.",
      "We can start with what’s been difficult lately, a situation you can’t stop thinking about, or the feeling that something isn’t quite right even though you can’t explain why.",
      "You don’t need the right words. Finding them can be part of the work.",
    ],
  },
  {
    q: "Will therapy help me stop overthinking completely?",
    a: [
      "The goal isn’t necessarily to eliminate every anxious thought. Worry, uncertainty and self-doubt are part of being human.",
      "What we can work towards is recognising when your mind is caught in an unhelpful loop, responding differently, and spending less time trying to achieve certainty that might not be possible.",
      "You may still experience anxiety. But you can learn to make decisions, have conversations, and do things that matter to you without waiting for the anxiety to disappear first.",
    ],
  },
  {
    q: "Can therapy help with anxiety in relationships?",
    a: [
      "Yes. Anxiety can show up in relationships as fear of rejection, worries about disappointing someone, difficulty expressing your needs, or repeatedly trying to figure out how another person feels about you.",
      "Therapy can help you explore these patterns, understand what contributes to them, and practise different ways of responding.",
      "We’ll look at your experiences rather than assume that all relationship anxiety has the same explanation.",
    ],
  },
  {
    q: "What if I’ve tried therapy before and it hasn’t helped?",
    a: [
      "It can be frustrating to put time and effort into therapy and still feel stuck.",
      "There can be several reasons for this. Your goals might not have been clear, the approach might not have suited your needs, or there might have been difficulties in the therapeutic relationship. Sometimes, progress also takes longer than expected.",
      "It doesn’t automatically mean therapy can’t help you. It may be worth understanding what didn’t work previously and what you’d want to be different this time.",
      "We can discuss your previous experiences during the introductory call and consider whether working together would be appropriate.",
    ],
  },
];

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

const FaqItem = ({ q, a, index, open, onToggle }) => (
  <div className="border-t" style={{ borderColor: "rgba(47, 35, 35, 0.14)" }}>
    <button
      onClick={onToggle}
      className="w-full text-left flex items-start justify-between gap-8 py-7 md:py-8"
      aria-expanded={open}
      aria-controls={`anxiety-faq-${index}`}
      style={{ background: "transparent", border: "none", cursor: "pointer" }}
    >
      <h3
        className="font-display text-lg md:text-xl leading-snug pr-4 transition-colors duration-500"
        style={{ color: open ? "var(--tbe-deep-maroon)" : "var(--tbe-dark-wine)" }}
      >
        {q}
      </h3>
      <span
        className="font-display text-2xl shrink-0"
        style={{
          color: "var(--tbe-warm-brown)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 700ms ease",
          display: "block",
        }}
        aria-hidden="true"
      >
        +
      </span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="content"
          id={`anxiety-faq-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-8 max-w-2xl space-y-4" style={bodyStyle}>
            {a.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function AnxietyOverthinkingTherapyIndia() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Online Therapy for Anxiety &amp; Overthinking | Naina Agarwal</title>
        <meta
          name="description"
          content="Online therapy and counselling for anxiety and overthinking across India. Video sessions in Hindi and English with Naina Agarwal. Free 15-minute intro call."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:title" content="Online Therapy for Anxiety &amp; Overthinking | Naina Agarwal" />
        <meta
          property="og:description"
          content="Online therapy and counselling for anxiety and overthinking across India. Video sessions in Hindi and English with Naina Agarwal. Free 15-minute intro call."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Therapy+for+Anxiety+%26+Overthinking&sub=Naina+Agarwal+%C2%B7+Online+Therapist`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Therapy for Anxiety &amp; Overthinking | Naina Agarwal" />
        <meta
          name="twitter:description"
          content="Online therapy and counselling for anxiety and overthinking across India. Video sessions in Hindi and English with Naina Agarwal. Free 15-minute intro call."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Therapy+for+Anxiety+%26+Overthinking&sub=Naina+Agarwal+%C2%B7+Online+Therapist`}
        />

        <JsonLd data={breadcrumbSchema} />
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
              Mental Health Practitioner — Naina Agarwal
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="h-display mb-8"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}
            >
              Online Therapy for Anxiety and Overthinking in India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.9 }}
              className="mb-10"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.75,
                fontStyle: "italic",
              }}
            >
              When your brain just won&rsquo;t leave you alone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="space-y-6 max-w-2xl"
              style={bodyStyle}
            >
              <p>
                You replay the conversation. Think about what you should&rsquo;ve said. Wonder if they took it the wrong way. Rehearse how you&rsquo;ll handle the next one. And even after you&rsquo;ve figured out that you&rsquo;re probably overthinking, your brain refuses to cooperate.
              </p>
              <p>
                Maybe you&rsquo;re getting everything done. Maybe nobody around you would guess how much goes on in your head. Maybe you understand your patterns well enough to explain them to someone else, but that doesn&rsquo;t necessarily make them easier to deal with yourself.
              </p>
              <p>
                Because knowing why you&rsquo;re anxious and knowing what to do when anxiety shows up are two very different things.
              </p>
              <p>
                I&rsquo;m Naina Agarwal, and I run The Butterfly Effect. I offer online therapy for anxiety, overthinking, and the things that can make everyday life feel harder than it needs to be.
              </p>
              <p>
                Our work isn&rsquo;t about forcing yourself to think positively or becoming someone who never feels anxious. It&rsquo;s about understanding what&rsquo;s happening, recognising the patterns that keep you stuck, and learning to respond to them differently.
              </p>
              <p>You don&rsquo;t need to have everything figured out before you reach out.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="mt-10"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("anxiety page - top")}
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Book a Session →
              </a>
            </motion.div>
          </section>

          <Divider />

          {/* ── What anxiety can actually look like ── */}
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
                What anxiety can actually look like
              </h2>
              <div className="space-y-6 max-w-2xl mb-10" style={bodyStyle}>
                <p>
                  Anxiety doesn&rsquo;t always look like panic attacks or being visibly distressed. Sometimes, it looks like being the person who has thought of everything that could possibly go wrong.
                </p>
                <p>It can look like:</p>
              </div>
              <ul
                className="space-y-3 max-w-2xl mb-10 pl-0"
                style={{ listStyle: "disc", paddingLeft: "1.4rem", ...bodyStyle }}
              >
                <li>Replaying conversations long after they&rsquo;ve ended.</li>
                <li>Overthinking a decision even after you&rsquo;ve made it.</li>
                <li>Preparing for every possible outcome because uncertainty feels unbearable.</li>
                <li>Feeling guilty when you&rsquo;re resting because there&rsquo;s always something else you could be doing.</li>
                <li>Asking for reassurance, feeling better for a while, and then needing it again.</li>
                <li>Lying awake at night because your brain has decided it&rsquo;s the perfect time to review every embarrassing thing you&rsquo;ve done since 2014.</li>
                <li>Feeling tense or on edge even when nothing particularly bad is happening.</li>
                <li>Avoiding situations because the possibility of getting something wrong feels worse than missing out.</li>
                <li>Knowing that a thought probably isn&rsquo;t rational but still feeling like you need to do something about it.</li>
                <li>Spending so much time trying to understand how someone feels about you that you barely have the energy to think about how you feel about them.</li>
              </ul>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>You might relate to some of these, all of them, or none of them exactly.</p>
                <p>
                  You don&rsquo;t need to fit into a checklist to deserve support. And you don&rsquo;t need to wait until anxiety starts affecting every part of your life before you consider therapy.
                </p>
              </div>
            </motion.div>
          </section>

          {/* ── Why is it so difficult to stop overthinking? ── */}
          <section
            className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20"
            style={{ borderTop: "1px solid rgba(47,35,35,0.1)" }}
          >
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
                Why is it so difficult to stop overthinking?
              </h2>
              <div className="space-y-6 max-w-2xl" style={bodyStyle}>
                <p>
                  Here&rsquo;s something worth understanding: overthinking isn&rsquo;t always about not knowing enough. Sometimes, it&rsquo;s about trying to feel certain enough.
                </p>
                <p>
                  You might replay a conversation because you want to make sure you haven&rsquo;t upset anyone. You might plan for every possible outcome because being caught off guard feels awful. You might keep analysing a decision because making the wrong choice feels like something you should have been able to prevent.
                </p>
                <p>And sometimes, overthinking actually seems to help.</p>
                <p>
                  You analyse the situation, find an explanation, ask someone for reassurance, or convince yourself that everything is fine. The anxiety settles. For a little while, at least.
                </p>
                <p>Then something else happens, and you&rsquo;re back where you started.</p>
                <p>
                  This can become a cycle. Something makes you anxious, you try to get rid of that anxiety by thinking it through or seeking reassurance, and you feel better temporarily. Over time, you might find yourself relying on the same strategies more and more.
                </p>
                <p>
                  The problem isn&rsquo;t that you&rsquo;re deliberately making yourself anxious. It&rsquo;s that the things you do to feel better in the moment can sometimes keep the cycle going.
                </p>
                <p>
                  And no, the solution isn&rsquo;t simply to tell yourself to stop thinking about it. If that worked, you probably wouldn&rsquo;t be looking for a therapist.
                </p>
                <p>
                  In therapy, we can explore what&rsquo;s contributing to your anxiety, what you tend to do when it shows up, and how those responses affect you in the longer term.
                </p>
                <p>
                  The goal is to understand your patterns without turning every thought, feeling, or interaction into another thing you need to analyse.
                </p>
                <p>
                  Not every thought needs an answer. Not every possibility needs to be prepared for. And not every uncomfortable feeling needs to be fixed before you can get on with your day.
                </p>
                <p>Learning to respond differently takes practice. It&rsquo;s something we can work on together.</p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── How we can work on anxiety together ── */}
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
                How we can work on anxiety together
              </h2>
              <div className="space-y-6 max-w-2xl mb-12" style={bodyStyle}>
                <p>I don&rsquo;t believe therapy should follow a one-size-fits-all approach.</p>
                <p>
                  People are different. The things they struggle with are different. And what works for one person might not work for another.
                </p>
                <p>
                  My approach to therapy is eclectic. I draw on different therapeutic modalities, including Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), Acceptance and Commitment Therapy (ACT), and Internal Family Systems (IFS)-informed work, depending on the person&rsquo;s needs and the concerns we&rsquo;re working through.
                </p>
                <p>What this looks like in practice depends on you.</p>
              </div>

              <div className="space-y-10 max-w-2xl">
                <div>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Understanding your patterns
                  </h3>
                  <p style={bodyStyle}>
                    We&rsquo;ll explore the situations that trigger your anxiety, the thoughts that follow, how your body responds, and what you tend to do to manage the discomfort. The point isn&rsquo;t to analyse everything about yourself. It&rsquo;s to understand the patterns that are actually affecting your life.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Working with difficult thoughts and emotions
                  </h3>
                  <p style={bodyStyle}>
                    Sometimes, you know a thought isn&rsquo;t necessarily true but still find yourself reacting to it as though it is. We can work on recognising these patterns and developing different ways of responding to difficult thoughts and feelings.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Learning to tolerate uncertainty
                  </h3>
                  <p style={bodyStyle}>
                    You might find yourself putting off decisions, seeking reassurance, or avoiding situations because you can&rsquo;t guarantee how they&rsquo;ll turn out. We&rsquo;ll explore ways to navigate uncertainty without needing to have every possible outcome figured out first.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Understanding relationship patterns
                  </h3>
                  <p style={bodyStyle}>
                    If anxiety shows up in your relationships, we can explore how you respond to conflict, uncertainty, rejection, or the possibility of disappointing someone. We&rsquo;ll work towards understanding these patterns and finding ways to respond that feel more helpful to you.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                      color: "var(--tbe-dark-wine)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Making changes outside the therapy room
                  </h3>
                  <p style={bodyStyle}>
                    Therapy isn&rsquo;t just about understanding why something happens. It&rsquo;s also about figuring out what you can do differently when it happens again. Depending on your goals, we might work on practical strategies, behavioural changes, or ways of approaching situations you&rsquo;ve been avoiding.
                  </p>
                </div>
              </div>

              <div className="space-y-6 max-w-2xl mt-12" style={bodyStyle}>
                <p>
                  Our sessions will be guided by your concerns, your goals, and what we&rsquo;re working towards together.
                </p>
                <p>
                  The aim isn&rsquo;t to give you a collection of coping techniques and send you on your way. It&rsquo;s to help you develop a better understanding of yourself and build ways of responding to life&rsquo;s difficulties that work for you.
                </p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── Online anxiety therapy with Naina Agarwal ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-8"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                Online anxiety therapy with Naina Agarwal
              </h2>
              <p className="max-w-2xl mb-8" style={bodyStyle}>
                If you&rsquo;re considering therapy for anxiety or overthinking, here&rsquo;s what you need to know.
              </p>
              <ul
                className="space-y-3 max-w-2xl mb-8 pl-0"
                style={{ listStyle: "disc", paddingLeft: "1.4rem", ...bodyStyle }}
              >
                <li><strong>Format:</strong> Online video sessions</li>
                <li><strong>Availability:</strong> Across India</li>
                <li><strong>Session duration:</strong> 50&ndash;60 minutes</li>
                <li><strong>Languages:</strong> English and Hindi</li>
                <li><strong>Fees:</strong> Starting at &#8377;1,000 per session</li>
                <li><strong>First step:</strong> A free 15-minute introductory call</li>
              </ul>
              <div className="space-y-6 max-w-2xl mb-10" style={bodyStyle}>
                <p>
                  The introductory call is an opportunity to briefly discuss what&rsquo;s bringing you to therapy, what you&rsquo;re looking for, and whether working together seems like a good fit.
                </p>
                <p>
                  You don&rsquo;t need to have a clear explanation for everything you&rsquo;re experiencing. And you don&rsquo;t have to commit to ongoing sessions during the call.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp("anxiety page - intro call")}
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  Book Your Free Introductory Call →
                </a>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    color: "var(--tbe-dark-brown)",
                    opacity: 0.55,
                    letterSpacing: "0.03em",
                  }}
                >
                  No pressure. Just a conversation to begin.
                </p>
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── FAQ ── */}
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
                Questions you might have before starting therapy
              </h2>
              <div style={{ borderBottom: "1px solid rgba(47,35,35,0.14)" }}>
                {faqs.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    index={i}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </motion.div>
          </section>

          <Divider />

          {/* ── Closing CTA ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="h-display mb-8"
                style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.8rem)" }}
              >
                You don&rsquo;t have to figure everything out before asking for help.
              </h2>
              <div className="space-y-6 max-w-2xl mb-10" style={bodyStyle}>
                <p>
                  Maybe you&rsquo;ve spent months trying to understand yourself. Maybe you know exactly why you react the way you do, but still struggle when those reactions show up in real life.
                </p>
                <p>Maybe you&rsquo;re tired of spending so much time inside your own head.</p>
                <p>You don&rsquo;t need to wait until things get worse to do something about it.</p>
                <p>
                  If anxiety and overthinking are taking up more space in your life than you&rsquo;d like, we can start by understanding what&rsquo;s happening and figuring out what might help.
                </p>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("anxiety page - closing")}
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                Book a Session →
              </a>
              <p
                className="font-display italic text-2xl md:text-3xl mt-12"
                style={{ color: "var(--tbe-warm-brown)", opacity: 0.8 }}
              >
                The Butterfly Effect &mdash; therapy that follows you, not a script.
              </p>
            </motion.div>
          </section>

          <Divider />

          {/* ── Related reading ── */}
          <section className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-12">
            <p className="eyebrow mb-6">Related reading</p>
            <ul className="space-y-3 list-none p-0">
              <li>
                <Link
                  href="/blog/why-you-cant-stop-overthinking-at-night"
                  className="font-display text-lg transition-colors duration-500"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
                >
                  Why You Can&rsquo;t Stop Overthinking at Night →
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/am-i-burnt-out-or-just-tired"
                  className="font-display text-lg transition-colors duration-500"
                  style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
                >
                  Am I Burnt Out or Just Tired? →
                </Link>
              </li>
            </ul>
          </section>

          {/* ── A note on care ── */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
            <p
              className="text-sm"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.5,
                letterSpacing: "0.02em",
              }}
            >
              A note on care: I work with concerns within my scope of practice. If you need a different level of support, I&rsquo;ll help you explore appropriate options. If you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>
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

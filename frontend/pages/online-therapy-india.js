import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import BookingDialog from "../src/components/BookingDialog";
import JsonLd from "../src/components/JsonLd";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "The Butterfly Effect",
  description:
    "Online therapy and counselling in India with Naina Agarwal, Counselling Psychologist. Working with anxiety, overthinking, relationships, burnout, and identity via video call.",
  url: `${SITE_URL}/online-therapy-india`,
  telephone: "+919989640090",
  email: "agarwalnainaa02@gmail.com",
  areaServed: { "@type": "Country", name: "India" },
  serviceType: [
    "Online Therapy",
    "Online Counselling",
    "Counselling Psychology",
    "Anxiety Therapy",
    "Relationship Counselling",
    "Burnout Support",
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online",
    serviceUrl: SITE_URL,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3, ease: "easeOut" } },
};

export default function OnlineTherapyIndia() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookClick = useCallback(() => setBookingOpen(true), []);

  return (
    <>
      <Head>
        <title>Online Therapy in India — The Butterfly Effect</title>
        <meta
          name="description"
          content="Online therapy and counselling in India with Naina Agarwal, Counselling Psychologist. Video sessions for anxiety, overthinking, relationships, burnout, and identity — available across India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/online-therapy-india`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Online Therapy in India — The Butterfly Effect" />
        <meta
          property="og:description"
          content="Online therapy and counselling in India with Naina Agarwal, Counselling Psychologist. Video sessions for anxiety, overthinking, relationships, burnout, and identity."
        />
        <meta property="og:url" content={`${SITE_URL}/online-therapy-india`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Online+therapy+in+India&sub=Naina+Agarwal+%C2%B7+Counselling+Psychologist`}
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Online Therapy in India — The Butterfly Effect" />
        <meta
          name="twitter:description"
          content="Online therapy and counselling in India with Naina Agarwal, Counselling Psychologist."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Online+therapy+in+India&sub=Naina+Agarwal+%C2%B7+Counselling+Psychologist`}
        />

        {/* JSON-LD */}
        <JsonLd data={pageSchema} />
      </Head>

      <div style={{ minHeight: "100vh", backgroundColor: "var(--tbe-cream)", overflowX: "hidden" }}>
        <Navbar onBookClick={handleBookClick} visible={true} />

        {/* ── Hero ── */}
        <section
          className="relative pt-44 pb-24 px-6 md:px-12 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,231,209,0) 0%, rgba(243,231,209,0.55) 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 45% at 65% 30%, rgba(221,154,137,0.22), transparent 65%)",
            }}
          />
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-7">
              Online counselling
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
                color: "var(--tbe-dark-brown)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                marginBottom: "1.5rem",
                wordBreak: "break-word",
              }}
            >
              Online therapy in India
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.78,
                maxWidth: "38rem",
                lineHeight: 1.7,
              }}
            >
              Wherever you are in India, therapy is available — without a waiting room,
              a commute, or the particular anxiety of being seen walking into a clinic.
              Just a video call, and a space to actually talk.
            </motion.p>
          </motion.div>
        </section>

        <div
          className="max-w-3xl mx-auto px-6 md:px-12"
          style={{ paddingBottom: "6rem" }}
        >
          {/* ── Divider ── */}
          <div
            className="mb-20"
            style={{ height: "1px", background: "rgba(47,35,35,0.14)" }}
          />

          {/* ── Section 1: Who this is for ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="mb-20 md:mb-28"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">
              Who this is for
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display mb-8"
              style={{
                fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
                color: "var(--tbe-dark-wine)",
                letterSpacing: "-0.015em",
                lineHeight: 1.15,
              }}
            >
              You don't have to be in crisis to reach out
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-6"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.88,
                lineHeight: 1.8,
              }}
            >
              <p>
                Most people who reach out aren't at rock bottom. They're people who
                have been sitting with something — for months, sometimes years — and
                decided it was time to stop doing that alone. The overthinking that
                won't quiet. The anxiety that shows up before it has any right to. A
                pattern in relationships that keeps repeating. A version of yourself
                you can't quite reach.
              </p>
              <p>
                Online therapy in India works particularly well for people who are
                functioning — going to work, maintaining relationships, keeping things
                going — but carrying more than they let on. For people who have tried to
                logic their way through it. For people who know something needs to shift
                but aren't sure where to start.
              </p>
              <p>
                It also works for people in cities where English-speaking, psychologically
                trained therapists aren't easy to find — or for people who simply prefer
                the privacy of their own space.
              </p>
            </motion.div>
          </motion.section>

          {/* ── Section 2: What we work on ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="mb-20 md:mb-28"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">
              Areas of work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display mb-8"
              style={{
                fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
                color: "var(--tbe-dark-wine)",
                letterSpacing: "-0.015em",
                lineHeight: 1.15,
              }}
            >
              The things people carry
              <em style={{ color: "var(--tbe-warm-brown)" }}> but don't always name</em>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-6"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.88,
                lineHeight: 1.8,
              }}
            >
              <p>
                Anxiety — including the kind that lives underneath productivity and
                high functioning. The overthinking that colonises the hour before
                sleep. The physical tension that never fully releases.
              </p>
              <p>
                Relationship patterns — anxious attachment, the same dynamic with
                different people, the difficulty of being close without losing yourself.
                Family relationships, not just romantic ones.
              </p>
              <p>
                Burnout and the exhaustion that doesn't respond to rest. Work stress,
                but also the beliefs about worth and productivity that made it so hard
                to stop before the collapse.
              </p>
              <p>
                Identity — who you are outside of what you achieve, who you love, and
                what you're supposed to be. The pressure of being the person everyone
                else has decided you are. The quiet work of finding out.
              </p>
              <p>
                Self-worth. People pleasing. Emotional numbness. The patterns that
                don't have a name yet but have been there long enough that they feel
                like personality rather than history.
              </p>
            </motion.div>
          </motion.section>

          {/* ── Section 3: How online therapy works ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="mb-20 md:mb-28"
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">
              How it works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display mb-8"
              style={{
                fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)",
                color: "var(--tbe-dark-wine)",
                letterSpacing: "-0.015em",
                lineHeight: 1.15,
              }}
            >
              A video call and a quiet hour
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-6"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--tbe-dark-brown)",
                opacity: 0.88,
                lineHeight: 1.8,
              }}
            >
              <p>
                Sessions are 50–60 minutes, held via video call. All you need is a space
                where you won't be overheard and a reasonably stable internet connection.
                A phone works. A laptop works. The location is yours.
              </p>
              <p>
                I work integratively — drawing from CBT, DBT, and somatic approaches —
                but the frame is always person-centred. Meaning: the work follows what
                you bring, not a predetermined structure. Some sessions are more
                exploratory. Some are more focused. Most are somewhere in between.
              </p>
              <p>
                Online therapy works. Research consistently shows that outcomes in online
                counselling are comparable to in-person therapy for most presenting
                concerns. And practically, it removes several real barriers: travel time,
                physical accessibility, the visibility of entering a mental health clinic.
              </p>
              <p>
                Booking is via WhatsApp or email. There's no formal intake form. Just a
                message, and we'll find a time.
              </p>
            </motion.div>
          </motion.section>

          {/* ── Divider ── */}
          <div
            className="mb-20"
            style={{ height: "1px", background: "rgba(47,35,35,0.14)" }}
          />

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="text-center"
          >
            <p className="eyebrow mb-6">Begin</p>
            <h2
              className="font-display mb-8"
              style={{
                fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
                color: "var(--tbe-dark-wine)",
                letterSpacing: "-0.015em",
                lineHeight: 1.2,
              }}
            >
              You don't need the perfect words first.
            </h2>
            <p
              className="mb-10 text-lg"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: "var(--tbe-dark-brown)",
                opacity: 0.75,
                maxWidth: "28rem",
                margin: "0 auto 2.5rem",
              }}
            >
              Or go back to{" "}
              <Link
                href="/"
                style={{ color: "var(--tbe-warm-brown)", textUnderlineOffset: "4px" }}
              >
                the main site
              </Link>{" "}
              to learn more about how I work.
            </p>
            <button
              onClick={handleBookClick}
              className="btn-primary"
            >
              Begin a Conversation →
            </button>
            <p
              className="font-hand text-2xl mt-10"
              style={{ color: "var(--tbe-warm-brown)", opacity: 0.78 }}
            >
              available across India, online.
            </p>
          </motion.div>
        </div>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

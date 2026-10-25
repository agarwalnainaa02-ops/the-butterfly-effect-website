import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/am-i-burnt-out-or-just-tired`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Am I Burnt Out or Just Tired?",
  description:
    "Feeling exhausted all the time? Understand the difference between everyday tiredness, work-related burnout and other reasons you may not feel like yourself.",
  datePublished: "2026-04-28",
  dateModified: "2026-10-26",
  url: POST_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  author: {
    "@type": "Person",
    name: "Naina Agarwal",
    jobTitle: "Mental Health Practitioner",
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

export default function BurntOutOrJustTired() {
  return (
    <>
      <Head>
        <title>Am I Burnt Out or Just Tired? How to Tell the Difference</title>
        <meta
          name="description"
          content="Feeling exhausted all the time? Understand the difference between everyday tiredness, work-related burnout and other reasons you may not feel like yourself."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Am I Burnt Out or Just Tired? How to Tell the Difference"
        />
        <meta
          property="og:description"
          content="Feeling exhausted all the time? Understand the difference between everyday tiredness, work-related burnout and other reasons you may not feel like yourself."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-04-28" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Am+I+Burnt+Out+or+Just+Tired%3F`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Am I Burnt Out or Just Tired? How to Tell the Difference"
        />
        <meta
          name="twitter:description"
          content="Feeling exhausted all the time? Understand the difference between everyday tiredness, work-related burnout and other reasons you may not feel like yourself."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Am+I+Burnt+Out+or+Just+Tired%3F`}
        />

        <JsonLd data={blogPostingSchema} />
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
            28 April 2026
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
            Am I Burnt Out or Just Tired?
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
            By Naina Agarwal &middot; Published 28 April 2026 &middot; Updated 26 October 2026
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
              You wake up tired. You get through the day, but everything feels like an effort. You
              look forward to having some time off, only to find that even after resting, you
              don&rsquo;t quite feel like yourself.
            </p>
            <p>
              So you start wondering: Am I burnt out? Am I just tired? Am I being lazy?
            </p>
            <p>
              It&rsquo;s tempting to look for one clear answer. But tiredness and burnout
              aren&rsquo;t interchangeable, and feeling exhausted doesn&rsquo;t automatically mean
              you have burnout.
            </p>
            <p>Let&rsquo;s look at what the distinction actually involves.</p>

            <h2>What is the difference between being tired and being burnt out?</h2>

            <h3>Ordinary tiredness</h3>
            <p>
              Tiredness is a broad experience. You might feel physically drained after a demanding
              day, mentally exhausted after concentrating for hours, or low on energy after not
              sleeping enough.
            </p>
            <p>
              Sometimes, the explanation is fairly straightforward: you&rsquo;ve been doing a lot,
              haven&rsquo;t rested adequately, or are recovering from an illness.
            </p>
            <p>
              Rest and recovery may help, although the time it takes to feel better varies depending
              on what&rsquo;s causing the tiredness.
            </p>
            <p>
              Persistent tiredness, however, shouldn&rsquo;t automatically be dismissed as needing
              a holiday or a better routine. Sleep problems, medical conditions, medications and
              mental health difficulties can also contribute to fatigue.
            </p>

            <h3>Burnout</h3>
            <p>
              The{" "}
              <a
                href="https://www.who.int/news-room/detail/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"
                target="_blank"
                rel="noopener noreferrer"
              >
                World Health Organization (WHO) defines burnout
              </a>{" "}
              as an occupational phenomenon resulting from chronic workplace stress that has not
              been successfully managed.
            </p>
            <p>Its description includes three dimensions:</p>
            <ul>
              <li>
                <strong>Exhaustion:</strong> Feeling depleted of energy.
              </li>
              <li>
                <strong>Mental distance or cynicism:</strong> Feeling increasingly detached,
                negative or cynical about your job.
              </li>
              <li>
                <strong>Reduced professional efficacy:</strong> Feeling less effective in your work.
              </li>
            </ul>
            <p>
              The distinction matters: according to the WHO, burnout refers specifically to the
              occupational context. It is included in ICD-11 as an occupational phenomenon, not
              classified as a medical condition in itself.
            </p>
            <p>
              So, while the word burnout is often used casually to describe feeling overwhelmed by
              anything, the WHO definition is more specific. Feeling exhausted by family
              responsibilities, for example, may be a very real experience, but it doesn&rsquo;t
              automatically meet that occupational definition.
            </p>

            <h2>How can you tell what might be going on?</h2>
            <p>
              There isn&rsquo;t one question or symptom that can reliably tell you whether
              you&rsquo;re tired or burnt out. Instead, it helps to look at the pattern.
            </p>

            <h3>1. What happens when you get a chance to rest?</h3>
            <p>
              Think about what happens after a decent night&rsquo;s sleep, a lighter day or some
              time away from work.
            </p>
            <p>
              If you feel noticeably better, insufficient rest may be contributing to how you feel.
            </p>
            <p>
              If you don&rsquo;t feel better, that doesn&rsquo;t automatically mean you&rsquo;re
              burnt out. The fatigue might be ongoing, your recovery might take longer, or there
              may be another explanation.
            </p>
            <p>Rest is useful information, but it isn&rsquo;t a diagnostic test.</p>

            <h3>2. Is the exhaustion mainly connected to work?</h3>
            <p>
              Because occupational burnout is specifically related to work, it&rsquo;s worth paying
              attention to where the exhaustion shows up.
            </p>
            <p>For example:</p>
            <ul>
              <li>Do you feel increasingly detached from your job?</li>
              <li>
                Have you become unusually cynical about work that once mattered to you?
              </li>
              <li>
                Does work feel persistently overwhelming, even when you&rsquo;re trying to manage
                your workload?
              </li>
              <li>
                Are you finding it increasingly difficult to feel effective in your role?
              </li>
            </ul>
            <p>
              These experiences may be consistent with burnout, particularly when they&rsquo;re
              linked to ongoing workplace stress. They don&rsquo;t establish a diagnosis by
              themselves, but they can help you identify what needs attention.
            </p>

            <h3>3. Have you lost interest in things outside work, too?</h3>
            <p>Sometimes the difficulty isn&rsquo;t confined to work.</p>
            <p>
              You may find it harder to enjoy spending time with people, engaging in hobbies or
              doing things that usually matter to you. You might feel persistently low, hopeless or
              disconnected across different areas of life.
            </p>
            <p>
              These experiences can have several explanations, including depression, anxiety, sleep
              difficulties and prolonged stress. They shouldn&rsquo;t automatically be labelled
              burnout.
            </p>
            <p>
              If low mood or loss of interest persists, especially alongside changes in sleep,
              appetite, concentration or day-to-day functioning, consider speaking with a qualified
              mental health professional or doctor.
            </p>

            <h3>4. Is the problem exhaustion, or has your capacity to function changed?</h3>
            <p>Pay attention to what has become difficult.</p>
            <p>
              Are you physically tired after a long day? Are you struggling to concentrate because
              you&rsquo;ve been sleeping poorly? Are you finding it difficult to start tasks, make
              decisions or keep up with responsibilities? Have you started withdrawing from people
              or neglecting things you would usually manage?
            </p>
            <p>
              These experiences can overlap, and none of them points to one explanation on its own.
            </p>
            <p>
              Rather than deciding immediately that you&rsquo;re burnt out, try to describe what
              has changed, how long it&rsquo;s been happening and how much it&rsquo;s affecting
              your life. Those details can help you work out what kind of support might be useful.
            </p>

            <h2>What if even resting feels like work?</h2>
            <p>You finally have a free evening. Instead of enjoying it, you start thinking about everything you should be doing.</p>
            <p>
              You feel guilty for not working, but you also don&rsquo;t have the energy to work
              properly. You spend your time off worrying about the things waiting for you
              afterwards.
            </p>
            <p>
              This can make recovery difficult. You&rsquo;re technically not working, but
              you&rsquo;re still mentally preoccupied with work and its demands.
            </p>
            <p>If this sounds familiar, it may help to ask yourself:</p>
            <ul>
              <li>What am I expecting myself to get done?</li>
              <li>Are those expectations realistic given the time and energy I have?</li>
              <li>
                Is there something about my workload or working environment that needs to change?
              </li>
              <li>Do I feel guilty whenever I&rsquo;m not being productive?</li>
              <li>
                Am I trying to recover from an unsustainable situation without changing anything
                about that situation?
              </li>
            </ul>
            <p>
              These questions aren&rsquo;t a burnout test. They&rsquo;re a way to examine what
              might be contributing to the problem.
            </p>
            <p>
              Rest can matter, but rest alone may not resolve ongoing workplace stress if the
              conditions creating that stress remain unchanged.
            </p>

            <h2>What can you do if you think you&rsquo;re burnt out?</h2>

            <h3>1. Look at the demands being placed on you</h3>
            <p>
              If work is the main source of distress, consider the practical conditions around it.
            </p>
            <p>
              Is your workload manageable? Do you have enough time and resources to complete your
              responsibilities? Are expectations clear? Do you have meaningful opportunities to take
              breaks or ask for support?
            </p>
            <p>
              Where possible, consider changes to workload, priorities, boundaries or the support
              available to you.
            </p>
            <p>
              This matters because burnout is associated with chronic workplace stress that has not
              been successfully managed. Treating it solely as an individual problem to solve
              through better self-care can overlook the working conditions involved.
            </p>
            <p>
              Not everyone has the power to change those conditions immediately. Even so,
              identifying which demands are changeable, which require support and which are outside
              your control can help clarify your options.
            </p>

            <h3>2. Don&rsquo;t turn recovery into another productivity project</h3>
            <p>You don&rsquo;t need to make your rest as efficient as your work.</p>
            <p>
              You don&rsquo;t have to optimise every hour, follow a perfect morning routine or turn
              your weekends into a recovery programme.
            </p>
            <p>
              Start by looking at what is realistically possible. That might mean protecting a meal
              break, getting enough sleep, taking a short walk or allowing some time without a task
              attached to it.
            </p>
            <p>
              These steps may support your wellbeing, but they aren&rsquo;t guaranteed treatments
              for burnout. If the underlying demands remain excessive, individual habits may not be
              enough.
            </p>

            <h3>3. Take persistent fatigue seriously</h3>
            <p>
              If you&rsquo;re tired most of the time, don&rsquo;t assume that stress is the only
              explanation.
            </p>
            <p>
              Ongoing fatigue can have physical and psychological causes. A doctor can help assess
              whether sleep problems, medical conditions, medication effects or other factors might
              be contributing.
            </p>
            <p>
              This is especially important if the tiredness is new, persistent, worsening or
              interfering with your ability to function.
            </p>

            <h3>4. Consider what kind of support you need</h3>
            <p>
              If work-related stress is affecting your mood, relationships or ability to function,
              professional support may help you understand what you&rsquo;re experiencing and
              consider your options.
            </p>
            <p>
              Therapy can provide space to explore stress, expectations, coping patterns and
              boundaries. It may also help you recognise when your difficulties extend beyond
              work-related exhaustion.
            </p>
            <p>
              Where the workplace itself is contributing to the problem, individual therapy may be
              one part of the response rather than the whole solution.
            </p>

            <h2>You don&rsquo;t have to earn the right to rest</h2>
            <p>
              Whether you&rsquo;re tired, burnt out or dealing with something else, you don&rsquo;t
              need to wait until you can no longer function before taking your wellbeing seriously.
            </p>
            <p>You also don&rsquo;t need to settle on a label before asking for help.</p>
            <p>
              Start with what you know: how long you&rsquo;ve felt this way, what has changed,
              where the exhaustion shows up and how it&rsquo;s affecting your life.
            </p>
            <p>
              If you&rsquo;re struggling to make sense of persistent stress, low mood or feeling
              overwhelmed, the{" "}
              <Link
                href="/anxiety-overthinking-therapy-india"
                style={{ color: "var(--tbe-deep-maroon)", textUnderlineOffset: "4px" }}
              >
                anxiety therapy page
              </Link>{" "}
              may be a useful place to learn more about support available through therapy.
            </p>
          </motion.div>

          {/* Book a Session */}
          <div className="mt-10 mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("blog - burnout or tired")}
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

          {/* Sources */}
          <div className="blog-body">
            <h2>Sources</h2>
            <ul>
              <li>
                World Health Organization. Burn-out an &ldquo;occupational phenomenon&rdquo;:
                International Classification of Diseases. 28 May 2019.{" "}
                <a
                  href="https://www.who.int/news-room/detail/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.who.int/news-room/detail/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases
                </a>
              </li>
            </ul>
          </div>
        </article>

        {/* Disclaimer — small text above footer */}
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
            This article is for general educational purposes and is not a substitute for individual
            assessment or medical advice.
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

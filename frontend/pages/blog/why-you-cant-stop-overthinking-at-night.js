import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/why-you-cant-stop-overthinking-at-night`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why You Can't Stop Overthinking at Night",
  description:
    "Find out why your thoughts feel louder at night, how worry and rumination affect sleep, and what may help you break the cycle.",
  datePublished: "2026-05-15",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why You Can’t Stop Overthinking at Night",
      item: POST_URL,
    },
  ],
};

export default function OverthinkingAtNight() {
  return (
    <>
      <Head>
        <title>Why You Can&apos;t Stop Overthinking at Night | Naina Agarwal</title>
        <meta
          name="description"
          content="Find out why your thoughts feel louder at night, how worry and rumination affect sleep, and what may help you break the cycle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Why You Can't Stop Overthinking at Night | Naina Agarwal"
        />
        <meta
          property="og:description"
          content="Find out why your thoughts feel louder at night, how worry and rumination affect sleep, and what may help you break the cycle."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-05-15" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Why+You+Can%27t+Stop+Overthinking+at+Night`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why You Can't Stop Overthinking at Night | Naina Agarwal"
        />
        <meta
          name="twitter:description"
          content="Find out why your thoughts feel louder at night, how worry and rumination affect sleep, and what may help you break the cycle."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Why+You+Can%27t+Stop+Overthinking+at+Night`}
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
            15 May 2026
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
            Why You Can&rsquo;t Stop Overthinking at Night
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
            By Naina Agarwal &middot; Published 15 May 2026 &middot; Updated 26 October 2026
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

          {/* Body — part one */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.55 }}
            className="blog-body"
          >
            <p>
              It&rsquo;s 1:17 a.m. You have an early start tomorrow. You know you need to sleep.
            </p>
            <p>
              And somehow, this is the perfect time for your brain to bring up that awkward
              conversation from three years ago, the message you haven&rsquo;t replied to, and five
              different ways next week could go wrong.
            </p>
            <p>
              You tell yourself to stop thinking about it. Then you start thinking about why you
              can&rsquo;t stop thinking about it.
            </p>
            <p>
              If this sounds familiar, you&rsquo;re not alone. But there&rsquo;s a reason your
              thoughts can feel particularly difficult to manage when you&rsquo;re trying to fall
              asleep.
            </p>

            <h2>Why does overthinking get worse at night?</h2>

            <h3>1. Your mind has fewer distractions</h3>
            <p>
              During the day, your attention is divided between work, conversations, errands,
              notifications and the million other things competing for it.
            </p>
            <p>
              At night, those demands tend to quieten down. You have fewer external things to focus
              on, which can make internal experiences&mdash;thoughts, worries and
              memories&mdash;more noticeable.
            </p>
            <p>
              That doesn&rsquo;t necessarily mean your brain has been deliberately suppressing
              everything during the day. It may simply be that you have more opportunity to notice
              what you&rsquo;re thinking and feeling when things get quiet.
            </p>

            <h3>2. Worry and rumination can keep the mind activated</h3>
            <p>Not all overthinking looks the same.</p>
            <p>Worry tends to focus on the future:</p>
            <ul>
              <li>What if I mess up tomorrow?</li>
              <li>What if they&rsquo;re upset with me?</li>
              <li>What if something goes wrong?</li>
              <li>What am I going to do if this doesn&rsquo;t work out?</li>
            </ul>
            <p>
              Rumination often involves going over the past or trying to make sense of an
              experience:
            </p>
            <ul>
              <li>Why did I say that?</li>
              <li>Why do I always react like this?</li>
              <li>What did they really mean?</li>
              <li>What should I have done differently?</li>
            </ul>
            <p>
              These processes aren&rsquo;t identical, but both can become repetitive. You may feel
              as though you&rsquo;re working towards an answer when you&rsquo;re actually going
              over the same information without reaching a useful conclusion.
            </p>
            <p>
              Research on insomnia has found associations between repetitive thinking, such as{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3232458"
                target="_blank"
                rel="noopener noreferrer"
              >
                worry, rumination and thought suppression, and sleep difficulties
              </a>
              . A{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10909484/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2023 systematic review of cognitive models of insomnia
              </a>{" "}
              also points to cognitive arousal, the racing mind at bedtime, as a central theme
              across how insomnia is understood.
            </p>
            <p>
              That doesn&rsquo;t mean every person who overthinks at night has insomnia. It does
              help explain why a mind caught in repetitive thought can make settling down more
              difficult.
            </p>

            <h3>3. Trying to force a thought away can become another struggle</h3>
            <p>
              Consider what happens when you tell yourself, I absolutely cannot think about this
              right now.
            </p>
            <p>
              You have to keep checking whether you&rsquo;re still thinking about it. If the
              thought returns, you may feel frustrated or anxious. Then you&rsquo;re not only
              dealing with the original thought; you&rsquo;re also dealing with your reaction to
              having it.
            </p>
            <p>
              The aim doesn&rsquo;t have to be getting rid of every uncomfortable thought before
              you sleep. That can turn falling asleep into another task you feel you have to perform
              correctly.
            </p>
            <p>
              Sometimes, a more useful starting point is recognising that a thought has shown up
              without treating it as an instruction you must follow.
            </p>

            <h3>4. You might start worrying about sleep itself</h3>
            <p>
              After a few difficult nights, the problem can become bigger than the original worry.
            </p>
            <p>You might start thinking:</p>
            <ul>
              <li>What if I can&rsquo;t fall asleep again?</li>
              <li>How am I supposed to function tomorrow?</li>
              <li>I&rsquo;m going to be exhausted.</li>
              <li>Why is everyone else able to sleep normally?</li>
            </ul>
            <p>
              Now you&rsquo;re worrying about the consequences of not sleeping, while also trying
              to make yourself sleep.
            </p>
            <p>
              This can create a frustrating cycle: concern about sleep increases your alertness, and
              being awake gives you more time to worry about sleep.
            </p>
            <p>
              Sleep-related worry and cognitive arousal are recognised in research on insomnia. If
              this pattern becomes persistent, it may need more than general advice about relaxing
              before bed.
            </p>

            <h2>What can you do when your mind won&rsquo;t switch off?</h2>
            <p>
              You don&rsquo;t need to win an argument with every thought that appears at night.
              Here are a few things worth trying.
            </p>

            <h3>1. Separate a problem you can act on from a thought you keep revisiting</h3>
            <p>Ask yourself:</p>
            <p>Is there a specific action I can take about this right now?</p>
            <p>
              If you need to remember something tomorrow, write it down. If there&rsquo;s a
              practical problem to solve, note the next step you can take when you&rsquo;re awake
              and able to deal with it.
            </p>
            <p>
              If you&rsquo;re replaying a conversation for the tenth time, though, there may not be
              a new action to take tonight.
            </p>
            <p>
              You can acknowledge that the thought matters to you without continuing to analyse it
              for another hour.
            </p>

            <h3>2. Try not to turn thought-stopping into a battle</h3>
            <p>When a thought shows up, try naming what&rsquo;s happening.</p>
            <p>For example:</p>
            <ul>
              <li>&ldquo;I&rsquo;m worrying about tomorrow.&rdquo;</li>
              <li>&ldquo;I&rsquo;m replaying that conversation again.&rdquo;</li>
              <li>
                &ldquo;I&rsquo;m trying to get certainty about something I can&rsquo;t fully
                control.&rdquo;
              </li>
            </ul>
            <p>
              This isn&rsquo;t about pretending the thought is meaningless or forcing yourself to
              feel calm. It&rsquo;s a way of noticing the process you&rsquo;re caught in.
            </p>
            <p>
              You can have a thought without needing to investigate it immediately. You can feel
              anxious without treating anxiety as proof that something bad is about to happen.
            </p>

            <h3>3. Give tomorrow&rsquo;s problems a place to go</h3>
            <p>
              If you regularly remember tasks and worries at bedtime, try setting aside a short
              period earlier in the evening to write them down.
            </p>
            <p>You could make two lists:</p>
            <ul>
              <li>
                <strong>Things I can do something about:</strong> Write down the next practical
                step.
              </li>
              <li>
                <strong>Things I can&rsquo;t resolve right now:</strong> Acknowledge them without
                pretending you have an answer.
              </li>
            </ul>
            <p>
              This isn&rsquo;t a guaranteed fix for nighttime overthinking. It&rsquo;s a practical
              experiment to see whether organising your concerns earlier makes them easier to leave
              alone at bedtime. Some research on{" "}
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3232458"
                target="_blank"
                rel="noopener noreferrer"
              >
                structured evening problem-solving and worry
              </a>{" "}
              suggests this kind of approach may reduce pre-sleep arousal for some people.
            </p>

            <h3>4. Stop making sleep another performance task</h3>
            <p>You can&rsquo;t force yourself to fall asleep through sheer effort.</p>
            <p>
              If you&rsquo;re repeatedly lying awake and becoming increasingly frustrated, consider
              whether staying in bed and trying harder is making the situation more stressful. A
              common component of insomnia treatment is stimulus control, which helps rebuild the
              association between bed and sleep rather than prolonged wakefulness and frustration.
            </p>
            <p>
              For persistent insomnia, multicomponent cognitive behavioural therapy for insomnia
              (CBT-I) is{" "}
              <a
                href="https://doi.org/10.5664/jcsm.8986"
                target="_blank"
                rel="noopener noreferrer"
              >
                strongly recommended by the American Academy of Sleep Medicine
              </a>
              . It involves specific cognitive and behavioural strategies; it isn&rsquo;t simply a
              list of sleep-hygiene tips.
            </p>
            <p>
              If sleep difficulties are ongoing, a qualified healthcare professional can help you
              work out whether insomnia treatment is appropriate.
            </p>

            <h3>5. Look at the pattern, not just the nights</h3>
            <p>
              If your mind is repeatedly busy at bedtime, it may help to notice what tends to come
              up.
            </p>
            <p>
              Are you anticipating situations you feel unprepared for? Replaying interactions where
              you felt embarrassed? Trying to find certainty about a relationship? Criticising
              yourself for things that have already happened?
            </p>
            <p>
              You don&rsquo;t have to assume that every thought has a hidden meaning or that
              there&rsquo;s one deep-rooted issue behind all of them.
            </p>
            <p>
              But if the same themes keep returning, understanding the pattern may be more useful
              than trying a different distraction every night.
            </p>

            <h2>When is nighttime overthinking worth getting help for?</h2>
            <p>
              Occasional overthinking is part of being human. Persistent difficulty sleeping is a
              different matter.
            </p>
            <p>Consider seeking professional support if:</p>
            <ul>
              <li>You regularly struggle to fall asleep or stay asleep.</li>
              <li>
                Sleep difficulties are affecting your concentration, mood or daily functioning.
              </li>
              <li>Worry feels difficult to manage even outside bedtime.</li>
              <li>
                You&rsquo;re experiencing persistent anxiety, low mood or significant distress.
              </li>
              <li>Fear of not sleeping has itself become a major source of anxiety.</li>
            </ul>
            <p>
              Sleep problems can have several contributors, including stress, mental health
              difficulties, medications, physical health conditions and other sleep disorders.
              It&rsquo;s worth looking at the broader picture rather than assuming that every sleep
              problem is caused by overthinking.
            </p>

            <h2>You don&rsquo;t have to resolve your entire life before you sleep</h2>
            <p>
              Sometimes your mind is trying to solve a real problem. Sometimes it&rsquo;s replaying
              something that cannot be changed. Sometimes it&rsquo;s searching for certainty that
              isn&rsquo;t available.
            </p>
            <p>The difficult part is that these can all feel equally urgent at 1 a.m.</p>
            <p>
              You don&rsquo;t have to convince yourself that everything is fine. You don&rsquo;t
              have to force yourself to be positive. And you don&rsquo;t have to figure out what
              every thought means before you can rest.
            </p>
            <p>
              You can acknowledge that something is bothering you and still choose not to work
              through it tonight.
            </p>
            <p>
              If anxiety and repetitive worry are affecting other parts of your life, you can
              explore the{" "}
              <Link
                href="/anxiety-overthinking-therapy-india"
                style={{ color: "var(--tbe-deep-maroon)", textUnderlineOffset: "4px" }}
              >
                anxiety therapy page
              </Link>{" "}
              to learn more about how therapy may help you understand these patterns and respond to
              them differently.
            </p>
          </motion.div>

          {/* Book a Session */}
          <div className="mt-10 mb-12">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("blog - overthinking at night")}
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
                Edinger JD, Arnedt JT, Bertisch SM, et al. Behavioral and psychological treatments
                for chronic insomnia disorder in adults: an American Academy of Sleep Medicine
                clinical practice guideline. <em>Journal of Clinical Sleep Medicine.</em>{" "}
                2021;17(2):255&ndash;262.{" "}
                <a
                  href="https://doi.org/10.5664/jcsm.8986"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.5664/jcsm.8986
                </a>
              </li>
              <li>
                Tang NKY, Saconi B, Jansson-Fr&ouml;jmark M, Ong JC, Carney CE. Cognitive factors
                and processes in models of insomnia: a systematic review.{" "}
                <em>Journal of Sleep Research.</em> 2023.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10909484/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC10909484/
                </a>
              </li>
              <li>
                Schmidt RE, Harvey AG, Van der Linden M. Cognitive and affective control in
                insomnia. <em>Frontiers in Psychology.</em> 2011.{" "}
                <a
                  href="https://doi.org/10.3389/fpsyg.2011.00349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.3389/fpsyg.2011.00349
                </a>
              </li>
            </ul>
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
            assessment or treatment.
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

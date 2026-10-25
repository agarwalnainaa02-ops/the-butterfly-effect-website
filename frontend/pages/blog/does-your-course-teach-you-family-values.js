import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/does-your-course-teach-you-family-values`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Does Your Course Teach You Family Values?",
  description:
    "What do family values actually ask of the people inside a family? A look at familism research, healthy family functioning and Indian women’s autonomy.",
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
      name: "Does Your Course Teach You Family Values?",
      item: POST_URL,
    },
  ],
};

export default function FamilyValues() {
  return (
    <>
      <Head>
        <title>Does Your Course Teach You Family Values? | Naina Agarwal</title>
        <meta
          name="description"
          content="What do family values actually ask of the people inside a family? A look at familism research, healthy family functioning and Indian women's autonomy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Does Your Course Teach You Family Values? | Naina Agarwal"
        />
        <meta
          property="og:description"
          content="What do family values actually ask of the people inside a family? A look at familism research, healthy family functioning and Indian women's autonomy."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Does+Your+Course+Teach+You+Family+Values%3F`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Does Your Course Teach You Family Values? | Naina Agarwal"
        />
        <meta
          name="twitter:description"
          content="What do family values actually ask of the people inside a family? A look at familism research, healthy family functioning and Indian women's autonomy."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Does+Your+Course+Teach+You+Family+Values%3F`}
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
            Does your course teach you family values?
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
            <p>Recently, someone asked me:</p>
            <p>
              &ldquo;Tumhare course mein family values nahi sikhaye jaate hain kya?&rdquo;
            </p>
            <p>And I couldn&rsquo;t stop wondering if this question had ever been asked to a man.</p>
            <p>
              But hey, I&rsquo;m a student of psychology, so I did what any reasonable person
              would do.
            </p>
            <p>I went and read the research.</p>
            <p>
              And apparently, even defining family values is more complicated than I thought.
            </p>
            <p>
              Family values are usually described as principles that guide a family&rsquo;s
              behaviour, decision-making, and interactions with one another and with the broader
              world.
            </p>
            <p>
              So family values tell us what matters, and how we&rsquo;re expected to behave
              because it matters.
            </p>
            <p>And we learn these values from a very young age.</p>
            <p>
              According to research by Pagano et al., parents play a significant role in the
              socialization of values, and the values they pass on are shaped by factors like
              ethnicity and gender.
            </p>
            <p>Which got me thinking:</p>
            <p>being family-oriented doesn&rsquo;t necessarily mean just one thing.</p>
            <p>
              Mucchi-Faina, Pacilli, and Verma make an interesting distinction in their
              cross-cultural study of Indian and Italian university students on Familialism :
              support obligations and traditional norms.
            </p>
            <p>
              Basically, there&rsquo;s a difference between &ldquo;we take care of each
              other&rdquo; and &ldquo;we all know how we&rsquo;re supposed to behave.&rdquo;
            </p>
            <p>
              Support obligations are about reciprocal emotional support within the family: being
              able to trust and confide in family members, share difficulties and pleasures,
              respect one another, and maintain closeness.
            </p>
            <p>The traditional norms are different.</p>
            <p>
              They involve expectations that family members will defer to the wishes of the
              family, make important decisions within the family, follow family advice, and
              maintain shared family values and beliefs.
            </p>
            <p>This is a difference that does matter.</p>
            <p>
              Support obligations are centred more around the needs of individual family members.
              The family provides its members with trust, closeness, and psychological support.
            </p>
            <p>
              Traditional norms, on the other hand, are centred more around the family as a
              collective, where the interests of the family as a whole can take precedence over
              individual members&rsquo; goals and aspirations.
            </p>
            <p>
              The study was done on Indian and Italian university students, about 100 in each
              country. Both groups considered support more important than traditional norms, but
              Indian participants placed greater importance on both support obligations and
              traditional norms than Italian participants did.
            </p>
            <p>
              And Indian women gave greater weight to traditional norms than Indian males.
              (Hello, value socialisation)
            </p>
            <p>That, of course, is the part I can&rsquo;t seem to stop thinking about.</p>
            <p>Being family oriented doesn&rsquo;t sound simple anymore.</p>
            <p>You can build a family where people feel deeply loved, supported, and connected.</p>
            <p>You can also have a family that knows exactly what to expect from everyone.</p>
            <p>At times they are the very same families.</p>
            <p>And sometimes, they aren&rsquo;t.</p>
            <p>
              The two can be perfectly compatible, but they&rsquo;re very different demands on
              the person.
            </p>
            <p>
              If one part of Familialism is about meeting the needs of individual members, while
              another is about placing the family system above the goals and aspirations of those
              individuals, what happens when we start calling both of them simply &ldquo;family
              values&rdquo;?
            </p>
            <p>Because family values aren&rsquo;t just about whether family matters.</p>
            <p>Of course, it matters.</p>
            <p>The bigger question is:</p>
            <p>
              What exactly are we asking an individual to give up in order to prove that it does?
            </p>
            <p>
              I believe that, and this is why we must not try to determine if a person is living
              up to their family values, but rather ask:
            </p>
            <p>What does that value actually do inside a family?</p>
            <p>Froma Walsh makes a related point in her work on healthy family functioning.</p>
            <p>
              A family pattern cannot really be judged in isolation from what it is doing for the
              people inside it.
            </p>
            <p>
              For a single family, the same pattern may be appropriate at one level, and
              inappropriate at another.
            </p>
            <p>
              What promotes family stability can also leave a certain family member in a role
              where they bear the burden of that stability.
            </p>
            <p>Let&rsquo;s take closeness as an example.</p>
            <p>Walsh does not claim that healthy families are &ldquo;detached families&rdquo;.</p>
            <p>Quite the opposite.</p>
            <p>
              Connectedness and commitment are a part of healthy family functioning, but so are
              individual differences, autonomy, and separate needs.
            </p>
            <p>
              At one extreme, there is disengagement: too little mutual care and support, leaving
              people fragmented or isolated.
            </p>
            <p>
              And at the other, there is enmeshment: so much emphasis on unity and group survival
              that individual differences, privacy, and separateness are sacrificed.
            </p>
            <p>The problem isn&rsquo;t closeness.</p>
            <p>The problem is what happens when closeness becomes incompatible with difference.</p>
            <p>When disagreement starts looking like disrespect.</p>
            <p>When having a different plan starts looking like selfishness.</p>
            <p>
              When wanting something your family wouldn&rsquo;t choose starts becoming evidence
              that you&rsquo;ve forgotten your values.
            </p>
            <p>
              When &ldquo;Where are your family values?&rdquo; quietly becomes another way of
              saying,
            </p>
            <p>&ldquo;You don&rsquo;t get to be separate from us.&rdquo;</p>
            <p>
              Walsh&rsquo;s framework of healthy family functioning also involves things like
              clear but flexible boundaries, equitable power and responsibility, open
              communication, effective problem-solving and conflict resolution, adaptability,
              autonomy, and the development and well-being of individual members.
            </p>
            <p>You see that last part?</p>
            <p>Development and well-being of individual members.</p>
            <p>
              Because a healthy family isn&rsquo;t necessarily a family where everyone agrees.
            </p>
            <p>
              In fact, Walsh describes well-functioning families as capable of open disagreement,
              communication, negotiation, and compromise.
            </p>
            <p>The absence of Kalesh isn&rsquo;t the standard.</p>
            <p>The family&rsquo;s ability to manage conflict and solve problems is.</p>
            <p>Which brings us to something else.</p>
            <p>
              Keeping the peace is not automatically the same thing as resolving conflicts.
            </p>
            <p>
              Sometimes the family is peaceful because everyone has learned how to talk.
            </p>
            <p>
              Sometimes it&rsquo;s peaceful because everyone has learned what they are not
              allowed to say.
            </p>
            <p>
              Families also develop internal norms and rules &mdash; some explicit, some so
              implicit that nobody remembers who decided them &mdash; that establish expectations
              around roles, actions, and consequences.
            </p>
            <p>
              Shared beliefs and values give meaning to experiences and guide how families
              respond to situations.
            </p>
            <p>
              And these beliefs are transmitted across generations and through cultural, ethnic,
              and religious traditions.
            </p>
            <p>
              But these family beliefs can be empowering or debilitating, depending on the themes
              underlying them and, importantly, on how responsive they are to changing
              circumstances.
            </p>
            <p>
              When cultural myths are invoked as if only one particular mode of family structure,
              value, or living is the correct way, then beliefs can become problematic especially
              when this results in a family&rsquo;s perceiving a different mode of structure,
              value, or living as deficient or deviant.
            </p>
            <p>Because values don&rsquo;t exist in a vacuum.</p>
            <p>They become rules about how people should behave.</p>
            <p>They mold the thinking that is deemed:</p>
            <p>Responsible.</p>
            <p>Respectful.</p>
            <p>Selfish.</p>
            <p>Appropriate.</p>
            <p>Disloyal.</p>
            <p>Successful.</p>
            <p>Shameful.</p>
            <p>Good enough.</p>
            <p>
              And once a rule has existed for long enough, we have a funny habit of calling it a
              value.
            </p>
            <p>
              So the question isn&rsquo;t whether family and the individual have to be on
              opposite sides.
            </p>
            <p>It&rsquo;s whether you can build a family where both are allowed to exist.</p>
            <p>
              It&rsquo;s not as though there is one correct family structure or one set of rules
              for all families.
            </p>
            <p>
              Healthy functioning may manifest in various ways in different cultures, contexts,
              resources, and circumstances.
            </p>
            <p>
              But what&rsquo;s important are the processes that actually work within the
              particular context of that family.
            </p>
            <p>So the question isn&rsquo;t:</p>
            <p>&ldquo;What&rsquo;s the family value here?&rdquo;</p>
            <p>Maybe it&rsquo;s:</p>
            <p>&ldquo;What does this value ask of the people inside the family?&rdquo;</p>
            <p>And who gets to define the rules?</p>
            <p>Who gets to disagree with them?</p>
            <p>Who&rsquo;s the one who&rsquo;s always accommodating?</p>
            <p>Who gets protected by them?</p>
            <p>Who gets to remain exactly as they are while someone keeps adjusting?</p>
            <p>
              And who carries the emotional or practical cost of maintaining them?
            </p>
            <p>
              Is the value helping the family remain connected, or is it requiring individual
              members to become smaller in order for the family to remain the same?
            </p>
            <p>
              And this becomes particularly complicated when we look at women.
            </p>
            <p>
              Ali Abbas Rizvi, 2026 conducted a qualitative study, interviewing 24 married women
              in Kurla, Maharashtra, on women&rsquo;s autonomy in decision making with regards
              to marriage, reproduction, mobility, social visits, household expenses and living
              arrangements.
            </p>
            <p>
              What I found interesting is that the influence of family members wasn&rsquo;t
              always direct.
            </p>
            <p>
              In joint families, extended family influence appeared across areas including
              marriage, child and maternal health, and mobility.
            </p>
            <p>
              In nuclear households, the influence could take the form of more subtle
              expectations and indirect interventions around finances and living arrangements.
            </p>
            <p>
              Autonomy of women was negotiated in intergenerational hierarchies, gender norms and
              socioeconomic conditions.
            </p>
            <p>
              Which makes the phrase &ldquo;We decide together&rdquo; a little more complicated.
            </p>
            <p>Because deciding together isn&rsquo;t necessarily the problem.</p>
            <p>
              It&rsquo;s how much importance is given to the say of the one for whom the
              decisions are being made.
            </p>
            <p>And who is expected to adjust when everyone doesn&rsquo;t agree?</p>
            <p>
              A family can genuinely care about a woman&rsquo;s well-being while also having
              very strong ideas about what that well-being is supposed to look like.
            </p>
            <p>Where should she live?</p>
            <p>When does she get married?</p>
            <p>Whether she should work or not.</p>
            <p>How much should she travel?</p>
            <p>What kind of a relationship is acceptable?</p>
            <p>Whether having children is assumed?</p>
            <p>
              How much responsibility she should take for keeping everyone comfortable?
            </p>
            <p>
              And sometimes none of these expectations are announced as rules.
            </p>
            <p>
              They&rsquo;re simply presented as what a good daughter, wife, daughter-in-law, or
              woman does.
            </p>
            <p>
              And this is where I think the language of family values becomes particularly
              important for women.
            </p>
            <p>
              Because the same values can hold such different meanings depending on who is being
              asked to live them.
            </p>
            <p>&ldquo;Family comes first.&rdquo;</p>
            <p>But who is expected to put themselves second?</p>
            <p>&ldquo;You have to adjust.&rdquo;</p>
            <p>But who is doing most of the adjusting?</p>
            <p>&ldquo;Think about the family.&rdquo;</p>
            <p>But whose choices are being treated as a reflection of the family?</p>
            <p>&ldquo;Respect your elders.&rdquo;</p>
            <p>But does respecting someone mean listening to them blindly?</p>
            <p>Or does it mean that disagreement itself becomes disrespectful?</p>
            <p>
              Because maybe the question was never whether I know my family values.
            </p>
            <p>Maybe it&rsquo;s:</p>
            <p>What do these values require of me?</p>
          </motion.div>

          {/* Sources */}
          {/* TODO: add Walsh reference once confirmed. */}
          <div className="blog-body mt-12">
            <h2>Sources</h2>
            <ul>
              <li>
                Mucchi-Faina, A., Pacilli, M. G., &amp; Verma, J. (2010). The Two Faces of
                Familism: A Cross-Cultural Research in India and Italy.{" "}
                <em>Psychological Studies</em>, 55(4), 365&ndash;373.{" "}
                <a
                  href="https://doi.org/10.1007/s12646-010-0042-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1007/s12646-010-0042-1
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
                Pagano et al. (2003). The Transmission of Values to School-Age and Young Adult
                Offspring: Race and Gender Differences in Parenting.{" "}
                <em>Journal of Feminist Family Therapy</em>, 14(3&ndash;4).{" "}
                <a
                  href="https://www.tandfonline.com/doi/abs/10.1300/J086v14n03_02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.tandfonline.com/doi/abs/10.1300/J086v14n03_02
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
              onClick={() => trackWhatsApp("blog - family values")}
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

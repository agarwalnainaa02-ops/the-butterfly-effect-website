import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import JsonLd from "../../src/components/JsonLd";
import { WA_URL, trackWhatsApp } from "../../src/utils/booking";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";
const POST_URL = `${SITE_URL}/blog/marriage-in-laws-family-boundaries`;

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "You're Not Just Marrying a Person. You're Negotiating a Family System.",
  description:
    "Getting married in an Indian family? Explore living arrangements, in-laws, finances, family obligations and boundaries to discuss before saying yes.",
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
      name: "You're Not Just Marrying a Person. You're Negotiating a Family System.",
      item: POST_URL,
    },
  ],
};

export default function MarriageInLawsFamilyBoundaries() {
  return (
    <>
      <Head>
        <title>Marriage and In-Laws: Family Boundaries to Discuss</title>
        <meta
          name="description"
          content="Getting married in an Indian family? Explore living arrangements, in-laws, finances, family obligations and boundaries to discuss before saying yes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={POST_URL} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Marriage and In-Laws: Family Boundaries to Discuss"
        />
        <meta
          property="og:description"
          content="Getting married in an Indian family? Explore living arrangements, in-laws, finances, family obligations and boundaries to discuss before saying yes."
        />
        <meta property="og:url" content={POST_URL} />
        <meta property="article:published_time" content="2026-10-26" />
        <meta property="article:author" content="Naina Agarwal" />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?title=Marriage+and+In-Laws%3A+Family+Boundaries+to+Discuss`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Marriage and In-Laws: Family Boundaries to Discuss"
        />
        <meta
          name="twitter:description"
          content="Getting married in an Indian family? Explore living arrangements, in-laws, finances, family obligations and boundaries to discuss before saying yes."
        />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?title=Marriage+and+In-Laws%3A+Family+Boundaries+to+Discuss`}
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
            You&rsquo;re Not Just Marrying a Person. You&rsquo;re Negotiating a Family System.
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
            <p>You ask him what he wants from marriage.</p>
            <p>
              He says, &ldquo;I want a partner who understands my family.&rdquo;
            </p>
            <p>You ask her what married life looks like to her.</p>
            <p>She says, &ldquo;I&rsquo;m happy to adjust.&rdquo;</p>
            <p>Everyone nods. Very nice. Very mature. Very reassuring.</p>
            <p>
              Until someone asks where you&rsquo;ll live after marriage, who will manage the
              household, how often you&rsquo;ll visit each family, or whether your partner can
              say no to their parents.
            </p>
            <p>Suddenly, nobody seems to have discussed the actual marriage.</p>
            <p>
              In many Indian families, marriage is not understood as a relationship between two
              people alone. It can involve expectations around parents, finances, caregiving,
              household responsibilities, traditions and family reputation.
            </p>
            <p>
              There is nothing inherently wrong with being close to your family or wanting your
              partner to be involved in family life.
            </p>
            <p>
              The difficulty begins when everyone has expectations about your marriage, but the
              two people getting married have never discussed what they actually want.
            </p>
            <p>Here are some conversations worth having before you say yes.</p>
            {/* TODO: once the marriage posts are live, add one-line contextual links to the other marriage posts. Also link the Indian families service page once live. */}

            <h2>1. Where will you actually live?</h2>

            <p>Not where you might live eventually.</p>
            <p>Not where your families assume you will live.</p>
            <p>Where do the two of you want to live after marriage?</p>
            <p>
              Will you live independently, with one set of parents, or in a joint family? Is
              the arrangement temporary or indefinite? What happens if either person&rsquo;s
              circumstances change?
            </p>
            <p>
              These questions matter because living arrangements affect privacy, routines,
              household responsibilities, finances and the amount of independence a couple has.
            </p>
            <p>Discuss:</p>
            <ul>
              <li>What living arrangement do we each genuinely prefer?</li>
              <li>
                If we live with parents, what privacy can we realistically expect?
              </li>
              <li>
                Will we have our own space and be able to make everyday decisions
                independently?
              </li>
              <li>
                If the arrangement stops working for either of us, can we revisit it?
              </li>
              <li>What would happen if a job opportunity required us to move?</li>
            </ul>
            <p>
              Living with parents is not automatically a problem. Living separately does not
              automatically mean a couple has healthy boundaries.
            </p>
            <p>
              The question is whether the arrangement works for both partners and whether they
              can discuss it honestly.
            </p>
            <p>
              An arrangement you freely choose is different from one you are told you must
              accept.
            </p>

            <h2>2. What does being a good son or daughter mean after marriage?</h2>

            <p>
              This conversation can get uncomfortable because family responsibility is often
              tied to identity.
            </p>
            <p>
              Perhaps your partner believes a good son should always be available to his
              parents. Perhaps your partner believes a good daughter should continue managing
              her parents&rsquo; emotional needs, even after marriage.
            </p>
            <p>
              Perhaps both of you grew up believing that disagreeing with your parents is
              disrespectful.
            </p>
            <p>
              None of these beliefs necessarily means someone is incapable of having a healthy
              marriage. But unexamined expectations can become difficult when two people build
              a life together.
            </p>
            <p>Ask each other:</p>
            <ul>
              <li>
                What responsibilities do we believe adult children have towards their parents?
              </li>
              <li>What does being a good son or daughter mean to you?</li>
              <li>
                Do you believe a spouse should always come first, or does it depend on the
                situation?
              </li>
              <li>How would we handle a disagreement between a partner and a parent?</li>
              <li>
                Can we love and respect our parents while making decisions they dislike?
              </li>
            </ul>
            <p>
              There is no universal formula for balancing a marriage and family relationships.
            </p>
            <p>
              But if one person expects their partner to accommodate every parental preference,
              while the other expects the couple to make decisions independently, that
              difference deserves a conversation before marriage.
            </p>
            <p>Not after the first major family disagreement.</p>

            <h2>3. What does &ldquo;adjustment&rdquo; actually mean to you?</h2>

            <p>&ldquo;Shaadi mein toh adjust karna padta hai.&rdquo;</p>
            <p>
              Marriage does involve compromise. Two people have different habits, preferences,
              histories and expectations. Sometimes both need to make room for the other.
            </p>
            <p>But the word adjustment can mean very different things.</p>
            <p>
              It might mean agreeing on a shared routine, learning to navigate different family
              traditions or finding a compromise about holidays.
            </p>
            <p>
              It might also mean one person giving up their career, friendships, privacy or
              preferences because everyone else expects them to.
            </p>
            <p>Those are not interchangeable.</p>
            <p>Ask:</p>
            <ul>
              <li>What are you willing to adjust on?</li>
              <li>What would you not want to compromise on?</li>
              <li>
                How do you distinguish compromise from giving something up out of fear?
              </li>
              <li>If we disagree, how do we decide whose preference takes priority?</li>
              <li>
                Would you expect the same adjustment from yourself that you expect from me?
              </li>
            </ul>
            <p>A useful test is to look at the pattern of compromise.</p>
            <p>
              If one person is consistently changing their plans, managing everyone else&rsquo;s
              feelings and giving up what matters to them, that is not necessarily a sign of a
              particularly mature partner.
            </p>
            <p>
              It may simply mean that the arrangement works better for everyone except them.
            </p>

            <h2>4. How involved will your parents be in your decisions?</h2>

            <p>
              Parents can offer valuable advice, emotional support and practical help.
            </p>
            <p>
              They can also have strong opinions about where you live, how you spend money,
              when you have children, how you dress, how you celebrate festivals and how you
              manage disagreements.
            </p>
            <p>The issue is not whether parents have opinions.</p>
            <p>
              It is whether the two people getting married can make decisions together without
              requiring parental approval for everything.
            </p>
            <p>Discuss:</p>
            <ul>
              <li>Which decisions should we make as a couple?</li>
              <li>
                Which decisions would we want to discuss with our families?
              </li>
              <li>
                What happens if our parents strongly disagree with a decision we have made?
              </li>
              <li>
                Would you be comfortable telling your parents that a decision is ours to make?
              </li>
              <li>
                How would you respond if a family member repeatedly crossed a boundary?
              </li>
            </ul>
            <p>Pay attention to how your potential partner talks about their family.</p>
            <p>
              Can they disagree with their parents respectfully? Can they acknowledge that
              their parents may be well-intentioned and still be wrong about something? Can
              they make a decision without turning every disagreement into a crisis?
            </p>
            <p>
              You do not need someone who fights with their parents to prove their
              independence.
            </p>
            <p>
              You need to understand whether they can maintain adult relationships with their
              parents while building a marriage with you.
            </p>

            <h2>5. Who will manage the household?</h2>

            <p>
              Let&rsquo;s move beyond the question of whether both partners support working
              women.
            </p>
            <p>What happens when both people come home after a long day?</p>
            <p>
              Who notices that groceries are running out? Who remembers the family birthday?
              Who books the doctor&rsquo;s appointment? Who coordinates domestic help? Who
              plans meals, manages household supplies and remembers what needs to happen before
              guests arrive?
            </p>
            <p>
              A household involves both visible tasks and the less visible work of remembering,
              anticipating and organising.
            </p>
            <p>Ask each other:</p>
            <ul>
              <li>How do we imagine dividing household responsibilities?</li>
              <li>
                Do we expect domestic work to be shared, outsourced or divided according to
                our circumstances?
              </li>
              <li>
                If one person earns more, does that change their share of household work?
              </li>
              <li>
                If we live with parents, who is expected to help with cooking, cleaning and
                family obligations?
              </li>
              <li>
                What happens when one of us is ill, overwhelmed or particularly busy at work?
              </li>
            </ul>
            <p>You do not need to have every chore allocated before marriage.</p>
            <p>
              But you should be able to discuss domestic work without assuming that one person
              will naturally take responsibility because of their gender.
            </p>
            <p>
              &ldquo;We&rsquo;ll figure it out after marriage&rdquo; is not a plan if both of
              you already have very different ideas about who will figure it out.
            </p>

            <h2>6. What does financial responsibility towards family look like?</h2>

            <p>
              Money can become complicated when a couple&rsquo;s finances intersect with their
              parents&rsquo; needs and expectations.
            </p>
            <p>
              One person may regularly support their parents financially. Another may expect
              the couple to save towards a home, travel or future children. Someone may
              anticipate taking responsibility for a parent&rsquo;s healthcare expenses.
            </p>
            <p>None of these priorities is automatically wrong.</p>
            <p>The important part is knowing what you are agreeing to.</p>
            <p>Discuss:</p>
            <ul>
              <li>Do either of us currently support our parents financially?</li>
              <li>Do we expect that support to continue after marriage?</li>
              <li>
                Are there debts, major financial obligations or anticipated caregiving expenses
                we should plan around?
              </li>
              <li>
                How will we make decisions about savings, spending and financial support for
                relatives?
              </li>
              <li>
                What level of financial transparency do we expect from each other?
              </li>
              <li>
                Will either person be expected to contribute to expenses they have no say in?
              </li>
            </ul>
            <p>
              You do not necessarily need to combine every account or manage money in the same
              way.
            </p>
            <p>
              You do need enough transparency to make informed decisions about your shared
              financial life.
            </p>
            <p>
              A person can be generous towards their family and responsible towards their
              partner. The challenge is making sure that financial commitments are discussed
              rather than discovered after the wedding.
            </p>

            <h2>7. What happens when a parent needs care?</h2>

            <p>
              This is one of the conversations people often postpone because it feels too
              hypothetical.
            </p>
            <p>
              But parents grow older. Health needs change. Someone may need financial
              assistance, help with appointments or a place to live.
            </p>
            <p>
              If caring for parents is an important value for either of you, it deserves to be
              discussed.
            </p>
            <p>Ask:</p>
            <ul>
              <li>
                What responsibilities do we anticipate towards our parents as they grow older?
              </li>
              <li>
                Would either of us expect a parent to live with us if they needed care?
              </li>
              <li>
                How would we manage caregiving alongside work and other responsibilities?
              </li>
              <li>
                What financial resources or family support might be available?
              </li>
              <li>
                If our expectations differ, how would we work through that?
              </li>
            </ul>
            <p>
              You cannot predict every future need, and you should not be expected to have
              every answer before marriage.
            </p>
            <p>
              But you can find out whether you share similar values about caregiving and
              whether you can approach future responsibilities as a team.
            </p>
            <p>
              It is also worth remembering that caregiving should not automatically become one
              person&rsquo;s responsibility simply because they are a daughter, daughter-in-law
              or the person who happens to be available.
            </p>
            <p>Discuss the expectation before it becomes an unspoken obligation.</p>

            <h2>8. What happens to your career and independence after marriage?</h2>

            <p>
              This conversation needs to go beyond whether your partner says they are
              supportive of your career.
            </p>
            <p>Ask what that support would look like in everyday life.</p>
            <p>
              Would you both be able to pursue opportunities that require travel or relocation?
              What if one person&rsquo;s career becomes more demanding? Would either of you
              expect the other to reduce their working hours or give up a job after having
              children?
            </p>
            <p>And if one person does make a career sacrifice, how will that decision be made?</p>
            <p>Discuss:</p>
            <ul>
              <li>Are both of our careers equally important to us?</li>
              <li>Would either of us expect the other to relocate or leave a job?</li>
              <li>
                How would we make decisions about career opportunities that affect both of us?
              </li>
              <li>
                What would happen if one person&rsquo;s work became more demanding?
              </li>
              <li>
                Would either of us be expected to seek permission to work, study, travel or
                maintain friendships?
              </li>
            </ul>
            <p>
              People can freely choose to prioritise family, career or a combination of both.
              There is no single correct arrangement.
            </p>
            <p>
              The distinction is whether a decision reflects someone&rsquo;s own priorities or
              whether they are expected to surrender their independence to satisfy everyone
              else&rsquo;s.
            </p>
            <p>
              A supportive partner does not have to agree with every career decision you make.
            </p>
            <p>
              They should, however, be able to discuss those decisions with you as an equal.
            </p>

            <h2>9. What happens when your partner and your family don&rsquo;t get along?</h2>

            <p>This is where abstract statements about family values meet actual life.</p>
            <p>Imagine your parent makes a comment that hurts your partner.</p>
            <p>
              Your partner tells you about it. Your parent says they were only joking. Another
              family member says your partner is too sensitive.
            </p>
            <p>What happens next?</p>
            <p>
              Does your partner have to accept the comment to keep the peace? Do you
              automatically defend your parent? Can you acknowledge the impact of what happened
              without assuming the worst about anyone&rsquo;s intentions?
            </p>
            <p>Ask each other:</p>
            <ul>
              <li>
                How would we handle it if one of our families hurt the other person?
              </li>
              <li>What would we expect from each other in that situation?</li>
              <li>
                Can we raise concerns about family behaviour without being accused of
                disrespect?
              </li>
              <li>What would we do if a boundary were repeatedly ignored?</li>
              <li>
                How would we handle family conflict without sharing every private detail of
                our relationship?
              </li>
            </ul>
            <p>You do not need to agree with your partner about every interaction.</p>
            <p>
              But you need to be able to take their concerns seriously, discuss what happened
              and decide how to respond.
            </p>
            <p>
              Protecting a relationship does not require treating your family as the enemy. It
              does require recognising that loving someone and excusing every behaviour are two
              different things.
            </p>

            <h2>
              10. Can you disagree with your family without being punished for it?
            </h2>

            <p>
              There is a difference between a family expressing disappointment and a family
              using threats, intimidation, financial control or persistent pressure to force
              compliance.
            </p>
            <p>A disagreement about living arrangements is one thing.</p>
            <p>
              Being threatened, isolated or made to fear the consequences of saying no is
              another.
            </p>
            <p>
              Notice how your potential partner responds when someone challenges their
              family&rsquo;s expectations.
            </p>
            <p>
              Do they believe adults can make choices their parents dislike? Can they tolerate
              disappointing someone without immediately reversing their decision? Do they expect
              their spouse to accept treatment they would not accept themselves?
            </p>
            <p>
              These questions matter because a couple cannot make independent decisions if one
              person&rsquo;s ability to disagree is consistently undermined by fear or
              coercion.
            </p>
            <p>
              You do not have to label an entire family as good or bad to recognise a harmful
              pattern.
            </p>
            <p>
              And you do not need to wait until after marriage to discuss what boundaries,
              privacy and personal autonomy mean to each of you.
            </p>

            <h2>11. What if the two of you want different things?</h2>

            <p>
              You might want to live independently while your partner hopes to live with their
              parents.
            </p>
            <p>
              You might expect to share household work equally while your partner assumes that
              their mother or wife will manage most of it.
            </p>
            <p>
              You might want to support both families financially while your partner believes
              that their own parents should take priority.
            </p>
            <p>These differences do not all have the same solution.</p>
            <p>
              Some can be negotiated. Others may require a significant change in expectations.
              A few may reveal that your visions of married life are incompatible.
            </p>
            <p>
              The point of discussing these things is not to eliminate every disagreement
              before marriage.
            </p>
            <p>
              It is to understand what each of you believes, what each of you is willing to
              reconsider, and where your limits lie.
            </p>
            <p>You are allowed to discover that you want different things.</p>
            <p>
              Compatibility is not about agreeing on everything. It is about finding out
              whether your differences can be worked through without one person having to
              disappear into the life the other person has already planned.
            </p>

            <h2>Before you say yes, ask yourself these questions</h2>

            <p>
              You do not need to turn your next meeting into a family-systems assessment. These
              conversations can happen gradually.
            </p>
            <p>But take a moment to consider:</p>
            <ul>
              <li>Do I know where we are expected to live after marriage?</li>
              <li>
                Have we discussed what involvement our families will have in our decisions?
              </li>
              <li>
                Do I understand my potential partner&rsquo;s financial responsibilities
                towards their family?
              </li>
              <li>
                Have we talked about household work, caregiving and career expectations?
              </li>
              <li>
                Can we disagree about our families without either person becoming defensive or
                dismissive?
              </li>
              <li>
                Does my potential partner recognise that I will remain an individual after
                marriage?
              </li>
              <li>
                Have I been able to express what I want, or have I mostly been trying to
                figure out what everyone expects of me?
              </li>
              <li>
                If nothing about our current family arrangements changed after marriage, would
                I genuinely be comfortable with that?
              </li>
            </ul>
            <p>That last question is worth sitting with.</p>
            <p>
              Sometimes, people enter marriage hoping that an arrangement will become more
              flexible later. Sometimes, they assume their partner will eventually disagree
              with their parents, become more independent or understand their concerns.
            </p>
            <p>Those things may happen. They may not.</p>
            <p>
              It is worth making decisions based on what you understand about the situation
              now, rather than relying entirely on the version of married life you hope will
              eventually emerge.
            </p>

            <h2>A final thought</h2>

            <p>You can love your family and still want boundaries.</p>
            <p>You can respect your parents and disagree with them.</p>
            <p>
              You can care about your partner&rsquo;s family without accepting every
              expectation that comes with it.
            </p>
            <p>
              And you can want a close-knit family without wanting every decision in your
              marriage to become a family discussion.
            </p>
            <p>
              None of these desires automatically makes you selfish, ungrateful or difficult.
            </p>
            <p>
              Marriage may bring two families closer. It may also require both partners to
              develop a new way of making decisions, one that respects existing relationships
              while giving the marriage room to become its own relationship.
            </p>
            <p>
              The goal is not to choose between your partner and your parents every time there
              is a disagreement.
            </p>
            <p>
              It is to build a life in which you do not have to keep choosing between being a
              good family member and being allowed to have a life of your own.
            </p>
            <p>
              Because you are not just choosing who you want to marry. You are also beginning
              a conversation about what kind of life the two of you will build, and who gets
              to have a say in it.
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(47,35,35,0.18)",
                margin: "3rem 0",
              }}
            />

            <h2>Research note</h2>

            <p>
              Research on couple relationships and family systems supports examining how
              partners negotiate roles, responsibilities, autonomy and conflict. However, this
              article&rsquo;s discussion prompts are not a validated compatibility test, and
              research cannot determine whether a couple should live jointly or separately.
              Those decisions depend on the people involved, their circumstances and their
              freely expressed preferences.
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
              If you feel unsafe at home or in a relationship, please reach out to someone you
              trust. If you&rsquo;re in immediate danger in India, call 112.
            </p>
          </div>

          {/* Sources */}
          <div className="blog-body mt-10">
            <h2>For further reading</h2>
            <ul>
              <li>
                Jejeebhoy, S. J., Santhya, K. G., et al. (2013). Marriage-related
                decision-making and young women&rsquo;s marital relations and agency.{" "}
                <em>Culture, Health &amp; Sexuality</em>.{" "}
                <a
                  href="https://knowledgecommons.popcouncil.org/departments_sbsr-pgy/1198"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://knowledgecommons.popcouncil.org/departments_sbsr-pgy/1198
                </a>
              </li>
              <li>
                Hawkins, A. J., Blanchard, V. L., Baldwin, S. A., &amp; Fawcett, E. B.
                (2008). Does marriage and relationship education work? A meta-analytic study.{" "}
                <em>Journal of Consulting and Clinical Psychology</em>, 76, 723&ndash;734.{" "}
                <a
                  href="https://scholarsarchive.byu.edu/facpub/4225"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scholarsarchive.byu.edu/facpub/4225
                </a>
              </li>
              <li>
                Historical overview of family systems theory.{" "}
                <em>Family Therapy Magazine</em>, AAMFT.{" "}
                <a
                  href="https://ftm.aamft.org/historical-overview-of-family-systems-theory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ftm.aamft.org/historical-overview-of-family-systems-theory
                </a>
              </li>
              <li>
                Australian Government Attorney-General&rsquo;s Department. Understanding
                coercive control.{" "}
                <a
                  href="https://www.ag.gov.au/coercivecontrol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.ag.gov.au/coercivecontrol
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
              onClick={() => trackWhatsApp("blog - marriage and in-laws")}
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

export interface PostEntry {
  slug: string;
  title: string;
  description: string;
}

export interface PostGroup {
  heading: string;
  note?: string;
  posts: PostEntry[];
}

export interface Topic {
  slug: string;
  navLabel: string;
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  introParagraphs: string[];
  groups: PostGroup[];
}

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

export const topics: Topic[] = [
  {
    slug: "getting-married",
    navLabel: "Getting married?",
    pageTitle: "Getting married?",
    seoTitle:
      "Getting Married? Arranged Marriage, Family & Relationship Questions | The Butterfly Effect",
    metaDescription:
      "Thinking about marriage, in an arranged or love marriage? Reflections on what you want, what to talk about, and how family expectations fit in.",
    canonical: `${SITE_URL}/topics/getting-married`,
    introParagraphs: [
      "Whether it’s an arranged match, a love marriage or something your family is still figuring out, marriage rarely involves just two people. These are the pieces I’ve written for the questions people often carry quietly: What do I actually want? What should we talk about? What do I do when my family’s expectations and mine don’t match? Start wherever feels closest to where you are.",
    ],
    groups: [
      {
        heading: "Start with yourself",
        posts: [
          {
            slug: "questions-to-ask-yourself-before-marriage",
            title: "Questions to Ask Yourself Before Marriage",
            description:
              "Questions to sit with before you say yes, especially in an arranged marriage.",
          },
          {
            slug: "things-its-okay-to-want-in-marriage",
            title: "Things It’s Okay to Want in Marriage",
            description:
              "Wanting respect, privacy, ambition or space is not selfish.",
          },
          {
            slug: "arranged-marriage-family-approval",
            title: "Arranged Marriage and Family Approval",
            description: "Your family approves. How do you know if you do?",
          },
        ],
      },
      {
        heading: "Talk to your partner",
        posts: [
          {
            slug: "questions-to-ask-partner-before-marriage",
            title: "Questions to Ask Your Partner Before Marriage",
            description: "Conversations worth having before you commit.",
          },
          {
            slug: "mental-health-and-marriage",
            title: "Mental Health and Marriage",
            description:
              "How to talk about therapy, medication and emotional needs without shame.",
          },
          {
            slug: "good-wife-good-husband-expectations",
            title: "Good Wife, Good Husband: Expectations",
            description:
              "Where our ideas of a good spouse come from, and whether they’re yours.",
          },
        ],
      },
      {
        heading: "Your two families",
        posts: [
          {
            slug: "marriage-in-laws-family-boundaries",
            title: "Marriage, In-Laws and Family Boundaries",
            description:
              "Living arrangements, money, caregiving and boundaries to discuss early.",
          },
          {
            slug: "partner-or-family-fit-arranged-marriage",
            title: "Partner or Family Fit in Arranged Marriage",
            description:
              "Are you choosing a partner, or someone who fits into the family?",
          },
        ],
      },
      {
        heading: "If family pressure is part of this",
        posts: [
          {
            slug: "family-pressure-and-identity",
            title: "Family Pressure and Identity",
            description:
              "How to tell what you want apart from what you were taught to want.",
          },
          {
            slug: "parents-sacrifice-and-family-guilt",
            title: "Parents’ Sacrifice and Family Guilt",
            description:
              "When your parents’ sacrifice starts to feel like your responsibility.",
          },
          {
            slug: "why-do-i-keep-explaining-myself-to-my-parents",
            title: "Why Do I Keep Explaining Myself to My Parents?",
            description: "Why you over-explain, and what is underneath it.",
          },
          {
            slug: "does-your-course-teach-you-family-values",
            title: "Does Your Course Teach You Family Values?",
            description:
              "A question many of us get asked, and what sits beneath it.",
          },
        ],
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

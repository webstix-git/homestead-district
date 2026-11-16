/**
 * Meta titles and descriptions for every public page.
 * Hard limits (Ahrefs / common SERP guidance):
 * - Title: ≤ 60 characters (final tag, including " | Homestead District")
 * - Description: ≤ 160 characters
 *
 * Non-home pages use the layout title template "%s | Homestead District"
 * (22 chars), so the title field itself must be ≤ 38 characters.
 */
export const metaCopy = {
  home: {
    title: "Own a Farmers Agency in Springfield",
    absoluteTitle: "Own a Farmers Agency in Springfield | Homestead District",
    description:
      "Own a Farmers Insurance agency in Springfield & SW Missouri. Licensing guidance, hands-on training, and coaching from a former agency owner.",
  },
  opportunity: {
    title: "Farmers Agency Ownership Paths",
    description:
      "Clear paths to Farmers Insurance agency ownership in Springfield and SW Missouri—with mentorship, training, and proven district systems.",
  },
  about: {
    title: "About the District Program",
    description:
      "For 16 years, Homestead District in Springfield, MO has helped people open and grow Farmers Insurance agencies with mentorship and training.",
  },
  meetGarach: {
    title: "Meet Garach, District Manager",
    description:
      "Meet Garach Smith, Homestead District Manager in Springfield. He built, grew, and sold a Farmers agency and now mentors new owners.",
  },
  teamMembers: {
    title: "Springfield District Team",
    description:
      "Meet the Homestead District team in Springfield, Missouri, led by District Manager Garach Smith and supporting Farmers agency owners.",
  },
  testimonials: {
    title: "Agency Owner Testimonials",
    description:
      "Read testimonials from Missouri Farmers Insurance agency owners on Homestead District training, mentorship, and the path to ownership.",
  },
  blog: {
    title: "Agency Ownership Blog",
    description:
      "Practical articles on starting an insurance business, sales, and managing a team—for people considering Farmers agency ownership.",
  },
  faq: {
    title: "Agency Ownership FAQ",
    description:
      "Answers to common questions about starting, scaling, and owning a Farmers Insurance agency with Homestead District mentorship.",
  },
  contact: {
    title: "Apply to Own a Farmers Agency",
    description:
      "Apply to own a Farmers Insurance agency with Homestead District. Call 417-397-7576, email gsmith18@farmersagent.com, or apply online.",
  },
  privacyPolicy: {
    title: "Privacy Policy",
    description:
      "Learn how The Homestead District in Springfield, Missouri collects, uses, discloses, and safeguards personal information on this site.",
  },
  siteMap: {
    title: "Website Site Map",
    description:
      "Browse every Homestead District page in one place—opportunity, about, resources, contact, and legal pages for Farmers agency ownership.",
  },
  aiPolicy: {
    title: "AI Policy",
    description:
      "How Homestead District uses—and does not use—automated tools in agency recruiting and on this website. People make the decisions here.",
  },
  aiReadiness: {
    title: "AI Readiness Service Index",
    description:
      "A plain index of Homestead District: who we are, what we do, where we work in SW Missouri, and how to reach Garach Smith.",
  },
  thankYou: {
    title: "Thank You for Contacting Us",
    description:
      "Thanks for contacting Homestead District. Garach Smith or our team will get in touch shortly about Farmers agency ownership.",
  },
  notFound: {
    title: "Page Not Found",
    description:
      "That page is unavailable or may have moved. Use Homestead District site links to continue exploring Farmers agency ownership.",
  },
} as const;

/**
 * Blog SERP titles must be ≤ 38 chars (template adds " | Homestead District").
 * Keep the on-page H1 as the full post.title.
 */
export const blogMetaTitles: Record<string, string> = {
  "starting-an-insurance-business-under-a-national-brand":
    "Start Under a National Brand",
  "why-good-insurance-agents-ask-more-than-they-pitch":
    "Ask More Than You Pitch",
  "hiring-your-first-employee-as-a-new-agency-owner":
    "Hiring Your First Employee",
};

/** Blog meta descriptions — ≤ 160 characters. */
export const blogMetaDescriptions: Record<string, string> = {
  "starting-an-insurance-business-under-a-national-brand":
    "What changes when you start an insurance business under a national brand like Farmers—familiarity, systems, and tradeoffs for new owners.",
  "why-good-insurance-agents-ask-more-than-they-pitch":
    "Why strong insurance agents ask more than they pitch: discovery questions, listening, and how that builds a book of business and referrals.",
  "hiring-your-first-employee-as-a-new-agency-owner":
    "Guidance for new agency owners on when to hire, which role to fill first, and how to set your first employee up to succeed.",
};

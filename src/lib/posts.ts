export type Post = {
  slug: string;
  img: string;
  tag: string;
  read: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "is-owning-an-insurance-agency-right-for-you",
    img: "/images/opp-intro.jpg",
    tag: "Agency Ownership",
    read: "5 min read",
    title: "Is Owning an Insurance Agency Right for You?",
    excerpt: "Four honest questions worth sitting with before you apply.",
    body: [
      "Plenty of people like the idea of owning an insurance agency. Fewer pause to ask whether the day-to-day work fits how they are wired. Before you fill out an application, spend a little time with these four questions.",
      "## Do You Want to Build Something, or Just Earn More?",
      "A bigger paycheck is a fine goal. The owners who stick with it usually want more than that. They want a business with their name on it, a team they lead, and a real place in their community.",
      "## Are You Comfortable Owning the Results?",
      "In a salaried role, a slow month is someone else's problem. As an owner, it is yours. Some people find that freeing. Others find it stressful. It helps to know which one you are.",
      "## Will You Keep Learning?",
      "Products, rules, and customer expectations change every year. Owners who do well stay curious and treat training as part of the job, not a one-time hurdle.",
      "## Who Will Be Coaching You?",
      "A good district manager shortens the learning curve. Ask how often you will meet, what support looks like after you open, and whether your mentor has run an agency himself.",
    ],
  },
  {
    slug: "starting-an-insurance-business-under-a-national-brand",
    img: "/images/why-ownership.jpg",
    tag: "Starting a Business",
    read: "6 min read",
    title: "Starting an Insurance Business Under a National Brand",
    excerpt: "What changes when you open your doors with a name people already know.",
    body: [
      "Most new small businesses spend their first couple of years just getting noticed. When you open a Farmers Insurance agency, that part of the climb is shorter. People in Springfield, Joplin, and across Southwest Missouri already know the name on the sign.",
      "## Recognition Helps. It Does Not Close the Sale.",
      "Brand recognition helps with the first conversation. It does not close the sale for you. Customers still choose an agent based on how well that person listens, explains their options, and follows through.",
      "## More Time for People",
      "A national brand also comes with products, technology, and processes you would otherwise have to build or buy. That leaves more of your time for what grows an agency: meeting people and taking care of them.",
      "## The Tradeoff",
      "You work inside a system. If you want total control over every product and process, a branded agency may feel limiting. If you want a head start and a structure to grow within, it can be a smart route into business ownership.",
    ],
  },
  {
    slug: "five-sales-habits-of-agency-owners-who-keep-growing",
    img: "/images/bg-steps.jpg",
    tag: "Sales Tips",
    read: "4 min read",
    title: "Five Sales Habits of Agency Owners Who Keep Growing",
    excerpt: "None of them are complicated. The hard part is doing them every week.",
    body: [
      "The agency owners who grow year after year are rarely the loudest people in the room. They are the most consistent. These are five habits we see again and again.",
      "## They Block Time to Prospect",
      "Not only when business is slow, but every day, on the calendar, like any other appointment.",
      "## They Follow Up Fast",
      "A quote sent the same afternoon usually beats a better quote sent next week.",
      "## They Ask for Referrals",
      "Happy customers are usually glad to help when you ask plainly. Make it a normal part of the conversation.",
      "## They Review Policies and Know Their Numbers",
      "An annual check-in keeps coverage current and builds loyalty. Tracking quotes, closes, and retention shows them where to focus next.",
    ],
  },
  {
    slug: "why-good-insurance-agents-ask-more-than-they-pitch",
    img: "/images/bg-about.jpg",
    tag: "Insurance Sales",
    read: "5 min read",
    title: "Why Good Insurance Agents Ask More Than They Pitch",
    excerpt: "Customers buy from the agent who understood what they were trying to protect.",
    body: [
      "Nobody wakes up excited to buy insurance. People buy it because they have something they care about, like a family, a home, or a business, and they want it protected.",
      "## Start With Questions",
      "That is why strong producers start by asking. Who depends on you? What would a bad year look like? What are you planning for in the next five years? Once you understand the answers, the right recommendation is usually clear.",
      "## Listening Builds Trust",
      "Listening also builds trust, and trust is what turns a single policy into a long relationship. Those relationships, and the referrals that come from them, are what a healthy agency is built on.",
    ],
  },
  {
    slug: "hiring-your-first-employee-as-a-new-agency-owner",
    img: "/images/bg-team.jpg",
    tag: "Managing a Team",
    read: "6 min read",
    title: "Hiring Your First Employee as a New Agency Owner",
    excerpt: "When to make the hire, which role to fill first, and how to set that person up to succeed.",
    body: [
      "Your first hire is one of the biggest decisions you will make in the early years. Hire too soon and payroll squeezes your cash flow. Wait too long and you become the bottleneck, answering every call and processing every change yourself.",
      "## Start With Service",
      "Many new owners fill a customer service role first. That frees up their own time for sales and community relationships, which is where an owner adds the most value.",
      "## Hire for Character",
      "Look for reliability, a good attitude, and a real interest in helping people. Product knowledge can be taught. Those traits are much harder to train.",
      "## Set Them Up Well",
      "Once they start, give them proper training and clear expectations. A well-supported first employee often becomes the person the whole office depends on.",
    ],
  },
  {
    slug: "what-to-expect-from-a-good-business-mentor",
    img: "/images/garach-mentorship.jpg",
    tag: "Leadership",
    read: "4 min read",
    title: "What to Expect From a Good Business Mentor",
    excerpt: "Advice is easy to find. This is what real mentorship looks like when you are opening an agency.",
    body: [
      "A good mentor has already done what you are about to do. They can tell you what the first year really feels like, which mistakes are common, and which ones are expensive.",
      "## They Hold You to Your Goals",
      "They also hold you to the goals you set. That is not always comfortable, but it is the part of mentorship that makes the biggest difference.",
      "## They Stick Around",
      "And they stick around. Some of the most valuable coaching happens in year two or three, when you are hiring, growing, and deciding what kind of agency you want to become.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export type Post = {
  slug: string;
  img: string;
  tag: string;
  read: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "starting-an-insurance-business-under-a-national-brand",
    img: "/images/blog-starting-business-v2.jpg",
    tag: "Starting a Business",
    read: "7 min read",
    title: "Starting an Insurance Business Under a National Brand",
    excerpt:
      "What actually changes when you open your doors with a name people already trust.",
    author: "Garach Smith",
    date: "February 3, 2026",
    body: [
      "Most people who think about starting a business picture the hard part as finding customers. They are not wrong. The early months of any new venture can feel like shouting into an empty room.",
      "Opening a Farmers Insurance agency changes that picture. In Springfield, Joplin, and across Southwest Missouri, people already recognize the name on the door. That recognition will not run your agency for you, but it does shorten the stretch between “we just opened” and “someone is willing to take a meeting.”",
      "## Familiarity Opens Doors. You Still Have to Walk Through Them.",
      "A known brand makes the first conversation easier. A neighbor is more likely to return your call. A referral feels less risky when the company behind your office is one people have already heard of.",
      "After that first conversation, though, the work is yours. Clients choose an agent because that person listened, explained options clearly, and followed through. The brand gets you in the room. Your reputation keeps you there.",
      "## Less Time Building Systems. More Time Meeting People.",
      "Starting from scratch usually means inventing everything: products, processes, technology, and marketing. Branded ownership removes a large piece of that burden. You step into tools and workflows that already exist, then adapt them to your market.",
      "That matters more than it sounds. The hours you do not spend reinventing the wheel can go into the work that actually grows an agency: conversations, community presence, and taking care of the people who trust you with their coverage.",
      "## The Honest Tradeoff",
      "You will work inside a system. If you want complete control over every product and process, that can feel limiting. If you want a real head start and a structure to grow within, branded ownership can be a smart way into business ownership.",
      "Homestead District exists to help you make the most of that structure. Training, mentorship, and clear expectations are there so the brand advantage becomes a real book of business, not just a familiar logo.",
      "## Questions Worth Asking Before You Start",
      "Ask how long training lasts. Ask how marketing and leads work in your market. Ask what support looks like after launch day, not only before it. The right questions early save months of frustration later.",
      "If you are serious about starting a business and want ownership with a foundation behind it, start with a conversation. Bring your goals, your timeline, and the concerns you would rather not ignore. Clarity beats guesswork every time.",
    ],
  },
  {
    slug: "why-good-insurance-agents-ask-more-than-they-pitch",
    img: "/images/blog-insurance-sales-v2.jpg",
    tag: "Insurance Sales",
    read: "6 min read",
    title: "Why Good Insurance Agents Ask More Than They Pitch",
    excerpt:
      "People buy coverage from the agent who understood what they were trying to protect.",
    author: "Garach Smith",
    date: "March 8, 2026",
    body: [
      "Almost nobody wakes up excited to buy insurance. People buy it because something in their life matters: a family, a home, a business, a future they do not want left to chance.",
      "That is why the strongest insurance sales conversations rarely feel like sales conversations. They feel like careful interviews. Your job is to understand what is at risk before you recommend how to protect it.",
      "## Start With Real Questions",
      "Who depends on you? What would a rough year look like for your household or your business? What are you planning for over the next five years? Once you understand those answers, the right recommendation usually becomes obvious.",
      "Good questions also surface gaps the client did not think to mention. Those moments build credibility faster than any brochure or feature list ever will.",
      "## Listening Is the Close",
      "People remember whether you rushed them. They remember whether you explained options in plain language or talked over their concerns. That memory becomes your local reputation, and reputation is what turns a single policy into a long relationship.",
      "Those relationships, and the referrals that come from them, are what a healthy agency is built on. Pitching harder rarely creates that outcome. Listening carefully often does.",
      "## Present Less. Clarify More.",
      "When you do recommend coverage, keep it focused. Tie each option back to something the client already said mattered. Clarity beats volume. A short, accurate recommendation earns more confidence than a long tour of every product feature.",
      "This is not soft selling. It is disciplined selling. You are matching a real need to a real solution, then making the next step easy to understand.",
      "## Make It a Habit, Not a Script",
      "In our district, we practice discovery until it feels natural. That skill compounds across every appointment, every follow-up, and every annual review. Agents who grow into owners usually get excellent at this long before they hang their own sign.",
      "If you want to get better at insurance sales, start by getting better at asking. The pitch will take care of itself once you understand what the person across the table is trying to protect.",
    ],
  },
  {
    slug: "hiring-your-first-employee-as-a-new-agency-owner",
    img: "/images/blog-managing-team-v2.jpg",
    tag: "Managing a Team",
    read: "7 min read",
    title: "Hiring Your First Employee as a New Agency Owner",
    excerpt:
      "When to make the hire, which role to fill first, and how to set that person up to succeed.",
    author: "Garach Smith",
    date: "March 22, 2026",
    body: [
      "Your first hire is one of the biggest decisions you will make in the early years of ownership. Hire too soon and payroll squeezes cash flow. Wait too long and you become the bottleneck, answering every call and processing every change yourself.",
      "The goal is not to hire so the office looks busier. The goal is to free the owner to do the work only the owner can do: selling, leading, and building relationships in the community.",
      "## Many Owners Start With Service",
      "A strong customer service hire is often the first move. That person protects the client experience while you keep the pipeline moving. It is a practical trade: you hand off the work that keeps existing clients happy so you can keep growing.",
      "When that balance works, the agency feels healthier almost immediately. Clients get faster help. You get time back for prospecting and leadership.",
      "## Hire for Character First",
      "Look for reliability, a steady attitude, and a genuine interest in helping people. Product knowledge can be taught. Those traits are much harder to train into someone who does not already have them.",
      "Ask for real examples. How did they handle a frustrated customer? What did a busy week look like for them? Past behavior tells you more than a polished interview answer.",
      "## Set Clear Expectations Early",
      "Once they start, do not leave them guessing. Write down the role, the weekly priorities, and how success will be measured. Ambiguity creates stress for both of you.",
      "A well-supported first employee often becomes the person the whole office depends on. That does not happen by accident. It happens because training and expectations were clear from week one.",
      "## Lead the Relationship, Especially in the First 90 Days",
      "Check in often. Celebrate progress. Correct issues early, before small friction becomes a bigger problem. Your first hire learns how leadership works in your agency by watching you.",
      "Managing a team is part of ownership, not an optional extra. Homestead District coaching includes these conversations because growing an agency means growing the people who help you carry it.",
      "If you are preparing for ownership and wondering when that first hire should happen, bring the question into your next conversation with us. Timing is personal, but the principles travel well.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

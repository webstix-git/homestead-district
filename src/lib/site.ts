export const site = {
  name: "Homestead District",
  legalName: "The Homestead District",
  manager: "Garach Smith",
  phone: "(417) 844-7210",
  phoneHref: "tel:4178447210",
  email: "gsmith18@farmersagent.com",
  emailHref: "mailto:gsmith18@farmersagent.com",
  street: "1531 E Bradford Pkwy Ste 330",
  locality: "Springfield, MO 65804",
  hours: "Monday - Friday, 8:00 AM - 5:00 PM",
  facebook: "https://www.facebook.com/HomesteadDistrict/",
  url: "https://www.buildyourinsuranceagency.com",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=1531+E+Bradford+Pkwy+Ste+330%2C+Springfield%2C+MO+65804",
  description: "A Farmers Insurance district office in Springfield, Missouri.",
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Opportunity", href: "/opportunity" },
  {
    label: "About",
    children: [
      { label: "About the District", href: "/about" },
      { label: "Meet Garach", href: "/meet-garach" },
      { label: "Team Members", href: "/team-members" },
    ],
  },
  { label: "Privacy Policy", href: "/privacy-policy" },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Agent Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const exploreLinks: NavChild[] = [
  { label: "Home", href: "/" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "About the District", href: "/about" },
  { label: "Meet Garach", href: "/meet-garach" },
  { label: "Team Members", href: "/team-members" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Agent Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavChild[] = [
  { label: "Site Map", href: "/site-map" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "AI Readiness Service Index", href: "/ai-readiness-service-index" },
];

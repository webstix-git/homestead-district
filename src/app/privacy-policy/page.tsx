import type { Metadata } from "next";
import { BackHome } from "@/components/BackHome";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Homestead District in Springfield, Missouri collects, uses, discloses, and safeguards your information.",
};

type Block = { label?: string; text: string };
type Section = {
  title: string;
  intro?: string;
  items?: Block[];
  paragraph?: string;
};

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    intro: "We may collect personal and non-personal information about you in various ways, including:",
    items: [
      {
        label: "Personal Information:",
        text: "Name, email address, phone number, mailing address, and payment information when you register for events, sign up for newsletters, or pay district dues/fees.",
      },
      {
        label: "Non-Personal Information:",
        text: "Browser type, IP address, device information, and browsing history on our website, collected automatically through cookies and similar technologies.",
      },
      {
        label: "Communications:",
        text: "Records of your correspondence with us, including emails, feedback, and support requests.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "We use the information we collect to:",
    items: [
      { text: "Provide, operate, and maintain district services and communications." },
      { text: "Process transactions and send related information, including confirmations and invoices." },
      { text: "Send you technical notices, updates, security alerts, and administrative messages." },
      { text: "Respond to your comments, questions, and requests." },
      { text: "Communicate with you about events, news, and activities happening within the Homestead District." },
      { text: "Improve our website and community offerings." },
    ],
  },
  {
    title: "3. Information Sharing and Disclosure",
    intro:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:",
    items: [
      {
        label: "Service Providers:",
        text: "We may share information with trusted third-party vendors who assist us in operating our website, conducting our business, or serving our community (e.g., payment processors, email delivery services).",
      },
      {
        label: "Legal Requirements & Missouri Sunshine Law:",
        text: "If the Homestead District operates as a public governmental body (such as a Community Improvement District), your information may be subject to disclosure under Chapter 610 of the Revised Statutes of Missouri, commonly known as the Sunshine Law. If an appropriate request is made, we may be required by law to disclose the requested information, which may include personally identifiable information.",
      },
      {
        label: "Protection of Rights:",
        text: "We may disclose information when we believe release is appropriate to comply with the law, enforce our policies, or protect our or others' rights, property, or safety.",
      },
    ],
  },
  {
    title: "4. Data Security",
    paragraph:
      "We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, destruction, use, modification, or disclosure. However, no data transmission over the internet or electronic storage system is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Your Choices and Rights",
    items: [
      {
        label: "Opt-Out:",
        text: "You may opt-out of receiving promotional emails or newsletters from us by following the unsubscribe instructions included in those communications.",
      },
      {
        label: "Access and Update:",
        text: "You may request to review, correct, or delete the personal information we hold about you by contacting us using the information below.",
      },
    ],
  },
  {
    title: "6. Third-Party Links",
    paragraph:
      "Our website may contain links to third-party websites of local Springfield businesses, partners, or resources. We are not responsible for the privacy practices or the content of those third-party sites. We encourage you to read the privacy policies of any website you visit.",
  },
  {
    title: "7. Changes to This Privacy Policy",
    paragraph:
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date at the top.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        image="/images/bg-legal-v2.jpg"
        eyebrow="Privacy Policy"
        title="How we collect, use, and protect the information you share with us."
        description="Last Updated: August 19, 2026"
      />

      <article className="section-y-sm">
        <div className="container-page max-w-[860px]">
          <div className="flex flex-col gap-5 leading-[1.75] text-ink-muted">
            <p>
              The Homestead District (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), located in Springfield,
              Missouri, is committed to protecting the privacy and security of our residents, businesses, and visitors. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website www.buildyourinsuranceagency.com, use our services, or interact with us.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you agree to the practices
              described in this policy.
            </p>
          </div>

          {sections.map((section) => (
            <section key={section.title} className="mt-12">
              <h2 className="mb-5 text-[clamp(22px,2.2vw,28px)] leading-[1.2]">{section.title}</h2>
              <div className="flex flex-col gap-4 leading-[1.75] text-ink-muted">
                {section.intro ? <p>{section.intro}</p> : null}
                {section.paragraph ? <p>{section.paragraph}</p> : null}
                {section.items ? (
                  <ul className="flex flex-col gap-3 border-l-[3px] border-ember-500 pl-6">
                    {section.items.map((item) => (
                      <li key={item.text} className="text-[18px] leading-[1.7]">
                        {item.label ? <strong className="font-bold text-navy-900">{item.label} </strong> : null}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}

          <div className="mt-14 border-t-[3px] border-ember-500 bg-navy-900 p-8 text-white">
            <div className="mb-3 font-heading text-lg font-bold">{site.legalName}</div>
            <address className="mb-4 text-[17px] leading-[1.7] text-mist-100 not-italic">
              <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="hover:text-ember-500">
                {site.street}
                <br />
                {site.locality}
              </a>
            </address>
            <div className="flex flex-col gap-2 text-[17px]">
              <PhoneLink className="w-fit font-semibold hover:text-ember-500" />
              <a href={site.emailHref} className="w-fit font-semibold hover:text-ember-500">
                {site.email}
              </a>
            </div>
          </div>

          <BackHome />
        </div>
      </article>
    </>
  );
}

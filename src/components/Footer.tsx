import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/ui";
import { exploreLinks, legalLinks, site } from "@/lib/site";

const headingClass = "mb-5 font-heading text-xs font-bold tracking-[0.2em] text-white uppercase";
const linkClass = "text-[15px] text-mist-300 hover:text-ember-500";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 pt-[clamp(56px,7vw,88px)] text-mist-300">
      <Image
        src="/images/e45d765d.png"
        alt=""
        width={880}
        height={865}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-32 w-[480px] opacity-[0.04]"
      />
      <div className="container-page relative">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.3fr_1.3fr] lg:gap-14">
          <div>
            <Link href="/" aria-label="The Homestead District, home" className="inline-block">
              <Image src="/images/logo.png" alt="The Homestead District" width={520} height={120} className="h-16 w-auto" />
            </Link>
            <p className="mt-6 max-w-[360px] leading-[1.7] text-mist-300">{site.description}</p>
            <div className="mt-7 flex items-center gap-4">
              <span className="font-heading text-xs font-bold tracking-[0.2em] text-white uppercase">Social Media:</span>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Homestead District on Facebook"
                className="grid size-10 place-items-center rounded-full border border-white/25 text-white hover:border-ember-500 hover:bg-ember-500 hover:text-navy-900"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className={headingClass}>Explore</h2>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={headingClass}>Office</h2>
            <address className="text-[15px] leading-[1.8] text-mist-300 not-italic">
              {site.street}
              <br />
              {site.locality}
              <br />
              <br />
              <span className="xl:whitespace-nowrap">{site.hours}</span>
            </address>
          </div>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={site.phoneHref} className={`${linkClass} inline-flex items-center gap-2`}>
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <span>{site.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-mist-400 lg:flex-row lg:items-center lg:justify-between">
          <div>© 2026 Homestead District. All rights reserved.</div>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="Legal">
            {legalLinks.map((link, index) => (
              <li key={link.href} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-white/25">
                    |
                  </span>
                ) : null}
                <Link href={link.href} className="hover:text-ember-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

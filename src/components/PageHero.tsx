import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  /** Becomes the page heading (h1). */
  eyebrow: string;
  /** Becomes the supporting description under the heading. */
  title: ReactNode;
  /** Optional second supporting line under the description. */
  description?: ReactNode;
  image?: string;
  /** Extra classes for the background Image (e.g. object-position). */
  imageClassName?: string;
  children?: ReactNode;
  aside?: ReactNode;
  /** Shown directly under the hero. Defaults to Home / eyebrow. */
  breadcrumb?: Crumb[];
  /** Skip rendering the breadcrumb (e.g. when the page places it elsewhere). */
  hideBreadcrumb?: boolean;
  /** Extra classes for the breadcrumb strip (defaults to cream section bg). */
  breadcrumbClassName?: string;
  /** Use the taller auto-height hero (e.g. Opportunity with CTA buttons). */
  tall?: boolean;
};

export function Watermark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/e45d765d.png"
      alt=""
      width={880}
      height={865}
      aria-hidden="true"
      className={`pointer-events-none absolute z-[1] ${className ?? ""}`}
    />
  );
}

export function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className ?? "bg-cream-100"}>
      <div className="container-page py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-ember-500">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="hover:text-ember-600">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-navy-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageClassName,
  children,
  aside,
  breadcrumb,
  hideBreadcrumb = false,
  breadcrumbClassName,
  tall = false,
}: PageHeroProps) {
  const crumbs = breadcrumb ?? [{ label: "Home", href: "/" }, { label: eyebrow }];

  return (
    <>
      <section
        className={
          tall
            ? "hero-pt relative overflow-hidden bg-navy-900 pb-[clamp(56px,7vw,104px)] text-white"
            : "relative flex min-h-[340px] items-center overflow-hidden bg-navy-900 pt-[84px] pb-8 text-white sm:min-h-[380px] md:h-[400px] md:min-h-0 md:pb-0 min-[1100px]:pt-[112px]"
        }
      >
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className={`object-cover ${imageClassName ?? ""}`}
            />
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(17,25,41,0.97)_0%,rgba(17,25,41,0.88)_50%,rgba(17,25,41,0.6)_100%)]" />
          </>
        ) : (
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_70%_30%,#000_0%,transparent_75%)]" />
        )}
        <div className={`container-page relative z-[2] w-full ${tall ? "" : "py-6"}`}>
          <div className={aside ? "grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16" : undefined}>
            <div>
              <h1
                className={
                  tall
                    ? "h-page max-w-[900px]"
                    : "font-heading max-w-[900px] text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold tracking-[-0.025em] text-balance"
                }
              >
                {eyebrow}
              </h1>
              <div
                className={
                  tall
                    ? "mt-7 max-w-[720px] text-[clamp(18px,1.6vw,22px)] leading-[1.55] font-medium text-mist-50 text-balance"
                    : "mt-3 max-w-[720px] text-[clamp(16px,1.5vw,20px)] leading-[1.45] font-medium text-mist-50 text-balance"
                }
              >
                {title}
              </div>
              {description ? (
                <p className={`max-w-[640px] text-mist-200 ${tall ? "mt-5 leading-[1.65]" : "mt-3 leading-[1.55]"}`}>
                  {description}
                </p>
              ) : null}
              {children ? (
                <div className={`flex flex-wrap items-center gap-4 ${tall ? "mt-10" : "mt-6"}`}>{children}</div>
              ) : null}
            </div>
            {aside}
          </div>
        </div>
      </section>
      {hideBreadcrumb ? null : <Breadcrumb items={crumbs} className={breadcrumbClassName} />}
    </>
  );
}

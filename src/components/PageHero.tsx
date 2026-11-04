import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  /** Becomes the page heading (h1). */
  eyebrow: string;
  /** Becomes the supporting description under the heading. */
  title: ReactNode;
  /** Optional second supporting line under the description. */
  description?: ReactNode;
  image?: string;
  /** Hide the monogram watermark. */
  noWatermark?: boolean;
  children?: ReactNode;
  aside?: ReactNode;
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
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <div className="container-page py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-mist-400">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="hover:text-ember-600">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-navy-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function PageHero({ eyebrow, title, description, image, noWatermark, children, aside }: PageHeroProps) {
  return (
    <section className="hero-pt relative overflow-hidden bg-navy-900 pb-[clamp(56px,7vw,104px)] text-white">
      {image ? (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(100deg,rgba(17,25,41,0.97)_0%,rgba(17,25,41,0.88)_50%,rgba(17,25,41,0.6)_100%)]" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_at_70%_30%,#000_0%,transparent_75%)]" />
      )}
      {noWatermark ? null : <Watermark className="-right-16 -bottom-40 w-[520px] opacity-[0.06]" />}
      <div className="container-page relative z-[2]">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20" : undefined}>
          <div>
            {/* Eyebrow text is the heading; former heading is the description */}
            <h1 className="h-page max-w-[900px]">{eyebrow}</h1>
            <div className="mt-7 max-w-[720px] text-[clamp(18px,1.6vw,22px)] leading-[1.55] font-medium text-mist-50 text-balance">
              {title}
            </div>
            {description ? <p className="mt-5 max-w-[640px] leading-[1.65] text-mist-200">{description}</p> : null}
            {children ? <div className="mt-10 flex flex-wrap items-center gap-4">{children}</div> : null}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}

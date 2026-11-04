import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ButtonVariant = "primary" | "outline" | "outline-dark" | "dark";
export type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "border-ember-500 bg-ember-500 text-navy-900 hover:border-ember-400 hover:bg-ember-400",
  outline: "border-white/40 bg-transparent text-white hover:border-ember-500 hover:text-ember-500",
  "outline-dark": "border-navy-900 bg-transparent text-navy-900 hover:bg-navy-900 hover:text-white",
  dark: "border-navy-900 bg-navy-900 text-white hover:border-white hover:bg-white hover:text-navy-900",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-14 px-7 text-[13px]",
  lg: "min-h-[72px] px-10 text-sm",
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", extra?: string) {
  return cn(
    "group/btn inline-flex items-center justify-center gap-3 rounded-[2px] border font-heading leading-none font-bold tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-200",
    variants[variant],
    sizes[size],
    extra,
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={cn("size-[22px] shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1", className)}
      strokeWidth={2.25}
      aria-hidden="true"
    />
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", arrow = false, className }: ButtonProps) {
  const content = (
    <>
      <span className="leading-none">{children}</span>
      {arrow ? <ArrowIcon /> : null}
    </>
  );
  const classes = buttonClass(variant, size, className);

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

export function PhoneLink({
  className,
  iconClassName = "size-4",
  children,
}: {
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
}) {
  return (
    <a href={site.phoneHref} className={cn("inline-flex items-center gap-2", className)}>
      <Phone className={cn("shrink-0", iconClassName)} aria-hidden="true" />
      {children ?? <span>{site.phone}</span>}
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return <div className={cn(tone === "light" ? "eyebrow-light" : "eyebrow", "mb-5", className)}>{children}</div>;
}

/** Eyebrow + heading on the left, intro paragraph on the right. */
export function SectionHead({
  eyebrow,
  title,
  text,
  tone = "dark",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-[clamp(40px,5vw,64px)] grid items-end gap-10 lg:grid-cols-2",
        tone === "light" ? "text-white" : "text-navy-900",
        className,
      )}
    >
      <div>
        <Eyebrow tone={tone === "light" ? "light" : "dark"}>{eyebrow}</Eyebrow>
        <h2 className="h-display">{title}</h2>
      </div>
      {text ? (
        <p className={cn("max-w-[520px] leading-[1.7]", tone === "light" ? "text-mist-200" : "text-ink-muted")}>{text}</p>
      ) : null}
    </div>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-ember-500">{children}</span>;
}

export function FacebookIcon(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-1 .4-1.8 1.9-1.8H17V3.7c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4v2.6H7.4v3.3h2.8V22h3.3Z" />
    </svg>
  );
}

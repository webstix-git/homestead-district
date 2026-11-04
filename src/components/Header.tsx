"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { buttonClass, cn } from "@/components/ui";
import { navItems, site, type NavItem } from "@/lib/site";

function isActive(item: NavItem, pathname: string) {
  if (item.href) return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  return item.children?.some((child) => pathname.startsWith(child.href)) ?? false;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid ? "bg-navy-900" : "bg-transparent",
        scrolled && "shadow-[0_10px_30px_rgba(0,0,0,0.28)]",
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "hidden overflow-hidden border-b transition-[max-height,opacity,border-color] duration-300 lg:block",
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-10 border-white/10 opacity-100",
        )}
        aria-hidden={scrolled}
      >
        <div className="container-page flex h-10 items-center justify-between gap-6 text-[13px] text-mist-50">
          <div className="flex items-center gap-7">
            <span>
              {site.street}, {site.locality}
            </span>
            <span>{site.hours}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              tabIndex={scrolled ? -1 : undefined}
              className="inline-flex items-center gap-2 hover:text-ember-500"
            >
              <Phone className="size-4" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.emailHref}
              tabIndex={scrolled ? -1 : undefined}
              className="inline-flex items-center gap-2 hover:text-ember-500"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "container-page flex items-center justify-between gap-6 transition-[height] duration-300",
          scrolled ? "h-[68px] min-[1100px]:h-[76px]" : "h-[84px] min-[1100px]:h-[112px]",
        )}
      >
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center" aria-label="The Homestead District, home">
          <Image
            src="/images/logo.png"
            alt="The Homestead District"
            width={520}
            height={120}
            priority
            className={cn(
              "w-auto transition-[height] duration-300",
              scrolled ? "h-11 min-[1100px]:h-[52px]" : "h-14 min-[1100px]:h-20",
            )}
          />
        </Link>

        {/* Desktop nav - shows from ~1100px to match the design breakpoint */}
        <nav aria-label="Main" className="hidden h-full min-[1100px]:block">
          <ul ref={navRef} className="flex h-full items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              const linkClass = cn(
                "relative flex items-center gap-1.5 py-2 font-heading text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:text-white",
                active &&
                  "after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-ember-500 after:content-['']",
              );

              if (!item.children) {
                return (
                  <li key={item.label} className="flex h-full items-center">
                    <Link href={item.href!} className={linkClass} aria-current={active ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openMenu === item.label;
              return (
                <li
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
                  }}
                >
                  <button
                    type="button"
                    className={cn(linkClass, "cursor-pointer")}
                    aria-expanded={isOpen}
                    aria-haspopup="menu"
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-3.5 text-ember-500 transition-transform", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-[-20px] z-[60] min-w-[240px] border-t-[3px] border-ember-500 bg-white py-2 shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-200",
                      isOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeAll}
                        className={cn(
                          "block px-[22px] py-[13px] font-heading text-[13px] font-semibold hover:bg-cream-100 hover:text-ember-600",
                          pathname.startsWith(child.href) ? "text-ember-600" : "text-navy-900",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
            <li className="flex items-center">
              <Link href="/contact" className={buttonClass("primary", "md", "min-h-12 px-5 text-xs")}>
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-12 cursor-pointer items-center justify-center rounded-[2px] border border-white/30 text-white min-[1100px]:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-y-auto border-t border-white/10 bg-navy-900 min-[1100px]:hidden",
          mobileOpen ? "max-h-[calc(100dvh-84px)]" : "hidden",
        )}
      >
        <div className="container-page pt-3 pb-8">
          <ul>
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              const rowClass = cn(
                "flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-heading text-sm font-semibold tracking-[0.1em] text-white uppercase",
                active && "border-b-ember-500",
              );

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link href={item.href!} onClick={closeAll} className={rowClass}>
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const expanded = mobileGroup === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={cn(rowClass, "cursor-pointer")}
                    aria-expanded={expanded}
                    onClick={() => setMobileGroup(expanded ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-4 text-ember-500 transition-transform", expanded && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {expanded ? (
                    <ul className="border-b border-white/10 py-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeAll}
                            className="block py-3 font-heading text-[13px] font-semibold text-mist-100 hover:text-ember-500"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link href="/contact" onClick={closeAll} className={buttonClass("primary", "md", "mt-6 w-full")}>
            Apply Now
          </Link>
          <div className="mt-6 flex flex-col gap-3 text-[15px] text-mist-100">
            <a href={site.phoneHref} className="inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden="true" />
              <span>{site.phone}</span>
            </a>
            <a href={site.emailHref} className="inline-flex items-center gap-2">
              <Mail className="size-4" aria-hidden="true" />
              <span>{site.email}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

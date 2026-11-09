import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/ui";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <PageHero
        eyebrow={post.title}
        title={post.excerpt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        breadcrumbClassName="bg-white"
      />

      <div className="section-y-sm bg-white">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.4fr_0.7fr] lg:gap-16">
          <article>
            <p className="mb-6 text-sm text-ink-soft">
              Written by {post.author} · {post.date} · {post.read}
            </p>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">{post.tag}</figcaption>
            </figure>

            <div className="mt-8 max-w-3xl space-y-5 leading-[1.8] text-ink-muted">
              {post.body.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={paragraph} className="pt-4 text-[clamp(24px,2.4vw,32px)] text-navy-900">
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return null;
                }
                return <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>;
              })}
            </div>

            <div className="mt-10 max-w-3xl border-t border-navy-900/10 pt-8">
              <h2 className="text-[clamp(24px,2.4vw,32px)] text-navy-900">Thinking About Owning an Agency?</h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                If this sparked a few questions, that is a good sign. Reach out and Garach will walk you through what the
                next step looks like. No pressure, just a clear conversation.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/contact"
                  className="font-heading text-[13px] font-bold tracking-[0.12em] text-ember-600 uppercase underline underline-offset-4 hover:text-navy-900"
                >
                  Apply Now
                </Link>
                <PhoneLink
                  className="font-heading text-[13px] font-bold tracking-[0.12em] text-navy-900 uppercase underline underline-offset-4 hover:text-ember-600"
                  iconClassName="size-4"
                />
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-navy-900 p-7 text-white">
              <p className="font-heading text-xs font-bold tracking-[0.18em] text-ember-500 uppercase">Next Step</p>
              <h2 className="mt-3 font-heading text-2xl font-bold">Curious If This Fits You?</h2>
              <p className="mt-3 leading-relaxed text-mist-100">
                Tell us a little about yourself. Garach will follow up and help you see whether agency ownership is the
                right move.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex font-heading text-sm font-bold tracking-[0.12em] text-ember-500 uppercase underline underline-offset-4 hover:text-white"
              >
                Start the Conversation
              </Link>
              <a
                href={site.phoneHref}
                className="mt-5 flex items-center gap-2 font-heading text-sm font-bold tracking-[0.08em] text-white uppercase underline underline-offset-4 hover:text-ember-500"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>

            <div className="border border-cream-300 bg-cream-100 p-6">
              <h2 className="font-heading text-xl font-bold">More Articles</h2>
              <ul className="mt-4 space-y-4">
                {more.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="group flex items-center gap-3">
                      <span className="relative size-16 shrink-0 overflow-hidden bg-navy-900">
                        <Image src={item.img} alt="" fill sizes="64px" className="object-cover" />
                      </span>
                      <span className="font-heading text-[15px] leading-snug font-semibold text-navy-900 group-hover:text-ember-600">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}

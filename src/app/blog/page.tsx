import type { Metadata } from "next";
import { metaCopy } from "@/lib/meta-copy";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  title: metaCopy.blog.title,
  description: metaCopy.blog.description,
  path: '/blog',
  image: '/images/bg-blog-v2.jpg',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="/images/bg-blog-v2.jpg"
        imageAlt="Business resources and articles for insurance agency ownership"
        eyebrow="Blog & Resources"
        title="Practical reading for people considering agency ownership."
      />

      <section className="section-y">
        <div className="container-page">
          <p className="mb-10 max-w-[720px] leading-[1.7] text-ink-muted">
            Practical guides for people considering ownership. When you are ready for next steps, review the{" "}
            <Link href="/opportunity" className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900">
              ownership opportunity
            </Link>
            , browse the{" "}
            <Link href="/faq" className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900">
              FAQ
            </Link>
            , or{" "}
            <Link href="/contact" className="font-semibold text-ember-600 underline underline-offset-4 hover:text-navy-900">
              apply to the district
            </Link>
            .
          </p>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="flex">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex w-full flex-col bg-white shadow-[0_8px_24px_rgba(17,25,41,0.06)] transition-shadow hover:shadow-[0_20px_40px_rgba(17,25,41,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 border-t-[3px] border-ember-500 px-7 pt-6 pb-8">
                    <div className="font-heading text-[11px] font-bold tracking-[0.18em] text-ember-600 uppercase">
                      {post.tag} · {post.read}
                    </div>
                    <h2 className="text-[22px] leading-[1.25] group-hover:text-ember-600">{post.title}</h2>
                    <p className="text-sm text-ink-soft">
                      By {post.author} · {post.date}
                    </p>
                    <p className="flex-1 leading-[1.65] text-ink-muted">{post.excerpt}</p>
                    <span className="mt-2 inline-flex items-center gap-2.5 font-heading text-[13px] leading-none font-bold tracking-[0.12em] uppercase">
                      Read Article
                      <ArrowRight
                        className="size-[22px] text-ember-500 transition-transform group-hover:translate-x-1"
                        strokeWidth={2.25}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

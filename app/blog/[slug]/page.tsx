import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-10 px-8 py-24 sm:px-16">
        <div className="flex flex-col gap-4">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← 返回 Blog
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-zinc-500 dark:text-zinc-400">
              {post.tag}
            </span>
            <time
              dateTime={post.date}
              className="text-zinc-400 dark:text-zinc-500"
            >
              {post.date}
            </time>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {post.title}
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>
        </div>

        <article className="flex flex-col gap-6 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-zinc-700 dark:text-zinc-300"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </main>
    </div>
  );
}

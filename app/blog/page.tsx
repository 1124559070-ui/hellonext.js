import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "阅读关于 Next.js 与前端开发的文章",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-12 px-8 py-24 sm:px-16">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← 返回首页
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Blog
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            精选两篇关于 Next.js 的文章，点击卡片查看更多。
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="flex items-center justify-between gap-3 text-sm">
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
                <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
                  {post.title}
                </h2>
                <p className="flex-1 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  阅读全文 →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

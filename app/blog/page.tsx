"use client";

import Link from "next/link";
import useSWR from "swr";
import BlogCardList from "@/src/components/blog/BlogCardList";
import type { BlogCardData } from "@/src/types/blog";

async function fetcher(url: string): Promise<BlogCardData[]> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("博客列表加载失败");
  }

  return response.json();
}

export default function BlogPage() {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR<BlogCardData[]>("/api/blog", fetcher);

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

        {isLoading && (
          <p className="text-zinc-600 dark:text-zinc-400" role="status">
            正在加载文章…
          </p>
        )}
        {error && (
          <p className="text-destructive" role="alert">
            {error.message}
          </p>
        )}
        {posts && <BlogCardList posts={posts} />}
      </main>
    </div>
  );
}

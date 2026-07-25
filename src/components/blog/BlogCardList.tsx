import Link from "next/link";
import { getMockBlogPosts } from "@/src/lib/blog-mock";

export default async function BlogCardList() {
  const posts = await getMockBlogPosts();

  return (
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
  );
}

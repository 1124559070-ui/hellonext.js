import Link from "next/link";

export default function AboutNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-8 py-24 font-sans dark:bg-black">
      <main className="flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          404
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          页面未找到
        </h1>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          你访问的 About 相关页面不存在，或链接已失效。
        </p>
        <Link
          href="/about"
          className="mt-2 text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          返回 About
        </Link>
      </main>
    </div>
  );
}

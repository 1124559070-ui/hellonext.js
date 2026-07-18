import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Next.js",
  description: "了解 Next.js —— 用于构建现代 Web 应用的 React 框架",
};

const features = [
  {
    title: "App Router",
    description:
      "基于文件系统的路由。在 app 目录下创建文件夹与 page.tsx，即可自动生成对应路由。",
  },
  {
    title: "React Server Components",
    description:
      "组件默认在服务端渲染，减少发往客户端的 JavaScript，提升首屏与交互性能。",
  },
  {
    title: "内置优化",
    description:
      "Image、Font、Link 等组件开箱即用，自动处理图片优化、字体加载与客户端导航预取。",
  },
  {
    title: "全栈能力",
    description:
      "支持 Route Handlers、Server Actions 与灵活的渲染策略，可按需选择静态或动态渲染。",
  },
];

export default function AboutPage() {
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
            关于 Next.js
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js 是由 Vercel 维护的 React 框架，用于构建快速、可扩展的 Web
            应用。它在 React 之上提供路由、渲染、数据获取与部署相关的约定与工具，让你能专注于产品本身。
          </p>
        </div>

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
            核心特性
          </h2>
          <ul className="flex flex-col gap-6">
            {features.map((feature) => (
              <li key={feature.title} className="flex flex-col gap-2">
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
            本项目
          </h2>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            当前应用基于 Next.js App Router 与 React 19 搭建，使用 Tailwind CSS
            做样式。你可以继续在{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              app/
            </code>{" "}
            目录下添加页面与组件，快速扩展功能。
          </p>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-base font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            查看官方文档 →
          </a>
        </section>
      </main>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "阅读关于 Next.js 与前端开发的文章",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

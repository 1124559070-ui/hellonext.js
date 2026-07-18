export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "从零开始使用 Next.js",
    excerpt:
      "了解 App Router、页面与布局的基本概念，快速搭起你的第一个 Next.js 应用。",
    date: "2026-07-10",
    tag: "入门",
    content: [
      "Next.js 是一个基于 React 的全栈框架。通过 App Router，你可以用文件夹结构直接定义路由：在 app 目录下创建 page.tsx，对应路径就会自动可用。",
      "一个典型的起步流程是：安装依赖、运行开发服务器，然后编辑 app/page.tsx。布局（layout.tsx）可以在多个页面之间共享导航、字体与全局样式，切换页面时布局状态也会被保留。",
      "此外，Next.js 还内置了 Link、Image、Font 等组件。Link 负责客户端导航与预取，Image 处理图片优化，Font 则能优化字体加载，减少布局抖动。",
      "当你熟悉这些基础约定后，就可以继续探索数据获取、Server Actions，以及按需选择静态或动态渲染的策略。",
    ],
  },
  {
    slug: "server-components-explained",
    title: "理解 React Server Components",
    excerpt:
      "Server Components 如何减少客户端 JavaScript，以及在 Next.js 里如何合理划分服务端与客户端组件。",
    date: "2026-07-15",
    tag: "进阶",
    content: [
      "在 Next.js App Router 中，组件默认是 React Server Components。它们在服务端渲染，可以把数据请求、密钥与重量级逻辑留在服务器，只把必要的结果发送给浏览器。",
      "需要交互（例如点击、本地状态、浏览器 API）时，再把对应部分拆成 Client Components，并在文件顶部加上 \"use client\"。这样可以把客户端 JavaScript 体积控制在真正需要的范围内。",
      "一个实用原则是：尽量让页面与数据获取留在服务端，把按钮、表单控件、动画等交互区域下沉为客户端组件。父子组合时，也可以把 Client Component 作为 Server Component 的子组件来使用。",
      "理解这层边界后，你就能在性能与交互体验之间做更清晰的取舍，写出既快又好维护的 Next.js 应用。",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

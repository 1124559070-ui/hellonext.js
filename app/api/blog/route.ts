import { getMockBlogPosts } from "@/src/lib/blog-mock";

export async function GET() {
  const posts = await getMockBlogPosts();

  return Response.json(posts);
}

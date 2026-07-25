import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogCardData } from "@/src/types/blog";

type BlogCardListProps = {
  posts: BlogCardData[];
};

export default function BlogCardList({ posts }: BlogCardListProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {posts.map((post) => (
        <li key={post.slug}>
          <Card className="h-full py-0 transition-shadow hover:shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              width={1200}
              height={675}
              className="aspect-video w-full object-cover"
            />
            <CardHeader>
              <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                <span className="font-medium">{post.tag}</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <CardTitle>
                <h2>{post.title}</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="leading-7 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href={`/blog/${post.slug}`} />}
              >
                阅读全文 →
              </Button>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
}

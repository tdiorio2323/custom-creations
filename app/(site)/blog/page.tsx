import Link from "next/link";
import { listPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  const posts = listPosts();
  if (posts.length === 0) {
    return (
      <main className="prose mx-auto px-4 py-12">
        <h1>Blog</h1>
        <p>No posts yet. Add files under <code>content/posts</code>.</p>
        <Link href="/contact" className="btn">Contact Us</Link>
      </main>
    );
  }
  return (
    <main className="prose mx-auto px-4 py-12">
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
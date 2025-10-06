import Link from "next/link";

export const metadata = { title: "Blog" };

// This is a placeholder for where you would read your MDX files
// For example, using a library like `glob` and `gray-matter`
const posts: any[] = [];

export default function BlogIndex() {
  if (posts.length === 0) {
    return (
      <div className="card p-6 space-y-3 text-black/70">
        <h1 className="text-2xl font-semibold text-black">No Posts Yet</h1>
        <p>Check back soon for updates, or contact us with any questions.</p>
        <Link href="/contact" className="btn">
          Contact Us
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 hover:bg-white">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-sm text-black/70 mt-2">{post.summary}</p>
        </Link>
      ))}
    </div>
  );
}

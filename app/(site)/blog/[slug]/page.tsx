import { readPost } from "@/lib/posts";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export const dynamic = "force-static";

export default function PostPage({ params }: { params: { slug: string } }) {
  const md = readPost(params.slug);
  if (!md) {
    return <main className="prose mx-auto px-4 py-12"><h1>Not found</h1></main>;
  }
  const html = DOMPurify.sanitize(marked.parse(md) as string);
  return (
    <main className="prose mx-auto px-4 py-12">
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

import { readPost } from "@/lib/posts";
import { marked } from "marked";
import { type NextPage } from "next";

export const dynamic = "force-static";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const PostPage: NextPage<PostPageProps> = async ({ params }) => {
  const { slug } = await params;
  const md = readPost(slug);
  if (!md) {
    return <main className="prose mx-auto px-4 py-12"><h1>Not found</h1></main>;
  }
  const html = await marked.parse(md);
  return (
    <main className="prose mx-auto px-4 py-12">
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default PostPage;

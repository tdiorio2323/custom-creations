import fs from "fs";
import path from "path";

export type PostMeta = { slug: string; title: string };
const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function listPosts(): PostMeta[] {
  try {
    return fs.readdirSync(POSTS_DIR)
      .filter(f => /\.mdx?$/i.test(f))
      .map(f => {
        const slug = f.replace(/\.mdx?$/i, "");
        const title = slug.replace(/[-_]/g, " ");
        return { slug, title };
      });
  } catch { return []; }
}

export function readPost(slug: string): string | null {
  try {
    const file = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
    return file;
  } catch {
    try {
      const file = fs.readFileSync(path.join(POSTS_DIR, `${slug}.mdx`), "utf8");
      return file;
    } catch { return null; }
  }
}

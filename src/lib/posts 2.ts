import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  contentHtml?: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    contentHtml,
  };
}

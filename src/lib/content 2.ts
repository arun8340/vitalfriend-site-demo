import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const pagesDirectory = path.join(process.cwd(), "pages-content");

export interface PageContent {
  slug: string;
  title: string;
  date: string;
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  excerpt?: string;
  contentHtml: string;
}

export async function getPageContent(slug: string): Promise<PageContent> {
  const filePath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    focusKeyword: data.focusKeyword,
    excerpt: data.excerpt,
    contentHtml,
  };
}

export function getPageFrontmatter(slug: string) {
  const filePath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

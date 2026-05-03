import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

/** Returns all posts sorted by date (newest first), with frontmatter only */
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage || null,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Returns all slugs for getStaticPaths */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    }));
}

/** Returns full post data (frontmatter + rendered HTML body) for one slug */
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage || null,
    contentHtml,
  };
}

import { createContentLoader } from "vitepress";
import { formatDate } from "./formatDate.js";
import { Post } from "./types.js";

declare const data: Post[];
export { data };

/**
 * 返回 src/blog/ 目录下所有 md 文档信息
 */
export default createContentLoader("blog/**/*.md", {
  transform(rawData): Post[] {
    return rawData
      .map(({ url, frontmatter }) => ({
        url,
        frontmatter,
        date: formatDate(frontmatter.updateTime),
      }))
      // 过滤掉隐藏文章，同时排除博客自身的索引页（如 /blog/ 或 /blog）
      .filter((post) => {
        if (post.frontmatter.hidden) return false;
        const cleanUrl = post.url.replace(/\/$/, "");
        if (cleanUrl.endsWith("/blog") || cleanUrl === "/blog") return false;
        return true;
      })
      .sort((a, b) => b.date.time - a.date.time);
  },
});
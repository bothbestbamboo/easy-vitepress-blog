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
      // 修改这里：移除了对 .html 的依赖，只要不是 hidden 的文章都会被加载
      .filter((post) => !post.frontmatter.hidden)
      .sort((a, b) => b.date.time - a.date.time);
  },
});
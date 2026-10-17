import { createContentLoader } from "vitepress";

export interface ProductPost {
  title: string;
  description: string;
  banner: string;
  tag?: string;
  url: string;
  date?: string;
}

declare const data: ProductPost[];
export { data };

/**
 * 自动读取 src/products/ 目录下所有的 .md 产品文档
 */
export default createContentLoader("products/**/*.md", {
  transform(rawData): ProductPost[] {
    return rawData
      .filter(({ url, frontmatter }) => {
        // 排除隐藏文章，以及排除 /products/ 列表索引页自身
        if (frontmatter.hidden) return false;
        const cleanUrl = url.replace(/\/$/, "");
        if (cleanUrl.endsWith("/products") || cleanUrl === "/products") return false;
        return true;
      })
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title || "Untitled Product",
        description: frontmatter.description || "",
        banner: frontmatter.image || frontmatter.banner || "/default-product.jpg",
        tag: frontmatter.tags ? (Array.isArray(frontmatter.tags) ? frontmatter.tags[0] : frontmatter.tags) : "Bamboo",
      }));
  },
});
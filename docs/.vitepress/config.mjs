import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";

export default defineConfig({
  // 标签上显示的网站标题
  title: "Bothbest Bamboo Blog",
  titleTemplate: "Blog",
  // 在标签上显示所的 logo
  head: [["link", { rel: "icon", href: "https://img.bambooflooring.net/file/1782802571919.png" }]],

  // 网站描述，有利于被搜索引擎捕获
  description:
    "Bothbest is a professional, FSC certified bamboo factory based in China, manufacturing and exporting high-quality bamboo flooring, outdoor decking, and plywood since 2001.",

  // md 文件根目录
  // 【谨慎修改】：一旦修改将引起较多变动
  srcDir: "./src",

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: "https://img.bambooflooring.net/file/1782802571919.png",
    // 顶部导航栏
    nav: [
      { text: "🏠 Home", link: "index.md" },
      { text: "🌐 About", link: "/AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "💎 Products", link: "Projects.md" },
    
    ],
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "#" }],
    // 首页底部版权声明
    footer: {
      copyright: "Copyright © 2026-present bothbest",
    },
    // 【文章页面左侧导航】
    sidebar: {
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
  },
  // 数学公式支持
  markdown: {
    math: true,
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL("./components/Footer.vue", import.meta.url)),
        },
      ],
    },
  },
  lastUpdated: true,
});

<template>
  <VPTeamPage>
    <div class="relative flex justify-center mt-20 mb-16">
      <h1 class="text-5xl font-bold">Blog</h1>
      <span
        class="absolute text-6xl tracking-wider text-transparent -translate-x-1/2 opacity-60 bottom-1/3 left-1/2 bg-gradient-to-b from-black/20 to-black/10 bg-clip-text dark:from-white/20 dark:to-white/10"
        >Blog</span
      >
    </div>
    <div class="px-6 md:px-12 lg:px-16">
      <div class="flex flex-col gap-6">
        <BlogPart
          v-for="(item, index) in sidebarData.items"
          :key="index"
          :columnData="item"
        ></BlogPart>
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage } from "vitepress/theme";
import { useData } from "vitepress";
import BlogPart from "./BlogPart.vue";

const { site } = useData();

// 动态获取 sidebar 中的所有分类数据，不再死板匹配 "/blog/" 键名
const sidebarConfig = site.value.themeConfig.sidebar;
const sidebarData = {
  items: sidebarConfig ? Object.values(sidebarConfig)[0]?.items || [] : []
};
</script>

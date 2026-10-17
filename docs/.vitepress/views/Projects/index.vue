<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>🎯 Products ✨</template>
      <template #lead>Explore our comprehensive range of high-quality bamboo flooring & products</template>
    </VPTeamPageTitle>
    <div class="px-6 md:px-12 lg:px-16">
      <div class="ProjectsContent">
        <ProjectCard
          v-for="(item, index) in productsData"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage, VPTeamPageTitle } from "vitepress/theme";
import ProjectCard from "./ProjectCard.vue";
// 引入自动加载的动态产品数据
import { data as productsData } from "../../utils/product.data.ts";
</script>

<style scoped>
.ProjectsContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  max-width: 1152px;
  gap: 24px;
  margin: 0 auto;
}
</style>
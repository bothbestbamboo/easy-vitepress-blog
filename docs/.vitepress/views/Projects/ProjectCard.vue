<template>
  <div
    @click="openLink"
    class="overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer hover:border-indigo-800 dark:hover:border-sky-300 bg-slate-50 dark:bg-slate-800 dark:border-transparent group"
  >
    <!-- banner 图片 -->
    <div class="w-full h-48 overflow-hidden">
      <img
        :src="banner"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <!-- 内容 -->
    <div class="p-4 pb-6">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-1">{{ title }}</h1>
        <span
          v-if="tag"
          class="text-[12px] px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
        >
          {{ tag }}
        </span>
      </div>
      <p
        class="mt-2 text-sm transition-all duration-300 line-clamp-2 text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vitepress";

const router = useRouter();
const props = defineProps(["banner", "title", "description", "url", "tag"]);

function openLink() {
  if (props.url) {
    router.go(props.url);
  }
}
</script>
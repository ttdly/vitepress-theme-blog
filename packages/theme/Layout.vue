<script setup>
import { useData } from 'vitepress'
import Article from './components/Article.vue'
import NotFound from "./NotFound.vue";
import Menu from "./components/Menu.vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData()
</script>

<template>
  <Menu/>
  <div v-if="page.isNotFound">
    <NotFound/>
  </div>
  <div v-else>
    <Article/>
  </div>
</template>

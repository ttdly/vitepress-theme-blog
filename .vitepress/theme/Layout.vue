<script setup>
import { useData } from 'vitepress'
import Article from './components/Article.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
      <li><a href="/markdown-examples">Markdown Examples</a></li>
      <li><a href="/api-examples">API Examples</a></li>
    </ul>
  </div>
  <div v-else>
    <Article />
  </div>
</template>

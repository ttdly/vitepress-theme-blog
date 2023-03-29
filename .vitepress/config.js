import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'blog-theme',
  description: 'vitepress blog theme',
  markdown: {
    theme: 'vitesse-dark',
  },
  lang:'zh-CN',
  titleTemplate: false,
  themeConfig:{
    repoUrl: 'https://github.com/ttdly/ttdly.github.io/'
  }
})

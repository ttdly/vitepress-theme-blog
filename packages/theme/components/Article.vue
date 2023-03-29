<script setup >

import ArticleTop from "./ArticleTop.vue";
import ArticleBottom from "./ArticleBottom.vue";
</script>

<template>
  <div class="PokeMain">
    <ArticleTop/>
    <Content class="poke-content" />
    <ArticleBottom/>
  </div>
</template>

<style scoped>
.PokeMain{
  margin: 0 auto;
  background-color: var(--poke-c-bg-front);
  border: solid var(--poke-c-bg-border);
  border-width: 0 1px 0 1px;
  padding-bottom: 50px;
}

.poke-content{
  padding: 0 24px 0 24px;
  margin: 0 auto;
}

/*media*/
@media (min-width: 960px) {
  .PokeMain{
    max-width: 992px;
  }
  .poke-content{
    max-width: 752px;
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 1280px) {
  .PokeMain{
  }

  .poke-content{
    min-width: 640px;
  }
}
</style>

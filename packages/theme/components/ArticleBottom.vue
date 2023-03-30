<template>
  <div class="poke-content poke-comment">
    <a :href="commentUrl" style="display: block; text-align: end" target="_blank">去评论</a>
    <template v-for="comment in commentData">
      <div v-if="Boolean(comment.author)" class="comment-container">
        <div class="comment-info">
          <span class="name">{{ comment.author }}</span>
          <span class="time">{{ new Date(comment.create).toDateString() }}</span>
        </div>
        <div v-html="comment.body" class="comment-body"></div>
      </div>
    </template>
    <div v-show="false" id="component">{{ data.name }}</div>
  </div>
</template>

<script setup>
import {onContentUpdated, useData, useRoute} from "vitepress";
import {computed, ref} from "vue";
import * as pako from 'pako';

const commentData = ref([]);
const commentMap = ref({});
const commentUrl = ref('');
const pageData = useData();
const repoUrl = pageData.theme.value.repoUrl;
const data = computed(() => {
  const route = useRoute();
  return {
    name: route.component.name.replace('.md', '')
  }
})

onContentUpdated(async () => {

  const path = document.getElementById('component').innerText.split('/');
  const commentFile = path[path.length - 1];
  commentUrl.value = `${repoUrl}discussions/${(Number.isInteger(commentFile) ? commentFile : '')}`
  // 获取评论的映射图
  try {
    const mapRawData = await fetch('/comments/' + commentFile + '/map.json');
    if (mapRawData.status === 200) {
      commentMap.value = mapRawData.json();
      await getCommentData(1, commentFile);
    }
  } catch (e) {
    console.error('获取comment映射图失败', e.toString());
  }
})
const getCommentData = async function (page, path) {
  try {
    const commentRawData = await fetch(`/comments/${path}/${page}.blob`);
    if (commentRawData.status === 200) {
      const blobData = await commentRawData.arrayBuffer();
      const strData = pako.inflate(blobData, {to: 'string'});
      commentData.value = JSON.parse(strData);
    }
  } catch (e) {
    console.error(e)
  }
}
</script>

<style scoped>
.comment-info .name {
  font-weight: 600;
}

.comment-info .time {
  display: block;
  font-size: .7rem;
  color: var(--poke-c-text-placeholder);
}

</style>
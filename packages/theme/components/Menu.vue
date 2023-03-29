<template>
  <div class="Nav">
    <ul>
      <li @click="showLabels">标签</li>
      <li @click="showArchive">归档</li>
    </ul>
    <div class=""></div>
  </div>
  <div class="PostList" v-show="showMenu" @click="showMenu = false">
    <div class="container poke-content">
      <template v-if="state === 0" v-for="item in archiveMap.key">
        <h1>{{item}}</h1>
        <template v-for="post in archiveMap.keyMap[item]">
          <p><a :href="post.url">{{post.data.title}}</a></p>
        </template>
      </template>
      <template v-if="state === 1" v-for="(value,key) in labelMap">
        <h1>{{key}}</h1>
        <template v-for="post in value">
          <p><a :href="post.url">{{post.data.title}}</a></p>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const showMenu = ref(false)
const state = ref(0);
const archiveMap = ref({key:0});
const labelMap = ref({key:0})
const showArchive = async function (){
  showMenu.value = true;
  state.value = 0
  if (archiveMap.value.key !== 0) {
    return 0;
  }
  try{
    const data = await fetch('/archive.json');
    if (data.status === 200) {
      archiveMap.value = await data.json();
    }
  } catch (e) {
    console.log(e)
  }
}

const showLabels = async function(){
  showMenu.value = true;
  state.value = 1
  if (labelMap.value.key !== 0) {
    return 0;
  }
  try{
    const data = await fetch('/labels.json');
    if (data.status === 200) {
      labelMap.value = await data.json();
    }
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped>
.Nav{
  height: 100px;
  width: 100px;
  position: fixed;
  right: 0;
}
.PostList{
  height: 100vh;
  width: 100vw;
  display: block;
  z-index: 999;
  position: fixed;
  background: rgb(0 0 0 / 50%)
}
.PostList .container{
  overflow: auto;
  cursor: default;
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  min-width: 640px;
  background: var(--poke-c-bg-back);
  padding: 50px 24px 24px;
}
.Nav{
  padding-top: 2rem;
}
.Nav li{
  line-height: 2rem;
  cursor: pointer;
}
</style>
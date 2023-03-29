<template>
  <div class="ArticleTop">
    <h1 v-if="headInfo.title">{{headInfo.title}}</h1>
    <span class="time-info" v-if="headInfo.create">{{headInfo.create}}</span>
    <span class="time-info" v-if="headInfo.update">，最后修改于{{headInfo.update}}</span>
    <div style="height: 1rem"></div>
    <template v-if="headInfo.labels" v-for="label in headInfo.labels">
      <span class="label-item"
         :href="`/pages/labels.html?label=${label}`"
         :style="`background: #${toHashColor(label)}`">{{label}}</span>
    </template>
  </div>
</template>

<script setup>
import { useRoute } from "vitepress";
import { computed } from "vue";


/**
 * 返回格式化后日期
 * @param rawDate 指定日期
 * @returns {string} 统一返回XX年XX月XX日
 */
const formatDate = function(rawDate){
  const date = new Date(rawDate);
  return date.toLocaleDateString('zh-CN', {dateStyle:'long'});
}
/**
 * 返回指定日期距离今天的时间
 * @param rawDate 指定日期
 * @returns {string} 格式化后的文本：今天 X天前 X月前 X年前
 */
const beforeToday = function (rawDate){
  const now = new Date();
  const before = new Date(rawDate);
  let years = now.getFullYear() - before.getFullYear();
  if (years > 0){
    return `${years}年前`;
  }
  let months = now.getMonth() - before.getMonth();
  if (months > 0){
    return  `${months}月前`;
  }
  let days = now.getDay() - before.getDay();
  if(days > 0){
    return  `${days}天前`;
  }
  return '今天';
}
/**
 * 根据字符串随机生成HASH颜色
 * @param str 字符串
 * @returns {string} 颜色值
 */
const toHashColor = function(str){
  let res = "";
  for(let i of str){
    i = i.charCodeAt(i);
    i **= 3;
    res += i.toString(16);
  }
  return res.substring(0,6);
}
// 用于展示的信息

const headInfo = computed(()=>{
  const headInfo = useRoute().data.frontmatter;
  return {
    title: (typeof headInfo.title === 'undefined') ? false : headInfo.title,
    create: (typeof headInfo.create === 'undefined') ? false : formatDate(headInfo.create),
    update: (typeof headInfo.update === 'undefined') ? false : beforeToday(headInfo.update),
    labels: (typeof headInfo.labels === 'undefined') ? false : headInfo.labels
  }
});

</script>

<style scoped>
.ArticleTop{
  padding: 96px 24px 2rem;
  margin: 0 auto;
}
@media (min-width: 960px) {
  .ArticleTop{
    max-width: 752px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media (min-width: 1280px) {
  .ArticleTop{
    min-width: 640px;
  }
}
.ArticleTop h1 {
  font-weight: 600;
  outline: none;
  letter-spacing: -0.02em;
  line-height: 2rem;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.ArticleTop .time-info{
  color: var(--poke-c-text-placeholder);
}

.ArticleTop .label-item{
  padding: 4px 6px;
  font-size: .8rem;
  border-radius: 4px;
  color: white;
  cursor: default;
  transition: all .25s;
  margin: 1px;
}
</style>
<template>
  <div class="not-found">
    <img src="/logo.svg" alt="logo">
    <div class="describe">你找的要页面不存在</div>
    <div class="back"><a href="/">点我返回主页</a></div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.not-found{
  height: 100vh;
  width: 100vw;
  background-color: #fcfcfa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.not-found .describe{
  font-size: 2rem;
  color: var(--poke-c-primary);
  margin-top: 3rem;
}
.not-found .back{
  margin-top: 3rem;
}
.not-found img{
  height: 6rem;
  width: 6rem;
}
</style>
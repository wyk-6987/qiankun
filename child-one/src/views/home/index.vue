<template>
  <img alt="Vue logo" src="@/assets/logo.png">
  <h2>我是child-one的home页面</h2>

  <button @click="$router.push('world')">跳转世界页面</button>
</template>

<script>
export default {
  name: "HomE",
  components: {},
};
</script>

<style>
</style>

<template>
  <h2>我是 主应用 one</h2>
  <div id="child-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "childOne",
  components: {},
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style>
</style>

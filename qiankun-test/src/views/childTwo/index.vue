<template>
  <h2>我是 主应用 two</h2>
  <div id="child-two-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "childTwo",
  components: {},
  mounted() {
    this.$nextTick(() => {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        start();
      }
    });
  },
};
</script>

<style>
</style>

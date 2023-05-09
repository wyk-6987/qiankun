<template>
  <div>
    <div class="bens">
      <button class="btns" @click="$router.push('/child-one')">childOne</button>
      <button class="btns" @click="$router.push('/child-two')">childTwo</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.btns{
  margin: 0 10px;
}
.bens {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 9999999;
}
#app-base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

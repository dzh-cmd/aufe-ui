<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

* {
  font-family: "Fira Code", Consolas, "KaiTi", sans-serif;
}

p{
  margin: 0;
}

#app{
    height: 100%;
    width: 100%;
}

</style>

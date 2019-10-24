<template>
  <div id="app">
    <div id="nav">
      <router-link :to="route.path" v-for="route in routes" v-bind:key="route">{{route.name}}</router-link>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { routes } from "./router/index";
export default {
  data() {
    return {
      routes
    };
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100%;
}

#nav {
  padding: 30px;
  flex-basis: 20%;
  min-height: 100%;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    line-height: 50px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>

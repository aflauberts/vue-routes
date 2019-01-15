<template>
  <div id="app">
    <router-link to="/home">Home</router-link>-
    <router-link to="/about">Sobre</router-link>-
    <router-link :to="'/profile/' +username ">Perfil</router-link> <br />
    <button @click="irPara('/about')">Ir Para sobre</button>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      username: 'michel',
      
    }
  },
  methods: {
    irPara(path) {
      this.$router.push(path)
    }
  },
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

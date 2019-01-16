<template>
  <div>
    <button @click="incrementar()">++ {{$store.state.count}}</button>
    <button @click="incrementar()">++ {{$store.getters.getProximoContador}}</button>
    <button @click="resetCount()">++ {{$store.getters.reset}} Reset</button>
  </div>
</template>

<script>
export default {
  methods: {
    incrementar() {
      this.$store.commit("incrementar");
    },
    resetCount() {
        this.$store.commit('reset')
    }
  }
};
</script>

<style>
</style>

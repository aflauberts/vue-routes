<template>
  <div>
    <button @click="incrementar()">++ {{$store.state.count}}</button>
    <button @click="incrementar()">++ {{$store.getters.getProximoContador}}</button>
  </div>
</template>

<script>
export default {
  methods: {
    incrementar() {
      this.$store.commit("incrementar");
    }
  }
};
</script>

<style>
</style>

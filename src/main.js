import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incrementar(state) {
      state.count ++ ;
    }
  },
  getters: {
    getProximoContador: state => state.count+1,
    reset: state => state.count = 0
  }
})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

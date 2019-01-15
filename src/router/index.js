import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutVueComponent from '../views/About.vue'
import HomeVueComponent from '../views/Home.vue'
import ProfileVueComponent from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/about',
        component: AboutVueComponent
    },
    {
        path: '/home',
        component: HomeVueComponent
    },
    {
        path: '/profile/:name',
        component: ProfileVueComponent
    }
]
export default new VueRouter({
    routes
})
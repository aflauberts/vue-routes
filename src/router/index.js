import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutVueComponent from '../views/About.vue'
import HomeVueComponent from '../views/Home.vue'
import ProfileVueComponent from '../views/Profile.vue'
import ProfileInfoVueComponent from '../views/ProfileInfo.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            path: '/home'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutVueComponent
    },
    {
        path: '/home',
        name: 'homenova',
        component: HomeVueComponent
    },
    {
        path: '/profile/:name',
        component: ProfileVueComponent,
        children: [{
            path: '/info',
            component: ProfileInfoVueComponent
        }]
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})
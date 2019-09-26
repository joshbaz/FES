import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Team from './views/Team.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)
Vue.use(VueHead)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'about',
      component: About
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

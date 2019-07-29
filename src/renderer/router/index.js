import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: require('@/layouts/HomePage').default
    },
    {
      path: '/artists',
      name: 'ArtistsPage',
      component: require('@/layouts/ArtistsPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

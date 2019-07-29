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
      path: '/artist/:id',
      name: 'ArtistPage',
      component: require('@/layouts/ArtistPage').default
    },
    {
      path: '/collection/:id',
      name: 'CollectionPage',
      component: require('@/layouts/CollectionPage').default
    },
    {
      path: '/playlist/:id',
      name: 'PlaylistPage',
      component: require('@/layouts/PlaylistPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Search from '../components/Search'
import Offer from '../components/Offer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/offers',
      name: 'Offer',
      component: Offer
    }
  ]
})

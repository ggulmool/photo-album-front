import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../components/Main"
import Album from "../components/Album"
import PhotoPreivew from "../components/PhotoPreivew"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/album/:albumId',
      component: Album,
      children: [{ path: 'photo/:photoId', component: PhotoPreivew }]
    }
  ]
})

export default router

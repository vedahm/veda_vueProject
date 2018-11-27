import Vue from 'vue'
import Router from 'vue-router'
import addBlog from '@/components/addblog.vue'
import showBlogs from '@/components/showblogs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'addNew',
      component: addBlog
    },
    {
      path: '/show',
      name: 'showblogs',
      component: showBlogs
    }
  ]
})


// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'addNew',
//       component: addBlog
//     },
//     {
//       path: '/show',
//       name: 'showBlogs',
//       component: showBlogs
//     }
//   ]
// })

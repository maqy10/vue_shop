import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import WelCome from '../components/Welcome.vue'
import Users from '../components/user/Users'

Vue.use(Router)

const routes = [
  // 访问路径为/, 重定向到login，
  {
    path: '/', redirect: '/login'
  },
  // 访问路径为/login
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    // 重定向到welcome组件
    redirect: '/welcome',
    // 子组件路由 ，配置好，与页面中菜单的router属性，配合使用即可
    children: [
      { path: '/welcome', component: WelCome },
      { path: '/users', component: Users }
    ]
  }
]

const router = new Router({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to  将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数， 表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router

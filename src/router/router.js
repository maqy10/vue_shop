import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from '../components/Login'
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login.vue')
// /import Home from '../components/Home'
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Home.vue')
// import WelCome from '../components/Welcome.vue'
const WelCome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Welcome.vue')
// import Users from '../components/user/Users.vue'
const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users.vue')
// import Rights from '../components/power/Rights'
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue')
// import Roles from '../components/power/Roles'
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue')
// import Cate from '../components/goods/Cate'
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate.vue')
// import Params from '../components/goods/Params'
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params.vue')
// import List from '../components/goods/List'
const List = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List.vue')
// import Add from '../components/goods/Add'
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add.vue')
// import Order from '../components/order/Order'
const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/order/Order.vue')
// import Report from '../components/report/Report'
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/report/Report.vue')
Vue.use(VueRouter)

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
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: List },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report }
    ]
  }
]

const router = new VueRouter({
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

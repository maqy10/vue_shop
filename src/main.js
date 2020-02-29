import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入图标库
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

// require styles 导入富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 将富文本编辑器注册为全局可用的组件
Vue.use(VueQuillEditor)
// 配置默认请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 配置请求拦截器,预处理的过程
axios.interceptors.request.use(config => {
  console.log(config)
  // 加token 请求头
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须return config
  return config
})
// 挂载到vue的原型对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
// 格式化时间全局过滤器
Vue.filter('dateFormat', function (originVal) {
  // 创建日期对象
  const dt = new Date(originVal)
  // 获取4位年份
  const y = dt.getFullYear()
  // 如果不足两位，前加0
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, 0)
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // 日期格式字符串
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

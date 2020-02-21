import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 弹框提示组件,挂载到vue,vue提供了$message方法，所以挂载就可以
Vue.prototype.$message = Message

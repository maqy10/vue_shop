import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message,
  Container, Header, Aside, Main,
  Menu, Submenu, MenuItem,
  Breadcrumb, BreadcrumbItem,
  Card,
  Row, Col,
  Table, TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select, Option,
  Cascader
} from 'element-ui'

// 组件注册为全局组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
// 弹框提示组件,挂载到vue,vue提供了$message方法，所以挂载就可以
Vue.prototype.$message = Message
// 挂载MessageBox
Vue.prototype.$confirm = MessageBox.confirm

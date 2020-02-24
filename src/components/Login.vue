
<template>
  <!-- 单文件为结构，样式和行为组成 -->
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 登录表单区 :model 绑定的是表单对象  ：rules 绑定的是rules对象，写的是表单验证规则-->
      <!-- ref 表单实例对象 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <!-- 阿里图标库使用 -->
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  //  必须写成 data 空格（） 空格 {}
  data() {
    return {
      // 这是登录表单的数据绑定对象
      // string 字符串必须使用单引号
      loginForm: {
        // 对应有值为默认值
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象，加到item 上不是input上
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          // 是否必须验证，验证未通过显示信息，失去焦点时触发
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证用户名是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      // console.log(this)
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // 箭头函数，只有一个参数，可省略小括号
      this.$refs.loginFormRef.validate(async vaild => {
        if (!vaild) return
        //  await 修饰 async成对出现
        // 取出返回的数据，赋值给res
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败!')
        this.$message.success('登录成功!')
        // 1.将登录成功之后的token ，保存到客户端的sessionStorage中
        // 1.1 项目中除了登录之外的其他api接口，必须在登录之后才能访问
        // 1.2 token只应在当前网站打开期间生效，所以将token保存在 sessionStorage中
        console.log(res)
        window.sessionStorage.setItem('token', res.data.token)
        // 2.通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
//  less 表示支持less语法 ，scoped表示样式只在当前组件中生效
// 单文件组件推荐要加scoped
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  // 位移
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  // 以下百分之，根据avatar_box 进行位移
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  // 尾部对齐
  display: flex;
  justify-content: flex-end;
}
</style>

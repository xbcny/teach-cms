<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import useStore from '../../../store'
import localCache from '../../../utils/localStorage'

const { login } = useStore()
const user = login.user

const rules = reactive({
  name: [
    {
      required: true,
      message: '用户名必须填写',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{4,10}$/,
      message: '用户名必须是4-10个字符或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须填写',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字符或数字',
      trigger: 'blur'
    }
  ]
})

const isKeepPassword = ref(true)
const checkboxChangeAction = () => {
  console.log('000')
}
const forgetPassword = () => {
  console.log('忘记密码')
  localCache.deleteItem('password')
}
const formRef = ref<InstanceType<typeof ElForm>>()
const submitForm = (account: any) => {
  formRef.value?.validate((validate) => {
    if (validate) {
      console.log('发送网络请求')
      login.accountLoginAction(user)
      // 验证失败
    } else {
      account.name = ''
      account.password = ''
    }
  })
  // 开始发送网络请求验证登录
  // store.dispatch("login/accountLoginAction", { ...account })
}
</script>

<template>
  <div class="account">
    <el-form
      label-width="80px"
      :rules="rules"
      :model="user"
      ref="formRef"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
      <div class="operate">
        <el-checkbox v-model="isKeepPassword" change="checkboxChangeAction"
          >记住密码</el-checkbox
        >
        <el-link type="primary" @click="forgetPassword">忘记密码</el-link>
      </div>
      <div class="btn">
        <el-button @click="submitForm(user)" class="btn-login" type="primary"
          >立即登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.account {
  .el-form {
    padding: 15px 30px;

    .el-form-item {
      display: flex;
      margin-bottom: 20px;
    }
  }
  .operate {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-login {
    width: 100%;
    margin-top: 16px;
  }
}
</style>

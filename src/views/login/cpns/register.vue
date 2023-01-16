<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import useStore from '../../../store'

const { login } = useStore()
const user = reactive({
  name: '',
  password: '',
  rePassword: ''
})
const checkPassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码进行确认'))
  } else if (value !== user.password) {
    callback(new Error('两次输入密码不匹配'))
  } else {
    callback()
  }
}
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
  ],
  rePassword: [
    {
      required: true,
      message: '确认密码必须填写',
      trigger: 'blur'
    },
    {
      validator: checkPassword,
      trigger: 'blur'
    }
  ]
})
const formRef = ref<InstanceType<typeof ElForm>>()
const submitForm = (account: any) => {
  formRef.value?.validate((validate) => {
    if (validate) {
      // 验证通过，开始发送网络请求
      console.log('发送网络请求')
      login.accountRegisterAction(user)
    } else {
      // 验证失败
      user.name = ''
      user.password = ''
      user.rePassword = ''
    }
  })
}
</script>

<template>
  <div class="register">
    <el-tab-pane label="注册">
      <el-form :model="user" label-width="80px" :rules="rules" ref="formRef">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input v-model="user.rePassword" />
        </el-form-item>
        <div class="btn">
          <el-button @click="submitForm(user)" class="btn-login" type="primary"
            >用户注册</el-button
          >
        </div>
      </el-form>
    </el-tab-pane>
  </div>
</template>

<style scoped lang="less">
.el-form {
  padding: 15px 30px;
  .btn-login {
    width: 100%;
    margin-top: 16px;
  }
}
</style>

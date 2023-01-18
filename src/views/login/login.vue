<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import Account from './cpns/account.vue'
import Register from './cpns/register.vue'
</script>

<template>
  <div class="login">
    <h2>教学科研信息管理系统</h2>
    <el-tabs class="el-tabs" type="border-card" stretch>
      <el-tab-pane class="login-pane" label="登录">
        <Account></Account>
      </el-tab-pane>
      <el-tab-pane class="register-pane" label="注册">
        <Register></Register>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .el-tabs {
    width: 400px;
  }
}
</style>

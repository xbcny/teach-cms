<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import Account from './cpns/account.vue'
import Register from './cpns/register.vue'
</script>

<template>
  <div class="login">
    <h2>教学科研信息管理系统</h2>
    <el-tabs class="el-tabs" type="border-card" stretch>
      <Account></Account>
      <Register></Register>
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
}
</style>

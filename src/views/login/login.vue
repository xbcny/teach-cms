<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import useStore from '../../store'

const { login } = useStore()
</script>

<template>
  <div class="login">
    <h2>教学科研信息管理系统</h2>
    <el-tabs class="el-tabs" type="border-card" stretch>
      <el-tab-pane class="login-pane" label="登录">
        <el-form label-width="60px">
          <el-form-item label="用户名">
            <el-input v-model="login.user.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="login.user.password" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册">注册</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .el-tabs {
    width: 350px;

    .el-form {
      padding: 15px 30px;
    }
  }
}
</style>

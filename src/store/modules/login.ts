import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import localStorage from '@/utils/localStorage'
import {
  userRegisterRequest,
  userLoginRequest
} from '../../service/login/login'

const useLoginStore = defineStore('login', () => {
  const user = reactive({
    name: '',
    password: ''
  })
  async function accountLoginAction(payload: any) {
    const result = await userLoginRequest(payload)
    const userInfo = result.data
    for (const key in userInfo) {
      localStorage.setItem(`${key}`, userInfo[`${key}`])
    }
  }
  async function accountRegisterAction(payload: any) {
    const result = await userRegisterRequest(payload)
  }
  return { user, accountLoginAction, accountRegisterAction }
})

export default useLoginStore

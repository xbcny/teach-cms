import { defineStore } from 'pinia'
import {
  createUserRequest,
  searchUserRequest,
  deleteUserRequest,
  updateUserRequest
} from '../../service/user/user'

const useUserStore = defineStore('user', () => {
  async function createUserAction(payload: any) {
    const result = await createUserRequest(payload)
  }
  async function searchUserAction(payload: any) {
    const result = await searchUserRequest(payload)
  }
  async function deleteUserAction(userId: any) {
    const result = await deleteUserRequest(userId)
  }
  async function updateUserAction(payload: any) {
    const result = await updateUserRequest(payload)
  }
  return {
    createUserAction,
    searchUserAction,
    deleteUserAction,
    updateUserAction
  }
})

export default useUserStore

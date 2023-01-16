import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const useLoginStore = defineStore('login', () => {
  const user = reactive({
    name: '',
    password: ''
  })

  return { user }
})

export default useLoginStore

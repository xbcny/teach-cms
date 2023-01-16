/* eslint-disable prettier/prettier */
import localCache from "../utils/localStorage"
import XBCRequest from "./request"

import { BASE_URL, TIME_OUT } from "./request/config"

const xbcRequest = new XBCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // console.log('实例请求成功拦截')
      // 携带token拦截
      const token = localCache.getItem("token")
      if (token && typeof config.headers?.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
      return config
    },
    requestInterceptorCatch(error) {
      // console.log('实例请求失败拦截')
      return error
    },
    responseInterceptor(res) {
      // console.log('实例响应成功拦截')
      return res
    },
    responseInterceptorCatch(error) {
      // console.log('实例响应失败拦截')
        return error
    },
  }
})

export default xbcRequest

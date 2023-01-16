/* eslint-disable prettier/prettier */
import axios from "axios"
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

interface XBCRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface XBCRequestConfig extends AxiosRequestConfig {
  interceptors?: XBCRequestInterceptors
}

class XBCRequest {
  instance: AxiosInstance
  interceptors?: XBCRequestInterceptors
  constructor(config: XBCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 只有该对象才有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use((config) => {
      // console.log('全部请求成功拦截')
      return config
    }, err => {
      // console.log('全部请求失败的拦截')
      return err
    })
    this.instance.interceptors.response.use((res) => {
      // console.log('全部响应的成功拦截')
      return res.data
    }, err => {
      // console.log('全部响应失败的拦截')
      return err
    })
  }



  request<T>(config: XBCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request<any, T>(config).then((res) => {
        // console.log('----',res)
        resolve(res)
      })
    })
  }

  get<T = any>(config: XBCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: XBCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: XBCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: XBCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCh' })
  }
}
export default XBCRequest
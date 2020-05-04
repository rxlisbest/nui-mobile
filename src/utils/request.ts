import axios from 'axios'
import { Dialog, Toast } from 'vant';


// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (res instanceof Blob) {
      return res;
    }
    if (res.code !== 200) {

      if (res.code === 401) {
        Dialog.confirm({
          title: '确定退出',
          message: '请重新登录',
          confirmButtonText: '重新登录',
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        });
      } else {
        Toast.fail(res.msg || 'Error')
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response === undefined || !error.response.data) {

      Toast.fail('网络错误，请刷新重试')
      return Promise.reject(error)
    }
    const res = error.response.data
    Toast.fail(res.msg)
    return Promise.reject(error)
  }
)

export default service

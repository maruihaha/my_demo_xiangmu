import axios from 'axios'
import qs from 'qs'
//生成Axios的伪实例, 能够使用Axios实例的属性，但不是Axios的实例
const instance = axios.create({
    baseURL: '/api'   //设置请求的基本路径   
})

// 添加请求拦截器
instance.interceptors.request.use(config => {

    // post请求参数默认为json对象形式： {a:xxx,b:yyy}, 但当前服务器识别urlcoding形式： a=xxx&b=yyy
  if(config.method.toUpperCase() === 'POST' && (config.data instanceof Object)){
    config.data = qs.stringify(config.data)
  }


  return config


})

//设置响应拦截器

instance.interceptors.response.use(
    response => response.data,
    error => {
        //手动返回状态pending的promise实例，避免在错误情况下进入下一个成功的回调
        return new Promise(()=>{})
    }
)

export default instance
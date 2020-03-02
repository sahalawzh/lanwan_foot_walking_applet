// 封装http请求
var Fly = require('flyio/dist/npm/wx')
// eslint-disable-next-line new-parens
var fly = new Fly
import domain from '../common/env'


// 请求拦截器
fly.interceptors.request.use((request) => {
  request.baseURL = domain
  // 给所有请求添加自定义header
  if (wx.getStorageSync('loginInfo')) {
    request.headers['token'] = wx.getStorageSync('loginInfo').token
  }
  return request;
})


// 响应拦截器
fly.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)

export default fly

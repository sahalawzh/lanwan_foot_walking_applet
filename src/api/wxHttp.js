import http from '../common/http'
import eventHub from '../common/eventHub'
import wxApi from '../api/wxApi'


export default class wxHttp {

  static waitSendQues = []
  static loginStatus = 0
  static authPhone = 0

  static async clearWaitSendQues () {
    const {waitSendQues} = this
    let que = null
    while ((que = waitSendQues.shift())) {
      const {method, url, data, config, resolve} = que
      const res = await this.request(method, url, data, config)
      resolve(res)
    }
  }

  static async waitSendAfterLogin (method, url, data, config) {
    if (this.loginStatus === 0) {
      await this.login(config)
      this.clearWaitSendQues()
      return await this.request(method, url, data, config)
    } else {
      return await this.addWaitSendQue(method, url, data, config)
    }
  }

  static async addWaitSendQue (method, url, data, config) {
    let that = this
    return await new Promise(function (resolve, reject) {
      that.waitSendQues.push({
        method,
        url,
        data,
        config,
        resolve
      })
    })
  }
  /**
   * 请求结果异常
   */
  static requestException (err) {
    const error = {}
    error.statusCode = err.status
    const wxData = err.data
    if (wxData) {
      const {msg, code} = wxData
      error.code = code 
      error.msg = msg
    }
    return error
  }
  static async login (config) {
    if (config && !config.authPhone && this.loginStatus === 1) {
      console.log('当前正在登录，请不要重复登录')
      return
    }
    this.loginStatus = 1
    try {
      const { code } = await wx.login()
      if (config && config.authPhone) {
        return await this.authLogin(code, config)
      }
      return await this.wxLogin(code, config)
    } catch (e) {
      console.log(e)
      const that = this
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '登录失败，请重新登录',
        success(res) {
          if (res.confirm) {
            that.login()
          }
        }
      })
    }
  }
  static async authLogin (code, opts) {
    try {
      wx.showLoading({
        title: '授权登录中...',
        mask: true
      })
      opts = Object.assign({}, opts, { code })
      this.authPhone = 1
      const res = await wxApi.wxPhoneLogin(opts)
      this.loginStatus = 0
      this.setConfig('userInfo', res)
      wx.setStorage({
        key: 'loginInfo',
        data: res
      })
      if (opts.authPhone) {
        eventHub.$emit('auth-phone')
      }
      wx.hideLoading()
      return true
    } catch (error) {
      console.log(error)
      wx.hideLoading()
      return false
    }
  }
  static async wxLogin (code, config) {
    try {
      const result = await wxApi.wxLogin({ code })
      this.loginStatus = 0
      this.setConfig('userInfo', result)
      wx.setStorage({
        key: 'loginInfo',
        data: result
      })
      // if (config.authLogin) {
      //   eventHub.$emit('auth-login', result)
      // }
      return result
    } catch (e) {
      console.log(e)
      return e
    }
  }
  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    return res.status === 200 && res.data && res.data.code === 0
  }
  static checkNeedLogin () {
    return !this.getConfig('userInfo')
  }
  static checkUrlIsLogin (url) {
    const LOGINURL = '/api/member/wxLogin'
    return LOGINURL === url
  }
  static getConfig (key) {
    return getApp().$wepy.$options.globalData[key]
  }
  static setConfig (key, val) {
    getApp().$wepy.$options.globalData[key] = val
  }
  static async request (method, url, data, config = {}) {
    if (this.checkUrlIsLogin(url)) {
      let res
      try {
        res = await http[method](url, data)
      } catch (e) {
        console.log(e)
      }
      if (this.isSuccess(res)) {
        return res.data.data
      } else {
        const error = this.requestException(res)
        throw error
      }
    } else {
      if (this.checkNeedLogin() && this.authPhone === 0) {
        return await this.waitSendAfterLogin(method, url, data, config)
      } else {
        let res
        try {
          res = await http[method](url, data)
          if (this.isSuccess(res)) {
            eventHub.$emit('login-status')
            return res.data.data
          } else {
            const errorRes = this.requestException(res)
            wx.hideLoading()
            throw wx.showModal({
              title: '提示',
              showCancel: false,
              content: errorRes.msg || '系统繁忙',
              success(res) {
                if (res.confirm) {
                }
              }
            })
          }
        } catch (e) {
          wx.hideLoading()
          if (!e) return
          if (e.status === 401) {
            return await this.waitSendAfterLogin(method, url, data, config)
          }
          const errorRes = this.requestException(e)
          throw wx.showModal({
            title: '提示',
            showCancel: false,
            content: errorRes.msg || '系统繁忙',
            success(res) {
              if (res.confirm) {
              }
            }
          })
        }
      }
    }
  }
  static get (url, data, config) {
    return this.request('get', url, data, config)
  }

  static put (url, data, config) {
    return this.request('put', url, data, config)
  }

  static post (url, data, config) {
    return this.request('post', url, data, config)
  }

  static patch (url, data, config) {
    return this.request('patch', url, data, config)
  }

  static delete (url, data, config) {
    return this.request('delete', url, data, config)
  }
}
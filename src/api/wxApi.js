import wxHttp from '../api/wxHttp'

const API_URL_SUFFIX = '/api'

export default class wxApi {
  // 商品数据
  static getSpu (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/spu/getSpu`, opts)
  }
  // 小程序授权登录
  static wxPhoneLogin (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/member/wxPhoneLogin`, opts)
  }
  // 小程序登录
  static wxLogin (opts, config) {
    return wxHttp.get(`${API_URL_SUFFIX}/member/wxLogin`, opts, config)
  }
  // 商品选项
  static getListclassiFication (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/common/classification/listClassification`, opts)
  }
  // 获取具体足行信息
  static getScanData (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/data/getScanData`, opts)
  }
  // 足行信息
  static getScanResultByPhone (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/data/getScanResultByPhone`, opts)
  }
  // 根据姓名获取足行信息
  static getScanResultByUsername (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/data/getScanResultByUsername`, opts)
  }
  // 添加商品
  static postAddWxCart (opts) {
    return wxHttp.post(`${API_URL_SUFFIX}/cart/addWxCart`, opts)
  }
  // 获取地址
  static getListLocation (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/scanLocation/listLocation`, opts)
  }
  // 获取价格
  static getClassificationPrice (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/common/classification/getClassificationPrice`, opts)
  }
  // 获取城市经纬度
  static getListCity (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/scanCity/listCity`, opts)
  }
  // 创建订单
  static postAddWxOrder (opts) {
    return wxHttp.post(`${API_URL_SUFFIX}/order/addWxOrder`, opts)
  }
  // 获取当前位置
  static getLocalLocation (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/scanLocation/getLocalLocation`, opts)
  }
  // 获取当前位置
  static getAddressList (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/address/list`, opts)
  }
  // 获取默认地址
  static getDefaultAddress (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/address/getAddress`, opts)
  }
  // 新增地址
  static postAddressAdd (opts) {
    return wxHttp.post(`${API_URL_SUFFIX}/address/add`, opts)
  }
  // 修改地址
  static putAddressupdate (opts) {
    return wxHttp.put(`${API_URL_SUFFIX}/address/update`, opts)
  }
  // 删除地址
  static deleteAddressdelete (opts) {
    return wxHttp.delete(`${API_URL_SUFFIX}/address/delete/${opts}`)
  }
  // 地区列表
  static getListDistricts (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/districts/listDistricts`, opts)
  }
  // 修改数量
  static putUpdateWxNum (opts) {
    return wxHttp.put(`${API_URL_SUFFIX}/cart/updateWxNum`, opts)
  }
  // 获取金额
  static getOrderPrice (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/order/getOrderPrice`, opts)
  }
  // 查询订单
  static getSearchOrder (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/order/searchOrder`, opts)
  }
  // 物流信息
  static getLogisticsMessage (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/logistics/getLogisticsMessage`, opts)
  }
  // 再次拉起支付
  static postWxPay (opts) {
    return wxHttp.post(`${API_URL_SUFFIX}/wxPay/wxPay`, opts)
  }
  // 删除订单
  static postDeleteOrder (opts) {
    return wxHttp.post(`${API_URL_SUFFIX}/order/deleteOrder`, opts)
  }
  // 获取经纬度
  static getLocationDetail (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/scanLocation/getDetail`, opts)
  }
  // 获取广告图片
  static getShowAll (opts) {
    return wxHttp.get(`${API_URL_SUFFIX}/show/showAll`, opts)
  }
}

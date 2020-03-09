Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    isModelIPX: Boolean,
    tabbar: {
      type: {
        type: Object,
        value: {}
      },
      value: {
        backgroundColor: '#ffffff',
        color: '#666',
        selectedColor: '#1A61CD',
        list: [{
          'iconPath': '../images/home.png',
          'selectedIconPath': '../images/home_active.png',
          'pagePath': '/pages/onlineOrder',
          'text': '我要定制'
        }, {
          'iconPath': '../images/shuju.png',
          'selectedIconPath': '../images/shuju_active.png',
          'pagePath': '/pages/footShapeList',
          'text': '我的足型'
        }, {
          'iconPath': '../images/wuxiansanwei.png',
          'selectedIconPath': '../images/wuxiansanwei_active.png',
          'pagePath': '/pages/home',
          'text': "足部检测"
        }, {
          'iconPath': '../images/wode.png',
          'selectedIconPath': '../images/wode_active.png',
          'pagePath': '/pages/mine',
          'text': '个人中心'
        }]
      }
    }
  },
  data: {
    isModelIPX: false
    // appid: 'wx5819d1f1540598a5',
    // toMiniPage: 'pages/index/index'
  },
  attached() {
    this.setData({
      isModelIPX: getApp().$wepy.$options.globalData.isModelIPX
    })
  },
  methods: {
  }
})
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
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
          'pagePath': '/pages/home',
          'text': '首页'
        }, {
          'iconPath': '../images/shuju.png',
          'selectedIconPath': '../images/shuju_active.png',
          'pagePath': '/pages/footShapeList',
          'text': '脚型数据'
        }, {
          'iconPath': '../images/wuxiansanwei.png',
          'selectedIconPath': '../images/wuxiansanwei_active.png',
          'pagePath': '',
          'text': "无限三维"
        }, {
          'iconPath': '../images/wode.png',
          'selectedIconPath': '../images/wode_active.png',
          'pagePath': '/pages/mine',
          'text': '我的'
        }]
      }
    }
  },
  data: {
    appid: 'wx5819d1f1540598a5',
    toMiniPage: 'pages/index/index'
  },
  attached() {
  },
  methods: {
  }
})
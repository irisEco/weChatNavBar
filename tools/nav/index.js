// com/nav/index.js
const App = getApp();
Component({
  /*
 自定义
 */
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: String,
    showNav: {
      type: Boolean,
      value: true
    },
    showHome: {
      type: Boolean,
      value: true
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    refreshing: false, // 将refreshing设为true，可支持自动触发下拉刷新的场景。同样会触发refresh事件
    refreshed: false, // 将本属性设置为true，收起下拉刷新，可多次设置为true（即便原来已经是true了）
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      console.log(App.globalData)
      const page = getCurrentPages();
      let isHome = null
      //判断是否是首页
      if (page[0].route == page[page.length - 1].route) {
        console.log("true")
        isHome = true
      } else {
        console.log("false")
        isHome = false
      }
      this.setData({
        navH: App.globalData.navHeight,
        statusHeight: App.globalData.statusHeight,
        model: App.globalData.phoneModel,
        isHome: isHome,
        refreshing: true,
        img:"/com/images/back.png"

      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //回退
    navback: function() {
      wx.navigateBack({
        delta: 1
      })
    },

  },

})
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

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      console.log(App.globalData)
      console.log('1')
      console.log(Page.prototype.route);
      const page = getCurrentPages();
      let isHome= null
      if (page[0].route == page[page.length-1].route){
        isHome = true
      }else{
        isHome = false
      }
      this.setData({
        navH: App.globalData.navHeight,
        statusHeight: App.globalData.statusHeight,
        model: App.globalData.phoneModel,
        isHome: isHome

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
    // //返回主页
    // toIndex: function() {
    //   wx.navigateTo({
    //     url: '/pages/com/homePage/index',
    //   })
    // }

  }
})
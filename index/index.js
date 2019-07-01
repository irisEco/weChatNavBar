// com/homePage/index.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refreshing: false, // 将refreshing设为true，可支持自动触发下拉刷新的场景。同样会触发refresh事件
    refreshed: false, // 将本属性设置为true，收起下拉刷新，可多次设置为true（即便原来已经是true了）
  },

  refresh() {
    // 这是做网络请求的时机
    const that = this
    wx.showToast({
      title: 'refresh回调触发，做一些网络请求...',
      icon: 'none',
      complete() {
        // 成功或者失败之后，将refreshed设为true，收起下拉刷新组件
        setTimeout(() => {
          that.setData({
            refreshed: true,
          })
        }, 2000)
      }
    });
  },
  goToScrollView() {
    wx.navigateTo({
      url: '../src/component/refeshTest/scrollView',
    })
  },
  goToSwiper() {
    wx.navigateTo({
      url: '../src/component/swiper/swiper',
    })
  },
  onloadStart() {
    this.setData({
      refreshing: true,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      navH: App.globalData.navHeight,
      title: "hello",
    })
  },
  _navback: function() {
    wx.navigateTo({
      url: '../src/component/goBackTest/index'
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
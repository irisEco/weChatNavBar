App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res =>{
        //导航栏高度
        console.log(res.model)
        this.globalData.phoneModel = res.model
        this.globalData.navHeight = res.statusBarHeight +46;
        this.globalData.statusHeight = res.statusBarHeight;
      },fail(err){
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeights: 0,
    statusHeight:0,
    phoneModel:0
  }
})

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {

    }
  },
  sellbook: function(){
    wx.navigateTo({
      url: '/pages/sellbook/sellbook'
    })
  },
  buybook: function(){
    wx.navigateTo({
      url: '/pages/buybook/buybook'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getUserInfo({
      success: res =>{
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
  },
})
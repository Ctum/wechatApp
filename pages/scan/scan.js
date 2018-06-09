// pages/scan/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  toCheckInBook: function(){
    wx.navigateTo({
      url: '/pages/typeIn/typeIn',
    })
  },
  getISBN: function() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
})
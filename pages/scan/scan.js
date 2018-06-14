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
        let ISBN = res.result
        ISBN = '/pages/bookDetail/bookDetail?isbn=' + ISBN
        console.log('ISBN')
        console.log(ISBN)
        wx.navigateTo({
          url: ISBN
        })
      }
    })
  },
})
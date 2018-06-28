// pages/books/books.js
var app = getApp()
var Bmob = app.globalData.Bmob
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {},
    books: []
  },
  onLoad: function(options){
    
  },
  onShow: function(){
    this.setData({
      books: wx.getStorageSync('books')
    })
  },
  goToIndex: function() {
    wx.switchTab({
      url: 'pages/scan/scan',
      success: function() {
        console.log('回调成功')
      }
    })
  },
  toDetail: function(e) {
    wx.navigateTo({
      url: '/pages/bookDetail/bookDetail?isbn=' + e.currentTarget.dataset.isbn,
    })
  },
})
// pages/books/books.js
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToIndex: function() {
    wx.switchTab({
      url: 'pages/scan/scan',
      success: function() {
        console.log('回调成功')
      }
    })
  },
})
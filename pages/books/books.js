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
    console.log('onshow')
    let user_id = wx.getStorageSync('bmob')
    user_id = user_id.split(',')
    user_id.splice(3, 1)
    user_id = user_id.join(',')
    const pointer = Bmob.Pointer('_User')
    const pointer_id = pointer.set(user_id)
    const query = Bmob.Query('books')
    query.equalTo('owner', '==', pointer_id)
    query.find().then(res => {
      wx.setStorageSync('books', res)
    }).catch(err => {
      console.log(err)
    })
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
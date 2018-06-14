// pages/books/books.js
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
    let books = []
    let i = 0;
    for (i = 0; i < 10; i++) {
      let key = 'book' + i
      let value = wx.getStorageSync(key)
      if (!value) {
        break;
      } else {
        books.push(value)
      }
    }
    console.log('this.data.books')
    console.log(books)
    this.setData({
      books: books
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
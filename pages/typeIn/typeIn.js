// pages/typeIn/typeIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookName: '',
    author: '',
    press: '',
    pubdate: '',
    pages: '',
    price: '',
    isbn: ''
  },
  getValue: function(e) {
    console.log(e.detail.value)
  },
})
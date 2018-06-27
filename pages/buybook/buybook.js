// pages/buybook/buybook.js
var app = getApp()
var Bmob = app.globalData.Bmob
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    books: []
  },
  getSearchValue: function(event){
    this.setData({
      searchValue: event.detail.value
    })
  },
  getResult: function(){
    let that = this
    let searchWord = this.data.searchValue
    const query = Bmob.Query('books')
    searchWord = parseInt(searchWord)
    query.equalTo('isbn','==', searchWord)
    query.find().then(res => {
      that.setData({
        books: res
      })
    })
  }
})
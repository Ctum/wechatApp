// pages/sellbook/sellbook.js
let getStorage = require('../../util/getStorage').getMyStorage
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    booksIndexArray: [],
    length: false
  },
  onLoad: function(){
    // let books = getStorage()
    let books = getStorage()
    console.log(books)
    if (books.length != 0) {
      this.setData({
        length: true
      })
    }
    this.setData({
      books: books
    })
  },
  pickChange: function(event) {
    let index = event.detail.index
    let str1 = 'books['+index+'].tag'
    let str2 = 'books['+index+'].sellPrice'
    this.setData({
      [str1]: event.detail.tag,
      [str2]: event.detail.price
    })

  },
  chooseBooks: function(event){
    let bookArray = event.detail.value
    this.setData({
      booksIndexArray : bookArray
    })
  },
  showtip: function(){
    wx.showToast({
      title: '已提交',
      success: () => {
      }
    })
  },
  sellout: function(){
    let sellBook = []
    let sellBookArray = this.data.booksIndexArray
    let i
    for(i in sellBookArray){
      let book ={}
      book['isbn'] = this.data.books[i].isbn
      book['tag'] = this.data.books[i].tag
      book['sellPrice'] = this.data.books[i].sellPrice
      sellBook.push(book)
    }

    setTimeout(this.showtip, 2000)
  }
})
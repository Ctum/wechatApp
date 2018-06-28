// pages/sellbook/sellbook.js
let storeBooksToStorage = require('../../util/api.js').storeBooksToStorage
var app = getApp()
var Bmob = app.globalData.Bmob
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
    var notSaleBooks = []
    let allBooks = wx.getStorageSync('books')
    allBooks.forEach(element => {
      if(!element.isSale) {
        notSaleBooks.push(element)
      }
    })
    this.setData({
      books: notSaleBooks
    })
    if (notSaleBooks.length != 0){
      this.setData({
        length: true
      })
    }
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
  sellout: function(){
    let that = this
    let books = wx.getStorageSync('books')
    let sellBookArray = this.data.booksIndexArray
    sellBookArray.forEach(element => {
      let objectId = books[element].objectId
      const query = Bmob.Query('books')
      query.get(objectId).then(res => {
        res.set('isSale', true)
        res.set('salePrice', that.data.books[element].sellPrice)
        res.save()
      })
      wx.showToast({
        title: '已卖出'
      })
      storeBooksToStorage()
    });
    // console.log(sellBookArray)
    // let i
    // for(i in sellBookArray){
    //   let key = 'book' + i
    //   let onSellBook = this.data.books[i]
    //   onSellBook.onSellBook = true
    //   wx.setStorageSync(key, onSellBook)
    //   let book ={}
    //   book['isbn'] = this.data.books[i].isbn
    //   book['tag'] = this.data.books[i].tag
    //   book['sellPrice'] = this.data.books[i].sellPrice
    //   sellBook.push(book)
    // }
    // setTimeout(this.showtip, 1000)
  }
})
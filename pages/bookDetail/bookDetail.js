// pages/bookDetail/bookDetail.js
let storeBooksToStorage = require('../../util/api.js').storeBooksToStorage
var app = getApp()
var Bmob = app.globalData.Bmob
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFull: false,
    catalog: [{
      type: 'text',
      text: ''
    }],
    caFull: false,
    isbn: ''
  },
  onLoad: function (options) {
    this.setData({
      isbn: options.isbn
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    let URL = 'https://douban.uieee.com/v2/book/isbn/' + this.data.isbn
    wx.request({
      url: URL,
      header: {
        'Content-Type': 'json'
      },
      success: (res) => {
        wx.hideLoading()
        if (res.statusCode == 404) {
          wx.showModal({
            title: '提示',
            content: '豆瓣里没有这本书的信息，去手动录入吧',
            cancelText: '去首页',
            confirmText: '手动录入',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '/pages/typeIn/typeIn'
                })
              } else {
                wx.switchTab({
                  url: '/pages/scan/scan'
                })
              }
            }
          })
        } else {
          that.setData({
            bookInfo: res.data,
            'catalog[0].text': res.data.catalog ? res.data.catalog : '',
          })
        }
      }
    })
  },
  getFull: function () {
    this.setData({
      showFull: !this.data.showFull
    })
  },
  getcaFull: function () {
    this.setData({
      caFull: !this.data.caFull
    })
  },
  addTo: function () {
    console.log('begin')
    var that = this
    let bookinfo = {
      'bookname': that.data.bookInfo.title,
      'isbn': that.data.isbn,
      'price': that.data.bookInfo.price,
      'press': that.data.bookInfo.publisher,
      'image': that.data.bookInfo.images.medium,
      'author': that.data.bookInfo.author[0],
      'pubdate': that.data.bookInfo.pubdate,
      'pages': that.data.bookInfo.pages
    }
    let user_id = wx.getStorageSync('bmob')
    user_id = user_id.split(',')
    user_id.splice(3, 1)
    user_id = user_id.join(',')
    const pointer = Bmob.Pointer('_User')
    // 这里有个坑要注意，这个Pointer是个JSON对象，所以
    //我们要传入一个user JSON对象
    const pointer_id = pointer.set(user_id)
    const query = Bmob.Query('books')
    const query_judge = Bmob.Query('books')
    query_judge.equalTo('isbn', '==', parseInt(bookinfo.isbn))
    query_judge.equalTo('owner', '==', pointer)
    query_judge.find().then(res => {
      console.log('res')
      if (res.length != 0) {
        wx.showToast({
          title: '已在书架'
        })
      } else {
        query.set('bookName', bookinfo.bookname)
        query.set('isbn', parseInt(bookinfo.isbn))
        console.log(parseInt(bookinfo.isbn))
        query.set('price', parseFloat(bookinfo.price))
        query.set('press', bookinfo.press)
        query.set('author', bookinfo.author)
        query.set('pubdate', bookinfo.pubdate)
        query.set('pages', parseInt(bookinfo.pages))
        console.log('good')
        query.save().then(res => {
          console.log('save')
          let book_id = res.objectId
          query.get(book_id).then(res => {
            res.set('owner', pointer_id)
            res.set('upload_image', bookinfo.image)
            res.save()
            storeBooksToStorage()
            wx.showToast({
              title: '添加成功'
            })
          }).catch(err => {
            wx.showToast({
              title: '添加失败'
            })
          })
        })
      }
    })
    // let i = 0;
    // for (i = 0; i < 10; i++) {
    //   let key = 'book' + i
    //   let value = wx.getStorageSync(key)
    //   if (!value) {
    //     let book = {
    //       'image': that.data.bookInfo.images.medium,
    //       'title': that.data.bookInfo.title,
    //       'author': that.data.bookInfo.author[0],
    //       'publisher': that.data.bookInfo.publisher,
    //       'pubdate': that.data.bookInfo.pubdate,
    //       'pages': that.data.bookInfo.pages,
    //       'price': that.data.bookInfo.price,
    //       'isbn': that.data.isbn
    //     }
    //     wx.setStorage({
    //       key: key,
    //       data: book,
    //       success: () => {
    //         wx.showToast({
    //           title: '添加成功',
    //           icon: 'success',
    //         })
    //       }
    //     })
    //     break;
    //   } else {
    //     let bookStorage = getMyStorage()
    //     if (judgeInArray(bookStorage, 'isbn', that.data.isbn)) {
    //       wx.showToast({
    //         title: '已在书架'
    //       })
    //       break;
    //     } else {
    //       continue;
    //     }
    //   }
    // }
  },
})
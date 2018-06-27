// pages/typeIn/typeIn.js
var app = getApp()
var Bmob = app.globalData.Bmob
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
    price: 34.01,
    isbn: 0
  },
  submit: function (e) {
    var that = this
    let bookinfo = e.detail.value
    if (e.detail.value.isbn == 0) {
      wx.showModal({
        title: 'ISBN不能为空',
        showCancel: false
      })
    } else {
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
      query_judge.find().then(res => {
        if (res.length != 0) {
          wx.showToast({
            title: '已在书架'
          })
        } else {
          query.set('bookName', bookinfo.bookName)
          query.set('isbn', parseInt(bookinfo.isbn))
          query.set('price', parseFloat(bookinfo.price))
          query.set('press', bookinfo.press)
          query.save().then(res => {
            let book_id = res.objectId
            query.get(book_id).then(res => {
              res.set('owner', pointer_id)
              res.save()
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
    }
  },

  chooseImageTap: function () {
    let that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },

  chooseWxImage: function (type) {
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        _this.setData({
          logo: res.tempFilePaths[0],
        })
      },
    })
  },
})
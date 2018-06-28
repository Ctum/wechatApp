var app = getApp()
var Bmob = app.globalData.Bmob
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToIndex: function () {
    wx.switchTab({
      url: '/pages/scan/scan',
    })
  },

  /**
   * 生命周期函数--监听页面加载，小程序注册完成后就会调用
   */
  onLoad: function (options) {
  },
  onShow: function () {
    let user_id = wx.getStorageSync('bmob')
    if (user_id) {
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
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    setTimeout(function() {
      that.setData({
        remind: ''
      })
    }, 1000)
  },
  onShareAppMessage: function(){
    return{
      title: '来闲书，买卖旧书',
      path: '/pages/start/start'
    }
  }
})
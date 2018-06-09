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
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
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
})
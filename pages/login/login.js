// pages/login/login.js
var app = getApp()
var Bmob = app.globalData.Bmob
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trigger: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  userLogin: function(event){
    let param = event.detail.value
    let username = param.username
    let password = param.password
    Bmob.User.login(username, password).then(res => {
      wx.showToast({
        title:'成功登录',
        icon: 'success'
      })
      wx.setStorageSync('isLogin', true)
      wx.switchTab({
        url: '/pages/scan/scan'
      })
      console.log('redirectTo')
    }).catch(err => {
      wx.showToast({
        title: '请重试'
      })
    })
  },
  trigger: function(){
    this.setData({
      trigger: !this.data.trigger
    })
    if(!this.data.trigger){
      wx.setNavigationBarTitle({
        title: '用户注册'
      })
    } else{
      wx.setNavigationBarTitle({
        title: '用户登录'
      })
    }
  },
  userRegister: function(event){
    let param = event.detail.value
    Bmob.User.register(param).then(
      res => {
        wx.showToast({
          title: '成功注册',
          icon: 'success'
        })
      }
    ).catch(err => {
      wx.showToast({
        title: '注册失败'
      })
    })
  }
})
var Bmob = require('/util/Bmob-1.6.1.min.js')
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    Bmob.initialize('f7eafe4c4f52ba10abd04ef3eec88636', '16fb2b0d2d971881e56b4b2e34a63696')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    url:'https://www.easy-mock.com/mock/5b128e3c791ed91ba99b114f/api/',
    Bmob: Bmob,
  }
})

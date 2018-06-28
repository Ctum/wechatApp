var Bmob = require('./Bmob-1.6.1.min.js')
function storeBooksToStorage(){
  Bmob.initialize('f7eafe4c4f52ba10abd04ef3eec88636', '16fb2b0d2d971881e56b4b2e34a63696')
  let user_id = wx.getStorageSync('bmob')
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
module.exports = {
  storeBooksToStorage: storeBooksToStorage
}
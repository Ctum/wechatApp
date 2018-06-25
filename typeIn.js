// pages/typeIn/typeIn.js
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
    price: '',
    isbn: ''
  },
  getValue: function(e) {
    console.log(e.detail.value)
  },
  submit:function(e){
    var that=this
    console.log(e.detail.value)
    if(e.detail.value.isbn.length==0){
      wx.showModal({
         title:'ISBN不能为空',
         showCancel:false
      })
    }else{
      //提交
      wx.request({
        url: 'https://douban.uieee.com/v2/book/isbn/'+this.data.isbn,
        data:e.datail.value,
        method: 'GET',
        header:{'Content-Type': 'json'},
        success:function(res){
          //success
          if(res.data==1){
            wx.showToast({
              title: '保存成功',
              icon:'success',
              duration:2000
            })
          }
        },
        fail:function(){
          //fail
        },
        complete:function(){
          //complete
        }

      })
    }

  },
  
})
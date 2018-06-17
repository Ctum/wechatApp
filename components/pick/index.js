// components/pick/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookInfo: {
      type: Object,
      value: ''
    },
    index: {
      type: Number,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    oldNewDegree:[
      '请选择',
      '全新',
      '九成新',
      '八成新',
      '六成新',
      '笔记有点多',
      '笔记很多',
      '比较旧'
    ],
    corPrice:[
      0.5,
      0.4,
      0.35,
      0.3,
      0.2,
      0.15,
      0.1
    ],
    degree: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDegree: function(event){
      let degree = parseInt(event.detail.value)
      this.setData({
        degree: degree
      })
      console.log(this.data.oldNewDegree[degree])
      let myDetail = {
        value: degree-1,
        index: this.properties.index,
        tag: this.data.oldNewDegree[degree],
        price: (parseInt(this.properties.bookInfo.price) * this.data.corPrice[degree-1]).toFixed(2)
      }
      this.triggerEvent('pickChange', myDetail)
    }
  }
})

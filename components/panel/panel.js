// components/panel/panel.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
  externalClasses: ['i-class'],
  properties: {
    title: {
      type: String,
      value: ''
    },
    hideTop: {
      type: Boolean,
      value: false
    },
    hiderBoredr: {
      type: Boolean,
      value: false
    }
  }
})

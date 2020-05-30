// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //title: String
    title: {
      type: String,
      value: "我是默认的标题",
      observer: function(newval,oldval){
        console.log(newval,oldval)
      }
    }
  },
  externalClasses: ['titleclass']
})

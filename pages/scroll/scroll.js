// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
  handleScroll(event){
    console.log('正在滚动',event)

  }
 
})
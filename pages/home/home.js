// pages/home/home.js
//getApp()获取app()产生的实例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

//注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  //--------2.初始化一些数据---------
  data: {
    name:'coderwhy',
    age:18,
    message: '哈哈哈',
    list:[]
  },
  
  //--------- 1.监听页面的生命周期函数--------
  onLoad(){
    console.log('监听页面加载:onLoad');
    wx.request({
      url: 'url',
      success: (res)=>{
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list:data
        })
      }
    })
  },
  onShow(){
    console.log('监听页面显示:onShow');
  },
  onReady(){
    console.log('监听页面初次渲染完成:onReady');
  }, 
  onHide(){
    console.log('监听页面隐藏:onHide');
  },
  onUnload(){
    console.log('监听页面卸载:onUnload');
  },
  //---------3.监听wxml中相关的一些事情--------
  hangleGetUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },

  //----------4.其他事件------------
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})
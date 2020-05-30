// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function(){
        console.log('展示弹窗成功')
      },
      fail: function(){
        console.log('展示弹窗失败')
      },
      complete: function(){
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModel(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      //cancelText: '退出',
      cancelColor: 'red',
      success: function(res){
        if(res.confirm){
          console.log('用户点击了确定')
        }else{
          console.log('用户点击了取消')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中...',
      mask: true
    }),
    setTimeout(() => {
      //必须手动hideLoading才会让loading消失  
      wx.hideLoading() 
    },5000)
  },
  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'green',
      success: function(res){
        console.log(res.tapIndex)
      },
      fail: function(res){
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage: function(options){
    return{
      title: '你好啊！',
      path: '/pages/about/about.wxml',
      imageUrl: "../../asserts/tupian.jpg"
    }
  }
})
// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生的方式发送网络请求
    this.get_data_origin()

    //2.使用封装的request发送网络请求
    //Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/recommend',
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    //发送网络请求
    //1.发送最简单的get请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res){
        console.log(res)
      }
    })
    //2.get请求，并且携带参数
    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        typa: 'sell',
        page: 1
      },
      success: function(res){
        console.log(res)
      }
    }) 
    //3. post请求，并且携带参数
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'coderwhy',
        age: 18
      },
      success: function(res){
        console.log(res)
      },
      fail: function(err){
        console.log(err)
      }
    }) 
  },
})
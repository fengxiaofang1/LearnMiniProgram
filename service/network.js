export default function require(options) {
  return new Promise((reslove,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}
// export default function require(options) {
//   return new Promise((reslove,reject) => {
//     wx.request({
//       url: 'options.url',
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function(res){
//         resolve(res)
//       },
//       fail: function(err){
//         reject(err)
//       }
//     })
//   })
// }
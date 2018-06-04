// pages/detail/detail.js
Page({
  data: {
    content: '',
    url: ''
  },
  getContent (id) {
    wx.request({
      url: 'https://m.toutiao.com/i'+ id +'/info/?_signature=Mn1CcxAWaXCYUgLzWM67XzJ9Qm', //仅为示例，并非真实的接口地址
      data: {
        i: id
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res) => {   
        console.log(res.data)  
        this.setData({content: res.data.data.content})
      }
    })
  },
  onLoad: function (options) {
    // console.log(options);
    this.getContent(options.id);
    // this.setData({
    //   // url: `https://m.toutiao.com/i${options.id}/`
    //   url: `https://www.baidu.com/?abc=${options.id}`
    // })
  },

})
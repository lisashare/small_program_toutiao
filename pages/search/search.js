// pages/search/search.js
Page({
  data: {
    lists: [],
    keyword: ''
  },
  formSubmit (e) {
    let keyword = e.detail.value
    this.setData({keyword, lists:[]})
    this.getLists()
  },
  getLists () {
    wx.request({
      url: 'https://m.toutiao.com/list/?ac=wap&count=20&format=json_raw&as=A1A53AFF9ABB2CD&cp=5AFA9BA2EC2DEE1&_signature=XTrrwwAAB8AKDaOY8NEXVF0669&i=', //仅为示例，并非真实的接口地址
      data: {
         tag: '__all__',
         min_behot_time: Math.floor(Date.now()/1000),
         keyword:this.data.keyword
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        var lists = []
        lists = this.data.lists.concat(res.data.data)     
        this.setData({lists})
        wx.stopPullDownRefresh()
      }
    })
  },
  onReachBottom () {
    this.getLists()
  }
})

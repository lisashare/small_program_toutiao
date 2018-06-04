// pages/mine/mine.js

let app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo : null
  },
  onload () {
    // this.setData({ userInfo:app.globalData.userInfo });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo (e) {
      // console.log(e);
      let userInfo = e.detail.userInfo;
      app.globalData.userInfo = userInfo;
      this.setData({ userInfo });
      wx.setStorageSync("userInfo",userInfo);  //存储本地
    },
    exit () {
      this.setData({ userInfo:null });
      wx.removeStorageSync("userInfo");
    }

  }
})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {  //挂载数据
   navs:[
      {id: 1, title: '推荐', type: '__all__'},
      {id: 2, title: '视频', type: 'video'},
      {id: 3, title: '热点', type: 'news_hot'},
      {id: 4, title: '社会', type: 'news_society'},
      {id: 5, title: '娱乐', type: 'news_entertainment'},
      {id: 6, title: '军事', type: 'news_military'},
      {id: 7, title: '科技', type: "news_tech"},
      {id: 8, title: '汽车', type: 'news_sports'},
      {id: 9, title: '体育', type:"news_sports"},
      {id: 10, title: '财经', type: 'news_finance'},
      {id: 11, title: '国际', type: "news_world"},
      {id: 12, title: '时尚', type: "news_fashion"},

   ],
   activeId: 1,   //根据id切换字体颜色
   lists:[]
  },
  //事件处理函数
  changeActiveId (e) {

    // console.log(e);
    let id = e.currentTarget.dataset.id

    this.setData({activeId: id})
  },
  //根据activeId获取数据中的 type
  getTypeById () {
    let { navs, activeId } = this.data
    let len = navs.length
    for (let i = 0; i < len; i++) {
      if ( navs[i].id === activeId ) {
        return navs[i].type;
      }
    }
  },

  //获取数据
  getLists () {

    wx.request({
        url: 'https://m.toutiao.com/list/?ac=wap&count=20&format=json_raw&as=A1A53AFF9ABB2CD&cp=5AFA9BA2EC2DEE1&_signature=XTrrwwAAB8AKDaOY8NEXVF0669&i=',  //接口地址
        data: {
        
          tag: this.getTypeById(),
          min_behot_time: Math.floor(Date.now()/1000)
      
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: (res)=> {  

          // console.log(res.data.data);
          this.setData({ "lists": res.data.data }) 
        }

    })

  },
  onLoad: function () {   //生命周期函数vue created
   this.getLists();
  },
  getUserInfo: function(e) {
    
  
  }
})

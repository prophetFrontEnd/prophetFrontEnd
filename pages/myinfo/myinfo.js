let util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewH:0,
    statusBarHeight:0,
    ansList:[
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      },
      {
        question:'问题',
        ans: '用户回答用户回答用户回答用户回答用户回答用户回答用户回答'
      }
    ],
    tapSetting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that=this;
    let t = setTimeout(() => {
      util.getWindowInfo('#scrollView').then(res=>{
        let scrollViewH = res.availWindowH - res.fromTop - res.statusBarHeight*2 - 40.0/res.pixelRatio;
        let statusBarHeight = res.statusBarHeight;
        console.log(res);
        that.setData({
          scrollViewH,
          statusBarHeight
        })
        clearTimeout(t);
      })
    }, 500);
  },
  tapSetting(){
    this.setData({
      tapSetting: !this.data.tapSetting
    })
  }
})
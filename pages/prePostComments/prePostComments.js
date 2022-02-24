let util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:0,
    scrollViewH:0
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
        let scrollViewH = res.availWindowH - res.fromTop - res.statusBarHeight - 40.0/res.pixelRatio;
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
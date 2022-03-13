// pages/afterTransmitted/afterTransmitted.js
let util = require('../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postClass:"",
    statusBarHeight:0,
    areaParts:["分区1","分区2","分区3","分区4","分区5","分区6","分区7"],
    isSelected: false,
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postClass: options.selected
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that=this;
    let t = setTimeout(() => {
      util.getWindowInfo('#title').then(res=>{
        let scrollHeight = res.availWindowH - res.fromTop - res.statusBarHeight*2 - 100.0/res.pixelRatio;
        let statusBarHeight = res.statusBarHeight;
        console.log(res);
        that.setData({
          statusBarHeight,
          scrollHeight
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

  },

  selectarea(event){
    console.log(event.target);
    this.setData({
      isSelected:!this.isSelected
    })
  }
})
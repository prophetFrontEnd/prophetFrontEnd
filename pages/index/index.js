// pages/demo/demo.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    agree:'agree',
    userInfo: {},
  },

  showtips(){
    wx.showToast({
      title: '请勾选用户协议',
      icon: 'none',
      duration: 1000
    })
  },

  checkboxChange(){
    if(this.data.agree == 'agree'){
      this.setData({
        agree: ''
      })
      wx.showToast({
        title: '您已取消勾选用户协议',
        icon: 'none',
        duration: 1000
      })
    }else{
      this.setData({
        agree: 'agree'
      })
    }
  },
  
  login(){
    wx.getUserProfile({
      desc: '用于登录账号，完善身份信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        })
        console.log('success',res);
      }
    })
  },

  toprotocol(){
    wx.navigateTo({
      url: '/pages/agreement/agreement'
    })
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
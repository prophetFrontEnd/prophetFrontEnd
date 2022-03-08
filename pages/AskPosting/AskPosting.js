// pages/PrePosting/PrePosting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        PreInput: '', // 预言内容
        category: ['历史类','现代类'],
        modern: ['娱乐圈','社会','自然','其他'],
        history: ['小说','段子','真实案件','其他'],
        index1: 0,
        index2: 0,
        files:[],
        current:[],
        urls: [],
        titleCount: 0,
        contentCount: 0,
        wordCount: 0,
        timeCount: 0,
        title: '',
        content: '',
        word: '',
        time: '',
        checked: false,
        endtime:''
    },

    checkedTap(){
        let checked = this.data.checked
        this.setData({
            checked: !checked 
        })
    },

    handleTitleInput(e){
        this.setData({
            title: e.detail.value,
            titleCount: e.detail.value.length
        })
    },
    handleContentInput(e){
        this.setData({
            content: e.detail.value,
            contentCount: e.detail.value.length
        })
    },
    handleWordInput(e){
        this.setData({
            word: e.detail.value,
            wordCount: e.detail.value.length
        })
    },
    handleTimeInput(e){
        this.setData({
            time: e.detail.value,
            timeCount: e.detail.value.length
        })
    },

    bindPickerChange1(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index1: e.detail.value
        })
    },
    bindPickerChange2(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index2: e.detail.value
        })
    },

    timePickerChange(e){
        this.setData({
            endtime: e.detail.value
        })
    },

    back(){
        wx.navigateBack({
          delta: 1,
        })
    },

    confirm(e){
        this.setData({
            PreInput: e.detail.value
        })
        console.log(e.detail.value)
    },

    uploadimg(e){
        let that = this;
        wx.chooseImage({
            count: 3, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                wx.showToast({
                    title: '正在上传...',
                    icon: 'loading',
                    mask: true,
                    duration: 1000
                })  
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                let tempFilePaths = res.tempFilePaths;
                that.setData({
                  files: tempFilePaths
              })
            }
          })
    },
    previewImage(e){
        wx.previewImage({
            current: this.data.files[index],
            urls: this.data.files
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
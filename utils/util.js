const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getWindowInfo = (selectorId)=>{
  return new Promise(resolve=>{
    let posObj = {
      availWindowH: 0,
      fromTop: 0,
      elmHeight: 0,
      statusBarHeight:0,
      pixelRatio: 1
    }
    wx.getSystemInfo({
      success: (res) => {
        posObj.availWindowH = res.windowHeight;
        posObj.pixelRatio = 750.0/res.screenWidth;
        posObj.statusBarHeight = res.statusBarHeight;
        // console.log(res);
      }
    });
    const query = wx.createSelectorQuery();
    query.select(selectorId).boundingClientRect(function (res) {
      posObj.fromTop = res.top;
      posObj.elmHeight = res.height;
      resolve(posObj)
    }).exec();
  })
}

module.exports = {
  formatTime,
  getWindowInfo
}

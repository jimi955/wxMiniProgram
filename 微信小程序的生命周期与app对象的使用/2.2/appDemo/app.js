//app.js

var appConfig = {
  // 小程序启动
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("---onLaunch--");
  },
  // 小程序在前台触发
  onShow : function(){
    console.log("---onShow--");
  },
  // 小程序在后台触发
  onHide : function(){
    console.log("---onHide--");
  },



  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },


// 全局变量
 myData : {
   username : "jikexueyuan"
 },


  globalData:{
    userInfo:null
  }
}

App(appConfig)
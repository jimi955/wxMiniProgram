Page({
  data:{
    imgUrls:[
      'http://p0.ifengimg.com/pmop/2017/0731/515368448AD04BBE22C45DC5860A28E1C49B02EB_size69_w600_h375.jpeg',
      'http://p0.ifengimg.com/pmop/2017/0731/515368448AD04BBE22C45DC5860A28E1C49B02EB_size69_w600_h375.jpeg',
      'http://p0.ifengimg.com/pmop/2017/0731/515368448AD04BBE22C45DC5860A28E1C49B02EB_size69_w600_h375.jpeg'
    ],
    autoplay:true,
    indicatorDots:true,
    interval:2000,
    duration:500

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  change:function(event){
    console.log(event)
  }
})

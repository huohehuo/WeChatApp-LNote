var app = getApp()
const util = require('../../utils/util.js')
Page({
  data:{
    index: 1,
    mysrc: "../../images/pic1.jpg",
    but_msg: "下一张",
    ifplus: true,
    userInfo:{},
    backText:"返回数据",
    time: "2019-05-01",
    companies:[]
  },
  onLoad:function(){
    console.log('onload test');
    // this.setData({
      // backText: "返回的数据。。。。。"
    // })
    // this.data.backText:"返回的数据。。。。。"
    // console.log(this.data.backText)
    // this.checkUrl('');
  },
  onShow:function(){
    this.checkUrl('');
  },
  checkUrl: function (e) {
    //监听事件
    var self = this;
    wx.request({
      //url: 'http://148.70.108.65:8080/LogAssist/GetCompanyIO', //仅为示例，并非真实的接口地址
      url: 'http://192.168.1.104:8089/LogAssist/GetCompanyIO', //仅为示例，并非真实的接口地址
      // data: {
      //   x: '',
      //   y: ''
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        self.setData({
          companies:res.data.companies
        })
      }
    })
  },
  //图片的点击事件
  item_click: function (e) {
    
    var index = e.currentTarget.dataset.id;
    // console.log('点击' + index)
    // console.log('点击' + this.data.companies[index].CompanyName)
    // 展示本地存储能力
    var logs = wx.getStorageSync('clickData') || []
    logs.unshift(util.formatTime(new Date()) + this.data.companies[index].CompanyName)
    wx.setStorageSync('clickData', logs)
    // //监听事件
    // if (this.data.index != 2) {
    //   this.data.index = this.data.index + 1
    //   this.data.but_msg = "上一个"
    // } else {
    //   this.data.index = 1;
    //   this.data.but_msg = "下一个"
    // }
    // this.setData({
    //   mysrc: "../../images/pic" + this.data.index + ".jpg",
    //   but_msg: this.data.but_msg
    // })
  },
  //图片的点击事件
  button: function (e) {
    //监听事件
    if (this.data.index != 2) {
      this.data.index = this.data.index + 1
      this.data.but_msg = "上一个"
    } else {
      this.data.index = 1;
      this.data.but_msg = "下一个"
    }
    this.setData({
      mysrc: "../../images/pic" + this.data.index + ".jpg",
      but_msg: this.data.but_msg
    })
  }
})
//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    list_data:[]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    console.log('onSHow')
    var self = this
    wx.getStorage({
      key: 'clickData',
      success(res) {
        console.log(res.data)
        self.setData({
          list_data: res.data
        })
      }
    })
  },
  clear_data:function(){
    try {
      wx.removeStorageSync('clickData'),
      //清空后，要置空这个变量，不然无论是onShow还是重新获取该缓存，都不会清空页面的数据
      this.setData({
        list_data:[]
      })
    } catch (e) {
      // Do something when catch error
    }
    // wx.removeStorage({
    //   key: 'clickData',
    //   success(res) {
    //     console.log('删除成功'+res)
    //   }
    // })
  }

})

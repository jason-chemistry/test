Page({
  data: {
    active: 0,
    currentTab: 0,
  

  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
  },
  click:function(e){
    var page =this;
    var subject = e.target.dataset.text
    var grade = this.data.active
    console.log(subject + grade)
    wx.navigateTo({
      url: '../detail/detail?grade=' + grade + "&subject=" + subject 
    })
  }
})

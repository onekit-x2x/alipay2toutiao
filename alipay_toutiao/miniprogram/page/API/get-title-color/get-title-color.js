import my from "../../../onekit/my"
Page({
  data: {
    titleColor: {},
  },
  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        this.setData({
          titleColor: res
        })
      }
    })
  }
});

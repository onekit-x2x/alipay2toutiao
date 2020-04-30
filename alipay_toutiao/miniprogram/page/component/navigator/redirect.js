import my from "../../../onekit/my"
Page({
  onLoad(options) {
    console.log(options);
    this.setData({
      title: options.title,
    });
  },
});

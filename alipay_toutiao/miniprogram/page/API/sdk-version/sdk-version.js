import my from "../../../onekit/my"
Page({
  getSDKVersion() {
    my.alert({
      content: my.SDKVersion,
    });
  }, 
});

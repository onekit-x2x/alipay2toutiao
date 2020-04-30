import my from "../../../onekit/my"
Page({

  getServerTime(){
    my.getServerTime({
      success: (res) => {
        my.alert({
          content: res.time,
        });
      },
    });
  }
})

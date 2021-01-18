export default class RewardedVideoAd {
  constructor(toutiaoRewardedVideoAd) {
    this.toutiaoRewardedVideoAd = toutiaoRewardedVideoAd
  }

  load() {
    return this.toutiaoRewardedVideoAd.load()
  }

  // show() {
  //   return this.toutiaoRewardedVideoAd.load()
  // }
  onLoad(callback) {
    return this.toutiaoRewardedVideoAd.onLoad(callback)
  }

  offLoad(callback) {
    return this.toutiaoRewardedVideoAd.offLoad(callback)
  }

  onClose(callback) {
    return this.toutiaoRewardedVideoAd.onClose(callback)
  }

  offClose(callback) {
    return this.toutiaoRewardedVideoAd.offClose(callback)
  }

  onError(callback) {
    return this.toutiaoRewardedVideoAd.onError(callback)
  }

  offError(callback) {
    return this.toutiaoRewardedVideoAd.offError(callback)
  }
}

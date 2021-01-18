export default class VideoContext {
  constructor(toutiaoVideoContext) {
    this.toutiaoVideoContext = toutiaoVideoContext
  }

  play() {
    return this.toutiaoVideoContext.play()
  }

  pause() {
    return this.toutiaoVideoContext.pause()
  }

  seek(position) {
    return this.toutiaoVideoContext.seek(position)
  }

  // sendDanmu() {
  //   return this.toutiaoVideoContext.play()
  // }

  requestFullScreen(object) {
    return this.toutiaoVideoContext.requestFullScreen(object)
  }

  exitFullScreen() {
    return this.toutiaoVideoContext.exitFullScreen()
  }

  // showStatusBar() {
  //   return this.toutiaoVideoContext.showStatusBar()
  // }

  // hideStatusBar() {
  //   return this.toutiaoVideoContext.hideStatusBar()
  // }

  stop() {
    return this.toutiaoVideoContext.stop()
  }

  // playbackRate(rate) {
  //   return this.toutiaoVideoContext.playbackRate(rate)
  // }
}

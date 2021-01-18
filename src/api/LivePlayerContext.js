export default class LivePlayerContext {
  constructor(toutiaoLivePlayerContext) {
    this.toutiaoLivePlayerContext = toutiaoLivePlayerContext
  }

  play(object) {
    return this.toutiaoLivePlayerContext.play(object)
  }

  pause(object) {
    return this.toutiaoLivePlayerContext.stop(object)
  }

  mute(object) {
    return this.toutiaoLivePlayerContext.mute(object)
  }

  resume(object) {
    return this.toutiaoLivePlayerContext.play(object)
  }

  requestFullScreen(object) {
    return this.toutiaoLivePlayerContext.requestFullScreen(object)
  }

  exitFullScreen(object) {
    return this.toutiaoLivePlayerContext.exitFullScreen(object)
  }

  stop(object) {
    return this.toutiaoLivePlayerContext.stop(object)
  }
}

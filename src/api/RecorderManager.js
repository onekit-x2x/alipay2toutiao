/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
export default class RecorderManager {
  constructor(toutiaoRecorderManager) {
    this.toutiaoRecorderManager = toutiaoRecorderManager
  }

  start() {
    return this.toutiaoRecorderManager.start()
  }

  pause() {
    return this.toutiaoRecorderManager.pause()
  }

  resume() {
    return this.toutiaoRecorderManager.resume()
  }

  stop() {
    return this.toutiaoRecorderManager.stop()
  }

  onStart(callback) {
    return this.toutiaoRecorderManager.onStart(callback)
  }

  onPause(callback) {
    return this.toutiaoRecorderManager.onPause(callback)
  }

  onStop(callback) {
    return this.toutiaoRecorderManager.onStop(callback)
  }

  onError(callback) {
    return this.toutiaoRecorderManager.onError(callback)
  }

  onResume(callback) {
    return this.toutiaoRecorderManager.onResume(callback)
  }

  onInterruptionBegin() {
    return console.warn('onInterruptionBegin is not support')
  }

  onInterruptionEnd() {
    return console.warn('onInterruptionBegin is not support')
  }
}

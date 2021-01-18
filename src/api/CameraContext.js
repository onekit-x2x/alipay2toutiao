export default class CameraContext {
  constructor(toutiaoCameraContext) {
    this.toutiaoCameraContext = toutiaoCameraContext
  }

  // eslint-disable-next-line class-methods-use-this
  takePhoto() {
    return true
  }

  // eslint-disable-next-line class-methods-use-this
  startRecord() {
    return true
  }

  // eslint-disable-next-line class-methods-use-this
  stopRecord() {
    return true
  }
}

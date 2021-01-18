/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
export default class MapContext {
  constructor(toutiaoMapContext) {
    this.toutiaoMapContext = toutiaoMapContext
  }

  includePoints() {
    return console.warn('includePoints is not support')
  }

  getCenterLocation(object) {
    return this.toutiaoMapContext.getCenterLocation(object)
  }

  translateMarker() {
    return console.warn('translateMarker is not support')
  }

  moveToLocation(object) {
    return this.toutiaoMapContext.moveToLocation(object)
  }

  getRegion(object) {
    return this.toutiaoMapContext.getRegion(object)
  }

  getScale(object) {
    return this.toutiaoMapContext.getScale(object)
  }
}

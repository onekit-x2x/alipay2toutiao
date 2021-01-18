
export default class CanvasContext {
  constructor(toutiaoCanvasContext) {
    this.toutiaoCanvasContext = toutiaoCanvasContext
  }

  beginPath(a) {
    return this.toutiaoCanvasContext.beginPath(a)
  }

  save() {
    return this.toutiaoCanvasContext.save()
  }

  restore() {
    return this.toutiaoCanvasContext._actions.restore()
  }

  //
  setGlobalAlpha(alpha) {
    return this.toutiaoCanvasContext.setGlobalAlpha(alpha)
  }

  setFillStyle(color) {
    return this.toutiaoCanvasContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.toutiaoCanvasContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.toutiaoCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setLineCap(lineCap) {
    return this.toutiaoCanvasContext.setLineCap(lineCap)
  }

  setLineJoin(lineJoin) {
    return this.toutiaoCanvasContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.toutiaoCanvasContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.toutiaoCanvasContext.setMiterLimit(miterLimit)
  }

  setFontSize(fontSize) {
    return this.toutiaoCanvasContext.setFontSize(fontSize)
  }

  rotate(rotate) {
    return this.toutiaoCanvasContext.rotate(rotate)
  }

  scale(scaleWidth, scaleHeight) {
    return this.toutiaoCanvasContext.scale(scaleWidth, scaleHeight)
  }

  translate(x, y) {
    return this.toutiaoCanvasContext.translate(x, y)
  }

  moveTo(x, y) {
    return this.toutiaoCanvasContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.toutiaoCanvasContext.lineTo(x, y)
  }

  closePath() {
    return this.toutiaoCanvasContext.closePath()
  }

  fillText(text, x, y) {
    return this.toutiaoCanvasContext.fillText(text, x, y)
  }

  drawImage(imageResource, x, y, width, height) {
    return this.toutiaoCanvasContext.drawImage(imageResource, x, y, width, height)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.toutiaoCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.toutiaoCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.toutiaoCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  //
  rect(x, y, width, height) {
    return this.toutiaoCanvasContext.rect(x, y, width, height)
  }

  //
  clearRect(x, y, width, height) {
    return this.toutiaoCanvasContext.clearRect(x, y, width, height)
  }

  stroke() {
    return this.toutiaoCanvasContext.stroke()
  }

  fill() {
    return this.toutiaoCanvasContext.fill()
  }

  draw(reserve, callback) {
    return this.toutiaoCanvasContext.draw(reserve, callback)
  }

  fillRect(x, y, width, height) {
    return this.toutiaoCanvasContext.fillRect(x, y, width, height)
  }

  getActions() {
    return this.toutiaoCanvasContext.getActions()
  }
}

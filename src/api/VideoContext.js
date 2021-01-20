export default class VideoContext{
  constructor(ttVideoContext) {
    this.ttVideoContext = ttVideoContext;
  }
  play(){
    return  this.ttVideoContext.play();
  }
  pause(){
    return  this.ttVideoContext.pause();
  }
  stop(){
    return  this.ttVideoContext.stop();
  }
  seek(position){
    return this.ttConvasContext.seek(position);
  }
 
  requestFullScreen(){
    return this.ttConvasContext.requestFullScreen();
  }
  exitFullScreen(){
      return this.ttConvasContext.exitFullScreen();
    }
 





}
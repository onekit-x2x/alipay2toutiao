import Context from "./api/Context"
import CanvasContext from "./api/CanvasContext"
import VideoContext from "./api/VideoContext"

import wx_cloud from "./my.cloud"
import onekit from "./onekit"
export default class my {
  static triggerEvent(THIS,eventName, data){
    eventName = onekit.firstUpper(eventName);
    return THIS.props["on"+eventName](data);
  }
  /////////////////// animation //////////////////////////
  static createAnimation(object) {
    return tt.createAnimation(object);
  }

  ///////////////// basic ////////////////////////////////
  static canIUse(string) { return tt.canIUse(string); }
  static getSystemInfo(object) {return tt.getSystemInfo(object);}
  static getSystemInfoSync(object) { return(tt.getSystemInfoSync(object)) }
  static base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    let commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  }
  static arrayBufferToBase64(arrayBuffer) {
    let base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  }
  static getUpdateManager(object) { return tt.getUpdateManager(object); }
  static getLaunchOptionsSync(object) { return tt.getLaunchOptionsSync(object); }
  static offPageNotFound(object) { return tt.offPageNotFound(object); }
  static onPageNotFound(object) { return tt.onPageNotFound(object); }
  static offError(object) { return tt.offError(object); }
  static onError(object) { return tt.onError(object); }
  static offAppShow(object) { return tt.offAppShow(object); }
  static onAppShow(object) { return tt.onAppShow(object); }
  static offAppHide(object) { return tt.offAppHide(object); }
  static onAppHide(object) { return tt.onAppHide(object); }
  static setEnableDebug(object) { return tt.setEnableDebug(object); }
  static getLogManager(object) { return tt.getLogManager(object); }
  static rsa(Object ) { return /*tt.esa(object)*/ console.log("暂不支持"); }
  /////////////////// Canvas ///////////////////
  static drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = tt.createCanvasContext(canvasId);
    for (var action of actions) {
      var data = action.data;
      switch (action.method) {
        case "save":
          canvasContext.save();
          break;
        case "restore":
          canvasContext.restore();
          break;
        case "setFillStyle":
          canvasContext.setFillStyle(onekit.color.array2str(data[1]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data[1]));
          break;
        case "setFontSize":
          canvasContext.setFontSize(data[0]);
          break;
        case "setGlobalAlpha":
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case "setShadow":
          var dat = data[3];
          canvasContext.setShadow(data[0], data[1], data[2], onekit.color.array2str(data[3]));
          break;
        case "setStrokeStyle":
          canvasContext.setStrokeStyle(onekit.color.array2str(data));
          break;
        case "drawImage":
          canvasContext.drawImage.apply(canvasContext, data)
          break;
        case "fillText":
          canvasContext.fillText.apply(canvasContext, data)
          break;
        case "setLineCap": canvasContext.setLineCap(data[0]); break;
        case "setLineJoin": canvasContext.setLineJoin(data[0]); break;
        case "setLineWidth": canvasContext.setLineWidth(data[0]); break;
        case "setMiterLimit": canvasContext.setMiterLimit(data[0]); break;
        case "rotate": canvasContext.rotate(data[0]); break;
        case "scale": canvasContext.scale(data[0], data[1]); break;
        case "translate": canvasContext.translate(data[0], data[1]); break;
        case "strokePath":
          canvasContext.beginPath()
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "moveTo": canvasContext.moveTo(dt[0], dt[1]); break;
              case "lineTo": canvasContext.lineTo(dt[0], dt[1]); break;
              case "closePath": canvasContext.closePath(); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              case "quadraticCurveTo": canvasContext.quadraticCurveTo.apply(canvasContext, dt); break;
              case "bezierCurveTo": canvasContext.bezierCurveTo.apply(canvasContext, dt); break;

              default:
                console.log("[drawCanvas-strokePath]", dat.method);
                break;
            }
          }
          canvasContext.stroke()
          break
        case "fillPath":
          for (var dat of data) {
            var dt = dat.data;
            switch (dat.method) {
              case "rect": canvasContext.fillRect(dt[0], dt[1], dt[2], dt[3]); break;
              case "arc": canvasContext.arc.apply(canvasContext, dt); break;
              default:
                console.log("[drawCanvas-fillPath]", dat.method);
                break;
            }
          }
          canvasContext.fill()
          break;
        case "clearRect": canvasContext.clearRect(data[0], data[1], data[2], data[3]); break;
        default:
          console.log("[drawCanvas]", action.method);
          break;
      }
    }
    canvasContext.draw();
  }
  static createContext() {
    var context = new Context();
    return context;
  }
  static createCanvasContext(id) {
    return new CanvasContext(tt.createCanvasContext(id));
  }
  static createVideoContext(videoId) {
    return new VideoContext(tt.createVideoContext(videoId));
  }
  static canvasToTempFilePath(object) {
    var object2 = {
      canvasId: object.canvasId
    }
    object2.success = function(res) {
      var result = {
        errMsg: "canvasToTempFilePath:ok",
        tempFilePath: res.apFilePath
      };
      if (object.success) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.canvasToTempFilePath(object2);
  }
  static canvasPutImageData(object) { return tt.canvasPutImageData(object) };
  static canvasGetImageData(object) { return tt.canvasGetImageData(object) };
  ////////////// Device //////////////////
  static onBeaconServiceChange(object) { return tt.onBeaconServiceChange(object); }
  static onBeaconUpdate(object) { return tt.onBeaconUpdate(object); }
  static getBeacons(object) { return tt.getBeacons(object); }
  static stopBeaconDiscovery(object) { return tt.stopBeaconDiscovery(object); }
  static startBeaconDiscovery(object) { return tt.startBeaconDiscovery(object); }
  static stopWifi(object) { return tt.stopWifi(object); }
  static startWifi(object) { return tt.startWifi(object); }
  static setWifiList(object) { return tt.setWifiList(object); }
  static onWifiConnected(object) { return tt.onWifiConnected(object); }
  static onGetWifiList(object) { return tt.onGetWifiList(object); }
  static getWifiList(object) { return tt.getWifiList(object); }
  static getConnectedWifi(object) { return tt.getConnectedWifi(object); }
  static connectWifi(object) { return tt.connectWifi(object); }
  static setNavigationBar(object) { return tt.setNavigationBarTitle(object); };
  //
  static onAccelerometerChange(callback) {
    tt.onAccelerometerChange(function(res) {
      if (tt._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  }
  static stopAccelerometer(object) {
    tt._stopAccelerometer = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startAccelerometer(object) {
    tt._stopAccelerometer = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static getBatteryInfoSync(object) { return tt.getBatteryInfoSync(object); }
  static _getBatteryInfo(result) {
    tt.getSystemInfo({
      success: (res) => {
        var percent = res.currentBattery;
        function toPoint(percent) {
          var str = percent.replace("%", "");
          str = str / 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        result.level = results
      }
    })
    return result;
  }
  static getBatteryInfo(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "getBatteryInfo:ok",
        isCharging: false,
      }
      result = tt._getBatteryInfo(result);
      if (object.success) { object.success(result); }
      if (object.fail) { object.fail(result); }
    },
      object2.fail = function(res) {
        if (object.success) { object.success(res); }
        if (object.fail) { object.fail(res); }
      }
    return tt.getSystemInfo(object2);
  }
  //
  static getClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
            object2["success"] = function(res) {
              object[key]({ text: res.data });
            };
            break;
          case "complete":
            object2["complete"] = function(res) {
              if (res.text) {
                res = { text: res.data };
              }
              object["complete"](res);
            };
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return tt.getClipboardData(object2);
  }
  static setClipboard(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "text":
            object2["data"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return tt.setClipboardData(object2);
  }
  static onCompassChange(callback) {
    tt.onCompassChange(function(res) {
      if (tt._stopCompass) {
        return;
      }
      callback(res); s
    });
  };
  static stopCompass(object) {
    tt._stopCompass = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static startCompass(object) {
    tt._stopCompass = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addPhoneContact(object) {
    var object2 = {};
    var errMsg;
    var result = {
      errMsg: errMsg
    }
    object2.success = function(res) {
      result.errMsg = "addPhoneContact:ok"
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      result.errMsg = "addPhoneContact:fail cancel"
      if (object.fail) {
        object["fail"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    return tt.addPhoneContact(object2);
  }
  static onGyroscopeChange(callback) {
    tt.onGyroscopeChange(function(res) {
      if (tt._stopGyroscope) {
        return;
      }
      callback(res);
    });
  }
  static stopGyroscope(object) {
    tt._stopGyroscope = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  static startGyroscope(object) {
    tt._startGyroscope = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  }
  //
  static onDeviceMotionChange(object) { return tt.onDeviceMotionChange(object); }
  static stopDeviceMotionListening(object) { return tt.stopDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return tt.startDeviceMotionListening(object); }
  static startDeviceMotionListening(object) { return tt.startDeviceMotionListening(object); }
  //
  static getNetworkType = function(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    object2.success = function(res) {
      var result = { networkType: my._network(res).networkType };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.getNetworkType(object2);
  }
  static _network = function(res) {
    var networkType;
    if (res.networkAvailable) {
      switch (res.networkType) {
        case "WWAN": 
          networkType = "WIFI";
          break;
        default:
          networkType = res.networkType;
          break;
      }
    } else {
      networkType = "NONE";
    }
    return { isConnected: res.networkAvailable, networkType: networkType.toLowerCase() };
  }
  static onNetworkStatusChange = function(callack) {
    tt.onNetworkStatusChange(function(res) {
      callack(tt._network(res));
    });
  }


  //
  static makePhoneCall = function(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "number":
            object2["phoneNumber"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }

      return tt.makePhoneCall(object2);
    }
  }

  static scan = function(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "hideAlbum":
            object2["onlyFromCamera"] = object[key];
            break;
          case "type":
            object2["scanType"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = {};
        if (res.result) {
          result.charSet = "UTF-8";
          result.result = res.result;
          if (res.qrCode) {
            result.scanType = "QR_CODE";
          } else if (res.barCode) {
            result.scanType = "EAN_8";
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return tt.scanCode(object2);
  }
  //
  static vibrate (object) {return console.log("此功能尚未开放")}
  static vibrateLong(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "vibrateLong:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return tt.vibrateLong(object2);
  }
  static vibrateShort(object) {
    var object2 = {}
    object2.success = function(res) {
      var result = {
        errMsg: "vibrateShort:ok"
      }
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    }
    return tt.vibrateShort(object2);
  }
  //
  static onMemoryWarning(object) { return tt.onMemoryWarning(object); }
  static offMemoryWarning(callback) { return tt.offMemoryWarning(callback); }
  //
  static writeBLECharacteristicValue(object) { return tt.writeBLECharacteristicValue(object); }
  static readBLECharacteristicValue(object) { return tt.readBLECharacteristicValue(object); }
  static onBLEConnectionStateChange(object) { return tt.onBLEConnectionStateChange(object); }
  static onBLECharacteristicValueChange(object) { return tt.onBLECharacteristicValueChange(object); }
  static notifyBLECharacteristicValueChange(object) { return tt.notifyBLECharacteristicValueChange(object); }
  static getBLEDeviceServices(object) { return tt.getBLEDeviceServices(object); }
  static getBLEDeviceCharacteristics(object) { return tt.getBLEDeviceCharacteristics(object); }
  static createBLEConnection(object) { return tt.createBLEConnection(object); }
  static closeBLEConnection(object) { return tt.closeBLEConnection(object); }
  static offBLECharacteristicValueChange(callback) { return tt.offBLECharacteristicValueChange(callback);} 
  static offBluetoothAdapterStateChange(callback) { return tt.offBluetoothAdapterStateChange(callback);}
  static onBLEConnectionStateChanged(callback) { return tt.onBLEConnectionStateChanged(callback);}
  static offBLEConnectionStateChanged(callback) { return tt.offBLEConnectionStateChange(callback);}
  //
  static stopBluetoothDevicesDiscovery(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return tt.stopBluetoothDevicesDiscovery(object2);
  }
  static startBluetoothDevicesDiscovery(object) {
   return tt.openBluetoothAdapter(object)}
  static openBluetoothAdapter(object) {
    
    return tt.openBluetoothAdapter(object);
  }
  static onBluetoothDeviceFound(object) { return tt.onBluetoothDeviceFound(object); }
  static onBluetoothAdapterStateChange(object) { return tt.onBluetoothAdapterStateChange(object); }
  static getConnectedBluetoothDevices(object) { return tt.getConnectedBluetoothDevices(object); }
  static getBluetoothDevices(object) {
    var object2 = {}
    object2.success = function(res) {
      tt.getBluetoothDevices({
        success: (res) => {
          // console.log("000", res)
          // console.log("000", res.devices)
          result.devices = res.devices
        }
      })
      var result = {
        errMsg: "closeBluetoothAdapter:ok"
      }
      if (object.success) { object["success"](result) }
      if (object.complete) { object["complete"](result) }
    }
    object2.fail = function(res) {
      if (object.success) { object["success"](res) }
      if (object.complete) { object["complete"](res) }
    }
    return tt.getBluetoothDevices(object2);
  }
  static getBluetoothAdapterState(object) { return tt.getBluetoothAdapterState(object); }
  static closeBluetoothAdapter(object) { return tt.closeBluetoothAdapter(object); }
  //
  static connectBLEDevice(object) { return tt.createBLEConnection(object);}
  static disconnectBLEDevice(object) { return tt.closeBLEConnection(object)}
  //
  static stopHCE(object) { return tt.stopHCE(object); }
  static startHCE(object) { return tt.startHCE(object); }
  static sendHCEMessage(object) { return tt.sendHCEMessage(object); }
  static onHCEMessage(object) { return tt.onHCEMessage(object); }
  static getHCEState(object) { return tt.getHCEState(object); }
  //
  static setScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "brightness": 
            object2["value"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return tt.setScreenBrightness(object2);
  }
  static setKeepScreenOn(object) { return tt.setKeepScreenOn(object); }
  static onUserCaptureScreen(object) { return tt.onUserCaptureScreen(object); }
  static offUserCaptureScreen(callback) { return tt.offUserCaptureScreen(callback); }
  static watchShake(object) { return /*tt.watchShake*/console.log("暂不支持")}
  static getServerTime(object) { return /*tt.getServerTime*/console.log("暂不支持") }
  //
  static getScreenBrightness(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      var result = { brightness : res.value };
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.getScreenBrightness(object2);
  }
  /////////////////// Ext //////////////
  static getExtConfigSync(object) { return tt.getExtConfigSync(object) }
  static getExtConfig(object) { return tt.getExtConfig(object) }
  //////////////////// File //////////
  static getFileSystemManager(object) { return tt.getFileSystemManager(object) }
  static getFileInfo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var res2 = { value: res.brightness };
      if (object.success) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    object2.fail = function (res) {
      var res2 = res;
      if (object.fail) {
        object["success"](res2);
      }
      if (object.complete) {
        object["complete"](res2);
      }
    }
    return my.g(object2);
  }

  static removeSavedFile(object) { return tt.removeSavedFile(object) }
  static getSavedFileInfo(object) { return tt.getSavedFileInfo(object) }
  static getSavedFileList(object) { return tt.getSavedFileList(object) }
  static openDocument(object) { return tt.openDocument(object) }
  static saveFile(object) {
    tt.saveFile({
      tempFilePath: object.apFilePath,
      success(res) {
        var result = { savedFilePath: res.savedFilePath};
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }, fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  //////////// Location ///////////////
  static openLocation(object) { return tt.openLocation(object) }
  static getLocation(object) { return tt.getLocation(object) }
  static chooseLocation(object) { return tt.chooseLocation(object) }
  ////////// Media ////////////////////
  static createMapContext(object) { return tt.createMapContext(object) }
  static compressImage(object) { return tt.compressImage(object) }
  static saveImage (object) { return tt.saveImageToPhotosAlbum(object) }
  static getImageInfo(object) { return tt.getImageInfo(object) }
  static previewImage(object) { return tt.previewImage(object) }
  static chooseImage(object) {
    if (object.count == 0) {
      object.count = 0;
    }
    tt.chooseImage({
      conut: object.count,
      sizeType: object.sizeType,
      sourceType: object.scourceType,
      success: (res) => {
        var apFilePaths = [];
        for (var path of res.tempFilePaths) {
          apFilePaths.push(path)
        }
        var result = {
          apFilePaths: apFilePaths,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };
  static saveVideoToPhotosAlbum(object) { return tt.saveVideoToPhotosAlbum(object) }
  static chooseVideo(object) { return tt.chooseVideo(object) }
  static createVideoContext(object) { return tt.createVideoContext(object) }
  static stopVoice(object) { return tt.stopVoice(object) }
  static pauseVoice(object) { return tt.pauseVoice(object) }
  static playVoice(object) { return tt.playVoice(object) }
  static setInnerAudioOption(object) { return tt.setInnerAudioOption(object) }
  static getAvailableAudioSources(object) { return tt.getAvailableAudioSources(object) }
  static createInnerAudioContext(object) { return tt.createInnerAudioContext(object) }
  static createAudioContext(object) { return tt.createAudioContext(object) }
  static onBackgroundAudioStop(object) { return tt.onBackgroundAudioStop(object) }
  static onBackgroundAudioPause(object) { return tt.onBackgroundAudioPause(object) }
  static onBackgroundAudioPlay(object) { return tt.onBackgroundAudioPlay(object) }
  static stopBackgroundAudio(object) { return tt.stopBackgroundAudio(object) }
  static seekBackgroundAudio(object) { return tt.seekBackgroundAudio(object) }
  static pauseBackgroundAudio(object) { return tt.pauseBackgroundAudio(object) }
  static playBackgroundAudio(object) { return tt.playBackgroundAudio(object) }
  static getBackgroundAudioPlayerState(object) { return tt.getBackgroundAudioPlayerState(object) }
  static getBackgroundAudioManager(object) { return tt.getBackgroundAudioManager(object) }
  static createLivePusherContext(object) { return tt.createLivePusherContext(object) }
  static startRecord(object) { return tt.startRecord(object) }
  static stopRecord(object) { return tt.stopRecord(object) }
  static getRecorderManager(object) { return tt.getRecorderManager(object) }
  //////////////// Network ///////////////
  static request(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "headers":
            object2["header"] = object[key];
            break;
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = {
          headers: res.header
        };
        for (var key in object) {
          switch (key) {
            case "status":
              result["statusCode"] = res[key];
              break;
            case "headers":
              result["header"] = res[key];
              break;
            default:
              result[key] = res[key];
              break;
          }
        }
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    }
    return tt.request(object2);
  }
   
  static httpRequest(object) { return /*tt.httpRequest(object)*/console.log("暂不支持") }
  static downloadFile(object) { 
    tt.downloadFile({
      url: object.url,
      header:object.header,
      success: object.success,
      fail: object.fail,
      complete: object.complete,
      success: (res) => {
        var apFilePath = "";
        for (var urls of res.tempFilePath) {
          apFilePath.url
        }
        var result = {
          apFilePath: apFilePath,
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(complete);
        }
      },
      fail: (res) => {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
   }
  static uploadFile(object) {
    tt.uploadFile({
      url: object.url,
      filePath: object.filePath,
      name:object.fileName,
      fileType: "image",
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  };
  //
  static connectSocket(object) { return tt.connectSocket(object) }
  static onSocketError(object) { return tt.onSocketError(object) }
  static onSocketMessage(object) { return tt.onSocketMessage(object) }
  static onSocketClose(object) { return tt.onSocketClose(object) }
  static onSocketOpen(object) { return tt.onSocketOpen(object) }
  static sendSocketMessage(object) { return tt.sendSocketMessage(object) }
  static closeSocket(object) { return tt.closeSocket(object) }
  static offLocalServiceResolveFail(object) { return tt.offLocalServiceResolveFail(object) }
  static onLocalServiceResolveFail(object) { return tt.onLocalServiceResolveFail(object) }
  static offLocalServiceDiscoveryStop(object) { return tt.offLocalServiceDiscoveryStop(object) }
  static onLocalServiceDiscoveryStop(object) { return tt.onLocalServiceDiscoveryStop(object) }
  static offLocalServiceLost(object) { return tt.offLocalServiceLost(object) }
  static onLocalServiceLost(object) { return tt.onLocalServiceLost(object) }
  static offLocalServiceFound(object) { return tt.offLocalServiceFound(object) }
  static onLocalServiceFound(object) { return tt.onLocalServiceFound(object) }
  static stopLocalServiceDiscovery(object) { return tt.stopLocalServiceDiscovery(object) }
  static startLocalServiceDiscovery(object) { return tt.startLocalServiceDiscovery(object) }
  //
  static stopLocalServiceDiscovery(object) { return tt.stopLocalServiceDiscovery(object); }
  static startLocalServiceDiscovery(object) { return tt.startLocalServiceDiscovery(object); }
  static onLocalServiceResolveFail(callback) { return tt.onLocalServiceResolveFail(callback); }
  static onLocalServiceLost(callback) { return tt.onLocalServiceLost(callback); }
  static onLocalServiceFound(callback) { return tt.onLocalServiceFound(callback); }
  static onLocalServiceDiscoveryStop(callback) { return tt.onLocalServiceDiscoveryStop(callback); }
  static offLocalServiceResolveFail(callback) { return tt.offLocalServiceResolveFail(callback); }
  static offLocalServiceLost(callback) { return tt.offLocalServiceLost(callback); }
  static offLocalServiceFound(callback) { return tt.offLocalServiceFound(callback); }
  static offLocalServiceDiscoveryStop(callback) { return tt.offLocalServiceDiscoveryStop(callback); }
  ///////// Open Interface //////////
static _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60;
  }

  static getAuthCode = function(object) {
    var that = this;
    if (!object) {
      return tt.login(object);
    }
    var object2 = {
      scopes: "auth_user"
    };
    object2.success = function(res) {
      getApp().onekitwx._login = new Date().getTime();
      getApp().onekitwx._jscode = res.code;
      var result = { authCode: res.code };
      
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(complete);
      }
      my._getUserInfo();
    }
    object2.fail = function(res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    }
    if(my._checkSession()){
      object2.success({ code: getApp().onekitwx._jscode });
    }else{
       tt.login(object2);
    }
  };
static _getUserInfo(){
    tt.getUserInfo({
      withCredentials : true,
      success(res){
        console.log(res);
        var url = getApp().onekitwx.server + "userinfo";
        var code = getApp().onekitwx._jscode;
        tt.request({
          url: url, // 目标服务器url
          header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
          method: "POST",
          data:{
            code,
            data : JSON.stringify(res)
          },
          success: (res) => {
            console.log("getUserInfo:ok",res.data);
          },fail(res){
            console.log("getUserInfo:fail",res);
          }
        });
      },fail(res){
        console.log("getUserInfo:fail",res);
      }
    });

  }
static getOpenUserInfo(object){
  tt.getUserInfo({
    withCredentials : false,
    success(data){
       console.log("getOpenUserInfo",data);
      var gender ;
      if(data.userInfo.gender == 1){
        gender = "m"
      }else if(data.userInfo.gender == 2){
        gender = "f";
      }else{
        gender = "t";
      }
      var res = {
          code : "10000",
          msg : "Success",
         avatar: data.userInfo.avatarUrl,
         city: data.userInfo.city,
         countryCode: "CN",
         gender: gender,
          nickName: data.userInfo.nickName,
         province: data.userInfo.province
      };
      var response = {
        response : res
      }
      var result = {
        response: JSON.stringify(response)
      };
      if(object.success){
        object.success(res);
      }
      if(object.complete){
        object.complete(res);
      }
    }
  });
};
  static getOpenData = function(object) {
    function success(opendata) {
      var opendata = opendata.userInfo;
      getApp().onekittt.opendata = opendata;
      for (var cb = 0; cb < getApp().onekittt.opendataCallbacks.length; cb++) {
        getApp().onekittt.opendataCallbacks[cb](opendata);
      }
      getApp().onekittt.opendataCallbacks = [];
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekittt.opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else {
        if (object.success) {
          getApp().onekittt.opendataCallbacks.push(object.success);
        }
      }
      return;
    }
    getApp().onekittt.opendata = {};
    tt.login({
      success(res) {
        var jscode = res.code;
        tt.getAuthUserInfo({
          success(res) {
            var url = getApp().onekittt.server + "opendata";
            tt.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: "POST",
              data: {
                nickname: res.nickName,
                avatarUrl: res.avatar,
                js_code: jscode
              },
              success(res) {
                success(res.data);
              }, fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    })

  };
  static getPhoneNumber(object) {
    getApp().onekitwx.getphonenumber = (data, callback) => {
      console.log(data);
          var code = getApp().onekitwx._jscode;
          var url = getApp().onekitwx.server + "phonenumber";
          wx.request({
            url: url,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            data: {
              code,
              encryptedData : data.encryptedData,
              iv : data.iv
            },
            success(res) {
             
              var result = {
                response: JSON.stringify(res.data)
              };
              if(object.success){
                object.success(result);
              }
              if(object.complete){
                object.complete(result);
              }
              callback();
            },
            fail(res) {
              console.log(res);
              if (object.fail) {
                object.fail(res);
              }
              if (object.complete) {
                object.complete(res);
              }
              callback();
            }
          })

    }
    tt.navigateTo({
      url: '/onekitwx/page/getphonenumber/getphonenumber'
    })
  };
  static navigateToMiniProgram(object) { return tt.navigateToMiniProgram(object) }
  static navigateBackMiniProgram(object) { return tt.navigateBackMiniProgram(object) }
  static getAccountInfoSync(object) { return tt.getAccountInfoSync(object) }

  static reportMonitor(object) { return tt.reportMonitor(object) }
  static reportAnalytics(object) { return tt.reportAnalytics(object) }
  static tradePay(object) {
    var trade_no = object.tradeNO;
    var url = getApp().onekitwx.server + "orderinfo";
    tt.request({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data:{
        trade_no
      },
      success(res){
        console.log(res);
        tt.pay({
          orderInfo : res.data,
          success(res){
            console.log(res);
            if(object.success){
              object.success(res);
            }
            if (object.complete){
              object.complete(res); 
            }
          }
        })
      },
      fail(res){
        if(object.fail){
          object.fail(res);
        }
        if(object.complete){
          object.complete(res);
        }
      }
    })
  };
  static authorize(object) { return tt.authorize(object) }
  static openSetting(object) { return tt.openSetting(object) }
  static getSetting(object) { return tt.getSetting(object) }
  static chooseAddress(object) { return tt.chooseAddress(object) }
  static openCard(object) {
    tt.openCardList();
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };
  static addCard = function(object) {
    var url = getApp().onekittt.server + "addcard";
    tt.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        cardList: JSON.stringify(object.cardList),
        js_code: object.jscode
      },
      success(res) {
        var data = res.data;
        if (object.success) {
          object.success(data);
        }
        if (object.complete) {
          object.complete(data);
        }
      }, fail(res) {
        console.log(res.data);
      }
    });
  }
  static chooseInvoiceTitle(object) { return tt.chooseInvoiceTitle(object) }
  static chooseInvoice(object) { return tt.chooseInvoice(object) }
  static startSoterAuthentication(object) { return tt.startSoterAuthentication(object) }
  static checkIsSupportSoterAuthentication(object) { return tt.checkIsSupportSoterAuthentication(object) }
  static checkIsSoterEnrolledInDevice(object) { return tt.checkIsSoterEnrolledInDevice(object) }
  static getWeRunData(object) { return tt.getWeRunData(object) }
  static reportMonitor(name, value) {
    var js_code = getApp().onekittt.jscode;
    tt.httpRequest({
      url: "http://192.168.0.106:8080/onekit_adapter/reportMonitor",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data: {
        js_code: js_code,
        name: name,
        number: value
      },
      success: (res) => {
        console.log("success")
        console.log(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {
        console.log(res)
      }

    });
  };
  ////////// Router //////////////
  static navigateBack(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        if (object.success) {
          object["success"](result);
        }
        if (object.complete) {
          object["complete"](result);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return tt.navigateBack(object2);
  }
  static switchTab(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.switchTab(object2);
  }
  static navigateTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.navigateTo(object2);
  }
  static reLaunch(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.reLaunch(object2);
  }
  static redirectTo(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "success":
          case "fail":
          case "complete":
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function(res) {
      if (object.success) {
        object["success"](result);
      }
      if (object.complete) {
        object["complete"](result);
      }
    }
    object2.fail = function(res) {
      if (object.fail) {
        object["success"](res);
      }
      if (object.complete) {
        object["complete"](res);
      }
    }
    return tt.redirectTo(object2);
  }
  ///////////// Share /////////////
  static updateShareMenu(object) { return tt.updateShareMenu(object) }
  static showShareMenu(object) {
    tt.navigateTo({
      url: "/my/page/share/share"
    });
  };
  static hideShareMenu(object) { return tt.hideShareMenu(object) }
  static getShareInfo(object) { return tt.getShareInfo(object) }
  /////////////// Storage //////////////
  static getStorageInfoSync(object) { return tt.getStorageInfoSync(object) }
  static getStorageInfo(object) { return tt.getStorageInfo(object) }
  static clearStorageSync(object) { tt.clearStorageSync(object); return{};}
  static clearStorage(object) { return tt.clearStorage(object) }
  static removeStorageSync(object) {tt.removeStorageSync(object.key);return{}; }
  static removeStorage(object) { return tt.removeStorage(object) }
  static setStorageSync(object) { tt.setStorageSync(object.key,object.data); return {};}
  static setStorage(object) { return tt.setStorage(object) }
  static getStorageSync(object) {return {data: tt.getStorageSync(object.key)};}
  static getStorage(object) { return tt.getStorage(object) }
  ////////////// UI ////////////////
  static showActionSheet(object) {
    var object2;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "items":
            object2["itemList"] = object[key];
            break; 
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function(res) {
        var result = { tapIndex: res.index };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      }
    }
    return tt.showActionSheet(object2);
  }
  // static redirectTo(object) { return tt.redirectTo(object) }
  // static redirectTo(object) { return tt.redirectTo(object) }
  static hideLoading(object) { return tt.hideLoading(object) }
  static showLoading(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
      }
      //
      object2 = {};
      for (var key in object) {
        switch (key) {
          case "content": 
            object2["title"] = object[key];
            break;
          case "type": 
            object2["icon"] = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return tt.showLoading(object2)
  }
  static SDKVersion(string) {return consloe.log("不支持此功能")}
  static hideToast(object) {return tt.hideToast(object)}
  static showToast(object) {
    var object2;
    if (object) {
      if (!object.icon) {
        object.icon = "success";
        object2 = {};
        for (var key in object) {
          switch (key) {
            case "content":
              object2["title"] = object[key];
              break;
            case "type":
              object2["icon"] = object[key];
              break;
            default:
              object2[key] = object[key];
              break;
          }
        }
      }
    }
    return tt.showToast(object2);
  }
  static confirm (object2) {
    if (object2 == null) {
      return tt.showModal();
    }
    if (object2.showCancel == null || object2.showCancel) {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          case "cancelButtonText": 
            object["cancelText"] = object2[key];
            break;
          case "confirmButtonText": 
            object["confirmText"] = object2[key];
            break;
          default:
            object[key] = object2[key];
            break;
        }
      }
      return tt.showModal(object);
    } else {
      var object;
      object = {};
      for (var key in object2) {
        switch (key) {
          default:
            object[key] = object2[key];
            break;
        }
      }
      return tt.showModal(object);
    }
  }
  static alert(object) {return tt.showModal(object);}
  static setNavigationBarColor(object) { return tt.setNavigationBarColor(object) }
  static hideNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return tt.hideNavigationBarLoading(object2)
  }
  static showNavigationBarLoading(object) {
    var object2 = {}
    for (key in object) {
      switch (key) {
        case "success":
        case "fail":
        case "complete":
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return tt.showNavigationBarLoading(object2)
  }
  static setBackgroundTextStyle(object) { return tt.setBackgroundTextStyle(object) }

  static setBackgroundColor(object) { return tt.setBackgroundColor(object) }
  static setTabBarItem(object) { return tt.setTabBarItem(object) }
  static setTabBarStyle(object) { return tt.setTabBarStyle(object) }
  static hideTabBar(object) { return tt.hideTabBar(object) }
  static showTabBar(object) { return tt.showTabBar(object) }
  static hideTabBarRedDot(object) { return tt.hideTabBarRedDot(object) }
  static showTabBarRedDot(object) { return tt.showTabBarRedDot(object) }
  static removeTabBarBadge(object) { return tt.removeTabBarBadge(object) }
  static setTabBarBadge(object) { return tt.setTabBarBadge(object) }

  static loadFontFace(object) { return tt.loadFontFace(object) }

  static stopPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function(res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return tt.stopPullDownRefresh(object2)
  }
  static startPullDownRefresh(object) {
    var object2 = {}
    if (object) {
      object2.success = function(res) {
        if (object.success) {
          object["success"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
      object2.fail = function(res) {
        if (object.fail) {
          object["fail"](res);
        }
        if (object.complete) {
          object["complete"](res);
        }
      }
    }
    return tt.startPullDownRefresh(object2)
  }
  static pageScrollTo(object) { return tt.pageScrollTo(object) }
  static setTopBarText(object) { return tt.setTopBarText(object) }
  static nextTick(object) { return tt.nextTick(object) }
  static getMenuButtonBoundingClientRect(object) { return tt.getMenuButtonBoundingClientRect(object) }
  static offWindowResize(object) { return tt.offWindowResize(object) }
  static onWindowResize(object) { return tt.onWindowResize(object) }
  ////////////// Worker ///////////////
  static createWorker(object) { return tt.createWorker(object) }
  ////////////// WXML ///////////////
  static createSelectorQuery(object) { return tt.createSelectorQuery(object) }
  static createIntersectionObserver(object) { return tt.createIntersectionObserver(object) }
  /////////////////////////////////////
  static hideKeyboard(object) { return tt.hideKeyboard(object) }
  ///////////// cloud ////////////////
  static get cloud() {
    return new wx_cloud();
  }
}
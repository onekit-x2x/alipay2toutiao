/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'
import CameraContext from './api/CameraContext'
import RecorderManager from './api/RecorderManager'
import VideoContext from './api/VideoContext'
import LivePlayerContext from './api/LivePlayerContext'
import MapContext from './api/MapContext'
import RewardedVideoAd from './api/RewardedVideoAd'
import OneKit from './js/OneKit'

export default class swan {
  // ///////////// version //////////////
  static canIUse(schema) {
    return tt.canIUse(schema)
  }

  // ///////////// events //////////////
  static onAppShow(callback) {
    return tt.onAppShow(callback)
  }

  static onAppHide(callback) {
    return tt.onAppHide(callback)
  }

  static onError(callback) {
    return tt.onError(callback)
  }

  static offAppShow(callback) {
    return tt.offAppShow(callback)
  }

  static offAppHide(callback) {
    return tt.offAppHide(callback)
  }

  static offError(callback) {
    return tt.offError(callback)
  }

  static onPageNotFound(callback) {
    tt.onAppShow(res => {
      if (getApp().onekit_onPageNotFound) {
        getApp().onekit_onPageNotFound(res)
      }
    })
    getApp().onekit_onPageNotFound = callback
  }

  static offPageNotFound() {
    getApp().onekit_onPageNotFound = null
  }

  // ///////////// URLQuery //////////////
  static setURLQuery(urlQuery) {
    const page = OneKit.current()
    const oldURLQuery = page.query
    const newURLQuery = oldURLQuery
    for (const key of Object.keys(urlQuery)) {
      const value = urlQuery[key]
      newURLQuery[key] = value
    }
    page.query = newURLQuery
    getApp().onekit_URLQuery = 0
  }

  static getURLQuery() {
    const page = OneKit.current()
    return page.query
  }

  static onURLQueryChange() {
    if (getApp().onekit_URLQuery === 0) {
      const swan_res = {
        errMsg: 'onURLQueryChange: ok'
      }
      return swan_res
    }
  }

  // ///////////// update //////////////
  static getUpdateManager() {
    return tt.getUpdateManager()
  }

  // ///////////// 调试 //////////////
  static setEnableDebug() {
    return console.warn('setEnableDebug is not support')
  }

  // ///////////// 路由 //////////////
  static switchTab(object) {
    return tt.switchTab(object)
  }

  static reLaunch(object) {
    return tt.reLaunch(object)
  }

  static redirectTo(object) {
    return tt.redirectTo(object)
  }

  static navigateTo(object) {
    return tt.navigateTo(object)
  }

  static navigateBack(object) {
    return tt.navigateBack(object)
  }

  // ///////////// 网络 //////////////

  // ///////////// 请求 //////////////
  static request(swan_object) {
    const swan_url = swan_object.url
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      const url = swan_url
      tt.request({
        url,
        success: tt_res => {
          const swan_res = {
            errno: '0',
            errmsg: 'success',
            logid: '000000',
            statusCode: tt_res.statusCode,
            header: tt_res.header,
            data: tt_res.data,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  // ///////////// 上传、下载 //////////////
  static uploadFile(object) {
    return tt.uploadFile(object)
  }

  static downloadFile(object) {
    return tt.downloadFile(object)
  }

  // ///////////// webSocket //////////////
  static connectSocket(object) {
    const swan_res = tt.connectSocket(object)
    getApp().onekit_SocketTask = swan_res
  }

  static sendSocketMessage(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.send(object)
    }
  }

  static closeSocket(object) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.close(object)
    }
  }

  static onSocketOpen(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onOpen(callback)
    }
  }

  static onSocketError(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onError(callback)
    }
  }

  static onSocketMessage(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onMessage(callback)
    }
  }

  static onSocketClose(callback) {
    if (getApp().onekit_SocketTask) {
      return getApp().onekit_SocketTask.onClose(callback)
    }
  }

  // ///////////// Toast //////////////
  static showToast(object) {
    return tt.showToast(object)
  }

  static showLoading(object) {
    return tt.showLoading(object)
  }

  static showModal(object) {
    return tt.showModal(object)
  }

  static showActionSheet(object) {
    return tt.showActionSheet(object)
  }

  static hideToast(object) {
    return tt.hideToast(object)
  }

  static hideLoading(object) {
    return tt.hideLoading(object)
  }

  // ///////////// NavigationBar //////////////
  static showNavigationBarLoading(object) {
    return tt.showNavigationBarLoading(object)
  }

  static setNavigationBarTitle(object) {
    return tt.setNavigationBarTitle(object)
  }

  static setNavigationBarColor(object) {
    return tt.setNavigationBarColor(object)
  }

  static hideNavigationBarLoading(object) {
    return tt.hideNavigationBarLoading(object)
  }

  // ///////////// TabBar //////////////
  static showTabBar(object) {
    return tt.showTabBar(object)
  }

  static setTabBarItem(object) {
    return tt.setTabBarItem(object)
  }

  static setTabBarStyle(object) {
    return tt.setTabBarStyle(object)
  }

  static setTabBarBadge(object) {
    return tt.setTabBarBadge(object)
  }

  static showTabBarRedDot(object) {
    return tt.showTabBarRedDot(object)
  }

  static hideTabBar(object) {
    return tt.hideTabBar(object)
  }

  static removeTabBarBadge(object) {
    return tt.setTabBarBadge(object)
  }

  static hideTabBarRedDot(object) {
    return tt.hideTabBarRedDot(object)
  }

  // ///////////// Favorite //////////////
  static showFavoriteGuide(object) {
    return tt.showFavoriteGuide(object)
  }

  // ///////////// pageScrollTo //////////////
  static pageScrollTo(object) {
    return tt.pageScrollTo(object)
  }

  // ///////////// Refresh //////////////
  static startPullDownRefresh(object) {
    return tt.startPullDownRefresh(object)
  }

  static stopPullDownRefresh(object) {
    return tt.stopPullDownRefresh(object)
  }

  // ///////////// Background //////////////
  static setBackgroundColor() {
    return console.warn('setBackgroundColor is not support')
  }

  static setBackgroundTextStyle() {
    return console.warn('setBackgroundTextStyle is not support')
  }

  // ///////////// Animation //////////////
  static createAnimation(object) {
    return tt.createAnimation(object)
  }

  // ///////////// nextTick //////////////
  static nextTick(callback) {
    return setTimeout(callback, 500)
  }

  // ///////////// menu //////////////
  static getMenuButtonBoundingClientRect() {
    return tt.getMenuButtonBoundingClientRect()
  }

  // ///////////// 节点信息 //////////////
  static createIntersectionObserver(object) {
    return tt.createIntersectionObserver(object)
  }

  static createSelectorQuery() {
    return tt.createSelectorQuery()
  }

  // ///////////// 数据储存 //////////////
  static setStorage(object) {
    return tt.setStorage(object)
  }

  static setStorageSync(key, data) {
    return tt.setStorageSync(key, data)
  }

  static getStorage(object) {
    return tt.getStorage(object)
  }

  static getStorageSync(object) {
    return tt.getStorageSync(object)
  }

  static getStorageInfo(object) {
    return tt.getStorageInfo(object)
  }

  static getStorageInfoSync() {
    return tt.getStorageInfoSync()
  }

  static removeStorage(object) {
    return tt.removeStorage(object)
  }

  static removeStorageSync(key) {
    return tt.removeStorageSync(key)
  }

  static clearStorageSync(object) {
    return tt.clearStorageSync(object)
  }

  // ///////////// 媒体 //////////////
  static previewImage(object) {
    return tt.previewImage(object)
  }

  static getImageInfo(object) {
    return tt.getImageInfo(object)
  }

  static saveImageToPhotosAlbum(object) {
    return tt.saveImageToPhotosAlbum(object)
  }

  static chooseImage(object) {
    return tt.chooseImage(object)
  }

  static chooseAlbum(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      tt.chooseImage({
        success: tt_res => {
          const tt_tempFiles = tt_res.tempFiles.map(file => ({
            path: file.path,
            size: file.size,
            type: 'image',
            duration: 0

          }))
          const swan_res = {
            tempFilePaths: tt_res.tempFilePaths,
            tempFiles: tt_tempFiles
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static compressImage(object) {
    return tt.compressImage(object)
  }

  // ///////////// camera //////////////
  static createCameraContext() {
    return new CameraContext(tt.createCameraContext())
  }

  static createARCameraContext() {
    return console.warn('createARCameraContext is not support')
  }

  // ///////////// BackgroundAudio //////////////
  static getBackgroundAudioManager() {
    return tt.getBackgroundAudioManager()
  }

  static createInnerAudioContext() {
    return tt.createInnerAudioContext()
  }

  static setInnerAudioOption() {
    return console.warn('setInnerAudioOption is not support')
  }

  // ///////////// BackgroundAudio //////////////
  static getRecorderManager() {
    return new RecorderManager(tt.getRecorderManager())
  }

  static getAvailableAudioSources() {
    return console.warn('getAvailableAudioSources is not support')
  }

  // ///////////// Video //////////////
  static chooseVideo(object) {
    return tt.chooseVideo(object)
  }

  static saveVideoToPhotosAlbum(object) {
    return tt.saveVideoToPhotosAlbum(object)
  }

  static createVideoContext(videoId) {
    return new VideoContext(tt.createVideoContext(videoId))
  }

  static createAnimationVideo() {
    return console.warn('createAnimationVideo is not support')
  }

  static createLivePlayerContext(domId) {
    return new LivePlayerContext(tt.createLivePlayerContext(domId))
  }

  static createRtcRoomContext() {
    return console.warn('createRtcRoomContext is not support')
  }

  // ///////////// location //////////////
  static getLocation(object) {
    return tt.chooseVideo(object)
  }

  static openLocation(object) {
    return tt.openLocation(object)
  }

  static chooseLocation(object) {
    return tt.chooseLocation(object)
  }

  static startLocationUpdate() {
    return console.warn('startLocationUpdate is not support')
  }

  static onLocationChange() {
    return console.warn('onLocationChange is not support')
  }

  static offLocationChange() {
    return console.warn('offLocationChange is not support')
  }

  static stopLocationUpdate() {
    return console.warn('stopLocationUpdate is not support')
  }

  static createMapContext(mapId) {
    return new MapContext(tt.createMapContext(mapId))
  }

  static createCanvasContext() {
    return console.warn('createCanvasContext is not support')
  }

  static canvasPutImageData() {
    return console.warn('canvasPutImageData is not support')
  }

  static canvasGetImageData() {
    return console.warn('canvasGetImageData is not support')
  }

  static canvasToTempFilePath() {
    return console.warn('canvasToTempFilePath is not support')
  }

  // ///////////// file //////////////
  static saveFile(object) {
    return tt.saveFile(object)
  }

  static getFileInfo(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      tt.getFileInfo({
        success: tt_res => {
          const swan_res = {
            size: tt_res.size,
            digest: ''
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static getSavedFileList(object) {
    return tt.getSavedFileList(object)
  }

  static getSavedFileInfo(swan_object) {
    const swan_filePath = swan_object.filePath
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      const filePath = swan_filePath
      tt.getFileInfo({
        filePath,
        success: tt_res => {
          const swan_res = {
            size: tt_res.size,
            createTime: new Date().getTime()
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static removeSavedFile(object) {
    return tt.removeSavedFile(object)
  }

  static openDocument(object) {
    return tt.openDocument(object)
  }

  static getFileSystemManager() {
    return tt.getFileSystemManager()
  }

  // ///////////// 设备 //////////////
  static getSystemInfo(object) {
    return tt.getSystemInfo(object)
  }

  static getSystemInfoSync() {
    return tt.getSystemInfoSync()
  }

  static getEnvInfoSync() {
    return console.warn('getEnvInfoSync is not support')
  }

  static getNetworkType(object) {
    return tt.getNetworkType(object)
  }

  static onNetworkStatusChange(callback) {
    return tt.onNetworkStatusChange(callback)
  }

  static setScreenBrightness(object) {
    return tt.setScreenBrightness(object)
  }

  static getScreenBrightness(object) {
    return tt.getScreenBrightness(object)
  }

  static setKeepScreenOn(object) {
    return tt.setKeepScreenOn(object)
  }

  static makePhoneCall(object) {
    return tt.makePhoneCall(object)
  }

  static vibrateLong(object) {
    return tt.vibrateLong(object)
  }

  static vibrateShort(object) {
    return tt.vibrateShort(object)
  }

  static setClipboardData(object) {
    return tt.vibrateShort(object)
  }

  static getClipboardData(object) {
    return tt.getClipboardData(object)
  }

  static scanCode(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      tt.scanCode({
        success: tt_res => {
          const swan_res = {
            result: tt_res.result,
            scanType: 'QR_CODE',
            charSet: 'GBK'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static onAccelerometerChange(object) {
    return tt.onAccelerometerChange(object)
  }

  static startAccelerometer(object) {
    return tt.startAccelerometer(object)
  }

  static stopAccelerometer(object) {
    return tt.stopAccelerometer(object)
  }

  static onCompassChange(object) {
    return tt.onCompassChange(object)
  }

  static startCompass(object) {
    return tt.startCompass(object)
  }

  static stopCompass(object) {
    return tt.stopCompass(object)
  }

  static onDeviceMotionChange() {
    return console.warn('onDeviceMotionChange is not support')
  }

  static startDeviceMotionListening() {
    return console.warn('startDeviceMotionListening is not support')
  }

  static stopDeviceMotionListening() {
    return console.warn('stopDeviceMotionListening is not support')
  }

  static onMemoryWarning(object) {
    return tt.onMemoryWarning(object)
  }

  static addPhoneContact() {
    return console.warn('addPhoneContact is not support')
  }

  static getBatteryInfo(object) {
    return tt.getBatteryInfo(object)
  }

  static getBatteryInfoSync(object) {
    return tt.getBatteryInfoSync(object)
  }

  static onUserCaptureScreen(callback) {
    return tt.onUserCaptureScreen(callback)
  }

  static addEventOnCalendar() {
    return console.warn('addEventOnCalendar is not support')
  }

  static deleteEventOnCalendar() {
    return console.warn('deleteEventOnCalendar is not support')
  }

  static onKeyboardHeightChange() {
    return console.warn('onKeyboardHeightChange is not support')
  }

  static offKeyboardHeightChange() {
    return console.warn('offKeyboardHeightChange is not support')
  }

  // ///////////// 第三方平台 //////////////
  static getExtConfig(object) {
    return tt.getExtConfig(object)
  }

  static getExtConfigSync(object) {
    return tt.getExtConfigSync(object)
  }

  // ///////////// 开放接口 //////////////
  static login(object) {
    return tt.login(object)
  }

  static checkSession(object) {
    return tt.checkSession(object)
  }

  static isLoginSync() {
    if (tt.login()) {
      const swan_res1 = {
        isLogin: true
      }
      return swan_res1
    } else {
      const swan_res2 = {
        isLogin: false
      }
      return swan_res2
    }
  }

  static authorize(object) {
    return tt.authorize(object)
  }

  static openSetting(object) {
    return tt.openSetting(object)
  }

  static getSetting(object) {
    return tt.getSetting(object)
  }

  // static requestPolymerPayment(object) {
  //   return tt.pay(object)
  // }

  static setPageInfo() {
    return console.warn('setPageInfo is not support')
  }

  static setMetaDescription() {
    return console.warn('setMetaDescription is not support')
  }

  static setMetaKeywords() {
    return console.warn('setMetaKeywords is not support')
  }

  static setDocumentTitle() {
    return console.warn('setDocumentTitle is not support')
  }

  static loadSubPackage(swan_object) {
    const swan_root = swan_object.root
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      const name = swan_root
      tt.loadSubPackage({
        name,
        success: () => {
          const swan_res = {
            errMsg: 'loadSubPackage: ok'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static reportAnalytics(eventName, data) {
    return tt.reportAnalytics(eventName, data)
  }

  static getSystemRiskInfo() {
    return console.warn('getSystemRiskInfo is not support')
  }

  static subscribeService(swan_object) {
    const swan_templateId = swan_object.templateId
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      const tmplIds = [swan_templateId]
      tt.requestSubscribeMessage({
        tmplIds,
        success: () => {
          const swan_res = {
            errMsg: 'requestSubscribeMessage: ok',
            TEMPLATE_ID: 'accept'
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static insertBookshelf() {
    return console.warn('insertBookshelf is not support')
  }

  static deleteBookshelf() {
    return console.warn('deleteBookshelf is not support')
  }

  static queryBookshelf() {
    return console.warn('queryBookshelf is not support')
  }

  static updateBookshelfReadTime() {
    return console.warn('updateBookshelfReadTime is not support')
  }

  static navigateToBookshelf() {
    return console.warn('navigateToBookshelf is not support')
  }

  static openBdboxWebview() {
    return tt.openAwemeUserProfile()
  }

  // ///////////// 用户接口 //////////////
  static getSwanId() {
    return console.warn('getSwanId is not support')
  }

  // static getUserInfo(object) {
  //   return tt.getUserInfo(object)
  // }

  static openShare() {
    return console.warn('openShare is not support')
  }

  static shareFile() {
    return console.warn('shareFile is not support')
  }

  static navigateToSmartProgram() {
    return console.warn('navigateToSmartProgram is not support')
  }

  static navigateBackSmartProgram() {
    return console.warn('navigateBackSmartProgram is not support')
  }

  static chooseAddress(swan_object) {
    const swan_success = swan_object.success
    const swan_fail = swan_object.fail
    const swan_complete = swan_object.complete
    swan_object = null
    PROMISE((SUCCESS) => {
      tt.chooseAddress({
        success: (tt_res) => {
          const swan_res = {
            postalCode: '',
            provinceCode: '',
            cityCode: '',
            countyCode: '',
            townCode: '',
            nationalCode: '',
            userName: tt_res.userName,
            provinceName: tt_res.provinceName,
            cityName: tt_res.cityName,
            countyName: tt_res.countyName,
            detailInfo: tt_res.detailInfo,
            telNumber: tt_res.telNumber,
          }
          SUCCESS(swan_res)
        }
      })
    }, swan_success, swan_fail, swan_complete)
  }

  static chooseInvoiceTitle() {
    return console.warn('chooseInvoiceTitle is not support')
  }

  static openCommunityEditor() {
    return console.warn('openCommunityEditor is not support')
  }

  static closeCommunityEditor() {
    return console.warn('closeCommunityEditor is not support')
  }

  static openReplyEditor() {
    return console.warn('openReplyEditor is not support')
  }

  static closeReplyEditor() {
    return console.warn('closeReplyEditor is not support')
  }

  // ///////////// RewardedVideoAd //////////////
  static createRewardedVideoAd(swan_object) {
    const tt_object = {
      adUnitId: swan_object.adUnitId
    }
    return new RewardedVideoAd(tt.createRewardedVideoAd(tt_object))
  }
}

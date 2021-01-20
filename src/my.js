/* eslint-disable no-undef */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

export default class my {
  // ////////////////////  基础  ///////////////////////////

  static canIUse(schema) {
    return tt.canIUse(schema)
  }

  static getAppIdSync() {
    const tt_res = tt.getLaunchOptionsSync()
    const my_res = {
      appid: tt_res.referrerInfo.appId
    }
    return my_res
  }

  static getLaunchOptionsSync() {
    const tt_res = tt.getLaunchOptionsSync()
    const my_referrerInfo = tt_res.referrerInfo.map(refer => ({
      appId: refer.appId,
      sourceServiceId: '',
      extraData: refer.extraData,
    }))
    const my_res = {
      query: tt_res.query,
      scene: tt_res.scene,
      path: tt_res.path,
      referrerInfo: my_referrerInfo,
    }
    return my_res
  }

  static getRunScene() {
    const my_res = {
      envVersion: 'develop'
    }
    return my_res
  }

  static SDKVersion(my_object) {
    const my_success = my_object.success
    const my_fail = my_object.fail
    const my_complete = my_object.complete
    my_object = null
    PROMISE((SUCCESS) => {
      tt.getSystemInfo({
        success: tt_res => {
          const my_res = {
            SDKVersion: tt_res.SDKVersion
          }
          SUCCESS(my_res)
        }
      })
    }, my_success, my_fail, my_complete)
  }

  // ////////////////////  应用级事件  ///////////////////////////

  static get env() {
    const my_res = {
      USER_DATA_PATH: 'https://usr'
    }
    return my_res
  }

  static offAppHide(callback) {
    return tt.offAppHide(callback)
  }

  static offAppShow(callback) {
    return tt.offAppShow(callback)
  }

  static offComponentError() {
    getApp().onekit_ComponentError = false
  }

  static offError(callback) {
    return tt.offError(callback)
  }

  static offUnhandledRejection() {
    getApp().onekit_UnhandledRejection = false
  }

  static onAppHide(callback) {
    return tt.onAppHide(callback)
  }

  static onAppShow(callback) {
    tt.onAppShow(tt_res => {
      const my_res = {
        query: tt_res.query,
        scene: tt_res.scene
      }
      callback(my_res)
    })
  }

  static onComponentError() {
    getApp().onekit_ComponentError = true
  }

  static onError(callback) {
    return tt.onError(callback)
  }

  static onUnhandledRejection() {
    getApp().onekit_UnhandledRejection = false
  }
}

/* eslint-disable max-len */
/* eslint-disable camelcase */

const bd_USER_FOLDER = 'bdfile://store/'
const tt_USER_FOLDER = `${tt.env.USER_DATA_PATH}/`

function current() {
  const pages = getCurrentPages()
  if (pages.length === 0) {
    return {}
  }
  return pages[pages.length - 1]
}

function currentUrl() {
  return current().route
}

function new_bd_filePath(ext) {
  const randomString = Math.floor(Math.random() * (1 - 10000000) + 10000000)
  const bd_filePath = `${bd_USER_FOLDER}${randomString}${ext}`
  return bd_filePath
}

function bd_filePath2tt_filePath(bd_filePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().bdSavePath2ttStorePath) {
    return bd_filePath
  }
  // eslint-disable-next-line no-undef
  const tt_storePath = getApp().bdSavePath2ttStorePath[bd_filePath]
  if (tt_storePath) {
    return tt_storePath
  } else {
    const tt_filePath = bd_filePath.replace(bd_USER_FOLDER, tt_USER_FOLDER)
    return tt_filePath
  }
}

function save_tt_storePath(bd_filePath, tt_storePath) {
  // eslint-disable-next-line no-undef
  if (!getApp().bdSavePath2ttStorePath) {
    // eslint-disable-next-line no-undef
    getApp().bdSavePath2ttStorePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().bdSavePath2ttStorePath[bd_filePath] = tt_storePath
  // ///////////////////////
  // eslint-disable-next-line no-undef
  if (!getApp().ttStorePath2bdSavePath) {
    // eslint-disable-next-line no-undef
    getApp().ttStorePath2bdSavePath = {}
  }
  // eslint-disable-next-line no-undef
  getApp().ttStorePath2bdSavePath[tt_storePath] = bd_filePath
}
module.exports = {
  current,
  currentUrl,
  save_tt_storePath,
  new_bd_filePath,
  bd_filePath2tt_filePath
}

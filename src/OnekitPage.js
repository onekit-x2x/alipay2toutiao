/* eslint-disable no-console */
/* eslint-disable camelcase */
export default function OnekitPage(my_object) {
  const tt_object = {
    getData(key) {
      return this.data[key]
    }
  }
  for (const key of Object.keys(my_object)) {
    switch (key) {
      case 'onLoad':
        tt_object.onLoad = function (query) {
          this.query = query
          my_object.onLoad.call(this, query)
        }
        break
      default:
        tt_object[key] = my_object[key]
        break
    }
  }

  return Page(tt_object)
}

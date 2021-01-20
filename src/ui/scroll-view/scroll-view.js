
Component({

  data: {

  },
  properties: {
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false,
    },
    upperThreshold: {
      // eslint-disable-next-line no-bitwise
      type: Number | String,
      value: '50',
    },
    lowerThreshold: {
      // eslint-disable-next-line no-bitwise
      type: Number | String,
      value: '50',
    },
    scrollTop: {
      // eslint-disable-next-line no-bitwise
      type: Number | String,
      value: '',
    },
    scrollLeft: {
      // eslint-disable-next-line no-bitwise
      type: Number | String,
      value: '',
    },
    scrollIntoView: {
      type: String,
      value: '',
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false,
    },
    enableBackToTop: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    on_toupper(e) {
      this.triggerEvent('scrolltoupper', e)
    },
    on_tolower(e) {
      this.triggerEvent('scrolltolower', e)
    },
    on_scroll(e) {
      this.triggerEvent('scroll', e)
    }
  }
})

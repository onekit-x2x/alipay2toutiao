// onekit/ui/scroll-view/scroll-view.js
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
            type: Number | String,
            value: '50',
        },
        lowerThreshold: {
            type: Number | String,
            value: '50',
        },
        scrollTop: {
            type: Number | String,
            value: "",
        },
        scrollLeft: {
            type: Number | String,
            value: "",
        },
        scrollIntoView: {
            type: String,
            value: "",
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
            this.triggerEvent('scrolltoupper', {})
        },
        on_tolower(e) {
            this.triggerEvent('scrolltolower', {})
        },
        on_scroll(e) {
            this.triggerEvent('scroll', {})
        }
  }
})
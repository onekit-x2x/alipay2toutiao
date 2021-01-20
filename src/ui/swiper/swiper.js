// onekit/ui/swiper/swiper.js
Component({

  data: {

  },
  properties: {
    indicatorDots: {
      type: Boolean,
      value: false
    },
    indicatorColor: {
      type: String,
      value: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      value: '#000'
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    current: {
      type: Number,
      value: 0
    },
    duration: {
      type: Number,
      value: 500
    },
    interval: {
      type: Number,
      value: 5000
    },
    circular: {
      type: Boolean,
      value: false
    },
    vertical: {
      type: Boolean,
      value: false
    },
    previousMargin: {
      type: String,
      value: '0px'
    },
    nextMargin: {
      type: String,
      value: '0px'
    },
    activeClass: {
      type: String,
      value: ''
    },
    changingClass: {
      type: String,
      value: ''
    },
    acceleration: {
      type: Boolean,
      value: false
    },
    disableProgrammaticAnimation: {
      type: Boolean,
      value: false
    },
    disableTouch: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    swiper_change(e) {
      this.triggerEvent('change', e.detail)
    },
    swiper_transition(e) {
      this.triggerEvent('Transition', e)
    },
    swiper_AnimationEnd(e) {
      this.triggerEvent('animationfinish', e.detail)
    }
  }
})

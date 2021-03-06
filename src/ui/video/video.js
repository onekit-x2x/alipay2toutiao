/* eslint-disable no-console */
Component({
  data: {

  },

  properties: {
    src: {
      type: String,
      value: '',
    },
    controls: {
      type: Boolean,
      value: true,
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    loop: {
      type: Boolean,
      value: false,
    },
    showFullscreenBtn: {
      type: Boolean,
      value: true,
    },


    initialTime: {
      type: Number,
      value: '',
    },
    showPlayBtn: {
      type: Boolean,
      value: true,
    },
    objectFit: {
      type: String,
      value: 'contain',
    },

    mute: {
      type: Boolean,
      value: false,
    },

    direction: {
      type: Number,
      value: '',
    },
    poster: {
      type: String,
      value: '',
    },


  },
  methods: {
    video_play(e) {
      console.log('video_play', e)
      this.triggerEvent('play', e.details)
    },
    video_pause(e) {
      console.log('video_pause', e)
      this.triggerEvent('pause', e.details)
    },
    video_ended(e) {
      console.log('video_ended', e)
      this.triggerEvent('ended', e.details)
    },
    video_timeupdate(e) {
      console.log('video_timeupdate', e)
      this.triggerEvent('timeupdate', e.details)
    },
    video_fullscreenchange(e) {
      console.log('video_fullscreenchange', e)
      this.triggerEvent('fullscreenchange', e.details)
    },
    video_error(e) {
      console.log('video_error', e)
      this.triggerEvent('error', e.details)
    },

  }
})

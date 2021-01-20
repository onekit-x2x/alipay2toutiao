// onekit/ui/progress/progress.js
Component({
  data: {

  },
  properties: {
    percent: {
      type: Number,
      // observer(newVal, oldVal, changedPath) {
      //   const that = this
      //   setTimeout(() => {
      //     that.triggerEvent('activeend')
      //   }, 1000)
      // }
    },
    showInfo: {
      type: Boolean,
      value: false
    },
    strokeWidth: {
      type: Number,
      value: 2
    },
    activeColor: {
      type: String,
      value: '#09BB07'
    },
    backgroundColor: {
      type: String,
      value: '#EBEBEB'
    },
    active: {
      type: Boolean,
      value: false

    }
  },
  methods: {

  }
})

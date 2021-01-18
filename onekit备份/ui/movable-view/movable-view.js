// onekit/ui/movable-view/movable-view.js
Component({
  
  data: {

  },
  properties: {
    direction: {
      type: String,
      value: 'none'
    },
    inertia: {
      type: Boolean,
      value: false
    },
    outOfBounds: {
      type: Boolean,
      value: false
    },
    x: {
      type: Number,
      value: 0
    },
    y: {
      type: Number,
      value: 0
    },
    damping: {
      type: Number,
      value: 20
    },
    friction: {
      type: Number,
      value: 2
    },
    disabled: {
      type: Boolean,
      value: false
    },
    scale: {
      type: Boolean,
      value: false
    },
    scaleMin: {
      type: Number,
      value: 0.5
    },
    scaleMax: {
      type: Number,
      value: 10
    },
    scaleValue: {
      type: Number,
      value: 1
    },
    animation: {
      type: Boolean,
      value: true
    }
  },
  methods: {

  }
})
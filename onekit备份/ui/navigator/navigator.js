import my from "../../my"
Component({
  properties: {

    // 当前小程序内的跳转链接
    url: {
      type: String,
    },
    redirect: {
      type: Boolean
    },
    // 跳转方式
    openType: {
      type: String,
      value: "navigate",
    },
    // 当 open-type 为 'navigateBack' 时有效，表示回退的层数

    //当target="miniProgram"时有效，要打开的小程序 appId

    hoverClass: {
      type: String
    },
    hoverStartTime: {
      type: Number,
      value: 50,
    },
    hoverStayTime: {
      type: Number,
      value: 600,
    },



    // 这里定义了 headerText 属性，属性值可以在组件使用时指定
    headerText: {
      type: String,
      value: "默认值",
    },
  },
  data: {
    // 组件内部数据
    defaultStates: {}
  },
  methods: {

  }



})

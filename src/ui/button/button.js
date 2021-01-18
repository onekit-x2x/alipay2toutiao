
Component({
  mixins: [],
  properties: {
    size: {
      type: String,
      value: 'default'
    },
    type: {
      type: String,
      value: 'default'
    },
    plain: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: 'buttonclick'
    },
    openType: {
      type: String
    },
    hoverClass: {
      type: String,
      value: 'button-hover'
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
  },
  data: {
    type: 'primary',
    hideContact: true
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  props: {},
  methods: {
    contactBG_tap() {
      this.setData({hideContact: true})
    },
    button_onTap(e) {
      const that = this
      if (this.props.openType) {
        switch (this.props.openType) {
          case 'contact':
            this.setData({hideContact: false})
            break
          case 'share':
            tt.showShareMenu({
              success() {

              }
            })
            break
          case 'getUserInfo':
            if (that.props.onGetuserinfo) {
              tt.getUserInfo({
                success(res) {
                  e.detail = res
                  that.props.onGetuserinfo(e)
                }
              })
            }
            break
          case 'getPhoneNumber':
            if (that.props.onGetphonenumber) {
              tt.getPhoneNumber({
                success(res) {
                  e.detail = res
                  that.props.onGetphonenumber(e)
                }
              })
            }
            break
          case 'launchApp':
            break
          case 'openSetting':
            /* my.navigateTo({
              url:"/onekit/page/setting/setting"
            }); */
            tt.openSetting({

            })
            break
          case 'feedback':
            break
          default:
            break
        }
      }
      if (this.props.onTap) { this.props.onTap(e) }
    },
  },
})

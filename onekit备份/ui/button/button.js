import my from "../../../onekit/my"
Component({
  attached() { 
    // var openType;
    // var scope;
    // switch(this.props.openType){
    //   default:openType=openType;
    // }
    // this.setData({openType,scope});
  },
  detached() { },
  properties: { 
    size: { type: String, value:"default"},
    type: { type: String, value: "default" },
    plain: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    loading: { type: Boolean, value: false },
    "hover-class": { type: String, value: "button-hover"},
    "hover-start-time": { type: Boolean, value: 20 },
    "hover-stay-time": { type: Number, value: 70 },
    "hover-stop-propagation": { type: Boolean, value: false },
    "form-type": { type: String, value: '' },
    "open-type": { type: String, value: '' },
    scope: { type: String, value: '' },
    "app-parameter": { type: String, value: '' },
    "public-id": { type: String, value: '' },
    xx:String
    },
  methods: {   
    button_onTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "contact":
            break;
          case "share":
            break;
          case "launchApp":
            break;
          case "openSetting":
            break;
          case "feedback":
            break;
          default:
          throw new Error(this.props.openType);
        }
      }
      this.props.onTap(e); 
    },
  },
});

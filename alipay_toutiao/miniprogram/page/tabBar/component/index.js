import my from "../../../onekit/my"
const basicContainers = [
  {
    name: '基础视图',
    thumb: '/image/icon/view.png',
    nameEn: 'View',
    path: '/page/component/view/view',
  },
  {
    name: '滚动视图',
    thumb: '/image/icon/scroll-view.png',
    nameEn: 'ScrollView',
    path: '/page/component/scroll-view/scroll-view',
  },
  {
    name: '滑动视图',
    thumb: '/image/icon/swiper.png',
    nameEn: 'Swiper',
    path: '/page/component/swiper/swiper',
  },
  {
    name: '可移动视图',
    thumb: '/image/icon/movable-view.png',
    nameEn: 'MovableView',
    path: '/page/component/movable-view/movable-view',
  },
  {
    name: '原生视图',
    thumb: '/image/icon/cover-view.png',
    nameEn: 'CoverView',
    path: '/page/component/cover-view/cover-view',
  },
];

const basicBasics = [
  {
    name: '文字',
    thumb: '/image/icon/text.png',
    nameEn: 'Text',
    path: '/page/component/text/text',
  },
  {
    name: '图标',
    thumb: '/image/icon/icon.png',
    nameEn: 'Icon',
    path: '/page/component/icon/icon',
  },
  {
    name: '富文本',
    thumb: '/image/icon/form.png',
    nameEn: 'RichText',
    path: '/page/component/rich-text/rich-text',
  },
];

const basicFeedBacks = [
  {
    name: '进度条',
    thumb: '/image/icon/progress.png',
    nameEn: 'Progress',
    path: '/page/component/progress/progress',
  },
];

const basicForms = [
  {
    name: '按钮',
    thumb: '/image/icon/button.png',
    nameEn: 'Button',
    path: '/page/component/button/button',
  },
  {
    name: '表单',
    thumb: '/image/icon/form.png',
    nameEn: 'Form',
    path: '/page/component/form/form',
  },
  {
    name: '标签',
    thumb: '/image/icon/label.png',
    nameEn: 'Label',
    path: '/page/component/label/label',
  },
  {
    name: '输入框',
    thumb: '/image/icon/input.png',
    nameEn: 'Input',
    path: '/page/component/input/input',
  },
  {
    name: '多行输入框',
    thumb: '/image/icon/textarea.png',
    nameEn: 'Textarea',
    path: '/page/component/textarea/textarea',
  },
  {
    name: '单选框',
    thumb: '/image/icon/radio.png',
    nameEn: 'Radio',
    path: '/page/component/radio/radio',
  },
  {
    name: '复选框',
    thumb: '/image/icon/checkbox.png',
    nameEn: 'Checkbox',
    path: '/page/component/checkbox/checkbox',
  },
  {
    name: '开关',
    thumb: '/image/icon/switch.png',
    nameEn: 'Switch',
    path: '/page/component/switch/switch',
  },
  {
    name: '滑动条',
    thumb: '/image/icon/slider.png',
    nameEn: 'Slider',
    path: '/page/component/slider/slider',
  },
  {
    name: '选择器视图',
    thumb: '/image/icon/picker-view.png',
    nameEn: 'PickerView',
    path: '/page/component/picker-view/picker-view',
  },
  {
    name: '选择器',
    thumb: '/image/icon/picker.png',
    nameEn: 'Picker',
    path: '/page/component/picker/picker',
  },
];

const basicNavigators = [
  {
    name: '导航',
    thumb: '/image/icon/navigator.png',
    nameEn: 'Navigator',
    path: '/page/component/navigator/navigator',
  },
];

const basicMedias = [
  {
    name: '图片',
    thumb: '/image/icon/image.png',
    nameEn: 'Image',
    path: '/page/component/image/image',
  },
];

const basicMaps = [
  {
    name: '地图',
    thumb: '/image/icon/map.png',
    nameEn: 'Map',
    path: '/page/component/map/map',
  }
];

const basicCanvas = [
  {
    name: '画布',
    thumb: '/image/icon/canvas.png',
    nameEn: 'Canvas',
    path: '/page/component/canvas/canvas',
  }
];

const basicOpens = [
  {
    name: '内嵌webview',
    thumb: '/image/icon/webview.png',
    nameEn: 'Webview',
    path: '/page/component/webview/webview',
  },
  {
    name: '跳转生活号',
    thumb: '/image/icon/lifestyle.png',
    nameEn: 'Lifestyle',
    path: '/page/component/lifestyle/lifestyle',
  },
  {
    name: '跳转云客服',
    thumb: '/image/icon/contact-button.png',
    nameEn: 'contact-button',
    path: '/page/component/contact-button/contact-button',
  },
  {
    name: '收藏',
    thumb: '/image/icon/favorite.png',
    nameEn: 'Favorite',
    path: '/page/component/favorite/favorite',
  },
];


let basicComponentList = [
  {
    type: '视图容器',
    list: basicContainers,
  },
  {
    type: '基础组件',
    list: basicBasics,
  },
  {
    type: '反馈',
    list: basicFeedBacks,
  },
  {
    type: '表单',
    list: basicForms,
  },
  {
    type: '导航',
    list: basicNavigators,
  },
  {
    type: '媒体',
    list: basicMedias,
  },
  {
    type: '画布',
    list: basicCanvas,
  },
];


  basicComponentList = basicComponentList.concat([
    {
      type: '地图',
      list: basicMaps,
    },
    {
      type: '开放组件',
      list: basicOpens,
    },
  ]);

Page({
  data: {
    top: 0,
    tabs: ['基础组件'],
    activeTab: 0, 
    basicComponentList,
    titleOpacity: 1,
    shadow: false,
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    let titleOpacity = 1 - scrollTop * 0.02;
    let shadow = false;

    if (titleOpacity < 0) {
      titleOpacity = 0;
    }

    if (titleOpacity > 1) {
      titleOpacity = 1;
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '小程序官方示例',
      });
    } else {
      my.setNavigationBar({
        title: ' ',
      });
    }

    if (scrollTop > 320) {
      shadow = true;
    } else {
      shadow = false;
    }

    this.setData({
      shadow,
      titleOpacity,
    });
  },
  onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search',
    });
  },
  onTabBarTap(e) {
    const { index } = e.target.dataset
    this.setData({
      activeTab: index,
    });
  },
  onLoad() {
    my.getSystemInfo({
      success: (res) => {
        if (res.statusBarHeight && res.titleBarHeight) {
          this.setData({
            top: res.statusBarHeight + res.titleBarHeight,
          });
        }
      },
    });
  },
});

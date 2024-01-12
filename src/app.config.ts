export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/calculator/index'
  ],
  lazyCodeLoading: "requiredComponents",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})

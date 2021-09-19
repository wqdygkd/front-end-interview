// 和图标/图片等静态资源相关的，第一个 '/' 默认指向的是 docs/.vuepress/public/
// 侧边栏/导航栏链接的markdown文件，第一个 '/' 默认指向的是 docs/，我们这里是都放置在docs/pages里
// 嵌入在markdown中使用的Vue组件，放置在docs/.vuepress/components目录中

module.exports = {
  title: '稻草人', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '稻草人', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/egg.png' }], // 浏览器的标签栏的网页图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },

  plugins: [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],

  markdown: {
    lineNumbers: false
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/egg.png',
    lastUpdated: 'lastUpdate',
    //顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/cuilongjin' }
    ],
    // 侧边导航栏
    sidebar: {
      '/pages/': [
        ['前端面试资源汇总.md', '前端面试资源汇总'],
        ['h5c3.md', 'h5c3'],
        ['js.md', 'js'],
        ['es6.md', 'es6'],
        ['jquery.md', 'jquery'],
        ['vue.md', 'vue'],
        ['性能优化.md', '性能优化'],
        ['兼容性问题.md', '兼容性问题'],
        ['浏览器-网络-缓存.md', '浏览器-网络-缓存'],
        ['手写题.md', '手写题'],
        ['开放问题.md', '开放问题']
      ]
    },

    search: true,
    searchMaxSuggestions: 10,
    author: 'c',
    authorAvatar: '/avatar.png',
    startYear: '2017'
  }
}

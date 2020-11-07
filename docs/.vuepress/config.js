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
      // {
      //     text: '分类',
      //     ariaLabel: '分类',
      //     items: [
      //         { text: '文章', link: '/pages/folder1/test1.md' },
      //         { text: '琐碎', link: '/pages/folder2/test4.md' },
      //     ]
      // },
      // { text: '功能演示', link: '/pages/folder1/test3.md' },
      { text: 'Github', link: 'https://github.com/cuilongjin' }
    ],
    // 侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      // '/pages/': [
      //   {
      //     title: 'xx', // 必要的 一级菜单名称
      //     collapsable: true, // 可选的, 默认值是 true,  false为默认展开菜单, 默认值true是折叠,
      //     sidebarDepth: 1, // 可选的, 默认值是 1 ,设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
      //     children: [
      //       ['前端面试资源汇总.md', '前端面试资源汇总'],
      //       ['h5c3.md', 'h5c3'], // 菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
      //       ['js.md', 'js'],
      //       ['es6.md', 'es6'],
      //       ['jquery.md', 'jquery'],
      //       ['vue.md', 'vue'],
      //       ['性能优化.md', '性能优化'],
      //       ['兼容性问题.md', '兼容性问题'],
      //       ['浏览器-网络-缓存.md', '浏览器-网络-缓存'],
      //       ['手写题.md', '手写题'],
      //       ['开放问题.md', '开放问题']
      //     ]
      //   }
      // ],

      '/pages/': [
        ['前端面试资源汇总.md', '前端面试资源汇总'],
        ['h5c3.md', 'h5c3'], // 菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
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

    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 作者
    author: 'cuilongjin',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2017'
  }
}

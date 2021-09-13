> vue 与 vuex

## vue 优缺点

使用的是 MVVM 模式 渐进式 js 框架 数据双向绑定思想 数据驱动视图 轻量 简洁

## 对 vue 不同构建版本的解释

- **完整版**：同时包含编译器和运行时的版本。
- **编译器**：用来将模板字符串编译成为 js 渲染函数的代码
- **运行时**：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切。
- **UMD**：UMD 版本可以通过 `<script>` 标签直接用在浏览器中
- **CommonJS**：CommonJS 版本用来配合老的打包工具
- **ES Module**：从 2.6 开始 Vue 会提供两个 ES Modules (ESM) 构建文件

## vue 的生命周期有哪些，作用是什么？ 分别什么阶段执行。在每个周期你会写哪些东西。

beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed

注意点：除了这8个之外，还有哪些生命周期

## Vue中组件生命周期调用顺序说一下

组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted

子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated

父组件更新过程
父 beforeUpdate -> 父 updated

销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

## 如果想在 beforeMount 中获取 dom，有什么方法?

`$nexttick`

> 为什么在 `$nexttick` 中可以获取到 dom

## vue 怎么实现双向数据绑定

vue 数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。其实主要是用了 Es5 中的 `Object.defineProperty` 来劫持每个属性的 getter 和 setter。这也正是 Vue 不兼容 IE8 以下的原因。

v-model 原理（语法糖），更深入的理解

`Object.defineProperty` 可以用来监听数组吗？
vue 是如何实现对数组的监听?

## 数组更新检测，vue 中对数组的监听是怎么处理的

变异方法：Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新

push()、pop()、shift()、unshift()、splice()、sort()、reverse()

替换数组：`filter()`、`concat()`

## 组件通信

同级组件之间、父组件与更深层子组件之间的数据通信

**子传父**

父组件给子组件传递一个函数，由子组件调用这个函数，借助 vue 中的自定义事件

**父传子**

将要传递的数据，通过属性传递给子组件，子组件通过 `props` 配置项来指定要接收的数据

**非父子之间**

通过 `事件总线 (event bus 公交车) 机制` 来实现的，子组件用 `$emit()`来触发事件，父组件用 `$on()`来监昕子组件的事件。

## 组件之间实现双向数据绑定

.sync 修饰符

## Vue中 .sync 和 v-model 的区别

## 路由拦截

主要是利用 vue-router 提供的钩子函数 beforeEach() 对路由进行判断 - 导航守卫 - 全局前置守卫

```js
router.beforeEach((to, from, next) => {
  // ...
})
```

- to: Route: 即将要进入的目标

- from: Route: 当前导航正要离开的路由

- next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

- next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

- next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。

- next(‘/’) 或者 next({ path: ‘/’ }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

## vue 路由传参

`_vue/vue?id=路由参数`

- vue 路由传参方式，说明区别和应用场景

[编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html#%E7%BC%96%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%AF%BC%E8%88%AA)

params 和 queery

params 要用 name 来引入，query 要用 path 来引入

query 类似于 ajax 中 get 传参，params 类似于 post

```js
const userId = '123'
// 字符串
router.push('/user') // -> /user

// 对象, path为路由的path属性值
router.push({ path: '/user' }) // -> /user
router.push({ path: `/user/${userId}` }) // -> /user/123

// 命名的路由，name为路由的name属性值
router.push({ name: 'user', params: { userId }}) // -> /user/123
// 如果提供了 path，params 会被忽略
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user

// 带查询参数
router.push({ path: 'register', query: { plan: 'private' }}) // -> /register?plan=private

routes: [{ path: '/user/:id?', name='user', component: User }]
```

## vue 中 ref

给元素或子组件注册引用信息，引用信息将会注册在父组件的 `$refs`对象上

在 Vue 中直接操作 DOM 元素

## 首屏加载优化和算法

## vue 中 `$set`

如果在实例创建之后添加新的属性到实例上，它不会触发视图更新

Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它

Vue 不允许在已经创建的实例上动态添加新的根级响应式属性，可以使用 `Vue.set(object, key, value)` 方法将响应属性添加到嵌套的对象上，或者创建一个包含原对象属性和新属性的对象替换掉原对象

## `keep-alive`

组件之间切换的时候，保持这些组件的状态，以避免反复重渲染导致的性能问题

用一个 `<keep-alive>` 元素将其动态组件包裹起来

## vue-loader

解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理

## vue 中 key 属性作用

官方文档中说：

> 当 Vue.js 用`v-for`正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

没有`key`属性，Vue 无法跟踪每个节点

key的作用是尽可能的复用 DOM 元素

## key 的作用，可以使用 index 吗，使用 index 会有什么问题

## prop 类型

给每个 prop 指定的值类型。这时，你可以以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型：

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object
}

props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

## nextTick 实现原理是什么？

在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

Promise
MutationObserver
setImmediate
如果以上都不行则采用setTimeout

定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

## Computed和Watch

Computed 有缓存
Watch没有缓存性 deep: true 深度监听，这样便会对对象中的每一项进行监听。优化的话可以使用字符串形式监听

## 为什么要使用虚拟 DOM

JS操作真实DOM的代价比较高

## vue3 新特性

基于 Proxy 的观察者机制
重写虚拟 Dom
更好的支持 ts
新工具 vite

## 做过哪些 webpack 配置

配置 proxy 跨域
配置 externals
配置别名
添加打包分析插件 BundleAnalyzerPlugin

chainWebpack

```js
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

// cdn
const cdn = {
  css: [],
  js: [
    'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
  ]
}

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')

    // 生产环境配置
    if (isProduction) {
      // 生产环境注入cdn ， 还需要修改index.html
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
    }
  },

  configureWebpack: config => {
    // 配置 externals
    // 键：表示 导入包语法 from 后面跟着的名称
    // 值：表示 script 引入JS文件时，在全局环境中的变量名称
    config.externals = {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    }

    // UglifyJsPlugin
    // 去掉 console.log  drop_console: true,

    // 开启gzip压缩
    // compression-webpack-plugin

  },

  css: {
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // 引入全局变量样式,@使我们设置的别名,执行src目录
        data: ` @import "@/stylePath/theme.scss"; `
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://yd.msword.top', // 代理的目标服务器地址   用‘/api'代替target里面的地址
        // https请求需要该设置
        secure: false,
        ws: true, // 代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  }
}
```

index.html 修改

```html
  <!-- 使用CDN的CSS文件 -->
  <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style">
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet">
  <% } %>
  <!-- 使用CDN的JS文件 -->
  <% for (var i in htmlWebpackPlugin.options.cdn && htmlWebpackPlugin.options.cdn.js) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.js[i] %>" rel="preload" as="script">
  <% } %>
```

## vue 自定义指令

全局
```js
Vue.directive('color', {
  // 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次初始化设置；
  bind (el, binding) {
    console.log(binding)
    el.style.background = binding.value
  },
  // 被绑定元素插入父节点时调用；
  inserted () {},
  // 在 bind 之后立即以初始值为参数第一次调用，之后每当绑定值变化时调用，参数为新值与旧值；
  update () {}
})
```

组件内
```js
directives:{
  test:{
    inserted (el, binding) {// 指令的定义
      // el为绑定元素，可以对其进行dom操作
      console.log(binding) //一个对象，包含很多属性属性
    },
    bind (el, binding, vnode) {
      el.innerHTML = binding.value
    }
  }
},
```

## vuex 的五个状态

`state`

`mutations`：提供修改数据的方法

`getters`：可以认为是 store 的计算属性

`actions`：Action 提交的是 mutation，可以包含异步

`modules`：将 store 分割成模块

## vuex 异步

```js
const mutations = {
  addTodo (state, playload) {
    // 操作state
  }
}
const actions = {
  // 异步任务
  // context : 相当于 store
  // playload : 就是传过来的参数
  addTodoAsync (context, playload) {
    setTimeout(() => {
      context.commit('addTodo', playload)
    }, 1000)
  }
}

methods: {
  // 添加任务
  addTodo () {
    // 异步 : 分发 dispatch  => actions
    // dispatch => 找 actions
    this.$store.dispatch('addTodoAsync', {
      todoName: this.todoName
    })
  }
}
```

## Hash 和 History 路由的区别和优缺点？

- hash 路由模式的实现主要是基于下面几个特性：

URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送（hash 值改变，浏览器不会重新发起请求）
hash 值改变，会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换
可以通过 a 标签，或对 loaction.hash 进行赋值，来改变 URL 的 hash 值
可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）

- history 路由模式的实现主要基于存在下面几个特性：

pushState 和 repalceState 两个 API 来操作实现 URL 的变化，且不会重新发起请求
使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）
history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。

- hash模式优缺点

优点

只需要前端配置路由表, 不需要后端的参与
兼容性好, 浏览器都能支持
hash值改变不会向后端发送请求, 完全属于前端路由

缺点
hash值前面需要加`#`, 不符合url规范, 也不美观

- history 模式的优缺点：

优点：
符合url地址规范, 不需要`#`, 使用起来比较美观

缺点：
需要服务端配合重定向，否则一刷新页面就404了
兼容性比较差, 利用了 HTML5 History对象中新增的 pushState() 和 replaceState() 方法, 需要浏览器的支持

https://cn.vuejs.org/v2/guide/components-custom-events.html#将原生事件绑定到组件

`.native` 修饰符 监听根元素的原生事件




scoped 原理

如何定义一个不可变得对象



for in 和 for of
for in 可以 遍历原型方法和属性吗 ，
什么样的对象可以用for of 遍历
用 for in 遍历数组会打印什么


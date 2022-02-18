# js

## js 中语句和表达式

表达式（expression）计算出一个值，语句（statement）用来执行以使某件事发生。 -- JS 权威指南

表达式可以嵌套在别的表达式中，但语句不行。语句只能独立出现

表达式都有返回值（如果没有返回值就是`undefined`），语句没有返回值

常量是最简单的一类表达式。变量名也是一种简单的表达式，它的值就是赋值给变量的值。

`return`语句本身并没有返回值，虽然它看起来好像表示`返回它后面那个值`，但它其实表示的是`函数的返回`。也就是说，不是`return`返回了一个值，而是`函数`返回了值，`return`只是告诉函数你要把这个值返回给调用者。比如你不能用`a = (return b);`来给一个全局变量赋值，因为`return`没有返回值

```js
let fun1 = function () {} // 表达式
function fun2() {} // 语句
```

```js
function(){} // 报错
(function(){}) // 不报错 解析器会把()里的当做表达式去解析，在这里就会当做匿名函数表达式解析
function f(x){ return x + 1 }() // 报错 在一条语句后面加上()会被当做分组操作符，分组操作符里必须要有表达式
function f(x){ return x + 1 }(1) // 不报错 相当于在声明语句之后又跟了一条毫无关系的表达式
==>
function f(x){return x + 1}
(1)

```

## 面向对象

特点：封装性，继承性

## js 中的数据类型

## 伪数组和数组

- 伪数组其实就是一个对象，但是跟数组一样，伪数组也会有`length`属性，也有`0,1,2,3`等属性
- 伪数组并没有数组的方法，不能使用`push/pop`等方法
- 伪数组可以跟数组一样进行遍历，通过下标操作
- 常见的伪数组：`arguments`、`document.getElementsByTagName的返回值`、`jQuery对象`

## 将伪数组转换成真数组

```js
var obj = {
  0: 'zs',
  1: 'ls',
  length: 2,
}
// 借用数组的方法
var arr = Array.prototype.slice.call(obj)
var arr = [].slice.call(obj)

// 使用es6中数组的from方法：从一个类似数组或可迭代对象中创建一个新的数组实例
var arr = Array.from(obj)

// 对于函数的arguments参数可以使用扩展运算符
var arr = [...arguments]
```

## 用过哪些数组的方法，forEach 和 map 的区别

push、pop。shift、unshift、concat、every、filter、indexOf、includes、join、map、reduce、forEach


## 快速复制一个数组，得到一个新数组

```js
var arr2 = arr1.slice()
```

## 深浅拷贝，实现深拷贝

**浅拷贝**：可以使用 `Object.assign` 或展开运算符 `...` 来实现浅拷贝

**深拷贝**：

* 通过 JSON 字符串

```js
function jsonDeepCopy(original) {
  return JSON.parse(JSON.stringify(original))
}
```

**这种方法只能复制 JSON 格式支持的属性名和值，不支持的属性名和值会直接忽略：会忽略 undefined、symbol，不能序列化函数，不能解决循环引用的对象**

```js
jsonDeepCopy({
  [Symbol('a')]: 'abc',
  b: function() {},
  c: undefined
})
// 返回空对象 {}
```

实现通用深拷贝

```js
function deepCopy(original) {
  if (Array.isArray(original)) {
    const copy = []
    for (const [index, value] of original.entries()) {
      copy[index] = deepCopy(value)
    }
    return copy
  } else if (typeof original === 'object' && original !== null) {
    const copy = {}
    for (const [key, value] of Object.entries(original)) {
      copy[key] = deepCopy(value)
    }
    return copy
  } else {
    // 基础类型无需拷贝
    return original
  }
}
```

简化版

```js
function deepCopy(original) {
  if (Array.isArray(original)) {
    return original.map(elem => deepCopy(elem))
  } else if (typeof original === 'object' && original !== null) {
    return Object.fromEntries(Object.entries(original).map(([key, val]) => [key, deepCopy(val)]))
  } else {
    // 原始类型值无需拷贝
    return original
  }
}
```

`Object.fromEntries()` 方法把键值对列表转换为一个对象，是 `Object.entries` 的反转

https://github.com/NuoHui/fe-note/blob/master/docs/javascript/深拷贝与浅拷贝.md

## 简单说一下 js 中的作用域，作用域链

表示变量或函数起作用的区域，全局执行上下文，函数执行上下文
ES6的块级作用域

对变量提升的理解
this指向

## 谈谈你对 this 的理解

## 什么是闭包？闭包的作用？使用场景

闭包是函数和声明该函数的词法环境的组合
在函数中可以（嵌套）定义另一个函数时，如果内部的函数引用了外部的函数的变量，产生闭包

**特点：**
封闭性，外界无法访问，除非手动添加方法；持久性，内部函数对外部函数变量存在引用关系，无法释放

**优点：**
减少全局变量，私有变量，保护数据安全 持久化维持数据

**缺点：**
闭包占用的内存不会被释放，造成内存泄露

**使用场景：**

点击按钮打印对应下标

拿到正确的值

```js
for(var i=0;i<10;i++){
((j)=>{
  setTimeout(function(){
    console.log(j)//1-10
  },1000)})(i)
}
```

防抖函数

使用闭包缓存数据来计算菲波那切数列 存储变量，封装私有变量

解决：将 null 赋值给内层函数， 使用 let

## 对 js 中的原型的理解，原型链

js规定，每一个函数都有一个 `prototype` 属性，属性值是一个对象，这个对象就叫做原型（原型对象），这个对象的所有属性和方法，都会被构造函数的实例继承

任意对象都有 `__proto__` 属性，这个属性指向了构造函数的 prototype 属性，也就是原型对象

原型对象中 constructor 属性指向了当前原型对象的构造函数

通过构造函数创建出来的实例能够直接使用原型上的属性和方法

任何一个对象，都有原型对象，原型对象本身又是一个对象，所以原型对象也有自己的原型对象，这样形成的链式结构，就是原型链

## 并不是所有的函数都有 prototype

`__proto__`和`constructor`属性是对象所独有的；`prototype`属性是函数所独有的，因为函数也是一种对象，所以函数也拥有`__proto__`和`constructor`属性

使用 Function.prototype.bind 创建的函数对象

```js
function abc() {
  console.log('abc')
}
var binded = abc.bind(null)
binded() //abc
console.log(binded.prototype) //undefined
```

箭头函数也没有

```js
var abc = () => {
  console.log('abc')
}
abc() //abc
console.log(abc.prototype) //undefined
```

## js 实现继承的方式

参考：https://www.cnblogs.com/humin/p/4556820.html

原型链继承，将父类的实例作为子类的原型，无法实现多继承

```js
function Cat(){
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
```

构造继承，使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）

```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
```

组合继承，通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

```js
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
```

调用了两次父类构造函数，生成了两份实例

寄生组合继承
通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点

es6 中的继承

```js
class Super {}
class Sub extends Super {}

const sub = new Sub()

Sub.__proto__ === Super
```

子类可以直接通过 `__proto__` 寻址到父类

```js
function Super() {}
function Sub() {}

Sub.prototype = new Super()
Sub.prototype.constructor = Sub

var sub = new Sub()

Sub.__proto__ === Function.prototype
```
而通过 ES5 的方式，`Sub.__proto__ === Function.prototype`

es5继承 与 es6 继承的区别参考 https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20

## new 关键字在执行时做四件事情

new Person() 为例

创建一个新的空对象，类型为 Person

将 this 指向当前空对象

执行构造函数，给对象添加属性和方法（实例化对象）

返回这个新对象

## Object 上有什么方法？

* `Object.keys()` 可遍历属性的`键名`数组
* `Object.values()` 可遍历属性的`键值`数组
* `Object.entries()`
* `Object.assign()` 对象的合并，同名属性后者会`覆盖`前者
* `Object.create()` 创建一个对象
* [Object.is()](http://object.is/)
* `Object.defineProperty`
* `Object.freeze`
* `Object.getPrototypeOf`
* `Object.isFrozen`

Object.prototype 上的方法

* constructor
* hasOwnProperty（判断对象自身是否拥有该属性，返回布尔值）
* isPrototypeOf 方法用于测试一个对象是否存在于另一个对象的原型链上
* propertyIsEnumerable
* toString
* toLocaleString
* valueOf

## ajax 原理

ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发异步请求，从服务器获得数据，然后用 js 来操作 DOM 而更新页面

问题：安全问题：暴露接口，与后台的交互逻辑

```js
var xhr = new XMLHtoRequest()
xhr.open('post', '请求地址')
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
xhr.send('数据')

// 获取响应
// readyState 响应状态
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    // 响应完成
    if (xhr.status === 200) {
      // 响应成功
      // 获取响应结果
      console.log(xhr.responseXML)
    }
  }
}
```

## 如何使用原生 js 给一个按钮绑定两个 onclick 事件

addEventListener 绑定方式

## js 模块化规范

## valueOf 和 toString 的优先级

##  isPrototypeOf，instanceof， hasOwnProperty，in的作用与区别

A.isPrototypeOf(B) 判断 A 是否在 B 的原型链上 A： 是一个原型对象
B instanceof A 判断 A 的 prototype 是否在 B 的原型链上 A：是一个构造函数



## 事件循环
javascript是单线程的语言，同一个时间只能做一件事，这就意味着所有任务都需要排队

所有同步任务都在主线程上执行，形成一个执行栈
主线程之外，还存在一个"任务队列"。只要异步操作执行完成，就到任务队列中排队
一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行
主线程不断重复上面的第三步

## 如何让浏览器闲时时执行一些函数


## 防抖和节流
:star:

防抖的作用是将多个连续的debounced调用合并为一次callback调用

节流的作用是限制callback调用的频率（每waitTime调用一次）

https://wqdy.top/398.html

## `Object.is()` 判断两个值是否相同 与 `===` 区别

`Object.is()` 判断时，+0不等于-0，NaN等于自身

```js
Object.is(+0, -0) // false
Object.is(0, -0) // false
Object.is(0, +0) // true
Object.is(-0, -0) // true

Object.is(NaN, 0 / 0) // true
Object.is(NaN, NaN) // true

+0 === -0 // true
NaN === NaN // false
```

```js
if (!Object.is) {
  Object.is = function(x, y) {
    if (x === y) {
      // +0 != -0
      return x !== 0 || 1 / x === 1 / y
    } else {
      // NaN == NaN
      return x !== x && y !== y
    }
  }
}
```

## Object.create(null) 和 {} 区别

Object.create(null) 没有继承任何原型方法，也就是说它的原型链没有上一层

```js
console.log(Object.create({}).toString) // function toString() { [native code] }
console.log(Object.create(null).toString) // undefined
```

```js
// Object.create() 的定义
Object.create(proto, [propertiesObject])
// proto:新创建对象的原型对象
// propertiesObject:可选。要添加到新对象的可枚举（新添加的属性是其自身的属性，而不是其原型链上的属性）的属性。
```

Object.create() 方法的内部实现简单来说是这样的：

```js
Object.create = function(o) {
  var F = function() {}
  F.prototype = o
  return new F()
}
```

## 如何让 if(a == 1 && a == 2)条件成立？

```js
var a = {
  value: 0,
  valueOf: function() {
    this.value++
    return this.value
  }
}
console.log(a == 1 && a == 2) // true
```

```js
var a = [1, 2]
a.join = a.shift
console.log(a == 1 && a == 2) // true
```

## 意外的全局变量

```js
function foo() {
  let a = b = 0
  a++
  return a
}

foo()
typeof a // => ???typeof b; // => ???
```

```js
// 上面的 let a = b = 0 等价于
{
  let a
  b = 0
  a = b
}
// 所以
typeof a // => undefined
typeof b // => number
```

## js 设计模式

## babel

class 使用 babel 转成 es5

## 如何判断当前脚本运行在浏览器还是node环境中？

`this === window? 'window':'node'`

## 垃圾回收

一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。

标记-清除法

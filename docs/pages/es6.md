# es6

## es6 的了解

新增的数据类型 Symbol Set Map WeakMap , 应用场景
NaN 可以做map的键，可用 .get(NaN) 取值

新增模板字符串

let 和 const

class

箭头函数

module 模块的概念

Promise 对象

## promise

Promise 是异步编程的一种解决方案 --解决回调地狱

三种状态 pending : 等待 (等待成功或者失败去调用) fulfilled : 成功 rejected : 失败

promise 静态方法
Promise.all(iterable)
Promise.any(iterable)
Promise.race(iterable)
Promise.reject(reason)
Promise.resolve(value)

promise 原型上的方法
Promise.prototype.catch(onRejected)
Promise.prototype.then(onFulfilled, onRejected)
Promise.prototype.finally(onFinally)

## ES5/ES6 继承的区别

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20

## async/await

## 箭头函数与普通函数的区别

箭头函数写法更简单
没有this，不能作为构造函数，不能用new来创建实例
不能用 call()、apply()、bind() 这些方法改变 this 的指向
没有 prototype 属性
没有自己的 arguments 对象

**箭头函数在声明时就已经确定this了，普通函数在调用时才会确定this**

## const和Object.freeze()的区别

[const](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)

const用于定义常量，如果去修改这个常量，会报错

```js
const name = 'zs'
name = 'ls' // Uncaught TypeError: Assignment to constant variable.
```

const如果定义了引用类型数据，那么它只是规定该变量的引用不可修改，值是可以修改的

```js
const Person = {}
Person.name = 'zs' // ok
Person = {name: 'zs'} // Uncaught TypeError: Assignment to constant variable.
```

[Object.freeze()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

Object.freeze()接受一个对象作为参数，并返回一个相同的不可变的对象，冻结一个对象后该对象的原型也不能被修改
```js
let person = {name: 'zs'}
let newPerson = Object.freeze(person)
newPerson.name = 'ls' // 不会报错
console.log(newPerson) // {name: 'zs'} 修改没有生效
```

Object.freeze()可以阻止修改对象的值，但是不能阻止引用的修改

```js
newPerson = {name: 'ls'}
console.log(newPerson) // {name: 'ls'}
```

Object.freeze 只是做了层浅冻结，具有嵌套属性的对象实际上并未冻结

```js
let person = {car: {color: 'red'}}
let newPerson = Object.freeze(person)
newPerson.car = {color: 'yellow'}
console.log(newPerson.car) // {color: 'red'}

newPerson.car.color = 'yellow'
console.log(newPerson.car) // {color: 'yellow'}
```

可以将它们组合在一起使用\

```js
const person = Object.freese({})
```

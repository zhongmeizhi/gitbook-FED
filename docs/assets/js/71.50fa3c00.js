(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{440:function(t,a,r){"use strict";r.r(a);var n=r(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"轻量级函数式编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#轻量级函数式编程"}},[t._v("#")]),t._v(" 轻量级函数式编程")]),t._v(" "),r("p",[t._v("会讲述以下内容")]),t._v(" "),r("ul",[r("li",[t._v("什么是函数式编程")]),t._v(" "),r("li",[t._v("纯函数")]),t._v(" "),r("li",[t._v("高阶函数")]),t._v(" "),r("li",[t._v("柯里化")]),t._v(" "),r("li",[t._v("可缓存的纯函数")]),t._v(" "),r("li",[t._v("函数式编程的缺点")])]),t._v(" "),r("h3",{attrs:{id:"什么是函数式编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数式编程"}},[t._v("#")]),t._v(" 什么是函数式编程")]),t._v(" "),r("p",[t._v("我们在维护代码过程中大部分时间其实都是在维护别人的代码。当我们在设计应用程序的时候，我们应该考虑是否遵守了以下的设计原则。")]),t._v(" "),r("ul",[r("li",[t._v("可扩展性--我是否需要不断地重构代码来支持额外的功能？")]),t._v(" "),r("li",[t._v("易模块化--如果我更改了一个文件，另一个文件是否会受到影响？")]),t._v(" "),r("li",[t._v("可重用性--是否有很多重复的代码？")]),t._v(" "),r("li",[t._v("可测性--给这些函数添加单元测试是否让我纠结？")]),t._v(" "),r("li",[t._v("易推理性--我写的代码是否非结构化严重并难以推理？")])]),t._v(" "),r("p",[t._v("函数式编程就像砌砖块，就像这样")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // 命令式 变成 声明式\n\n    var compose = function(f,g) {\n        return function(x) {\n            return f(g(x));\n        };\n    };\n\n    var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));\n\n    initials(\"hunter stockton thompson\");\n    // 'H. S. T'\n")])])]),r("h3",{attrs:{id:"函数式编程的特性之一：纯函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的特性之一：纯函数"}},[t._v("#")]),t._v(" 函数式编程的特性之一：纯函数")]),t._v(" "),r("p",[t._v("纯粹的函数式编程中：只有常量没有变量。因此，任意一个函数"),r("strong",[t._v("只要输入是确定的，输出就是确定的")]),t._v("，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。")]),t._v(" "),r("p",[t._v("纯函数是完全自给自足的，它需要的所有东西都能轻易获得。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // 纯函数: 只要输入是确定的，输出就是确定的\n\n    // 纯函数\n    function add(num1, num2) {\n        // 不改变参数内容\n        return num1 + num2;\n    }\n\n    // 不纯函数\n    function pushPropertie(list, val) {\n        Array.isArray(list) {\n            // 改变了参数的值\n            list.push(val);\n        }\n    }\n\n    // 不纯函数\n    let flag = false;\n    function changeFlag() {\n        flag = true;\n    }\n\n    // 纯函数是完全自给自足的，它需要的所有东西都能轻易获得。\n\n    // 不纯的\n    var signUp = function(attrs) {\n        var user = saveUser(attrs);\n        welcomeUser(user);\n    };\n\n    var saveUser = function(attrs) {\n        var user = Db.save(attrs);\n        ...\n    };\n\n    var welcomeUser = function(user) {\n        Email(user, ...);\n        ...\n    };\n\n    // 纯的\n    var signUp = function(Db, Email, attrs) {\n        return function() {\n            var user = saveUser(Db, attrs);\n            welcomeUser(Email, user);\n        };\n    };\n\n    var saveUser = function(Db, attrs) {\n        ...\n    };\n\n    var welcomeUser = function(Email, user) {\n        ...\n    };\n")])])]),r("h3",{attrs:{id:"函数式编程的特性之二：高阶函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的特性之二：高阶函数"}},[t._v("#")]),t._v(" 函数式编程的特性之二：高阶函数")]),t._v(" "),r("p",[t._v("函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数。")]),t._v(" "),r("p",[t._v("JavaScript的函数其实都指向某个变量。")]),t._v(" "),r("p",[t._v("高阶函数就是以函数为参数或者返回函数,那么就是高阶函数.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // 高阶函数\n\n    let arr = [2, 3, 4];\n    \n    // 以函数为参数\n    arr.sort(function(a, b) {\n        return b - a;\n    })\n")])])]),r("h3",{attrs:{id:"高阶函数之：柯里化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数之：柯里化"}},[t._v("#")]),t._v(" 高阶函数之：柯里化")]),t._v(" "),r("p",[t._v("柯里化就是将接受多个参数的函数转化成接受一个参数的函数。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // 普通的add函数\n    function add(x, y) {\n        return x + y\n    }\n\n    // Currying后\n    function curryingAdd(x) {\n        return function (y) {\n            return x + y\n        }\n    }\n\n    add(1, 2)           // 3\n    curryingAdd(1)(2)   // 3\n")])])]),r("p",[t._v("柯里化的好处：延迟参数传递，参数复用，当然"),r("code",[t._v("bind")]),t._v("函数就算通过柯里化实现的。")]),t._v(" "),r("h3",{attrs:{id:"可缓存的纯函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可缓存的纯函数"}},[t._v("#")]),t._v(" 可缓存的纯函数")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    // 不处理异常情况的简洁版本\n    var memoize = function(f) {\n        var cache = {};\n\n        return function() {\n            var arg_str = JSON.stringify(arguments);\n            cache[arg_str] = cache[arg_str] || f.apply(f, arguments);\n            return cache[arg_str];\n        };\n    };\n\n    // 使用\n    var squareNumber  = memoize(function(x){ return x*x; });\n\n    squareNumber(4);\n    //=> 16\n\n    squareNumber(4); // 从缓存中读取输入值为 4 的结果\n")])])]),r("h3",{attrs:{id:"函数式编程的缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的缺点"}},[t._v("#")]),t._v(" 函数式编程的缺点")]),t._v(" "),r("p",[t._v("就是越低级的语言，越贴近计算机，抽象程度低，执行效率高，比如C语言；越高级的语言，越贴近计算，抽象程度高，执行效率低，比如Lisp语言。而函数式编程是一种抽象程度很高的编程范式。")]),t._v(" "),r("h2",{attrs:{id:"redux、mobx、rxjs取舍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux、mobx、rxjs取舍"}},[t._v("#")]),t._v(" redux、mobx、rxjs取舍")]),t._v(" "),r("blockquote",[r("p",[t._v("答案来自 https://www.wengbi.com/thread_50430_1.html")])]),t._v(" "),r("p",[t._v("这三个其实并不冲突，甚至可以放到一起用。")]),t._v(" "),r("ul",[r("li",[t._v("redux for global state：作为全局状态管理")]),t._v(" "),r("li",[t._v("rxjs for redux-middleware：rxjs 管理所有输入的 input -> redux action 的调度过程")]),t._v(" "),r("li",[t._v("mobx for component-state：作为组件局部状态管理器来用。")])]),t._v(" "),r("ol",[r("li",[t._v("当你的项目数据复杂度很低，用 react 自带的 component-state 就可以")]),t._v(" "),r("li",[t._v("当你的项目数据复杂度一般，lift state 到 root component，然后通过 props 传递来管理")]),t._v(" "),r("li",[t._v("当你的项目数据复杂度较高，mobx + react 是好的选择")]),t._v(" "),r("li",[t._v("当你的项目数据复杂度很高，redux + react 可以帮助你维持可预测性和可维护性的下降曲线不那么陡。所有 state 变化都由 action 规范化。")]),t._v(" "),r("li",[t._v("当你的项目数据复杂度很高且数据来源很杂，rxjs 可以帮助你把所有 input 规范化为 observable/stream，可以用统一的方式处理。")])]),t._v(" "),r("p",[t._v("思路其实很简单：")]),t._v(" "),r("ol",[r("li",[t._v("当 UI 变化很复杂时，用 component 归一化处理；")]),t._v(" "),r("li",[t._v("当 state 变化很复杂时，用 action/state 归一化处理；")]),t._v(" "),r("li",[t._v("当 data-input 很复杂时，用 rxjs/observable 归一化处理；")])]),t._v(" "),r("p",[t._v("任意问题，只要足够普遍和复杂，就值得抽象出专门化的机制。")]),t._v(" "),r("h2",{attrs:{id:"rxjs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rxjs"}},[t._v("#")]),t._v(" RXJS")]),t._v(" "),r("blockquote",[r("p",[t._v("RXJS = Reactive Extensions Of Javascript（Javascript的响应式扩展）")])]),t._v(" "),r("p",[t._v("会涉及到函数式编程 和 响应式编程。")]),t._v(" "),r("p",[t._v("讲述的是RXJS 6.x版本")]),t._v(" "),r("h3",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("p",[t._v("RxJS提供了一个核心类型 Observable，附属类型 (Observer、 Schedulers、 Subjects) 和操作符 (map、filter、take 等等)，这些数组操作符可以把异步事件作为集合来处理。")]),t._v(" "),r("ul",[r("li",[t._v("Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。\n"),r("ul",[r("li",[t._v("Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。")])])]),t._v(" "),r("li",[t._v("Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。")]),t._v(" "),r("li",[t._v("Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。")]),t._v(" "),r("li",[t._v("Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。")])]),t._v(" "),r("p",[t._v("在Vue中使用RxJs，推荐使用官方库"),r("a",{attrs:{href:"https://github.com/vuejs/vue-rx/blob/master/README-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-rx"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("在React中，使用起来随意很多，毕竟React容易扩展。")]),t._v(" "),r("h3",{attrs:{id:"解决的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决的问题"}},[t._v("#")]),t._v(" 解决的问题")]),t._v(" "),r("ul",[r("li",[t._v("同步和异步的统一")]),t._v(" "),r("li",[t._v("可组合的数据变更过程")]),t._v(" "),r("li",[t._v("数据和视图的精确绑定")]),t._v(" "),r("li",[t._v("条件变更之后的自动重新计算")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
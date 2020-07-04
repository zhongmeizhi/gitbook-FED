(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,a,e){t.exports=e.p+"assets/img/dart_loop.eb7484c9.png"},384:function(t,a,e){"use strict";e.r(a);var r=e(42),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dart2-入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dart2-入门"}},[t._v("#")]),t._v(" dart2 入门")]),t._v(" "),r("h3",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("ul",[r("li",[t._v("由Google开发")]),t._v(" "),r("li",[t._v("可运行在移动端、浏览器、服务端")]),t._v(" "),r("li",[t._v("fuchsia && flutter 的亲儿子")]),t._v(" "),r("li",[t._v("单进程（isolate隔离区多线程）")]),t._v(" "),r("li",[t._v("可以在没有锁的情况下进行对象分配和垃圾回收（像JavaScript一样）")]),t._v(" "),r("li",[t._v("拥有虚拟机 DartVM")]),t._v(" "),r("li",[t._v("开发时使用：JIT（Just In Time）编译")]),t._v(" "),r("li",[t._v("运行时使用：AOT（Ahead Of Time）编译")]),t._v(" "),r("li",[t._v("静态作用域、\n"),r("ul",[r("li",[t._v("大括号里面定义的变量就 只能在大括号里面访问")])])])]),t._v(" "),r("h3",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),r("ul",[r("li",[t._v("强类型语言，支持类型推断")]),t._v(" "),r("li",[t._v("所有对象都继承自"),r("code",[t._v("Object")]),t._v("类")]),t._v(" "),r("li",[t._v("程序有统一的程序入口："),r("code",[t._v("main()")])]),t._v(" "),r("li",[t._v("类TypeScript函数")]),t._v(" "),r("li",[t._v("mixins的实现"),r("code",[t._v("with")])]),t._v(" "),r("li",[r("code",[t._v("future")]),t._v("和"),r("code",[t._v("async await")])]),t._v(" "),r("li",[t._v("在Dart 2中，"),r("code",[t._v("new")]),t._v("可选的（类不需要new了）")])]),t._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),r("p",[t._v("可以⽤ var 来声明变量， Dart 会⾃推导出数据类型， var实际上是"),r("code",[t._v("编译期")]),t._v("的“语法糖”。")]),t._v(" "),r("p",[t._v("Dart 中所有的基础类型、类 等都继承 Object ，默认值是"),r("code",[t._v("null")]),t._v("， ⾃带 getter 和 setter，⽽如果是 final 或者 const 的话，那么它只有⼀个 getter ⽅法。其中 const 的值在编译期确定，final 的值要到运⾏时才确定。")]),t._v(" "),r("p",[t._v("支持异步")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('  ///模拟等待两秒，返回OK\n  request() async {\n    await Future.delayed(Duration(seconds: 1));\n    return "ok!";\n  }\n\n  ///得到"ok!"后，将"ok!"修改为"ok from request"\n  doSomeThing() async {\n    String data = await request();\n    data = "ok from request";\n    return data;\n  }\n\n  ///打印结果\n  renderSome() {\n    doSomeThing().then((value) {\n      print(value);\n      ///输出ok from request\n    });\n  }\n')])])]),r("h3",{attrs:{id:"dart运行机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dart运行机制"}},[t._v("#")]),t._v(" Dart运行机制")]),t._v(" "),r("blockquote",[r("p",[t._v("Dart和Javascript的运行机制类似（都是单线程）")])]),t._v(" "),r("p",[t._v("见下图：")]),t._v(" "),r("p",[r("img",{attrs:{src:e(357),alt:"Event_Loop"}})]),t._v(" "),r("p",[t._v("其中："),r("code",[t._v("Future")]),t._v("是微任务（当然，Future几乎就是Promise）")])])}),[],!1,null,null,null);a.default=v.exports}}]);
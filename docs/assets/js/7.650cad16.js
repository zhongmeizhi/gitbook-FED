(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(e,t,n){e.exports=n.p+"assets/img/security.2d3c4c32.png"},380:function(e,t,n){"use strict";n.r(t);var a=n(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"前端安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端安全"}},[e._v("#")]),e._v(" 前端安全")]),e._v(" "),a("h3",{attrs:{id:"xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击"}},[e._v("#")]),e._v(" XSS 攻击")]),e._v(" "),a("p",[e._v("跨站脚本攻击（Cross-site scripting），攻击者往 Web 页面里插入可执行的网页脚本代码，当用户浏览该页之时，嵌入其中 Web 里面的脚本代码会被执行，从而可以达到攻击者盗取用户信息或其他侵犯用户安全隐私的目的。")]),e._v(" "),a("p",[e._v("主要分2种：")]),e._v(" "),a("ul",[a("li",[e._v("通过URL参数注入，如：链接输入"),a("code",[e._v("https://abc/?wd=<script>alert(document.cookie)<\/script>")])]),e._v(" "),a("li",[e._v("通过表单注入脚本。如：表单中输入"),a("code",[e._v("<script>alert('入库数据')<\/script>")])])]),e._v(" "),a("p",[e._v("如何预防：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("转义")]),e._v("：最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义")]),e._v(" "),a("li",[e._v("Header设置"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy__by_cnvoid",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content-Security-Policy"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"csrf-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[e._v("#")]),e._v(" CSRF 攻击")]),e._v(" "),a("p",[e._v("跨站请求伪造（Cross-site request forgery），利用用户的登录态发起恶意请求。")]),e._v(" "),a("p",[a("img",{attrs:{src:n(356),alt:"图片"}})]),e._v(" "),a("p",[e._v("如何预防：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("阻止第三方网站请求接口")]),e._v("（比如校验 Referer）")]),e._v(" "),a("li",[e._v("设置cookie为HttpOnly")]),e._v(" "),a("li",[e._v("验证码")])]),e._v(" "),a("h3",{attrs:{id:"点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[e._v("#")]),e._v(" 点击劫持")]),e._v(" "),a("p",[e._v("攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。")]),e._v(" "),a("p",[e._v("如何预防：")]),e._v(" "),a("ul",[a("li",[e._v("通过"),a("code",[e._v("nginx")]),e._v("配置"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("X-Frame-Options"),a("OutboundLink")],1),e._v("的响应头")]),e._v(" "),a("li",[e._v("通过JS处理"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  if (self == top) {\n      var myPage = document.getElementById('myPage')\n      document.body.removeChild(myPage)\n  } else {\n      top.location = self.location\n  }\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"其他攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他攻击"}},[e._v("#")]),e._v(" 其他攻击")]),e._v(" "),a("ul",[a("li",[e._v("SQL注入，比如：账号输入"),a("code",[e._v("admin' --")]),e._v("（--在SQL中表示注释）")]),e._v(" "),a("li",[e._v("OS命令注入攻击，比如执行Shell操作的命令，")])]),e._v(" "),a("p",[a("code",[e._v("- -!")]),e._v("同样的道理，通过转义和正则替换可以解决。")]),e._v(" "),a("p",[e._v("一般都是后端处理，这边暂略。")]),e._v(" "),a("h2",{attrs:{id:"关于跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于跨域问题"}},[e._v("#")]),e._v(" 关于跨域问题")]),e._v(" "),a("p",[e._v("由于浏览器厂商对安全性的考虑，提出了"),a("code",[e._v("浏览器的同源策略")]),e._v("做为解决方案。它是一个用于隔离潜在恶意文件的重要安全机制。同源即"),a("code",[e._v("协议")]),e._v("、"),a("code",[e._v("域名")]),e._v("、"),a("code",[e._v("端口")]),e._v("三者一致。不同源即跨域。")]),e._v(" "),a("p",[e._v("如果没有同源策略会怎么样？")]),e._v(" "),a("p",[e._v("比如：当你访问了 饼夕夕的网站")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  // HTML\n  // 饼夕夕.com 内嵌 拼多多.com\n  <iframe name=\"pinduoduo\" src=\"www.pinduoduo.com\"></iframe>\n\n  // JS\n  // 由于没有同源策略的限制，钓鱼网站可以直接拿到别的网站的Dom\n  // 所以 饼夕夕.com 可以在 拼多多.com 输入账号密码处埋点\n\n  const $iframe = window.frames['pinduoduo'];\n  const $pwd = $iframe.document.getElementById('password');\n  console.log(`你的密码已泄露: ${$pwd}`)\n")])])]),a("h5",{attrs:{id:"解决方案（主流）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案（主流）"}},[e._v("#")]),e._v(" 解决方案（主流）")]),e._v(" "),a("p",[a("strong",[e._v("1. JSONP -> get请求跨域")])]),e._v(" "),a("p",[e._v("原理：script和img等标签没有跨域限制")]),e._v(" "),a("p",[e._v("具体实现：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  // HTML 插入标签\n  <script src=\"127.0.0.1/x/account?cb=say\" ><\/script>\n\n  // JS\n  function say(name, age) {\n    console.log(`${name}, ${age} 岁`)\n  }\n\n  // 服务器返回response\n  say('zmz', 18)\n\n  // 那么客户端在script onload时会执行say方法\n\n  // 结束\n")])])]),a("p",[a("strong",[e._v("2. iframe+form实现post请求跨域")])]),e._v(" "),a("p",[e._v("原理：利用form表单target属性，将post请求提交给隐藏的iframe，使页面不跳转")]),e._v(" "),a("p",[e._v("具体实现：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  var data = {\n    name: 'zmz',\n    age: 18\n  }\n  var url = 'http://localhost/say';\n\n  var $iframe = document.createElement('iframe');\n  $iframe.name = 'iframePost';\n  $iframe.style.display = 'none';\n  document.body.appendChild($iframe);\n  \n  $iframe.addEventListener('load', function(e) {\n    console.log($iframe.contentWindow)\n  })\n  \n  const form = document.createElement('form');\n  const ipt = document.createElement('input');\n  form.action = url;\n  form.enctype = 'application/json;'\n  form.method = 'post';\n\n  // 最核心的一行代码\n  // 在指定的iframe中执行form\n  form.target = $iframe.name;\n\n  for (var name in data) {\n      ipt.name = name;\n      ipt.value = data[name]; \n      form.appendChild(ipt.cloneNode());\n  }\n  form.style.display = 'none';\n  document.body.appendChild(form);\n  form.submit();\n  \n  document.body.removeChild(form)\n")])])]),a("p",[a("strong",[e._v("3. CORS 跨源资源共享")])]),e._v(" "),a("p",[e._v("原理：新版XMLHttpRequest(ajax2.0)特性，服务器白名单")]),e._v(" "),a("p",[e._v("服务器端设置"),a("code",[e._v('response.setHeader("Access-Control-Allow-xxx...')])]),e._v(" "),a("p",[e._v("附：ajax2.0新特性")]),e._v(" "),a("ul",[a("li",[e._v("可以设置HTTP请求的时限"),a("code",[e._v("xhr.timeout")])]),e._v(" "),a("li",[e._v("可以使用"),a("code",[e._v("FormData")]),e._v("对象管理表单数据")]),e._v(" "),a("li",[e._v("可以上传文件 >> 同上")]),e._v(" "),a("li",[e._v("可以请求不同域名下的数据（跨域请求）")]),e._v(" "),a("li",[e._v("可以获取服务器端的二进制数据"),a("code",[e._v("xhr.responseType = 'blob'")])]),e._v(" "),a("li",[e._v("可以获得数据传输的进度信息 "),a("code",[e._v("xhr.upload.process")])])]),e._v(" "),a("p",[e._v("CORS分类")]),e._v(" "),a("ul",[a("li",[e._v("简单请求(自行搜索)\n"),a("ul",[a("li",[e._v("在请求头信息中指定"),a("code",[e._v("Origin")])])])]),e._v(" "),a("li",[e._v("非简单请求\n"),a("ul",[a("li",[e._v("会发送预检请求(options)，返回状态码204")])])])]),e._v(" "),a("p",[a("strong",[e._v("5. 代理")])]),e._v(" "),a("p",[e._v("原理：服务器之间没有跨域限制")]),e._v(" "),a("p",[e._v("具体实现：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  // Nginx配置\n  server{\n    # 监听9099端口\n    listen 9099;\n    # 域名是localhost\n    server_name localhost;\n    # 匹配到都转发到http://localhost:9871 \n    location ^~ /api {\n        proxy_pass http://localhost:9871;\n    }    \n}\n")])])]),a("p",[a("strong",[e._v("5. postMessage")])]),e._v(" "),a("p",[e._v("原理：postMessage可以处理各种浏览器窗口之间的通信问题。")]),e._v(" "),a("p",[e._v("具体实现：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  // 发送方\n  window.frames['crossDomainIframe']\n  iframe.postMessage('我想要数据', 'http://localhost:8088')\n\n  window.addEventListener('message', function () {\n    if (e.origin === 'http://localhost:2333') {\n      console.log('收到', e.data)\n    }\n  }\n\n  // 接收方\n  window.addEventListener('message', (e) => {\n    if (e.origin === 'http://localhost:8088') {\n      console.log(e.data)\n      e.source.postMessage('给，你要的数据', e.origin);\n    }\n  })\n")])])]),a("p",[a("strong",[e._v("6. WebSocket")])]),e._v(" "),a("p",[e._v("原理：新协议(socket)")]),e._v(" "),a("p",[e._v("具体实现：类似postMessage")]),e._v(" "),a("p",[e._v("附：")]),e._v(" "),a("ul",[a("li",[e._v("socket.io框架能解决兼容性问题")])]),e._v(" "),a("h5",{attrs:{id:"各种方式对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种方式对比"}},[e._v("#")]),e._v(" 各种方式对比")]),e._v(" "),a("ul",[a("li",[e._v("JSONP和iframe+from兼容性很好\n"),a("ul",[a("li",[e._v("但是错误处理和RESTful接口统一是个问题")])])]),e._v(" "),a("li",[e._v("CORS最简单粗暴\n"),a("ul",[a("li",[e._v("和Vue兼容性类似。")])])]),e._v(" "),a("li",[e._v("代理\n"),a("ul",[a("li",[e._v("肯定会慢一丢丢咯，而且要找运维配")])])]),e._v(" "),a("li",[e._v("postMessage\n"),a("ul",[a("li",[e._v("处理窗口间通信，- -。不嫌麻烦可以用来跨域")])])]),e._v(" "),a("li",[e._v("WebSocket\n"),a("ul",[a("li",[e._v("处理长连接，附带跨域")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);
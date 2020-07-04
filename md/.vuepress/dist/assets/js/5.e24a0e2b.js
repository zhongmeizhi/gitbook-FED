(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(v,_,e){v.exports=e.p+"assets/img/interweb.40bd3632.png"},354:function(v,_,e){v.exports=e.p+"assets/img/https.5596ab39.png"},355:function(v,_,e){v.exports=e.p+"assets/img/page_load.b3dc0390.png"},379:function(v,_,e){"use strict";e.r(_);var t=e(42),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"从输入url到页面加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面加载过程"}},[v._v("#")]),v._v(" 从输入URL到页面加载过程")]),v._v(" "),t("blockquote",[t("p",[v._v("抛开了对页面的具体分析，任何的性能优化都是站不住脚的，盲目的使用一些优化措施，结果可能会适得其反。因此切实的去分析页面的实际性能表现，不断的改进测试，才是正确的优化途径。")])]),v._v(" "),t("h3",{attrs:{id:"大致流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大致流程"}},[v._v("#")]),v._v(" 大致流程")]),v._v(" "),t("ol",[t("li",[v._v("强缓存（"),t("strong",[v._v("第一步")]),v._v("）")]),v._v(" "),t("li",[v._v("域名解析（DNS查询）")]),v._v(" "),t("li",[v._v("(SSL/TLS)握手（https会有）")]),v._v(" "),t("li",[v._v("TCP三次握手")]),v._v(" "),t("li",[v._v("发送请求（应用层）")]),v._v(" "),t("li",[v._v("服务器收到请求")]),v._v(" "),t("li",[v._v("协商缓存（"),t("strong",[v._v("服务器告诉浏览器使用本地缓存")]),v._v("）")]),v._v(" "),t("li",[v._v("微服务架构 -> 负载均衡")]),v._v(" "),t("li",[v._v("服务器处理请求 并返回响应")]),v._v(" "),t("li",[v._v("TCP四次挥手（关闭连接）")]),v._v(" "),t("li",[v._v("DOM树 + CSS树 -> 渲染树 -> 重排、重绘\n"),t("ul",[t("li",[v._v("边加载边解析的过程")]),v._v(" "),t("li",[v._v("会将各层信息发送给 GPU，GPU将各层合成，显示到屏幕上")])])]),v._v(" "),t("li",[v._v("JS资源要等脚本下载完成并执行后才会继续解析HTML（此时可以使用defer和async）\n"),t("ul",[t("li",[v._v("defer是延迟执行。类似放在body后面")]),v._v(" "),t("li",[v._v("async是异步执行。下载完毕执行")])])])]),v._v(" "),t("h3",{attrs:{id:"网络传输过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络传输过程"}},[v._v("#")]),v._v(" 网络传输过程")]),v._v(" "),t("p",[t("img",{attrs:{src:e(353),alt:"因特网"}})]),v._v(" "),t("h3",{attrs:{id:"域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名解析"}},[v._v("#")]),v._v(" 域名解析")]),v._v(" "),t("p",[v._v("IP 查找顺序（查询到就返回）")]),v._v(" "),t("ol",[t("li",[v._v("首先从"),t("code",[v._v("浏览器缓存")]),v._v("中查找 IP")]),v._v(" "),t("li",[v._v("从"),t("code",[v._v("Host文件")]),v._v("中查找 IP")]),v._v(" "),t("li",[v._v("从"),t("code",[v._v("路由器")]),v._v("缓存中查找 IP")]),v._v(" "),t("li",[v._v("发送"),t("code",[v._v("DNS请求")]),v._v("到 本地DNS服务器（运营商）")]),v._v(" "),t("li",[v._v("从"),t("code",[v._v("本地DNS服务器")]),v._v("缓存中查找 IP")]),v._v(" "),t("li",[v._v("以"),t("code",[v._v("递归")]),v._v("的方式往"),t("code",[v._v("根DNS服务器")]),v._v("发起请求")]),v._v(" "),t("li",[v._v("以"),t("code",[v._v("迭代")]),v._v("的方式获取能查询的"),t("code",[v._v("顶级域名服务器")]),v._v("位置")]),v._v(" "),t("li",[v._v("顶级服务器告诉本地DNS到"),t("code",[v._v("权限服务器")]),v._v("上查询")]),v._v(" "),t("li",[v._v("权限服务器将IP返回给本地DNS")]),v._v(" "),t("li",[v._v("本地DNS将IP保存到自己的缓存中")])]),v._v(" "),t("p",[v._v("概念：")]),v._v(" "),t("ul",[t("li",[v._v("DNS 即 (domain name system，域名系统)，一个域名和IP地址相互映射的分布式数据库。")]),v._v(" "),t("li",[v._v("根域名：全球共13个根服务器 (包含所有顶级域名服务器的域名和IP地址)")]),v._v(" "),t("li",[v._v("顶级域名：域名的最后一部分（如：.com、.cn、.net 等）")]),v._v(" "),t("li",[v._v("二级域名：域名的倒数第二个部分，如：example.baidu.com中，二级域名是Baidu")])]),v._v(" "),t("h3",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),t("blockquote",[t("p",[v._v("HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer 超文本传输"),t("strong",[v._v("安全")]),v._v("协议）")])]),v._v(" "),t("p",[v._v("HTTPS在传统的HTTP和TCP之间加了一层用于"),t("code",[v._v("加密解密的SSL/TLS层")]),v._v("（安全套接层Secure Sockets Layer/安全传输层Transport Layer Security）层。")]),v._v(" "),t("p",[v._v("PS: 当"),t("code",[v._v("SSL")]),v._v("发展到第三大版本时才被标准版，成为 "),t("code",[v._v("TLS")]),v._v("。即："),t("code",[v._v("TLS1.0 = SSL3.1")])]),v._v(" "),t("p",[v._v("使用HTTPS必须要有一套自己的数字证书（"),t("strong",[v._v("包含公钥和私钥")]),v._v("）。")]),v._v(" "),t("p",[v._v("HTTPS解决的问题")]),v._v(" "),t("ul",[t("li",[v._v("信息加密传输：第三方无法窃听；")]),v._v(" "),t("li",[v._v("校验机制：一旦被篡改，通信双方会立刻发现；")]),v._v(" "),t("li",[v._v("身份证书：防止身份被冒充。")])]),v._v(" "),t("p",[v._v("HTTPS加密过程：")]),v._v(" "),t("ol",[t("li",[v._v("客户端请求服务器获取"),t("code",[v._v("证书公钥")])]),v._v(" "),t("li",[v._v("客户端(SSL/TLS)解析证书（无效会弹出警告）")]),v._v(" "),t("li",[v._v("生成随机值")]),v._v(" "),t("li",[v._v("用"),t("code",[v._v("公钥加密")]),v._v("随机值生成"),t("strong",[v._v("密钥")])]),v._v(" "),t("li",[v._v("客户端将"),t("code",[v._v("秘钥")]),v._v("发送给服务器")]),v._v(" "),t("li",[v._v("服务端用"),t("code",[v._v("私钥")]),v._v("解密"),t("code",[v._v("秘钥")]),v._v("得到随机值")]),v._v(" "),t("li",[t("code",[v._v("将信息和随机值混合在一起")]),v._v("进行对称加密")]),v._v(" "),t("li",[v._v("将加密的内容发送给客户端")]),v._v(" "),t("li",[v._v("客户端用"),t("code",[v._v("秘钥")]),v._v("解密信息")])]),v._v(" "),t("p",[t("img",{attrs:{src:e(354),alt:"HTTPS"}})]),v._v(" "),t("p",[v._v("加密过程使用了对称加密和非对称加密。")]),v._v(" "),t("ul",[t("li",[v._v("对称加密: "),t("strong",[v._v("客户端和服务端采用相同的密钥经行加密")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("    encrypt(明文，秘钥) = 密文\n\n    decrypt(密文，秘钥) = 明文\n")])])])]),v._v(" "),t("li",[v._v("非对称加密："),t("strong",[v._v("客户端通过公钥加密。服务端通过私钥解密")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("    encrypt(明文，公钥) = 密文\n\n    decrypt(密文，私钥) = 明文\n")])])])])]),v._v(" "),t("p",[v._v("因为TLS握手的过程中采用了非对称加密，客户端本身不知道服务器的秘钥，这样通信就不会被中间人劫持。此外这一步服务端还提供了证书，并且可能要求客户端提供证书。关于证书下文会提到，只要有了证书，就能保证和你通信的对方是真实的，而不是别人伪造的。")]),v._v(" "),t("p",[v._v("那然后验证证书呢？")]),v._v(" "),t("ol",[t("li",[v._v("客户端获取到了站点证书，拿到了站点的公钥")]),v._v(" "),t("li",[v._v("客户端找到其站点证书颁发者的信息")]),v._v(" "),t("li",[t("code",[v._v("站点证书的颁发者")]),v._v("验证"),t("code",[v._v("服务端站点")]),v._v("是否可信")]),v._v(" "),t("li",[v._v("往上回溯，找到"),t("code",[v._v("根证书颁发者")])]),v._v(" "),t("li",[v._v("通过"),t("code",[v._v("根证书颁发者")]),v._v("一步步验证"),t("code",[v._v("站点证书颁布者")]),v._v("是否可信")])]),v._v(" "),t("p",[v._v("附：")]),v._v(" "),t("ul",[t("li",[v._v("HTTPS默认使用443端口，而HTTP默认使用80端口。")]),v._v(" "),t("li",[v._v("TLS就是从SSL发展而来的，只是SSL发展到3.0版本后改成了TLS")]),v._v(" "),t("li",[v._v("第一次请求中TLS握手的代价很大")]),v._v(" "),t("li",[v._v("后续的请求会共用第一次请求的协商结果")])]),v._v(" "),t("p",[v._v("参考：")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/954961bac588",target:"_blank",rel:"noopener noreferrer"}},[v._v("刘某某_adf3"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/24af67c40e8d",target:"_blank",rel:"noopener noreferrer"}},[v._v("jimsshom"),t("OutboundLink")],1)])]),v._v(" "),t("h3",{attrs:{id:"http2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[v._v("#")]),v._v(" HTTP2")]),v._v(" "),t("p",[v._v("主要改进")]),v._v(" "),t("ol",[t("li",[v._v("头部压缩 -> 减少体积\n"),t("ul",[t("li",[v._v("采用"),t("code",[v._v("HPACK")]),v._v("压缩：利用服务器和客户端之间建立哈希表的映射，传递索引来精简和复用请求头部")])])]),v._v(" "),t("li",[v._v("多路复用 -> 解决队头阻塞\n"),t("ul",[t("li",[v._v("由于浏览器对HTTP有并发限制（大部分是6个并发），而且HTTP 基于请求-响应的模型，在同一个 TCP 长连接中，前面的请求没有得到响应，后面的请求就会被阻塞。")]),v._v(" "),t("li",[v._v("因此，HTTP2 采用多路复用解决HTTP队头阻塞的问题（只需要占用一个 TCP 连接）")])])]),v._v(" "),t("li",[v._v("二进制 + 分帧传输 -> 减少体积 + 提高安全性\n"),t("ul",[t("li",[v._v("由于 HTTP 的明文传输解析太过复杂（比如 "),t("code",[v._v("\\n")]),v._v(" 到底是换行还是字符串？），而且并不安全。所以，采用二进制进行传输")]),v._v(" "),t("li",[v._v("将数据以流的形式进行传输，并将请求和响应数据分割成更小的帧，而多个帧之间可以乱序发送，根据帧首部的流标识来重新组装。")])])]),v._v(" "),t("li",[v._v("服务器推送")])]),v._v(" "),t("p",[v._v("PS：2020年2月chrome更改了"),t("code",[v._v("SameSite")]),v._v(" 属性（从默认 "),t("code",[v._v("None")]),v._v(" 改为 "),t("code",[v._v("Lax")]),v._v("），用以预防"),t("code",[v._v("CSRF")]),v._v(" 攻击。")]),v._v(" "),t("h3",{attrs:{id:"tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[v._v("#")]),v._v(" TCP三次握手")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("客户端请求建立连接")])]),v._v(" "),t("li",[t("p",[v._v("服务端确认应答")])]),v._v(" "),t("li",[t("p",[v._v("客户端确认应答")]),v._v(" "),t("p",[v._v("→ ← →")])])]),v._v(" "),t("p",[v._v("三次握手期间，任何1次未收到对面的回复，则都会重发")]),v._v(" "),t("blockquote",[t("p",[v._v("目的：应对网络延迟问题，防止网络资源浪费，甚至死锁")])]),v._v(" "),t("h3",{attrs:{id:"tcp四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[v._v("#")]),v._v(" TCP四次挥手")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("客户端请求断开连接")])]),v._v(" "),t("li",[t("p",[v._v("服务端应答")])]),v._v(" "),t("li",[t("p",[v._v("服务端请求断开连接")])]),v._v(" "),t("li",[t("p",[v._v("客户端应答")]),v._v(" "),t("p",[v._v("→ ← ← →")])])]),v._v(" "),t("blockquote",[t("p",[v._v("目的：保证双方都断开连接")])]),v._v(" "),t("h3",{attrs:{id:"关于缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于缓存"}},[v._v("#")]),v._v(" 关于缓存")]),v._v(" "),t("p",[v._v("浏览器缓存策略相关：比如Cache-Control、"),t("s",[v._v("Pragma")]),v._v("、ETag、Expires、Last-Modified")]),v._v(" "),t("p",[t("strong",[v._v("强缓存")]),v._v("是利用"),t("code",[v._v("Expires")]),v._v("或者"),t("code",[v._v("Cache-Control")]),v._v("这两个http header实现的，命中缓存会返回"),t("code",[v._v("200")])]),v._v(" "),t("ul",[t("li",[v._v("强缓存是不会产生 DNS 解析的，更不会发送请求（"),t("strong",[v._v("不请求服务器")]),v._v("）")]),v._v(" "),t("li",[t("code",[v._v("expires")]),v._v(" 有 "),t("strong",[v._v("服务器时间")]),v._v(" 和 "),t("strong",[v._v("客户端时间")]),v._v(" 不一致导致失效的问题")]),v._v(" "),t("li",[t("code",[v._v("Cache-Control")]),v._v(" 在"),t("code",[v._v("HTTP 1.1")]),v._v("中为了解决expires的问题而诞生\n"),t("ul",[t("li",[v._v("单位为秒，"),t("strong",[v._v("不依赖客户端时间")])]),v._v(" "),t("li",[t("code",[v._v("Cache-Control")]),v._v(" 优先级高于 "),t("code",[v._v("Expires")])])])])]),v._v(" "),t("p",[t("strong",[v._v("协商缓存")]),v._v("利用"),t("code",[v._v("Last-Modified")]),v._v("或者"),t("code",[v._v("Etag")]),v._v("这两个http header实现，命中缓存会返回"),t("code",[v._v("304")])]),v._v(" "),t("ul",[t("li",[v._v("协商缓存由服务器验证缓存的有效性（"),t("strong",[v._v("请求服务器")]),v._v("）")]),v._v(" "),t("li",[v._v("Last-Modified 比较前一个响应头的"),t("code",[v._v("Last-Modified")]),v._v("和新请求头的"),t("code",[v._v("if-modified-since")]),v._v("（单位秒）\n"),t("ul",[t("li",[v._v("根据时间来缓存")]),v._v(" "),t("li",[v._v("最后修改只能精确到"),t("code",[v._v("秒")]),v._v("级")]),v._v(" "),t("li",[v._v("定期生成文件内容没变化时 Last-Modified 改变")])])]),v._v(" "),t("li",[v._v("Etag在 "),t("code",[v._v("HTTP 1.1")]),v._v(" 中出现：比较前一个响应头的 "),t("code",[v._v("Etag")]),v._v(" 和新请求头的 "),t("code",[v._v("If-None-Match")]),v._v("，\n"),t("ul",[t("li",[v._v("优先级高于Last-Modified")]),v._v(" "),t("li",[v._v("基于资源的内容编码生成一串唯一的标识"),t("code",[v._v("字符串")]),v._v("来缓存")]),v._v(" "),t("li",[t("code",[v._v("ETag")]),v._v(" 优先级高于 "),t("code",[v._v("Last-Modified")])])])])]),v._v(" "),t("p",[v._v("在文件变动的时候需要清除缓存。比如：在webpack打包的时候一般会给JS、CSS、图片的文件名添加"),t("code",[v._v("chunkhash")]),v._v("。")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/65605622234b",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考"),t("OutboundLink")],1)]),v._v(" "),t("h3",{attrs:{id:"关于浏览器进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于浏览器进程"}},[v._v("#")]),v._v(" 关于浏览器进程")]),v._v(" "),t("p",[v._v("浏览器是多进程的")]),v._v(" "),t("p",[v._v("多进程的优势")]),v._v(" "),t("ol",[t("li",[v._v("避免单个标签页影响整个浏览器")]),v._v(" "),t("li",[v._v("避免第三方插件影响整个浏览器")]),v._v(" "),t("li",[v._v("利用 cpu 的多核优势")])]),v._v(" "),t("p",[v._v("浏览器进程：主要进程")]),v._v(" "),t("ol",[t("li",[v._v("主进程（Browser进程/控制进程）\n"),t("ul",[t("li",[v._v("负责界面展示，与用户交互（前进、后退等）")]),v._v(" "),t("li",[v._v("负责各个页面的管理，创建和销毁其他进程")]),v._v(" "),t("li",[v._v("将渲染经常的结果绘制到页面上")]),v._v(" "),t("li",[v._v("网络资源的管理、下载等")])])]),v._v(" "),t("li",[v._v("插件进程\n"),t("ul",[t("li",[v._v("为浏览器插件创建的进程")])])]),v._v(" "),t("li",[v._v("GPU进程\n"),t("ul",[t("li",[v._v("用于 3D 绘制")])])]),v._v(" "),t("li",[v._v("渲染进程\n"),t("ul",[t("li",[v._v("页面渲染，脚本执行，事件处理")]),v._v(" "),t("li",[v._v("每个浏览器标签页都是一个 render进程")])])])]),v._v(" "),t("p",[v._v("所以：打开浏览器最少会出现2个进程（主进程和标签页的渲染进程）")]),v._v(" "),t("p",[v._v("PS：浏览器还有 "),t("code",[v._v("SharedWorker")]),v._v("进程，方便各页面间的交互")]),v._v(" "),t("h3",{attrs:{id:"渲染进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程"}},[v._v("#")]),v._v(" 渲染进程")]),v._v(" "),t("p",[v._v("渲染进程主要包含以下线程： 主要线程")]),v._v(" "),t("ol",[t("li",[v._v("GUI 渲染线程\n"),t("ul",[t("li",[v._v("负责渲染浏览器页面（解析HTML、CSS 构建DOM和 RenderObject树，布局和绘制等）")]),v._v(" "),t("li",[v._v("当然：重绘(Repaint)和回流(Reflow) 也会触发该线程")]),v._v(" "),t("li",[v._v("重点："),t("strong",[v._v("GUI渲染线程和JS引擎线程是互斥的")]),v._v("，会在JS引擎空闲时执行")])])]),v._v(" "),t("li",[v._v("JS 引擎线程\n"),t("ul",[t("li",[v._v("JS内核（例如: V8引擎）：负责解析、运行 JS脚本程序")]),v._v(" "),t("li",[v._v("如果使用 "),t("code",[v._v("WebWorker")]),v._v(" 那么JS引擎线程会 向浏览器申请开一个子线程\n"),t("ul",[t("li",[t("code",[v._v("WebWorker")]),v._v(" 是渲染进程开的子线程，不受JS引擎线程管理")]),v._v(" "),t("li",[v._v("JS线程 和 Worker线程的通信通过 "),t("code",[v._v("postMessage API")])]),v._v(" "),t("li",[t("code",[v._v("postMessage")]),v._v(" 交互数据需要序列化对象")])])])])]),v._v(" "),t("li",[v._v("事件触发线程\n"),t("ul",[t("li",[v._v("宏任务、微任务、事件（比如点击）、AJAX请求等 被事件符合条件触发时。会将任务添加到事件线程中")]),v._v(" "),t("li",[v._v("事件触发线程会把事件添加到待处理队列的队尾，等待 JS 引擎处理")])])]),v._v(" "),t("li",[v._v("定时器线程\n"),t("ul",[t("li",[v._v("定时器所在的线程（"),t("code",[v._v("setInterval")]),v._v("和"),t("code",[v._v("setTimeout")]),v._v("等）")]),v._v(" "),t("li",[v._v("因为JS引擎线程处于阻塞状态会影响计时的准确性，所以单独作为一个线程")]),v._v(" "),t("li",[v._v("W3C标准：setTimeout最小间隔为 4ms")])])]),v._v(" "),t("li",[v._v("异步http请求线程\n"),t("ul",[t("li",[v._v("处理请求的线程，如果有请求回调函数，会将该回调放入事件队列中，由 JS引擎执行")])])])]),v._v(" "),t("p",[v._v("PS：")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("DOMContentLoaded")]),v._v(" 事件触发时：仅 "),t("code",[v._v("DOM")]),v._v(" 加载完成（不包括css、图片资源、async脚本）")]),v._v(" "),t("li",[t("code",[v._v("onload")]),v._v(" 事件触发时：所有资源都加载完成且渲染完毕")])]),v._v(" "),t("h3",{attrs:{id:"页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[v._v("#")]),v._v(" 页面渲染")]),v._v(" "),t("p",[t("img",{attrs:{src:e(355),alt:"页面加载"}})]),v._v(" "),t("p",[v._v("CSS加载是否阻塞渲染？")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("CSS加载 不会阻塞 DOM树的解析")])]),v._v(" "),t("li",[t("strong",[v._v("CSS加载 会阻塞 Render树渲染")])]),v._v(" "),t("li",[t("strong",[v._v("css加载 会阻塞 后续js语句的执行")])])]),v._v(" "),t("p",[v._v("为什么加载不阻塞 DOM 树的解析，但是会阻塞 Render 树的渲染？")]),v._v(" "),t("ul",[t("li",[v._v("CSS的加载是由"),t("strong",[v._v("主进程的下载线程")]),v._v("异步下载的\n"),t("ul",[t("li",[v._v("因为解析过程不影响 渲染流程")])])]),v._v(" "),t("li",[v._v("渲染时需要等CSS加载完毕，以获取CSS信息")]),v._v(" "),t("li",[v._v("如果css加载不阻塞DOM树渲染的话，那么当css加载完之后，DOM树可能又得重新重绘或者回流了")])]),v._v(" "),t("p",[v._v("为何 GUI渲染线程 和 JS引擎线程会产生互斥？")]),v._v(" "),t("p",[v._v("因为JavaScript是可以操作DOM的，如果再修改这些元素属性的同时渲染页面，那么渲染线程获得的元素数据可能会不一致，（如果不一致那么渲染线程怎么知道该做什么事情？），因此为防止渲染出现异常，所以"),t("strong",[v._v("当JS引擎执行时 GUI线程 会被挂起，GUI更新会等JS引擎线程空闲时执行")]),v._v("。")]),v._v(" "),t("h5",{attrs:{id:"css图层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css图层"}},[v._v("#")]),v._v(" css图层")]),v._v(" "),t("p",[v._v("分为：普通图层和复合图层")]),v._v(" "),t("p",[v._v("复合图层就是传说中的硬件加速技术，独立于普通文档流中，改动后可以避免整个页面重绘，提升性能，但是也不能大量使用，会导致资源消耗过度。")]),v._v(" "),t("p",[v._v("如果变成复合图层？")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("translate3d")]),v._v("、"),t("code",[v._v("translateZ")])]),v._v(" "),t("li",[t("code",[v._v("will-change")]),v._v("(提前告诉浏览器需要优化) 和 "),t("code",[v._v("opacity")]),v._v("/过渡动画(如：transform) 在动画期间是复合图层")]),v._v(" "),t("li",[t("code",[v._v("video")]),v._v("、"),t("code",[v._v("iframe")]),v._v("、"),t("code",[v._v("canvas")]),v._v("、"),t("code",[v._v("webgl")])])]),v._v(" "),t("p",[v._v("PS：")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("absolute")]),v._v(" 虽然可以脱离普通文档流，但是无法脱离默认复合层。")]),v._v(" "),t("li",[v._v("复合图层的隐式合成：如果a是一个复合图层，而且b在a上面，那么b也会被隐式转为一个复合图层")])])])}),[],!1,null,null,null);_.default=l.exports}}]);
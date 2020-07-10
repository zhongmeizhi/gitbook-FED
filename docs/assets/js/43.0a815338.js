(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{409:function(e,n,t){"use strict";t.r(n);var s=t(42),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"体验-next-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#体验-next-js"}},[e._v("#")]),e._v(" 体验 next.js")]),e._v(" "),t("blockquote",[t("p",[e._v("玩了下"),t("a",{attrs:{href:"https://nextjs.frontendx.cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("next.js"),t("OutboundLink")],1),e._v("，写写总结。")])]),e._v(" "),t("ul",[t("li",[e._v("需要"),t("code",[e._v("xxx.js")]),e._v("，设置插件，如：代理插件 -> 然后调用"),t("code",[e._v("next")])]),e._v(" "),t("li",[e._v("使用"),t("code",[e._v("next.config.js")]),e._v("自定义webpack等配置")]),e._v(" "),t("li",[e._v("导出成 html 需要 "),t("code",[e._v("npm run build && next export")])])]),e._v(" "),t("h2",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[e._v("#")]),e._v(" 遇到的问题")]),e._v(" "),t("h3",{attrs:{id:"和-ant-mobile-一起使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和-ant-mobile-一起使用"}},[e._v("#")]),e._v(" 和 ant-mobile 一起使用")]),e._v(" "),t("p",[e._v("ant-mobild 按需加载问题：（presets/plugins 不允许添加到"),t("code",[e._v(".babelrc")]),e._v("中，然而可以配置next/babel预设，）")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    {\n        "presets": [\n            "next/babel"\n        ],\n        "plugins": [\n            ["import", { "libraryName": "antd-mobile", "libraryDirectory": "lib"}, "antd-mobile"]\n        ]\n    }\n')])])]),t("h3",{attrs:{id:"css-loader-和-webpack版本冲突问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-loader-和-webpack版本冲突问题"}},[e._v("#")]),e._v(" css-loader 和 webpack版本冲突问题")]),e._v(" "),t("blockquote",[t("p",[e._v("Invalid options object. CSS Loader has been initialised using an options object that does not match the API schema. - options has an unknown property 'minimize'.")])]),e._v(" "),t("p",[e._v("原因：在使用"),t("code",[e._v("zeit/next-less")]),e._v("时：webpack 4版本 css-loader有冲突，因为"),t("code",[e._v("minimize")]),e._v("属性在webpack4中被移除了")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/zeit/next-plugins/issues/541",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决方法"),t("OutboundLink")],1),e._v("  一\n```\n// next.config.js\nconst withLess = require('@zeit/next-less')")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    // 解决webpack和css-loader冲突问题\n    function HACK_removeMinimizeOptionFromCssLoaders(config) {\n        console.warn(\n            'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',\n        );\n        config.module.rules.forEach(rule => {\n            if (Array.isArray(rule.use)) {\n            rule.use.forEach(u => {\n                if (u.loader === 'css-loader' && u.options) {\n                    delete u.options.minimize;\n                }\n            });\n            }\n        });\n    }\n        \n    const env = process.env.NODE_ENV;\n\n    // 使用 less\n    module.exports = withLess({\n    cssModules: false, // 不使用cssModules\n    // CDN等静态文件地址路径\n    assetPrefix:  env === 'development' ? '/' : '/abc',\n    // 导出html配置\n    exportPathMap: async function (defaultPathMap) {\n        return {\n            '/index.html': { page: '/' },\n            '/xxx/index.html': { page: '/xxx' },\n            '/yyy/index.html': { page: '/yyy' },\n            '/zzz/index.html': { page: '/zzz' },\n        }\n    },\n    webpack(config, options) {\n\n        HACK_removeMinimizeOptionFromCssLoaders(config);\n        \n        // 修改出口文件路径\n        config.output.publicPath = env === 'development' ? '/' : '/abc';\n\n        return config\n    }\n    })\n```\n")])])])]),e._v(" "),t("li",[t("p",[e._v("解决方案[二]：11月22日补充，目前 next.js 已经修复该问题")])])]),e._v(" "),t("h3",{attrs:{id:"antd-mobile-中less不能加载问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#antd-mobile-中less不能加载问题"}},[e._v("#")]),e._v(" antd-mobile 中less不能加载问题")]),e._v(" "),t("blockquote",[t("p",[e._v("Inline JavaScript is not enabled. Is it set in your options?")])]),e._v(" "),t("p",[e._v("antd-mobile包中的inputitem的less样式其中使用了带参mixin。那么"),t("strong",[e._v("使用了mixin在less-loader中需要配置"),t("code",[e._v("javascriptEnabled: true")])])]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://github.com/zeit/next-plugins/issues/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("github issue"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解决方案： "),t("code",[e._v("withLess")]),e._v("中添加属性"),t("code",[e._v("lessLoaderOptions: {javascriptEnabled: true},")])]),e._v(" "),t("h3",{attrs:{id:"next-less-和-cssmodules-冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-less-和-cssmodules-冲突"}},[e._v("#")]),e._v(" next-less 和 cssmodules 冲突")]),e._v(" "),t("blockquote",[t("p",[e._v("Module not found: Can't resolve 'css-loader/locals'")])]),e._v(" "),t("p",[e._v("原因： "),t("code",[e._v("zeit/next-less")]),e._v("在预渲染 bundle 中 使用 css-loader/locals 而不是 style-loader!css-loader 。它不会嵌入 CSS，但只导出标识符映射(identifier map)。")]),e._v(" "),t("p",[e._v("但是呢：下载也下载不了")]),e._v(" "),t("ul",[t("li",[e._v("然鹅把"),t("code",[e._v("next-less")]),e._v("的"),t("code",[e._v("cssModules: true,")]),e._v("删掉或者改成false就不会报错了。")]),e._v(" "),t("li",[e._v("然鹅，"),t("code",[e._v("zeit/next-less")]),e._v("又该怎么用"),t("code",[e._v("cssModules")]),e._v("?")])]),e._v(" "),t("p",[e._v("ps：就刚好用的"),t("code",[e._v("9.0.7")]),e._v("版本有这个问题，会有这个问题，")]),e._v(" "),t("p",[e._v("参考： "),t("a",{attrs:{href:"https://github.com/zeit/next-plugins/issues/392",target:"_blank",rel:"noopener noreferrer"}},[e._v("github issue"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("解决方案："),t("strong",[e._v("升级或者降级 "),t("code",[e._v("next.js")]),e._v(" 的版本")])]),e._v(" "),t("h3",{attrs:{id:"解决代理问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决代理问题"}},[e._v("#")]),e._v(" 解决代理问题")]),e._v(" "),t("blockquote",[t("p",[e._v("解决代理问题")])]),e._v(" "),t("p",[e._v("配置 app.js，运行命令： "),t("code",[e._v('start": "cross-env NODE_ENV=development PORT=3000 node app.js')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    // app.js\n    const express = require('express')\n    const next = require('next')\n\n    const devProxy = {\n        '/abc': {\n            target: 'http:/www.xxx.com/abc',\n            pathRewrite: {\n                '^/abc': '/'\n            },\n            changeOrigin: true\n        }\n    }\n\n    const port = parseInt(process.env.PORT, 10) || 3000\n    const env = process.env.NODE_ENV\n    const dev = env !== 'production'\n\n    // 调用next.js运行环境\n    const app = next({\n        dir: '.',\n        dev\n    })\n\n    const handle = app.getRequestHandler()\n\n    let server;\n\n    app.prepare()\n        .then(() => {\n            server = express()\n\n            // 设置代理\n            if (dev && devProxy) {\n                const proxyMiddleware = require('http-proxy-middleware');\n                Object.keys(devProxy).forEach(function (context) {\n                    server.use(proxyMiddleware(context, devProxy[context]))\n                })\n            }\n\n            server.all('*', (req, res) => handle(req, res))\n\n            server.listen(port, err => {\n                if (err) {\n                    throw err\n                }\n                console.log(`> Ready on port ${port} [${env}]`)\n            })\n        })\n        .catch(err => {\n            console.log('An error occurred, unable to start the server')\n            console.log(err)\n        })\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);
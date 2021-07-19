(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{638:function(s,e,n){"use strict";n.r(e);var t=n(3),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"vue-转换-es7-为-es5-语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-转换-es7-为-es5-语法"}},[s._v("#")]),s._v(" vue 转换 es7 为 es5 语法")]),s._v(" "),n("p",[n("strong",[s._v("问题描述")]),s._v("：vue 项目下报错：ReferenceError: regeneratorRuntime is not defined\n"),n("strong",[s._v("原因")]),s._v("：项目中请求使用了异步函数，并用 async、await 关键字修饰，async、await 是 es7 的语法，项目运行在浏览器中如果不支持 es7 的情况下，就会报如上所示的错误\n"),n("strong",[s._v("解决")]),s._v("：安装插件实现转换语法，将 es7 转换为 es5")]),s._v(" "),n("ul",[n("li",[s._v("步骤一：安装插件 babel-plugin-transform-runtime")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm install babel-plugin-transform-runtime\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("步骤二：在.babelrc 文件中增加“transform-runtime”")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n    "presets": [["es2015", { "modules": false }]],\n    "plugins": ["syntax-dynamic-import", "transform-object-rest-spread", "transform-vue-jsx", "transform-runtime"]\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);
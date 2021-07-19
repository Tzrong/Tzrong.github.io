(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{615:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"javascript-数据类型-7-种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-数据类型-7-种"}},[t._v("#")]),t._v(" JavaScript 数据类型（7 种）")]),t._v(" "),a("ul",[a("li",[t._v("Undefined")]),t._v(" "),a("li",[t._v("Null")]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("Number")]),t._v(" "),a("li",[t._v("Symbol")]),t._v(" "),a("li",[t._v("Object")])]),t._v(" "),a("h3",{attrs:{id:"undefined-和-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined-和-null"}},[t._v("#")]),t._v(" Undefined 和 Null")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Undefined 类型表示未定义，他的类型只有一个值，就是 undefined。任何变量在赋值前是 Undefined 类型、值为 undefined。")])]),t._v(" "),a("li",[a("p",[t._v("JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，为了避免无意中被篡改，建议使用 void 0 来获取 undefined 值")])]),t._v(" "),a("li",[a("p",[t._v("NUll 类型也只有一个值，就是 null，它的语义表示空值")])]),t._v(" "),a("li",[a("p",[t._v("null 与 undefined 不同，null 是 JavaScript 关键字，在任何代码中，可放心用 null 关键字来获取 null 值")])])]),t._v(" "),a("h3",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),a("ul",[a("li",[t._v("Boolean 类型有两个值，true 和 false，它用于表示逻辑意义上的真和假，有关键字 true 和 false 来表示两个值")])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("ol",[a("li",[t._v("String 的意义表示文本数据。String 有最大长度是 2^53 - 1")]),t._v(" "),a("li",[t._v("String 的意义并非“字符串”，而是字符串的 UTF16 编码，所以超过 U+0000-U+FFFF 范围的字符时，应该格外小心")]),t._v(" "),a("li",[t._v("字符串时永远无法变更的，一旦构造处理，无法用任何方式改变字符串的内容")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),t._v("\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),a("ul",[a("li",[t._v("Number 类型表示通常意义上的“数字”，大致对应数学中的有理数，有一定精度限制")]),t._v(" "),a("li",[t._v("JavaScript 中的 Number 类型有 2^64-2^53+3 个值")]),t._v(" "),a("li",[t._v("JavaScript 的 Number 类型基本复合双精度浮点数规则\n特殊：")])]),t._v(" "),a("ol",[a("li",[t._v("NaN, 不是一个数字")]),t._v(" "),a("li",[t._v("Infinity： 无穷大")]),t._v(" "),a("li",[t._v("-Infinity： 负无穷大")]),t._v(" "),a("li",[t._v("+0 和-0，区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity")]),t._v(" "),a("li",[t._v("Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数")]),t._v(" "),a("li",[t._v("非整数的 Number 类型无法用==（===）来比较")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确的比较方法使用js提供的最小精度值")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EPSILON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),a("ol",[a("li",[t._v("Symbol 是 Es6 中引入的新类型，是一切非字符串的对象 key 的集合")]),t._v(" "),a("li",[t._v("创建 Symbol 的方式是使用全局的 Symbol 函数;即使描述相同，Symbol 也不相等")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mySymbol1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my symbol'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mySymbol2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my symbol'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mySymbol1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" mySymbol2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("ul",[a("li",[t._v("Object 是 JavaScript 中最复杂的类型，Object 表示对象的意思，是一切有形和无形的总称")]),t._v(" "),a("li",[t._v("对象定义是“属性的集合”，key-value 结构，key 可以是字符串或者 Symbol 类型")]),t._v(" "),a("li",[t._v("JavaScript 是无法自定义类型的\n注意：")])]),t._v(" "),a("ol",[a("li",[t._v("3 和 new Number(3)是完全不同的值，一个是 Number 类型， 一个是对象类型")]),t._v(" "),a("li",[t._v("Number、String 和 Boolean，三个构造器两用，当跟 new 搭配时，产生对象，直接调用时，表示强制类型转换")]),t._v(" "),a("li",[t._v("Symbol 比较特殊，直接用 new 调用它会报错，但它仍然是 Symbol 对象的构造器")])]),t._v(" "),a("h3",{attrs:{id:"存储地方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储地方"}},[t._v("#")]),t._v(" 存储地方")]),t._v(" "),a("p",[t._v("基本类型保存在栈中，引用类型保存在堆中。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("栈空间\n栈是内存中一块用于存储局部变量和函数参数的线性结构，遵循先进后出的原则。栈由内存中占据一片连续的存储空间，出栈与入栈仅仅是指指针在内存中的上下移动。栈空间一般不会设置太大，基本类型在内存中占有固定大小的时间，所以它们的值保存在栈空间，通过 "),a("strong",[t._v("按值访问")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("堆\n堆数据结构是一种数状结构。它的存取方式与书架和书非常相似，只需要知道书的名字就可以直接取出书。对象就会被存储在堆中，在栈中只是保留了对象在堆中的地址，也就是对象的引用，对于这种，叫做 "),a("strong",[t._v("按引用访问")]),t._v("。引用类型的值大小不固定，不能保存在栈内存中。")])]),t._v(" "),a("li",[a("p",[t._v("闭包除外，JS 闭包中的变量值并不保存中栈内存中，而是保存在堆内存中")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
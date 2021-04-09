/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("// import { Component, render, createElement } from \"./toy-react\";\n// 创建节点并挂载到 返回的对象上\nclass ElementWrapper {\n  constructor(tagName) {\n    this.root = document.createElement(tagName);\n  }\n\n  setAttribute(name, value) {\n    this.root.setAttribute(name, value);\n  }\n\n  appendChild(instance) {\n    this.root.appendChild(instance.root);\n  }\n\n}\n\nclass TextWrapper {\n  constructor(content) {\n    this.root = document.createTextNode(content);\n  }\n\n}\n/**\n * 1. 支持 props\n * 2. 支持 children\n */\n\n\nclass Component {\n  constructor() {\n    this.children = [];\n    this.props = {};\n    this._root = null;\n  }\n\n  setAttribute(name, value) {\n    this.props[name] = value;\n  }\n\n  appendChild(child) {\n    this.children.push(child);\n  }\n\n  _renderToDOM() {}\n\n  rerender() {\n    // 1. 清除\n    // 2. 重新render\n    this._renderToDOM();\n  }\n\n  get root() {\n    if (!this._root) {\n      this._root = this.render().root;\n    }\n\n    return this._root;\n  }\n\n} // 渐进式完善\n// 步骤一： 返回一个真实节点，直接处理 参数 创建节点、添加属性、添加子节点（文本节点为 string）\n// step 2: 支持 class component\n\n\nfunction createElement(type, props, ...children) {\n  let e;\n\n  if (typeof type === \"string\") {\n    e = new ElementWrapper(type);\n  } else {\n    e = new type();\n  }\n\n  if (props !== null) {\n    for (let key in props) {\n      e.setAttribute(key, props[key]);\n    }\n  }\n\n  const insertChildern = children => {\n    for (let child of children) {\n      if (typeof child === \"string\") {\n        // 文本节点\n        child = new TextWrapper(child);\n      }\n\n      if (child instanceof Array) {\n        insertChildern(child);\n      } else if (child) {\n        e.appendChild(child);\n      }\n    }\n  };\n\n  insertChildern(children);\n  return e;\n}\n\nfunction render(dom, parentDIV) {\n  parentDIV.innerHTML = \"\";\n  parentDIV.appendChild(dom.root);\n} // =====================\n\n\nclass MyComponent extends Component {\n  constructor() {\n    super();\n    this.state = {\n      a: 1\n    };\n  }\n\n  render() {\n    return createElement(\"div\", {\n      class: \"class-component\"\n    }, createElement(\"h1\", null, \"class component\"), createElement(\"span\", null, this.state.a.toString()), this.children);\n  }\n  /**\n   *  createElement(\"div\", \n   * {\"class\": \"class-component\"}, \n   * \n    \tcreateElement('h1',{props},'class component'),\n  \tcreateElement('span',null, this.state.a),\n  \tthis.children\n  );\n   */\n\n\n} // class SelfComponnet extends Component {\n// \trender() {\n// \t\treturn <div className=\"self-component\"></div>;\n// \t}\n// \t// return createElement(\"div\", {\n// \t// \tclassName: \"self-component\"\n// \t//   });\n// }\n\n\nvar a = createElement(\"div\", null, createElement(MyComponent, {\n  data: \"class-component-data\"\n}, \"textNode\", createElement(\"div\", null, \"child1\"), createElement(\"div\", null, \"child2\")));\nrender(createElement(\"div\", null, \"\\u6211\\u662Fclass\\u7EC4\\u4EF6\\u7684\\u7238\\u7238\", createElement(MyComponent, {\n  data: \"class-component-data\"\n}, \"textNode\", createElement(\"div\", null, \"child1\"), createElement(\"div\", null, \"child2\"))), document.body);\n\n//# sourceURL=webpack://toy-react/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;
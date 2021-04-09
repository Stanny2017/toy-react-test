// import { Component, render, createElement } from "./toy-react";

// 创建节点并挂载到 返回的对象上
class ElementWrapper {
	constructor(tagName) {
		this.root = document.createElement(tagName);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}

	appendChild(instance) {
		this.root.appendChild(instance.root);
	}
}

class TextWrapper {
	constructor(content) {
		this.root = document.createTextNode(content);
	}
}

/**
 * 1. 支持 props
 * 2. 支持 children
 */
class Component {
	constructor() {
		this.children = [];
		this.props = {};
		this._root = null;
	}

	setAttribute(name, value) {
		this.props[name] = value;
	}

	appendChild(child) {
		this.children.push(child);
	}

	_renderToDOM() {}

	rerender() {
		// 1. 清除
		// 2. 重新render
		this._renderToDOM();
	}

	get root() {
		if (!this._root) {
			this._root = this.render().root;
		}

		return this._root;
	}
}

// 渐进式完善
// 步骤一： 返回一个真实节点，直接处理 参数 创建节点、添加属性、添加子节点（文本节点为 string）
// step 2: 支持 class component
function createElement(type, props, ...children) {
	let e;
	if (typeof type === "string") {
		e = new ElementWrapper(type);
	} else {
		e = new type();
	}

	if (props !== null) {
		for (let key in props) {
			e.setAttribute(key, props[key]);
		}
	}

	const insertChildern = children => {
		for (let child of children) {
			if (typeof child === "string") {
				// 文本节点
				child = new TextWrapper(child);
			}

			if (child instanceof Array) {
				insertChildern(child);
			} else if (child) {
				e.appendChild(child);
			}
		}
	};

	insertChildern(children);

	return e;
}

function render(dom, parentDIV) {
	parentDIV.innerHTML = "";
	parentDIV.appendChild(dom.root);
}

// =====================
class MyComponent extends Component {
	constructor() {
		super();

		this.state = {
			a: 1
		};
	}
	render() {
		return (
			<div class="class-component">
				<h1>class component</h1>

				<span>{this.state.a.toString()}</span>
				{this.children}
			</div>
		);
	}
	/**
	 *  createElement("div", 
	 * {"class": "class-component"}, 
	 * 
	  	createElement('h1',{props},'class component'),
		createElement('span',null, this.state.a),
		this.children
	);
	 */
}

// class SelfComponnet extends Component {
// 	render() {
// 		return <div className="self-component"></div>;
// 	}

// 	// return createElement("div", {
// 	// 	className: "self-component"
// 	//   });
// }

var a = createElement(
	"div",
	null,
	createElement(
		MyComponent,
		{ data: "class-component-data" },

		"textNode",
		createElement("div", null, "child1"),
		createElement("div", null, "child2")
	)
);
render(
	<div>
		我是class组件的爸爸
		<MyComponent data="class-component-data">
			textNode
			<div>child1</div>
			<div>child2</div>
		</MyComponent>
	</div>,
	document.body
);

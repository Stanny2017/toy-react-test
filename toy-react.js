export {
    ElementWrapper,
    TextWrapper,
    Component,
    render,
    createElement,
}

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

    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }

        return this._root;
    }
}

function createElement(type, props, ...children) {
    // 步骤一： 返回一个真实节点，直接处理 参数 创建节点、添加属性、添加子节点（文本节点为 string）
    // step 2: 支持 class component
    let e;
    if (typeof type === "string") {
        e = new ElementWrapper(type);
    } else {
        e = new type; // new class 时候得到的是一个对象 不妨把真实dom 挂载到
    }

    if (props !== null) {
        for (let key in props) {
            e.setAttribute(key, props[key]);
        }
    }

    const insertChildern = children => {
        for (let child of children) {
            if (typeof child === "string") {
                // 原生节点
                child = new TextWrapper(child);
            }

            if (child instanceof Array) {
                // 递归进行
                insertChildern(child);
            } else if (child) {
                // child 有可能还是 class 类型，递归嵌套
                e.appendChild(child); // 如果是自定义组件只是 push 到了 this.children 里
            }
        }
    };

    insertChildern(children);

    return e;
}

function render(dom, root) {
    root.appendChild(dom.root);
}

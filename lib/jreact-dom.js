function render(vnode, container) {
    container.innerHTML= ''
    console.log(vnode)
    _render(vnode, container)
}

function _render (vnode, container) {
    let dom = createDomFromVnode(vnode)
    container.appendChild(dom)
}
function createDomFromVnode(vnode){
    // render的主要功能就是把虚拟dom转换为真实dom
    // html的关键，无非就是，tag,子元素和tag里的内容

    // 这里创建tag里的内容
    if(typeof vnode ==='string' || typeof vnode === 'number') {
        return document.createTextNode(vnode)
    }

    // 这里递归创建tag和
    if(typeof vnode ==='object') {
        if(typeof vnode.tag === 'function') {
            let dom = createComponent(vnode.tag, vnode.attrs)
            return dom
        }
        let dom = document.createElement(vnode.tag)
        console.log('dom----->', dom)
        setAttribute(dom, vnode.attrs)
        if(vnode.children&&Array.isArray(vnode.children)) {
            vnode.children.forEach(vnodeChild=>{
                render(vnodeChild, dom)
            })
        }
        return dom
    }

}

function createComponent(constructor, attrs) {
    let component = new constructor(attrs)
    let vnode = component.render()
    let dom = createDomFromVnode(vnode)
    component.$root = dom
    return dom
}

function setAttribute(node, attrs) {
    for(let key in attrs) {
        // 如果开头有on,转换为小写
        if(key.startsWith('on')) {
            node[key.toLocaleLowerCase()] = attrs[key]
        // style，要浅拷贝
        } else if(key === 'style') {
            Object.assign(node.style, attrs[key])
        // 剩下的属性直接复制
        } else {
            node[key] = attrs[key]
        }
    }
}

export default {
    render
}
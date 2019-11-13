function render (vnode, container) {
    // render的主要功能就是把虚拟dom转换为真实dom
    // html的关键，无非就是，tag,子元素和tag里的内容

    // 这里创建tag里的内容
    if(typeof vnode ==='string' || typeof vnode === 'number') {
        return container.appendChild(document.createTextNode(vnode))
    }

    // 这里递归创建tag和
    if(typeof vnode ==='object') {
        let dom = document.createElement(vnode.tag)
        console.log('dom----->', dom)
        setAttribute(dom, vnode.attrs)
        if(vnode.children&&Array.isArray(vnode.children)) {
            vnode.children.forEach(vnodeChild=>{
                render(vnodeChild, dom)
            })
        }
        container.appendChild(dom)
    }
}

// 主要就是拷贝属性
function setAttribute(node, attrs) {
    if(!attrs) return
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
    render(vnode, container) {
      container.innerHTML = ''
      render(vnode, container)
    }
}

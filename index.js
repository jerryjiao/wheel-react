// 是因为Babel会转换jsx为 Jreact.createElement(tags, attrs, ...children)
// npx parcel index.html
createElement = function(tag, attrs, ...children){
    // createElement的主要功能，就是在babel把jsx转换以后，再把转换后的结果返回为一个object
    // 以便之后操作这个object
    // 例如这里的render函数里的第一个入参jsx(vnode)就从jsx转为object了

    return {
        tag,
        attrs,
        children
    }
}

const Jreact = {
    createElement
}

const JreactDom = {
    render(vnode, container) {
      container.innerHTML = ''
      render(vnode, container)
    }
}

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

function setAttribute(node, attrs) {
    if(!attrs) return
    for(let key in attrs) {
        if(key.startsWith('on')) {
            node[key.toLocaleLowerCase()] = attrs[key]
        } else if(key === 'style') {
            Object.assign(node.style, attrs[key])
        } else {
            node[key] = attrs[key]
        }
    }
}

let name = "jirengu"
function clickBtn() {
    console.log('click me')
}
// console.log(vnode)
JreactDom.render(
    (<div className="wrapper">
        <h1>hello {name}</h1>
        <button onClick={clickBtn}>click me</button>
</div>),document.querySelector('#app'))
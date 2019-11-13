function createElement(tag, attrs, ...children){
    // createElement的主要功能，就是在babel把jsx转换以后，再把转换后的结果返回为一个object
    // 以便之后操作这个object
    // 例如这里的render函数里的第一个入参jsx(vnode)就从jsx转为object了

    return {
        tag,
        attrs,
        children
    }
}

export default {
    createElement
}
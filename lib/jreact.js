function createElement(tag, attrs, ...children){
    return {
        tag,
        attrs,
        children
    }
}

class Component {
    constructor(props) {
        this.props = props
        this.state = {}
        renderComponent()
    }
    

} 

function renderComponent() {
    console.log('renderComponent')
}

export default {
    createElement,
    Component
}
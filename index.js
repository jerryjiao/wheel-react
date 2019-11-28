import Jreact from './lib/jreact'
import JreactDom from './lib/jreact-dom'

class App extends Jreact.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>1111</div>    
        )
    }
}
JreactDom.render(<App/>,document.querySelector('#app'))
// JreactDom.render((
//     <h1>hello jirengu</h1>
//   ),document.querySelector('#app'))
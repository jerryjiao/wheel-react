import Jreact from './lib/jreact'
import JreactDom from './lib/jreact-dom'

class App extends Jreact.Component {
    render() {
        return (
            <h1>1111</h1>    
        )
    }
}
JreactDom.render(<App/>,document.querySelector('#app'))
// JreactDom.render((
//     <h1>hello jirengu</h1> 
//   ),document.querySelector('#app'))
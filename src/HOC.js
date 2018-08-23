import React,{Component} from 'react'
import BB from './ButtonCount'

class BaseComponent extends Component{
    render(){
        return(
            <div>
                <h3> Base Order Component </h3>
            </div>
        )
    }
}
let HigherOrderComponent = (Base) => class extends Component{
    render(){
        return(
            <div>
                <Base/>
                <h4> Higher Order Component</h4>
            </div>
        )
    }
}

let NewComponent=HigherOrderComponent(BaseComponent)
class HOCEmployee extends Component{
    render(){
        return(
            <center>
            <div style={{backgroundColor:'red', width:'250px'}}>
                <NewComponent />
            </div>
            </center>
        )
    }
}

export default HOCEmployee;
import React,{Component} from 'react';

let BaseComponentPropState = (ModifiedComponent) => class extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div style={{width:'100%',backgroundColor:'yellow'}}>
                <ModifiedComponent count={this.state.count} increment={()=>this.incrementCount()} />   
            </div>
        )
    }
}

export default BaseComponentPropState
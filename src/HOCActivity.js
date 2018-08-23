import React,{Component} from 'react';

const Button= (props) => {
    console.log(props)
    if(props.needPassword){
        return(
            <button>I got the password as {props.password}</button>
        )
    }
    else{
        return(
            <button>I havent received any password</button>
        )
    }
}

let HigherOrderFunction = (Base) => class extends Component{
    constructor(){
        super();
        this.state={
            password:'acc',
            needPassword:false
        }
    }
    render(){
        return(
            <div style={{backgroundColor:'purple'}}>
                <h3>This is HOC Activity component</h3>
                <Base needPassword={this.state.needPassword} password={this.state.password} />
            </div>
        )
    }
}

let HOCActivity=HigherOrderFunction(Button);
export default HOCActivity
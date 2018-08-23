import React,{Component} from 'react';

import BaseComponentPropState from './BaseButtonCount'

const Button= (props) => {
    console.log(props)
    return(
        <button onClick={props.increment}>{props.count}</button>
    )
}

let NewButton = BaseComponentPropState(Button);

export default class ContainerPropState extends Component{
    render(){
        return(
            <NewButton/>
        )
    }
}
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class EventHandler extends Component{
    constructor(){
        super();
        //Bind the changeText event to the current class
        this.changeText=this.changeText.bind(this);
        this.state={
            isToggleOn:true
        }
    }

    changeText(){
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }))
    }

    render(){
        return(
            <div style={{backgroundColor:'yellow'}}>
                <center>
                {/* Event onClick will trigger changeText func to change text of myDiv*/}
                <br/>
                <button onClick={this.changeText}>Click to change text</button>
                <br/>
                <div id="myDiv">{this.state.isToggleOn?'on' : 'off'}</div>
                </center>
            </div>
        )
    }
}

export default EventHandler;
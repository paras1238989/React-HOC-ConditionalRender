import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class EventHandler extends Component{
    constructor(){
        super();
        //Bind the changeColor event to the current class
        this.changeColor=this.changeColor.bind(this);
    }

    changeColor(e){
        //myDiv will be fetched from browser DOM and edit in React DOM or VDOM
        var mydiv = document.getElementById('myDiv')
        ReactDOM.findDOMNode(mydiv).style.color='green';
        //console.log(e)
    }

    render(){
        return(
            <div style={{backgroundColor:'red'}}> 
                <center>
                {/* Event onClick will trigger changeColor func to change color of myDiv*/}
                <button onClick={this.changeColor}>Click to change colour</button>
                <br/>
                <div id="myDiv">Frontend Text</div>
                <br/>
                </center>
            </div>
        )
    }
}

export default EventHandler;
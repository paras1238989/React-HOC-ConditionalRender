import React,{Component} from 'react'
class ListArray extends Component{
    arrayitem=this.props.name.map(
        (a,id)=><li key={id}> {a}</li>
    );

    render(){
        return(
            <center>
            <div style={{backgroundColor:'green',width:'250px',textAlign:'left'}}>
                <h3>Display Array using List</h3>
                <ul>{this.arrayitem}</ul>
            </div></center>
        )
    }
}
export default ListArray;
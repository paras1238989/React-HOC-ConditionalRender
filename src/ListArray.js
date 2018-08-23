import React,{Component} from 'react'
class ListArray extends Component{
    array1=[1,2,3,4,5,6]

    arrayitem=this.array1.map(
        (a,id)=><li key={id}> {a}</li>
    );
    render(){
        return(
            <center>
            <div style={{backgroundColor:'cyan',width:'250px',textAlign:'left'}}>
                <h3>List Demo</h3>
                <ul>{this.array1}</ul>
                <h3>Display Array using List</h3>
                <ul>{this.arrayitem}</ul>
            </div>
            </center>
        )
    }
}
export default ListArray;
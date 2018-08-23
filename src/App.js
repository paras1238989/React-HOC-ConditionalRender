import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventHandler from './EventHandler'
import Toggle from './Toggle'
import ListArray from './ListArray'
import DisplayEmployees from './displayEmployees'
import HOC from './HOC'
import ContainerPropState from './ButtonCount'
import HOCActivity from './HOCActivity'

class App extends Component {
  empArray = [
    {id:101,name:"Paras",skills:['Angular','Node']},
    {id:102,name:"Paras1",skills:['Angular1','Node3']},
    {id:103,name:"Paras2",skills:['Angular2','Node1']},
    {id:104,name:"Paras3",skills:['Angular3','Node']},
  ]

  namesArray = this.empArray.map(
    (emp) => emp.name
  )
  render() {
    return (
    <div>
      <EventHandler />
      <Toggle />
      <center style={{backgroundColor:'lightBlue'}}>
        <div style={{display:'table'}}>
          <div style={{display:'table-cell',verticalAlign:'middle'}}><ListArray /></div>
          <div style={{display:'table-cell',verticalAlign:'middle'}}><DisplayEmployees name={this.namesArray} /></div>
          <div style={{display:'table-cell',verticalAlign:'middle'}}><HOC /></div>
        </div>
        <ContainerPropState />
        <HOCActivity />
      </center>
      </div>
    
    );
  }
}

export default App;

import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      projects:[]
    }
  }
  componentWillMount(){
    this.setState({projects:[ 
        {
          title:'Businest',
          category:'web developemnt'
        },
        {
          title:'Social app',
          category:'Mobile developemnt'
        },
        {
          title:'Ecomerce Shoping cart',
          category:'web developemnt'
        } 
    ]})
  }
  render() {
    return (
      <div className="App">
       <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

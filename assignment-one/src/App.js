import React, {Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: "Andrew"
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  render(){
    return (
      <div className="App">
        <UserInput
          userName={this.state.name}
          changed = {this.changeName}/>
        <UserOutput userName={this.state.name}/>
        <UserOutput userName={this.state.name}/>
        <UserOutput userName={this.state.name}/>
      </div>
    );
  }
}

export default App;

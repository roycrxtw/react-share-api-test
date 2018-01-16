import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      result: null
    };
  }

  shareHandler = () => {
    console.log(`shareHandler()`);
    if(navigator.share){
      console.log(`share api is available.`);
      this.setState({result: `Web share api is available.`});
    }else{
      console.log(`share api is NOT available.`);
      this.setState({result: `Web share api is  NOT available.`});
    }
  };
  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - Web share api test</h1>
        </header>
        <button onClick={this.shareHandler}>To check is Web Share API available</button>
        <div>result: {result}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Aside from '../Aside/Aside.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Aside />
      </div>
    );
  }
}

export default App;

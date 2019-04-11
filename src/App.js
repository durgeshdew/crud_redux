import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MedicineDashBoard from './container/MedicineDashBoard/MedicineDashBoard.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MedicineDashBoard />
      </div>
    );
  }
}

export default App;

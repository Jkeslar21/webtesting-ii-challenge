import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ball: 0,
      strike: 0,
    }
  }

  addBall = () => {
    const plus1 = this.state.ball + 1;
    if (this.state.ball < 3) {
      this.setState({ ball: plus1}) 
    }
    if (this.state.ball === 3) {
      this.setState({ ball: 0, strike: 0})
    }
  }

  addStrike = () => {
    const plus1 = this.state.strike + 1;
    if (this.state.strike < 2) {
      this.setState({ strike: plus1}) 
    }
    if (this.state.strike === 2) {
      this.setState({ ball: 0, strike: 0})
    }
  }

  addFoul = () => {
    const plus1 = this.state.strike + 1;
    if (this.state.strike < 2) {
      this.setState({ strike: plus1}) 
    }
  }

  addHit = () => {
      this.setState({ ball: 0, strike: 0, foul: 0})
    }

  render() {
    return (
      <div className="App">
        <Display ball={this.state.ball} strike={this.state.strike} />
        <Dashboard addBall={this.addBall} addStrike={this.addStrike} addFoul={this.addFoul} addHit={this.addHit} />
      </div>
    );
  }
}

export default App;

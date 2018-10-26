import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Container from "./components/container";
import './App.css';

class App extends Component {
  state = {
    count: 0,
    topScore: 0
  }
  
  updateCurrentScore = (newCount) => {
    this.setState({count: newCount});
  }

  updateTopScore = (newTopScore) => {
    if (newTopScore > this.state.topScore) {
      this.setState({topScore: newTopScore -1})
    }

  }
  render() {
    return (
      <div>
        <Navbar score={this.state.count} topScore={this.state.topScore} />
        <Container updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
      </div>
    );
  }
}

export default App;

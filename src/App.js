import React, { Component } from "react";

import './App.css';
import TopBar from './components/TopBar/TopBar'

const VERSION=2.031;
const BETA=0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      version: VERSION,
      beta: BETA
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <TopBar />
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;

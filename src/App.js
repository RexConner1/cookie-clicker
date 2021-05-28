import React, { Component } from "react";

import './App.css';
import TopBar from './components/TopBar/TopBar'

class App extends Component {
  constructor() {
    super();
    this.state = {

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

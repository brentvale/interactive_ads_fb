import React, { Component } from 'react';

import AdWidget from './components/ad_widget';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<AdWidget />
      </div>
    );
  }
}

export default App;

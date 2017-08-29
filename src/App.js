import React, { Component } from 'react';

import NewsFeed from './components/news_feed';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<div style={{width: "100%", backgroundColor: "#30599d", height: "38px", position: "absolute", zIndex: "-1" }}></div>
				<div className="Layout-container">
				</div>
				
				<NewsFeed />
      </div>
    );
  }
}

export default App;

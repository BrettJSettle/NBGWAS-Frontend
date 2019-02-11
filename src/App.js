import './App.css'
import React, { Component } from 'react';

import NavBar from './components/NavBar'
import Content from './containers/Content'
import WarningBar from './components/WarningBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Content/>
        <WarningBar />
      </div>
    );
  }
}

export default App;

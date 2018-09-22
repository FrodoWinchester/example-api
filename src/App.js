import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from './layout/MainContent'
import NavBar from './layout/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <Router>
          <MainContent />
        </Router>
      </div>
    );
  }
}

export default App;

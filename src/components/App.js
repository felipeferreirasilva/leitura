import React, { Component } from 'react';
import Posts from './Posts'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Posts />
      </div>
    );
  }
}

export default App;

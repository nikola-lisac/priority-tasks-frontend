import React, { Component } from 'react';
import Task from '../containers/task'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Priority Tasks</h1>
        <Task />
      </div>

    );
  }
}

export default App;

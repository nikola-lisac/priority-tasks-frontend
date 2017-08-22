import React, { Component } from 'react';
import TasksList from './tasksList'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Priority Tasks</h1>
        <TasksList />
      </div>

    );
  }
}

export default App;

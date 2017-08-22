import React, { Component } from 'react';
import TasksList from './tasksList'
import Task from '../containers/task'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Priority Tasks</h1>
        <TasksList />
        <Task />
      </div>

    );
  }
}

export default App;

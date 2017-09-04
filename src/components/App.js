import React, {Component} from 'react';
import TasksList from '../containers/tasksList'
import Task from '../containers/task'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Priority Tasks</h1>
                <Task />
                <TasksList />
            </div>
        );
    }
}

export default App;

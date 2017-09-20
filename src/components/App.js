import React, {Component} from 'react';
import TasksList from '../containers/tasksList';
import Task from '../containers/task';
import Tabs from '../components/tabs';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="container">Priority Tasks</h1>
                <Task />
                <Tabs />
                <TasksList />
            </div>
        );
    }
}

export default App;

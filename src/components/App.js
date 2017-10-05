import React, {Component} from 'react';
import TasksList from '../containers/tasksList';
import Task from '../containers/task';
import Tabs from '../components/tabs';
import Title from '../components/title';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <Task/>
                <Tabs/>
                <TasksList/>
            </div>
        );
    }
}

export default App;

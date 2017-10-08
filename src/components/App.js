import React, {Component} from 'react';
import TasksList from '../containers/tasksList';
import Task from '../containers/task';
import Tabs from '../components/tabs';
import Title from '../components/title';
import Footer from '../components/footer';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <Tabs/>
                <Task/>
                <TasksList/>
                <Footer/>
            </div>
        );
    }
}

export default App;

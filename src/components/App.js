import React, {Component} from "react";
import TasksList from "../containers/tasksList";
import Task from "../containers/task";
import Title from "../components/title";
import Footer from "../containers/footer";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <Task/>
                <TasksList/>
                <Footer/>
            </div>
        );
    }
}

export default App;

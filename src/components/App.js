import React, {Component} from "react";
import TasksList from "../containers/tasksList";
import Task from "../containers/task";
import Tabs from "../components/tabs";
import Title from "../components/title";
import Footer from "../containers/footer";
import ModalRoot from "../containers/modalRoot";


class App extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <Tabs/>
                <Task/>
                <TasksList/>
                <Footer/>
                <ModalRoot/>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllTasks} from '../actions/task_actions';
import TaskItem from '../components/TaskItem';

class TasksList extends Component {

    componentDidMount = () => {
        this.props.getAllTasks();
    };

    render = () => {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map(task => {
                            return <TaskItem key={task.id} task={task}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTasks: () => dispatch(getAllTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)

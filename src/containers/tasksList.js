import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllTasks } from '../actions/task_actions';
import { completeTask } from '../actions/task_actions';
import CompleteTask from '../components/completeTask'

class TasksList extends Component {

    componentDidMount = () => {
        this.props.getAllTasks();
    };

    onClickHandler = (id) => {
        this.props.completeTask(id)
    }

    render = () => {
        return (
            <div>

                    {
                        this.props.tasks.map(value => {
                            return (
                                <div key={value.id}>
                                <span className={value.completed ? 'completed-task' : ''}>TASK NAME : {value.name}</span><CompleteTask completed={value.completed} clickHandler={() => this.onClickHandler(value.id)}/>
                                </div>
                            )
                        })
                    }

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
        getAllTasks : () => dispatch(getAllTasks()),
        completeTask : id => dispatch(completeTask(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)

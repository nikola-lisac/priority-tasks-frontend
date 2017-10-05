import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTask, deleteTask, getAllTasks, postponeTask, uncompletedTask} from '../actions/task_actions';
import TaskItem from '../components/taskItem';

class TasksList extends Component {

    componentDidMount = () => {
        this.props.getAllTasks();
    };

    onCompletedHandler = (id) => {
        this.props.completeTask(id);
    };

    onUncompletedHandler = (id) => {
        this.props.uncompletedTask(id);
    };

    onPostponeHandler = (id) => {
        this.props.postponeTask(id);
    };

    onDeleteHandler = (id) => {
        this.props.deleteTask(id);
    };

    getVisibleTasks = (tasks, filter) => {
        switch (filter) {
            case 'TODAY':
                return tasks.filter(task => !task.postpone);
            case 'TOMORROW':
                return tasks.filter(task => task.postpone);
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    };

    render = () => {
        let visibleTasks = this.getVisibleTasks(this.props.tasks, this.props.filter);
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="overflow-box">
                        {
                            visibleTasks.map((task) => {
                                    return (
                                        <TaskItem
                                            key={task.id}
                                            task={task}
                                            completed={task.completed}
                                            postpone={task.postpone}
                                            onToggleHandler={() => {
                                                if (!task.completed) {
                                                    return this.onCompletedHandler(task.id)
                                                } else {
                                                    return this.onUncompletedHandler(task.id)
                                                }
                                            }}
                                            onDeleteHandler={() => {
                                                return this.onDeleteHandler(task.id)
                                            }}
                                            onPostponeHandler={() => {
                                                return this.onPostponeHandler(task.id)
                                            }}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer,
        filter: state.filterReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeTask: id => dispatch(completeTask(id)),
        uncompletedTask: id => dispatch(uncompletedTask(id)),
        getAllTasks: () => dispatch(getAllTasks()),
        postponeTask: id => dispatch(postponeTask(id)),
        deleteTask: id => dispatch(deleteTask(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)

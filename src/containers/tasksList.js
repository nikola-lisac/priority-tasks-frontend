import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTask, getAllTasks, postponeTask, deleteTask, uncompletedTask} from '../actions/task_actions';
import TaskItem from '../components/taskItem';
import Button from '../components/button';

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
            <div>
                <div id="row" className="row">
                    {
                        visibleTasks.map((task) => {
                                return (
                                    <div
                                        id="tasks"
                                        key={Math.random()}
                                        className="col-sm-12 col-md-12 col-lg-12"
                                    >
                                        <TaskItem
                                            key={task.id}
                                            className={task.completed}
                                            task={task}
                                            completed={task.completed}
                                            onClick={() => {
                                                if (!task.completed) {
                                                    return this.onCompletedHandler(task.id)
                                                } else {
                                                    return this.onUncompletedHandler(task.id)
                                                }
                                            }}
                                            disabled={task.completed}
                                        />
                                        <Button
                                            text='Delete'
                                            onClick={() => this.onDeleteHandler(task.id)}
                                        />
                                        <Button
                                            text='Postpone'
                                            completed={task.postpone || task.completed}
                                            className={task.completed}
                                            onClick={() => this.onPostponeHandler(task.id)}
                                            disabled={task.completed || task.postpone}
                                        />
                                    </div>
                                )
                            }
                        )
                    }
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

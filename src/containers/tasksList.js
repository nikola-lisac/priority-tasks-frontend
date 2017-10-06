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
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="justify-content-center">
                        <div className="overflow-box">
                            {
                                visibleTasks.map((task, index) => {
                                        return (

                                            <TaskItem
                                                index={index}
                                                key={task.id}
                                                task={task}
                                                completed={task.completed}
                                                postpone={task.postpone}
                                                onToggleHandler={
                                                    (!task.completed) ?
                                                        () => this.onCompletedHandler(task.id) :
                                                        () => this.onUncompletedHandler(task.id)
                                                }
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

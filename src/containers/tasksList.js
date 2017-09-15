import React from 'react';
import {connect} from 'react-redux';
import {completeTask, getAllTasks, postponeTask} from '../actions/task_actions';
import TaskItem from '../components/taskItem';
import Button from '../components/button';


class TasksList extends React.Component {


    componentDidMount = () => {
        this.props.getAllTasks();
    };

    onClickHandler = (id) => {
        this.props.completeTask(id);
    };

    onPostponeHandler = (id) => {
        this.props.postponeTask(id);
    };

    render = () => {
        return (
            <div>
                {
                    this.props.tasks.map((task) => {
                            return <div id="tasks" key={Math.random()}>
                                <TaskItem
                                    className={task.completed}
                                    task={task}
                                />
                                <Button text='Postpone'
                                        completed={task.postponeTask || task.completed}
                                        className={task.completed}
                                        onClick={() => this.onPostponeHandler(task.id)}
                                        disabled={task.completed && task.postponeTask}/>
                                <Button text='Complete'
                                        completed={task.completed}
                                        className={task.completed}
                                        onClick={() => this.onClickHandler(task.id)}
                                        disabled={task.completed}/>

                            </div>
                        }
                    )
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
        completeTask: id => dispatch(completeTask(id)),
        getAllTasks: () => dispatch(getAllTasks()),
        postponeTask: id => dispatch(postponeTask(id))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);

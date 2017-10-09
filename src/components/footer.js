import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {getAllTasks} from '../actions/task_actions';


class Footer extends Component {

    getVisibleUncompletedTasks = (tasks, filter) => {
        switch (filter) {
            case 'TODAY':
                return tasks.filter(task => !task.postpone && !task.completed);
            case 'TOMORROW':
                return tasks.filter(task => task.postpone && !task.completed);
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    };
    render = () => {
        let visibleUncompletedTasks = this.getVisibleUncompletedTasks(this.props.tasks, this.props.filter);
        return (
            <div className="row">
                <div
                    className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 d-inline-flex">
                    <div className="col-xs-6 d-flex align-self-centers align-self-center panel footer-info">
                        {this.props.filter}: {moment(new Date()).format('[ ]dddd[,] MMMM Do Y[.]')}
                    </div>
                    <div className="col-xs-6 d-flex align-item-start panel footer-tasks">
                        <h5> {visibleUncompletedTasks.length} tasks left !</h5>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: state.taskReducer,
        filter: state.filterReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTasks: () => dispatch(getAllTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer)


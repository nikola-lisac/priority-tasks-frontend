import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';


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
    getCurrentDate = filter => {
        switch (filter) {
            case 'TODAY':
                return moment(new Date()).format('[ ]dddd[,] MMMM Do Y[.]');
            case 'TOMORROW':
                return moment().add(1, 'days').format('[ ]dddd[,] MMMM Do Y[.]');
            default:
                throw new Error('Unknown filter: ' + filter)
        }
    };
    render = () => {
        let visibleUncompletedTasks = this.getVisibleUncompletedTasks(this.props.tasks, this.props.filter);
        let numberOfTasks = visibleUncompletedTasks.length;
        let currentDateTomorrow = this.getCurrentDate(this.props.filter);
        return (
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 d-inline-flex">
                    <div className="col-xs-6 d-flex align-items-center align-self-justify panel footer-info">
                        <p>{this.props.filter}: {currentDateTomorrow}</p>
                    </div>
                    <div className="col-xs-6 d-flex align-items-center align-self-justify panel footer-tasks">
                        <p>
                            {visibleUncompletedTasks.length}
                            {numberOfTasks > 1 ?
                                " tasks left" :
                                numberOfTasks === 0 ?
                                    " No more tasks...Congratulations!" :
                                    " task left"
                            }
                        </p>
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

export default connect(mapStateToProps)(Footer)


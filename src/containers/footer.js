import React, {Component} from "react";
import moment from "moment";
import {connect} from "react-redux";


class Footer extends Component {

    getVisibleUncompletedTasks = (tasks, filter) => {
        switch (filter) {
            case "TODAY":
                return tasks.filter(task => !task.postpone && !task.completed);
            case "TOMORROW":
                return tasks.filter(task => task.postpone && !task.completed);
            default:
                throw new Error("Unknown filter: " + filter)
        }
    };
    getCurrentDate = filter => {
        switch (filter) {
            case "TODAY":
                return moment(new Date()).format("[ ]dddd[,] MMMM Do Y[.]");
            case "TOMORROW":
                return moment().add(1, "days").format("[ ]dddd[,] MMMM Do Y[.]");
            default:
                throw new Error("Unknown filter: " + filter)
        }
    };
    render = () => {
        let visibleUncompletedTasks = this.getVisibleUncompletedTasks(this.props.tasks, this.props.filter);
        let numberOfUncompletedTasks = visibleUncompletedTasks.length;
        let currentDate = this.getCurrentDate(this.props.filter);
        return (
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 d-inline-flex">
                    <div className="col-xs-6 d-flex justify-content-center panel footer-info">
                        <p className="align-self-center">{this.props.filter}: {currentDate}</p>
                    </div>
                    <div className="col-xs-6 d-flex justify-content-center panel footer-tasks">
                        <p className="align-self-center">
                            {numberOfUncompletedTasks !== 0 ? visibleUncompletedTasks.length : ""}
                            {numberOfUncompletedTasks === 0 ? "No more tasks...Congratulations!" :
                                numberOfUncompletedTasks === 1 ? " task left" : " tasks left"
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

export default connect(mapStateToProps)(Footer);


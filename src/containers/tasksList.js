import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllTasks} from '../actions/task_actions';

class TasksList extends Component {

    componentDidMount = () => {
        this.props.getAllTasks();
    };

    render = () => {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map(value => {
                            return <li key={value.id}>TASK NAME : {value.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.sort((a, b) => b.id - a.id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTasks: () => dispatch(getAllTasks())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)

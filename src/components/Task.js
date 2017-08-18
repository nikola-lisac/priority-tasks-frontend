import React, {Component} from 'react';
import {connect} from 'react-redux';
import { saveTask } from '../actions/task_actions.js';

class Task extends Component {
    render = () => {
        return (
            <input type="text" onKeyUp={(evt) => this.handleKeyPress(evt)}/>
        )
    };

    handleKeyPress = (evt) => {
        if (evt.keyCode === 13) {
            this.props.dispatchSaveAction(evt.target.value)
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSaveAction: newTask => dispatch(saveTask(newTask))
    }
};

export default connect(null, mapDispatchToProps)(Task);
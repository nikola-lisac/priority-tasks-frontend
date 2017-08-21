import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveTask} from '../actions/task_actions.js';

class Task extends Component {
    render = () => {
        return (
            <form onSubmit={(evt) => this.props.saveTask(evt)}>
                <input type="text"/>
            </form>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: evt => dispatch(saveTask(evt))
    }
};

export default connect(null, mapDispatchToProps)(Task);
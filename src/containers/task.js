import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveTask} from '../actions/task_actions.js';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    onChangeHandler = (evt) => {
        this.setState({task : evt.target.value})
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.props.saveTask(this.state.task);
        this.setState({task : ''})
    };

    render = () => {
        return (
            <form onSubmit={(evt) => this.onSubmitHandler(evt)}>
                <input value={this.state.task} type="text" onChange={(evt) => this.onChangeHandler(evt)}/>
            </form>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: inputValue => dispatch(saveTask(inputValue))
    }
};

export default connect(null, mapDispatchToProps)(Task);
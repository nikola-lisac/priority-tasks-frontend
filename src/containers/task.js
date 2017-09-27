import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveTask} from '../actions/task_actions.js';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            inputError: ''
        };
    };

    validateInputField = () => {
        let isError = false;
        const errors = {
            inputError: ''
        };
        if (this.state.task.length > 200) {
            isError = true;
            errors.inputError = 'Task is too long, 200 characters allowed!'
        }
        ;
        if (this.state.task.length === 0) {
            isError = true;
            errors.inputError = 'Please enter a task';
        }
        ;
        if (isError) {
            this.setState(errors);
        }
        ;
        return isError;
    };


    onChangeHandler = (evt) => {
        this.setState({
            task: evt.target.value,
            inputError: ''
        })
    };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        const error = this.validateInputField();
        if (!error) {
            this.props.saveTask(this.state.task);
            this.setState({
                task: '',
                inputError: ''
            })
        }
    };

    render = () => {
        return (
            <div className="container">
                <form onSubmit={(evt) => this.onSubmitHandler(evt)}>
                    <input
                        value={this.state.task}
                        type="text"
                        placeholder="Your next task..."
                        onChange={(evt) => this.onChangeHandler(evt)}
                    />
                    <p
                        style={{color: "red"}}>{this.state.inputError}
                    </p>
                </form>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: inputValue => dispatch(saveTask(inputValue))
    }
};

export default connect(null, mapDispatchToProps)(Task);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveTask} from '../actions/task_actions.js';
import {setVisibilityFilter} from "../actions/filter_actions";

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
        if (this.state.task.length === 0) {
            isError = true;
            errors.inputError = 'Please enter a task';
        }
        if (isError) {
            this.setState(errors);
        }
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
        const filter = 'TODAY';
        if (!error) {
            this.props.saveTask(this.state.task);
            this.setState({
                task: '',
                inputError: ''
            });
            this.props.setVisibilityFilter(filter);
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
        saveTask: inputValue => dispatch(saveTask(inputValue)),
        setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    }
};

export default connect(null, mapDispatchToProps)(Task);

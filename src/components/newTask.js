import React from 'react';
import PropTypes from 'prop-types';

const NewTask = (props) => (
    <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Your next task..."
        className={props.className}
    >
        {props.text}
    </input>
);

NewTask.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default NewTask;

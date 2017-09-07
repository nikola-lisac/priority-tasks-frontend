import React from 'react';
import PropTypes from 'prop-types';
const TaskItem = (props) => (
        <li>TASK NAME : {props.task.name}</li>
);

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;

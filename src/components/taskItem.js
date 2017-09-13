import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = (props) => (
    <div className={(props.task.complete) ? 'complete-task' : 'none'}>
        <h4>Task {props.task.id}:</h4>
        {props.task.name}
    </div>
);

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;

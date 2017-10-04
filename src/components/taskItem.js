import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = (props) => (
    <div
        className={
            props.task.completed ?
                'complete-task task-item' :
                'task-item'}
        onClick={props.onClick}
        disabled={props.completed}
    >
        {props.task.name}
    </div>
);

TaskItem.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default TaskItem;

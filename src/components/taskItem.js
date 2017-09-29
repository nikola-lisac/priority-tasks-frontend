import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = (props) => (
    <div
        id='task-item'
        className={
            props.task.completed ?
                'complete-task' :
                'none'}
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

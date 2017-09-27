import React from 'react';

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

export default TaskItem;

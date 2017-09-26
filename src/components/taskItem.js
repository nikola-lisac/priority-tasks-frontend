import React from 'react';

const TaskItem = (props) => (
    <div className={
        props.task.completed ?
            'complete-task' :
            'none'}
         onClick={props.onClick}
         disabled={props.completed}
    >
        <h5>Task name:</h5>
        {props.task.name}
    </div>
);

export default TaskItem;

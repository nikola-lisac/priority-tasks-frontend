import React from 'react';

const TaskItem = (props) => (
        <li>TASK NAME : {props.task.name}</li>
);

TaskItem.propTypes = {
    task: React.PropTypes.object.isRequired,
};

export default TaskItem;

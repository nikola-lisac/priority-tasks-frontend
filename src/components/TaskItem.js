import React from 'react';

const TaskItem = (props) => (
    <div>
        <li>TASK NAME : {props.task.name}</li>
    </div>
);

TaskItem.propTypes = {
    task: React.PropTypes.object.isRequired,
};

export default TaskItem;

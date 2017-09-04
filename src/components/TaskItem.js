import React from 'react';

const Task = (props) => (
    <div>
        <li>TASK NAME : {props.task.name}</li>
    </div>
);

Task.propTypes = {
    task: React.PropTypes.object.isRequired,
};

export default Task;

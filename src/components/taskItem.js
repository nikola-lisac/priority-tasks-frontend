import React from 'react';
import Button from "./button";

const TaskItem = (props) => (
    <div>
        <span className={props.task.completed ?
            'complete-task' : 'none'}>
            {props.task.name}
        </span>
        <Button
            text={props.task.completed ?
                'Incomplete' :
                'Complete'}
            className={props.task.completed ?
                'btn btn-default btn-sm glyphicon glyphicon-remove-circle' :
                'btn btn-default btn-sm glyphicon glyphicon-ok-circle'}
            onClick={props.onToggleHandler}
        />
        <Button
            text='Postpone'
            className={props.task.completed || props.task.postpone ?
                'hidden' :
                'btn btn-default btn-sm glyphicon glyphicon-time'}
            onClick={props.onPostponeHandler}
        />
        <Button
            text='Delete'
            className='btn btn-default btn-sm glyphicon glyphicon-trash'
            onClick={props.onDeleteHandler}

        />
    </div>
);

export default TaskItem;

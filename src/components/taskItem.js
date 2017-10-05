import React from 'react';
import Button from "./button";

const TaskItem = (props) => (
    <div className="row task">
        <div className="col-sm-12 d-inline-flex">
            <div className="col-sm-9 d-flex justify-content-left">
                <p className={props.task.completed ?
                    "complete-task" : "none"}>
                    {props.task.name}
                </p>
            </div>
            <div className="col-sm-3 d-flex justify-content-end">
                <Button
                    className={props.task.completed ?
                        "btn btn-default btn-sm glyphicon glyphicon-remove-circle" :
                        "btn btn-default btn-sm glyphicon glyphicon-ok-circle"}
                    onClick={props.onToggleHandler}
                />
                <Button
                    className={props.task.completed || props.task.postpone ?
                        "hidden" :
                        "btn btn-default btn-sm glyphicon glyphicon-time"}
                    onClick={props.onPostponeHandler}
                />
                <Button
                    className="btn btn-default btn-sm glyphicon glyphicon-trash"
                    onClick={props.onDeleteHandler}
                />
            </div>
        </div>
    </div>
);

export default TaskItem;

import React from 'react';
import Button from "./button";

const TaskItem = (props) => (
    <div className="row align-items-center task">
        <div className="col col-sm-12 d-inline-flex">
            <div className="col-xs-2 d-flex justify-content-start align-self-center">
                <div>No.{props.index}</div>
            </div>
            <div className="col-xs-7 offset-sm-0 align-item-start">
                <div className={props.task.completed ?
                    "complete-task" : "none"}>
                    {props.task.name}
                </div>
            </div>
            <div className="col-xs-3 d-flex justify-content-end">
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

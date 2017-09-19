import React from 'react';

const CompleteTask = (props) => {
    return (
        <button type="button" className="btn btn-primary" onClick={props.clickHandler} disabled={props.completed}><i className='fa fa-check'></i></button>
    )
};

export default CompleteTask;

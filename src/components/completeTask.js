import React from 'react';

const CompleteTask = (props) => {
    return (
        <button
            type="button"
            onClick={props.onChangeHandler}
            disabled={props.completed}
        />
    )
};

export default CompleteTask;

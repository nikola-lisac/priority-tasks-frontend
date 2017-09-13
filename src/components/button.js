import React from 'react'

const Button = (props) => (
    <button
        type="button"
        key={props.key}
        className={props.completed ? 'hidden' : 'btn btn-blue'}
        onClick={props.onClick}
        disabled={props.completed}
    >
        {props.text}
    </button>
);

export default Button;

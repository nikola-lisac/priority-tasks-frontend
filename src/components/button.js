import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button
        key={props.key}
        className={
            props.completed ?
                'hidden' :
                props.text === 'Postpone' ?
                    'glyphicon glyphicon-time' :
                    'glyphicon glyphicon-trash'}
        onClick={props.onClick}
        disabled={props.completed}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;

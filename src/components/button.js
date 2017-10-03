import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button id="button"
            key={props.key}
            className={
                props.completed ?
                    'hidden' :
                    props.text === 'Postpone' ?
                        'btn btn-default btn-sm glyphicon glyphicon-time' :
                        'btn btn-default btn-sm glyphicon glyphicon-trash'}
            onClick={props.onClick}
            disabled={props.completed}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;

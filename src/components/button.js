import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button
        key={props.key}
        className={
            props.complete ?
                'hidden' :
                props.text === 'Postpone' ?
                    'glyphicon glyphicon-time' :
                    'glyphicon glyphicon-trash'}
        onClick={props.onClick}
        disabled={props.complete}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    complete: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;

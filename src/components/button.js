import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <span
        type='button'
        onClick={props.onClick}
        className={props.className}
    >
        {props.text}
    </span>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;

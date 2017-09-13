import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => (
    <button
        type="button"
        key={props.key}
        className={props.complete ? 'hidden' : 'btn btn-blue'}
        onClick={props.onClick}
        disabled={props.complete}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    complete: PropTypes.bool.isRequired,
};

export default Button;

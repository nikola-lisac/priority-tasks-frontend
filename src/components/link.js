import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <li>
            <a href="#"
               onClick={e => {
                   e.preventDefault();
                   onClick()
               }}
            >
                {children}
            </a>
        </li>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};


export default Link;

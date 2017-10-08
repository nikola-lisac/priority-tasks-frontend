import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <ul className="nav ul-link">
            <li>
                <a className="nav-tabs a-link"
                   href={active}
                   onClick={e => {
                       e.preventDefault();
                       onClick()
                   }}
                >
                    {children}
                </a>
            </li>
        </ul>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;

import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (

    <ul className="nav navbar-right">
        <li>
            <FilterLink filter="TODAY">
                Today
            </FilterLink>
        </li>
        <li>
            <FilterLink filter="TOMORROW">
                Tomorrow
            </FilterLink>
        </li>
    </ul>
);

export default Tabs;

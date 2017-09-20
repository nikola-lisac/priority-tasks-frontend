import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (

    <ul className="nav nav-tabs navbar-right">
        <FilterLink filter="TODAY">
            <h4>Today</h4>
        </FilterLink>
        {" "}
        <FilterLink filter="TOMORROW">
            <h4>Tomorrow</h4>
        </FilterLink>
    </ul>
);

export default Tabs;

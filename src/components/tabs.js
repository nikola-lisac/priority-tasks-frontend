import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (

    <ul className="nav navbar-right">
        <FilterLink filter="TODAY">
            Today
        </FilterLink>
        <FilterLink filter="TOMORROW">
            Tomorrow
        </FilterLink>

    </ul>
);

export default Tabs;

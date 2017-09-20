import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (
    <div className="right-tabs clearfix">
        <ul className="nav nav-tabs">
            <FilterLink filter="TODAY">
                <h4>Today</h4>
            </FilterLink>
            {" "}
            <FilterLink filter="TOMORROW">
                <h4>Tomorrow</h4>
            </FilterLink>
        </ul>
    </div>
);

export default Tabs;

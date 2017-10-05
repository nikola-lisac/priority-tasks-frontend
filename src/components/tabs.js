import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (
    <div className="row">
        <div className="col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="nav nav-tabs nav-justified">
                <FilterLink filter="TODAY">
                    <h4>Today</h4>
                </FilterLink>
                <FilterLink filter="TOMORROW">
                    <h4>Tomorrow</h4>
                </FilterLink>
            </div>
        </div>
    </div>
);

export default Tabs;

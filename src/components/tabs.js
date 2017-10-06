import React from 'react';
import FilterLink from '../containers/filterLink';

const Tabs = () => (
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <div className="d-flex justify-content-center">
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

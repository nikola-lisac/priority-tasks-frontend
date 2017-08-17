import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';

describe('<App/>', function() {
    it('contains simple div', function() {
        expect(shallow(<App/>).contains(
            <div>
                <h1>Priority Tasks</h1>
            </div>
        )).toBe(true);
    });

    it('should render to static HTML', function() {
        expect(render(<App />).text()).toEqual('Priority Tasks');
    });

});
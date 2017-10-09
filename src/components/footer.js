import React, {Component} from 'react';
import moment from 'moment';

class Footer extends Component {

    render = () => {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                    <div className="d-flex justify-content-left panel">
                        <h4>{moment(new Date()).format('dddd')}... 16 tasks left!</h4>
                    </div>
                </div>
            </div>
        )
    }
};

export default Footer;

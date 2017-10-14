import React from "react";
import {connect} from "react-redux";
import Notification from "./notification";
import Confirmation from "./confirmation";

import {MODAL_TYPE_CONFIRMATION, MODAL_TYPE_NOTIFICATION} from "../actions/type";

const MODAL_COMPONENTS = {
    [MODAL_TYPE_NOTIFICATION]: Notification,
    [MODAL_TYPE_CONFIRMATION]: Confirmation
};

const ModalRoot = ({type, props}) => {
    if (!type) {
        return null;
    }

    const ModalComponent = MODAL_COMPONENTS[type];
    return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);

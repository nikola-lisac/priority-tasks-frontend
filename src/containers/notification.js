import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {hideModal} from "../actions/modal_actions";
import Modal from "../components/taskModal";

const Notification = ({title, afterClose, hideModal}) => {
    const onClose = () => {
        hideModal();

        if (afterClose) {
            afterClose();
        }
    };

    return (
        <Modal title={title} onClose={onClose}>
            <button onClick={onClose}>
                Ok
            </button>
        </Modal>
    );
};

Notification.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default connect(null, {hideModal})(Notification);

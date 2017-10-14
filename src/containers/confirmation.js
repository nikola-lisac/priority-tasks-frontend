import React from "react";
import {connect} from "react-redux";
import {hideModal} from "../actions/modal_actions";
import Modal from "../components/taskModal";

const Confirmation = ({title, onConfirm, hideModal}) => {
    const handleConfirm = (isConfirmed) => () => {
        hideModal();
        onConfirm(isConfirmed);
    };

    return (
        <Modal title={title}>
            <button onClick={handleConfirm(true)}>
                Yes
            </button>
            <button onClick={handleConfirm(false)}>
                No
            </button>
        </Modal>
    );
};

export default connect(null, {hideModal})(Confirmation);

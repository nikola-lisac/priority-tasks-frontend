import React, {Component} from "react";
import {connect} from "react-redux";
import {MODAL_TYPE_CONFIRMATION, MODAL_TYPE_NOTIFICATION, showModal} from "../actions/modal_actions";

@connect(null, {showModal})
export default class LoginView extends Component {
    showNotification = () => {
        this.props.showModal(MODAL_TYPE_NOTIFICATION, {
            title: "This is an awesome notification."
        });
    };

    showConfirm = () => {
        this.props.showModal(MODAL_TYPE_CONFIRMATION, {
            title: "Do you confirm?",
            onConfirm: (isConfirmed) => {
                this.props.showModal(MODAL_TYPE_NOTIFICATION, {
                    title: "The user did confirm: " + isConfirmed
                });
            }
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.showNotification}>
                    Show modal
                </button>
                <button onClick={this.showConfirm}>
                    Show confirm
                </button>
            </div>
        )
    }
}

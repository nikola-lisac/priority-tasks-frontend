import {HIDE_MODAL, SHOW_MODAL} from "../actions/type";

const initialState = {
    type: null,
    props: {}
};

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                type: action.payload.type,
                props: action.payload.props
            };
        case HIDE_MODAL:
            return initialState;
        default:
            return state;
    }
}

export default modalReducer;

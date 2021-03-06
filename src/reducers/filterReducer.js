import {SET_VISIBILITY_FILTER} from "../actions/type";

const filterReducer = (state = "TODAY", action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER :
            return action.filter;
        default:
            return state
    }
};

export default filterReducer;

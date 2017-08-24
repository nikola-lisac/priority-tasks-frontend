import {SAVE_TASK} from '../actions/type';
import {ALL_TASKS} from '../actions/type';

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_TASK :
            return Object.assign([], state.concat(action.payload));

        case ALL_TASKS :
            return action.payload;

        default :
            return state;
    }

};

export default taskReducer;
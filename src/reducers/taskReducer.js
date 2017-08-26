import {SAVE_TASK} from '../actions/type';
import {GET_ALL_TASKS} from '../actions/type';

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_TASK :
            return [action.payload, ...state];

        case GET_ALL_TASKS :
            return action.payload;

        default :
            return state;
    }

};

export default taskReducer;

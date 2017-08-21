import { SAVE_TASK } from '../actions/type';

const taskReducer = (state = {}, action) => {

    switch (action.type) {
        case SAVE_TASK :
            return state;

        default :
            return state;
    }

};

export default taskReducer;
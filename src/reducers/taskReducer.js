import { SAVE_TASK } from '../actions/type';
import { ALL_TASKS } from '../actions/type';

let initState = {
    allTasks: []
};

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case SAVE_TASK :
            return state;

        case ALL_TASKS :
            return state;

        default :
            return state;
    }

};

export default taskReducer;
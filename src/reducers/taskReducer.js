import { SAVE_TASK } from '../actions/type';
import { ALL_TASKS } from '../actions/type';

const INIT_STATE = {
    allTasks: []
};

const taskReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SAVE_TASK :
            return { ...state, allTasks : state.allTasks.concat(action.payload)};

        case ALL_TASKS :
            return { ...state, allTasks : action.payload };

        default :
            return state;
    }

};

export default taskReducer;
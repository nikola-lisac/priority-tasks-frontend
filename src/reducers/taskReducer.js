import {SAVE_TASK} from '../actions/type';
import {GET_ALL_TASKS} from '../actions/type';
import {COMPLETE_TASK} from '../actions/type';
import {POSTPONE_TASK} from '../actions/type'

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_TASK :
            return [action.payload, ...state];

        case GET_ALL_TASKS :
            return action.payload;

        case COMPLETE_TASK:
            let position = 0;
            let task = {};

            let arr = state.map((value, index) => {

                if (value.id === action.payload && value.completed === false) {
                    position = index;
                    task = {...value, completed: true};
                    return task;
                }

                return value;
            });

            return [
                ...arr.slice(0, position),
                ...arr.slice(position + 1),
                task
            ];

        /* Thanks Bojan Jakic */

        //  This also works :
        // let arr = state.slice();
        // for(let [index, value] of arr.entries()) {
        //     if(value.id === action.payload && value.completed === false) {
        //         arr.splice(index, 1);
        //         arr.push({...value, completed : true})
        //     }
        // }
        // return arr;

        case POSTPONE_TASK :
            let positionPostponeTask = 0;
            let taskPostpone = {};

            let arrPostponeTask = state.map((value, index) => {
                if (value.id === action.payload && value.completed === false) {
                    positionPostponeTask = index;
                    taskPostpone = {...value, postponeTask: true};
                    return taskPostpone;
                }
                return value;
            });
            return [
                taskPostpone,
                ...arrPostponeTask.slice(0, positionPostponeTask),
                ...arrPostponeTask.slice(positionPostponeTask + 1),

            ];

        default :
            return state;
    }

};
export default taskReducer;


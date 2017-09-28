import {SAVE_TASK} from '../actions/type';
import {GET_ALL_TASKS} from '../actions/type';
import {COMPLETE_TASK} from '../actions/type';
import {UNCOMPLETED_TASK} from "../actions/type";
import {POSTPONE_TASK} from '../actions/type';
import {DELETE_TASK} from '../actions/type';
import moment from 'moment';

const taskReducer = (state = [], action) => {
    switch (action.type) {

        case SAVE_TASK :
            return [action.payload, ...state];

        case GET_ALL_TASKS :
            let arrGet = action.payload.map((value) => {
                if (value.createdAt > moment().format('YYYY-MM-DD')) {
                    value = {...value, postpone: true};
                    return value;
                }
                return value;
            });
            return [
                ...arrGet
            ];

        case COMPLETE_TASK:
            let positionComplete = 0;
            let taskComplete = {};

            let arrComplete = state.map((value, index) => {

                if (value.id === action.payload && value.completed === false) {
                    positionComplete = index;
                    taskComplete = {...value, completed: true};
                    return taskComplete;
                }

                return value;
            });

            return [
                ...arrComplete.slice(0, positionComplete),
                ...arrComplete.slice(positionComplete + 1),
                taskComplete
            ];

        case UNCOMPLETED_TASK:
            let positionUncompleted = 0;
            let taskUncompleted = {};

            let arrUncompleted = state.map((value, index) => {

                if (value.id === action.payload && value.completed === true) {
                    positionUncompleted = index;
                    taskUncompleted = {...value, completed: false};
                    return taskUncompleted;
                }

                return value;
            });

            return [
                taskUncompleted,
                ...arrUncompleted.slice(0, positionUncompleted),
                ...arrUncompleted.slice(positionUncompleted + 1)
            ];

        case POSTPONE_TASK :
            let positionPostponeTask = 0;
            let taskPostpone = {};

            let arrPostponeTask = state.map((value, index) => {
                if (value.id === action.payload && value.completed === false) {
                    positionPostponeTask = index;
                    taskPostpone = {...value, postpone: true};
                    return taskPostpone;
                }
                return value
            });
            return [
                taskPostpone,
                ...arrPostponeTask.slice(0, positionPostponeTask),
                ...arrPostponeTask.slice(positionPostponeTask + 1),

            ];

        case DELETE_TASK :
            return [action.payload, ...state];

        default :
            return state;
    }

};

export default taskReducer;

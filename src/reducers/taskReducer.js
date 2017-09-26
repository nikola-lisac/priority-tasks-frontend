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

        case UNCOMPLETED_TASK:
            let positionUn = 0;
            let taskUn = {};

            let arrUn = state.map((value, index) => {

                if (value.id === action.payload && value.completed === true) {
                    positionUn = index;
                    taskUn = {...value, completed: false};
                    return taskUn;
                }

                return value;
            });

            return [
                taskUn,
                ...arrUn.slice(0, positionUn),
                ...arrUn.slice(positionUn + 1)
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
                return value;
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

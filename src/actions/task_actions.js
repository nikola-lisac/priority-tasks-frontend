import {SAVE_TASK} from './type';
import {GET_ALL_TASKS} from './type';
import {COMPLETE_TASK} from './type';
import {POSTPONE_TASK} from './type';
import axios from 'axios';
import moment from 'moment';

export const saveTask = inputsValue => {
    const url = 'http://localhost:8080/tasks';
    var task = {
        name: inputsValue,
        createdAt: moment().format('YYYY-MM-DD'),
        completed: false
    };

    return (dispatch) => {
        return axios.post(url, task).then(response => {
            dispatch({
                type: SAVE_TASK,
                payload: response.data
            });
        }).catch(error => {
            console.log(error)
        });
    }
};

export const getAllTasks = () => {
    const url = 'http://localhost:8080/tasks';
    return (dispatch) => {
        return axios.get(url).then(response => {
            dispatch({
                type: GET_ALL_TASKS,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
};

export const completeTask = id => {
    const url = 'http://localhost:8080/tasks/' + id;
    return (dispatch) => {
        return axios.put(url).then(response => {
            dispatch({
                type: COMPLETE_TASK,
                payload: id
            })
        }).catch(error => {
            console.log(error)
        })
    }
};

export const postponeTask = id => {
    const url = 'http://localhost:8080/tasks/' + id;
    return (dispatch) => {
        return axios.post(url).then(response => {
            dispatch({
                type: POSTPONE_TASK,
                payload: id
            })
        }).catch(error => {
            console.log(error)
        })
    }
};

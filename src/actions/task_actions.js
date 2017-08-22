import {SAVE_TASK} from './type';
import {ALL_TASKS} from './type';
import axios from 'axios';

export const saveTask = inputsValue => {
    const url = 'http://localhost:8080/tasks';
    var task = {
        name: inputsValue,
        createdAt: new Date(),
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
                type : ALL_TASKS,
                payload : response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
};

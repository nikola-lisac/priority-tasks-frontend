import {SAVE_TASK} from './type';
import axios from 'axios';

export const saveTask = inputsValue => {
    let url = 'http://localhost:8080/tasks';
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

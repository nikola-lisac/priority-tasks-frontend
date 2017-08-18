import {SAVE_TASK} from './type';
import axios from 'axios';

export const saveTask = newTask => {

    var url = 'http://localhost:8080/tasks';
    var task = {
        id: 1, //id will be removed after we fix auto-increment functionality on server side
        name: newTask,
        createdAt: new Date(),
        completed: false
    };

    return (dispatch) => {
        return axios.post(url, task).then(response => {
            dispatch({
                type: SAVE_TASK,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
        });
    }
};

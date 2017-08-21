import {SAVE_TASK} from './type';
import axios from 'axios';

export const saveTask = evt => {
    evt.preventDefault();
    let form = evt.target;
    let input = form.childNodes[0];
    let url = 'http://localhost:8080/task';

    var task = {
        name: input.value,
        createdAt: new Date(),
        completed: false
    };

    return (dispatch) => {
        return axios.post(url, task).then(response => {
            dispatch({
                type: SAVE_TASK,
                payload: response.data
            });

            form.reset();
        }).catch(error => {
            console.log(error)
        });
    }
};

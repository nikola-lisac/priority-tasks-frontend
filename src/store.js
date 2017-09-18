import {createStore, applyMiddleware} from 'redux';
import taskReducer from './reducers/taskReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const store = createStore(
    taskReducer,
    applyMiddleware(
        logger(),
        thunk
    )
);

export default store;

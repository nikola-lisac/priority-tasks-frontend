import {createStore, applyMiddleware, combineReducers} from 'redux';
import taskReducer from './reducers/taskReducer';
import filterReducer from './reducers/filterReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const store = createStore(
    combineReducers({
        taskReducer,
        filterReducer
    }),
    applyMiddleware(
        logger(),
        thunk
    )
);

export default store;

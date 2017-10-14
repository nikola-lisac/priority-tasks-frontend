import {applyMiddleware, combineReducers, createStore} from "redux";
import taskReducer from "./reducers/taskReducer";
import filterReducer from "./reducers/filterReducer";
import modalReducer from "./reducers/modalReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
    taskReducer,
    filterReducer,
    modalReducer
});

const store = createStore(
    reducers,
    applyMiddleware(
        logger(),
        thunk
    )
);

export default store;

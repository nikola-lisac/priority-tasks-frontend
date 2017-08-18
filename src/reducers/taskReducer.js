const taskReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SAVE_TASK' :
            /*
            * I'm not sure what to do here, because i don't know exactly how UI would looks like
            * I presume that i should update state by adding newly created task to the existing task's list
            * If so, i need #14-Get_All_Task ticket done to accomplish this piece of code
            */
            return state;

        default :
            return state;
    }

};

export default taskReducer;
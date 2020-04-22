import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

const message = (state = [], action) => {
    switch(action.type) {
        case LOAD_MESSAGES: {
            return [...action.messages]
        }
        case REMOVE_MESSAGE: {
            console.log("REMOVE_MESSAGE")
            console.log(action)
            return state
            // return state.filter(messages => messages._id !== action.id);
        }
        default: {
            return state;
        }
    }
};

export default message;

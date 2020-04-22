import { apiCall } from '../../services/api';
import { ADD_ERROR, LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';
import { addError } from './errors';

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall('get', '/api/messages')
        .then(res => dispatch(loadMessages(res)))
        .catch(err => addError(err.message));
    };
};

export const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/messages`, {text})
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
}


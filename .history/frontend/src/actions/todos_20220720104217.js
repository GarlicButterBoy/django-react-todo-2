import axios from 'axios';
import { reset } from 'redux-form'; // added
import { GET_TODOS, ADD_TODO } from './types'; // added ADD_TODO

//GET TODOS
export const getTodos = () => async dispatch => {
    const res = await axios.get('/api/todos/');
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });
};
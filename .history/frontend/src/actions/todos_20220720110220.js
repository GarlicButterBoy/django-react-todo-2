import axios from "axios";
import { reset } from "redux-form";  
import { GET_TODOS, ADD_TODO } from "./types";   ADD_TODO

//GET TODOS
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("/api/todos/");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

// ADD TODO
export const addTodo = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/todos/", { ...formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data,
  });
  dispatch(reset("todoForm"));
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {  
  await axios.delete(`/api/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
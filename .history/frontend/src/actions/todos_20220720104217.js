import axios from "axios";
import { reset } from "redux-form";
import { GET_TODOS, ADD_TODO } from "./types";
ADD_TODO;

//GET TODOS
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("/api/todos/");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

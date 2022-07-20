import _ from "lodash";
import { GET_TODOS, ADD_TODO } from "../actions/types";
ADD_TODO;

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    default:
      return state;
  }
};

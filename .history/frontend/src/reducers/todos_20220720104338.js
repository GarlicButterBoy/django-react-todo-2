import _ from "lodash";
import { GET_TODOS, ADD_TODO } from "../actions/types"; // added ADD_TODO

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    case ADD_TODO: // added
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};

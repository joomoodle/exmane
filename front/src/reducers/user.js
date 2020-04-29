import { GET_COMMENTS } from "../actions/user";

const initialState = {
  books: [],
  error: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        error: null,
        books: action.books,
      };
    default:
      return state;
  }
}

import { createStore } from "redux";

const initialState = {
  userId: "1112"
};

const reducer = (state = initialState, action) => {
  return state;
};

export default createStore(reducer);

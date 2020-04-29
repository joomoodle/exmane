import api_ from "../services/api_";

import { UrlBase } from "../Enviroment";
import * as signalR from "@aspnet/signalr";

export const GET_COMMENTS = "GET_COMMENTS";

export const setComments = (books) => ({
  type: GET_COMMENTS,
  books,
});

export const getBooks = () => async (dispatch) => {
  const response = await api_.getBooks();
  if (response.ok) {
    const payload = response.data;
    if (payload) {
      dispatch(setComments(payload));
      return payload;
    } else {
      return false;
    }
  } else {
    const payload = response.data;
    return false;
  }
};
export const saveBooks = (data) => async (dispatch) => {
  const response = await api_.postSaveBook(data);
  if (response.ok) {
    const payload = response.data;
    if (payload) {
      return payload;
    } else {
      return false;
    }
  } else {
    return 0;
  }
};

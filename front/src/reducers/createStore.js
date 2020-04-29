import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const enhancer = compose(applyMiddleware(thunk));
const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);

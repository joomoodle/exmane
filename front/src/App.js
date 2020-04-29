import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { persistor, store } from "./reducers/createStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Routes from "./Routes";


const historyConfig = {
  basename: 'examen'
};
const browserHistory = createBrowserHistory(historyConfig);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
export default App;

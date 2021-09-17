import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { store } from "store";
import TodoPage from "features/Todo";
import history from "utils/history";
import Alert from "components/Alert";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={TodoPage} />
      </Router>
      <Alert />
    </Provider>
  );
}

export default App;

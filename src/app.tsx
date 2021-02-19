import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import LayoutPage from "layout";
import { devToolsEnhancer } from "redux-devtools-extension";
import MainPage from "pages/main-page";
import SecondPage from "pages/second-page";

// const store = createStore(rootReducer, devToolsEnhancer({}));

const App = () => (
  // <Provider store={store}>
  <Router>
    <LayoutPage>
      <>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/second-page" component={SecondPage} />
      </>
    </LayoutPage>
  </Router>
  // </Provider>
);
export default App;

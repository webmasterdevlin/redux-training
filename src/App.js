import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./shared/components/HeaderNav";
import RootRouter from "./root-router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <HeaderNav />
          <div className="container">
            <RootRouter />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

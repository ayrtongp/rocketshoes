import React from "react";
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'
import Header from "./components/Header";
import Routers from "./routes";

import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Routers />
        <GlobalStyle />
        <ToastContainer autoClose={4000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

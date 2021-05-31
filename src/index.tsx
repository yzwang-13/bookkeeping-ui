import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import {AuthContextProvider} from "./context/authContext";

ReactDOM.render(
    <AuthContextProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </AuthContextProvider>
    ,
    document.getElementById('root')
);


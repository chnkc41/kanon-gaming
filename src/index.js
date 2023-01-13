import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import App from './App'; 
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";

const store = configureStore() 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
);



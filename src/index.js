import React from "react";
import { render } from "react-dom";
import './style.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";


const index = () => {
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
};

render(<App />, document.getElementById('root'));

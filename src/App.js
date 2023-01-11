import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './style.css';



const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </div>
    )
}

export default App;
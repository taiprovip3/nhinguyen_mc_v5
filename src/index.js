import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
            <div className="header">
                <h2>This is a message from src/index.js</h2>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
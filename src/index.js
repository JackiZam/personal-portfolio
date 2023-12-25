import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import "./assets/fonts/Montserrat/static/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat/static/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat/static/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat/static/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat/static/Montserrat-Thin.ttf";
import "./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
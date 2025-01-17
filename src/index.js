import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router } from 'react-router-dom';
import { CategoryProvider} from "./context/categoriesContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
    <Router>
    <App /> 
    </Router>
    </CategoryProvider>
   
    
  </React.StrictMode>
);



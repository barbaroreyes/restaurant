import React from 'react';
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <nav className= "navbar navbar-expand-lg navbar-dark bg-dark rounded m-top">
        <ul className= "navBar-nav mr-auto d-flex  justify-content-center align-items-center">
         <li className= " nav-item">
            <Link to="/" className="nav-link text-white m-3">Home</Link>
         </li>
         <li className= "nav-item">
            <Link to="/login" className="nav-link text-white m-3">Login</Link>
         </li>
         <li className= "nav-item">
            <Link to="/register" className="nav-link text-white m-3">Registration</Link>
         </li>
        




        </ul>
      </nav>
    </div>
  );
}

export default Menu;

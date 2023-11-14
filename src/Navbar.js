import React from "react";
import { NavLink } from "react-router-dom";
import sr from "../src/images/sr.png";
import './Navbar.css'

const Navbar =() =>{
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className=" mx-auto">

        <nav className="navbar navbar-expand-lg navbar-light" 
        style={{
          backgroundColor: '#e3f2fd',
          }}
        >
  <div className="container-fluid">
  <NavLink class="navbar-brand" href="#">
      <img src={sr} alt="" width="104" height="80"/>
    </NavLink>
    <NavLink className="navbar-brand" to="/" activwClassName="nav_active" 
    style={ {
            fontWeight: 'bold',
            borderBottom: '1px solid',
        }}
    >Siddhant Roy</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/"
              style={{
              color: '#565387',
              fontFamily:'monospace',
              
              }}
          >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Books"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Books</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/HandWritten"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Subjects"
              style={{
                color: '#565387',
                fontFamily:'monospace',
                }}
          >Contact-Us</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>

        </>
    )
}

export default Navbar;
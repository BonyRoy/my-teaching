import React from "react";
import { NavLink } from "react-router-dom";
import dance from "../src/images/dance.jpg";
//import Chatbox from "./Chatbox";
import './Home.css';

const Contactus =()=>{
    return(
        <>
        <br></br>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">

      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br> <br></br><br></br>
      <h1 style={{color: '#3498db',}}>Contact Us:</h1>
      <br></br>
      <h6>Feel free to reach out to us with any questions, concerns, or feedback. We're here to help!</h6>
      <br></br>
      <h6>Phone: +91-836-987-7891</h6>
      <h6>Email: <NavLink to="https://mail.google.com/mail/u/0/#inbox">siddhantroy225@gmail.com</NavLink></h6>
      <h6>Connect with Us on LinkedIn: <NavLink to="https://www.linkedin.com/in/siddhant-roy-6b2448246/">LinkedIn Profile</NavLink></h6>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img"> 
        <img src={dance} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
        </>
        );
};

export default Contactus;
import React from "react";
import { NavLink } from "react-router-dom";
import dance from "../src/images/dance.png";
//import Carousel from "./Carousel";
//import one from "../src/images/one.png";
//import Chatbox from "./Chatbox";
import './Home.css';

const Home =()=>{
  return(
      <>
      <br></br>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">

      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h2 >Get ready for your exams with our </h2>
      <h2 className="brand-name"
          style={{
          color: '#3498db',
          }}>Handwritten IT/ComputerScience Engineering Notes</h2>
      <div className="mt-3">
      <NavLink to="/HandWritten" className="get-started">Get Started</NavLink>
      </div>

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

export default Home;

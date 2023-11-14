import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Subjects from "./Contactus";
import Books from "./Books";
import HandWritten from "./HandWritten";
import Navbar from "./Navbar";
import { Routes ,Route } from 'react-router-dom';
import Footer from './Footer';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Subjects" element={<Subjects/>}/>
            <Route path="/Books" element={<Books/>}/>
            <Route path="/HandWritten" element={<HandWritten/>}/>
        </Routes>
        <Footer />
        </>
        );
};

export default App;

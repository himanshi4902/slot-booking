import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Pending from './pages/Pending';
import Approved from './pages/Approved';
import Declined from './pages/Declined';
import Inbar from './Inbar';
import Navbar from './Navbar';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  let component
  switch (window.location.pathname){
    case "/Pending":
      component =<Pending />
      break
    case "/Approved":
      component =<Approved />
      break
    case "/Declined":
      component =<Declined />
      break
  }
  return(
    <>
      <Navbar />
      <div className='wh-body'>
        <h4 className='welcome'>Welcome Celestial !</h4>
        <div className="cont">
          <Inbar />
          {component}
        </div>
      </div>
    </>
  )
  
}

export default App;

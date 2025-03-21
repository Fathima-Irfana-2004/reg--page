import React from 'react';
import './Home.css'
import {Routes,Route} from "react-router-dom";
import Home from './home';
import Createaccount from './Createaccount';

function App() {

  return (
      
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Createaccount" element={<Createaccount/>}/>
      </Routes>
   
     
   
  );
}

export default App

import React from 'react';

import './Landing.css'

import {Routes,Route} from "react-router-dom";
import Createaccount from './Createaccount';
import Landing from './Landing';


function App() {

  return (
      
    
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Createaccount" element={<Createaccount/>}/>
      </Routes>
   
     
   
  );
}

export default App

import React from 'react';
import './Createaccount.css';
import Lottie from 'lottie-react';
import SuccessAni from "./success.json";

const Createaccount = () => {
  return (
    <>
    <div className='content'>
    <div className='ani'>
    <Lottie
    animationData={SuccessAni}
    /> 
    </div>
    <div className='done'>
      <h3 className='message'> You have Successully Created your Account</h3>
    </div>
    </div>
    </>
  );
}

export default Createaccount;
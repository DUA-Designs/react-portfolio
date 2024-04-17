import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import { Main } from './portfolio';
 
 
 const Preloader=()=>{
  const [preloader,setPreloader]=useState(true);
  useEffect(()=>{
      setTimeout(()=>{
         setPreloader(false);
      },3000);

  },[])


  return (preloader?<div class="loading-container">
  <div class="loading-text">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
</div>:<Main/>)
 };
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <Preloader/>
  </React.StrictMode>
);

 

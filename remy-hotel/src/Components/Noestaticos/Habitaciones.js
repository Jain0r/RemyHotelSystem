import React, { useState } from 'react';
import Navbar from '../Estaticos/Navbar';
import Footer from '../Estaticos/Footer';
import Datahabi from './datahabi.json'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';


const  Habitaciones = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='main_container'>
        <p>Nuestras Habitaciones</p>
      <div className="container_habi">
       {
         Datahabi && Datahabi.map( data => {
           return(
           <div className='images_container' key={data.id}>
             <h4>{data.section}</h4>
             <p>{data.sub_section}</p>
             <img  className='images_hab' src={`${data.image}`}></img>
           </div>
           )
         })
       }
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Habitaciones;

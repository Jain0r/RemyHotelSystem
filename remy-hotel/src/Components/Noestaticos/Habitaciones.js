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
             <div className='hab_overlay_container'>
            <div className='title_hab_overlay_container'>
             <h4>{data.section}</h4>
             </div>
             <div className='info_hab_overlay_container'>
             <p>{data.sub_section}</p>
             </div>
             <div>
             <strong>Precio por noche: </strong>
             <span>{data.price}</span>
             <form action=''>
             <button type='submit'  className='hab_reservar_button'>Reservar</button>
             </form>
             </div>
             </div>
             <div className='image_overlay_container'>
             <img  className='images_hab' src={`${data.image}`}></img>
             </div>
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

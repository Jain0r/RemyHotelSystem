import React, { useState } from 'react';
import Navbar from '../Estaticos/Navbar';
import Footer from '../Estaticos/Footer';



const  Habitaciones = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <header>
       <div className='hotelwall'>
         <div className='hotelwall-overlay'>
           <div>
            <h1>Habitaciones page</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
           </div>
         </div>
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}
export default Habitaciones;
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Estaticos/Navbar';
import Footer from './Components/Estaticos/Footer';
import Home from './Components/No estaticos/Home';
import Habitaciones from './Components/No estaticos/Habitaciones';
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/Habitaciones' element={<Habitaciones/>}/>
      </Routes>
    </div>
  );
}
export default App;























/** import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header>
       <div className='hotelwall'>
         <div className='hotelwall-overlay'>
           <div>
            <h1>Remy Hotel</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
           </div>
         </div>
        </div>
        <div>
          
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App; **/

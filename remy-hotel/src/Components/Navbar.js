import React, { useState } from 'react';
import logorh from './rhlogo.svg';
import logorhwt from './rhlogowt.svg'



function Navbar() {
    return (
        <nav>
        <div className="logo_container">
            <a href="" section="">
            <img src={logorh} className="logorh" alt="logo" />
            <img src={logorhwt} className="logorhwt" alt="logo" />
            </a>
        </div>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
            <i class=" bi bi-list"></i>
        </label>
        <ul>
            <li><i class="fas fa-home"></i><a href="index.html" section="">Inicio</a></li>
            <li><i class="fas fa-building"></i><a href="" section="">Nosotros</a></li>
            <li><i class="fas fa-bed"></i><a href="" section="">Habitaciones</a></li>
            <li><i class="fas fa-image"></i><a href="" section="">Galeria</a></li>
            <li><i class="fas fa-phone"></i><a href="" section="">Contacto</a>
            </li>
        </ul>
        <form action=''>
        <button type='submit'  className='reservar_button'>Reservar <i class="fas fa-calendar-alt"></i></button>
        </form>
        </nav>
    );
  }
  
  export default Navbar;
  
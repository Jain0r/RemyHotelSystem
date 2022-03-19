import React, { useState } from 'react';
import Habitaciones from './Habitaciones';
import logorh from './rhlogo.svg';
import logorhwt from './rhlogowt.svg';
import {Link} from 'react-router-dom';





function Navbar() {
    return (
        <nav>
        <div className='logo_container'>
            <a href="" section="">
            <img src={logorh} className='logorh' alt="logo" />
            <img src={logorhwt} className='logorhwt' alt="logo" />
            </a>
        </div>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
            <i className='bi bi-list'></i>
        </label>
        <ul>
            <li><i className='fas fa-home'></i>
            <Link to='/'>Inicio</Link>
            </li>
            <li><i className='fas fa-building'></i><a href="" section="">Nosotros</a></li>
            <li><i className='fas fa-bed'></i>
            <Link to='/Habitaciones'>Habitaciones</Link>
            </li>
            <li><i className='fas fa-image'></i><a href="" section="">Galeria</a></li>
            <li><i className='fas fa-phone'></i><a href="" section="">Contacto</a>
            </li>
        </ul>
        <form action=''>
        <button type='submit'  className='reservar_button'>Reservar <i className='fas fa-calendar-alt'></i></button>
        </form>
        </nav>
    );
  }
  
  export default Navbar;
  
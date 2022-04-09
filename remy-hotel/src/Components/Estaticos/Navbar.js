import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import  NavbarData  from './datanavbar.json';
import logorhwt from '../assets/rhlogowtwhite.svg';
import '../css/navbar.css'



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
        <div className='logo_container' >
            <Link to='/'>
            <img src={logorhwt} className='logorhwt' alt="logo" />
            </Link>
        </div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='nav-menu-close-container'>
        <Link to='#' className='close-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
        </div>
        <div className='nav-menu-items-container'>
          <ul className='nav-menu-items'>
            {
              NavbarData.map(({id, section, path, cName}) => {
                return (
                    <li key={id}>
                    <Link to={path} onClick={showSidebar} className={cName}>{section}</Link>
                    </li>
                )
            }) 
            }
          </ul>
          </div>
        </nav>
    </>
  );
}
export default Navbar;

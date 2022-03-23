import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import  NavbarData  from './datanavbar.json';
import logorhwt from '../Estaticos/img/rhlogowtwhite.svg'



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
        <div className='logo_container' >
            <Link to='/' smooth={true} duration={500}>
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
              NavbarData && NavbarData.map(data => {
                return (
                    <li key={data.id}>
                    <Link to={`${data.path}`} onClick={showSidebar} className={data.cName}>{data.section}</Link>
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
  /**
   const Navbar =() => {
    return (
        <nav>
        <div className='logo_container' >
            <NavLink to='/' smooth={true} duration={500}>
            <img src={logorhwt} className='logorhwt' alt="logo" />
            </NavLink>
        </div>
        <input type="checkbox" id="check"></input>
        <label for="check" className='checkbtn'>
            <i className='bi bi-list'></i>
        </label>
        {
        <ul> 
            {DataNavbar && DataNavbar.map(data => {
                return (
                    <li key={data.id}>
                    <NavLink to={`${data.path}`}>{data.section}</NavLink>
                    </li>
                )
            }) }
        </ul>
         }
        </nav>
    );
  }
  
  export default Navbar;
   */
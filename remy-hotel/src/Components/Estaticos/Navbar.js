
import logorhwt from './img/rhlogowt.svg';
import DataNavbar from './datanavbar.json'
import { NavLink } from 'react-router-dom';




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
  
  /**
   <nav>
        <div className='logo_container'>
            <Link to="Home" smooth={true} duration={500}>
            <img src={logorh} className='logorh' alt="logo" />
            <img src={logorhwt} className='logorhwt' alt="logo" />
            </Link>
        </div>
        <form action=''>
        <button type='submit'  className='reservar_button'>Reservar <i className='fas fa-calendar-alt'></i></button>
        </form>
        <div className='menu'>
        <ul>
            <li><i className='fas fa-home'></i>
            <NavLink to='/'>Nosotros</NavLink>
            </li>
            <li><i className='fas fa-building'></i>
            <Link to="Instalaciones" smooth={true} duration={500}>Instalaciones</Link>
            </li>
            <li><i className='fas fa-bed'></i>
            <Link to="Habitaciones" smooth={true} duration={500}>Habitaciones</Link>
            </li>
            <li><i className='fas fa-image'></i><a href="" section="">Galeria</a></li>
            <li><i className='fas fa-phone'></i><a href="" section="">Contacto</a>
            </li>
        </ul>
        </div>
        </nav>
   */
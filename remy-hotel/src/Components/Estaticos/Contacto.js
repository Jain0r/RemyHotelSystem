import logorh from '../assets/rhlogowhite.svg';
import '../css/contacto.css'

const Contacto =() => {
    return (
        <div id='Contacto'>
        <div className='contacto_main_container'>
        <div className='contacto_logo'>
        <img src={logorh} className="logorhf" alt="logo" />
        </div>
        <div className='contacto_item'>
        <strong>Teléfono <i className='fas fa-phone'></i></strong>
        <p>+51 (01) 313-5100</p> 
        </div>
        <div className='contacto_item'>
        <strong>Correo</strong><br></br>
        <p>sebastian.cespedes@unmsm.edu.pe</p>
        </div>
        <div className='contacto_item'>
        <strong>Siguenos</strong><br></br>
        <p>
        <a href="/"><i className='bi bi-facebook'></i></a>
        <a href="/"><i className='bi bi-instagram'></i></a>
        </p>
        </div>
        </div>
        </div>
    );
}
export default Contacto;

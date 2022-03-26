import logorh from './img/rhlogowhite.svg';

const Footer =() => {
    return (
        <footer>
        <div className='footer_logo'>
        <img src={logorh} className="logorhf" alt="logo" />
        </div>
        <div className='footer_item'>
        <strong><h4>Dirección</h4></strong><br></br>
        <strong><h5>Local Miraflores</h5></strong>
        <p>Calle San Martín 399 (Esquina con Calle Colón) Miraflores - Lima, Perú</p>
        </div>
        <div className='footer_item'>
        <strong><h4>Teléfono <i class="fas fa-phone"></i></h4></strong><br></br>
        <p>+51 (01) 313-5100</p> 
        </div>
        <div className='footer_item'>
        <strong><h4>Correo</h4></strong><br></br>
        <p>sebastian.cespedes@unmsm.edu.pe</p>
        </div>
        <div className='footer_item'>
        <h4>Siguenos</h4><br></br>
        <a href="/"><i class="bi bi-facebook"></i></a>
        <a href="/"><i class="bi bi-instagram"></i></a>
        </div>
        </footer>
    );
}
export default Footer;

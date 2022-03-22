import Navbar from "../Estaticos/Navbar";
import Footer from "../Estaticos/Footer";
import Instalaciones from "../Noestaticos/Instalaciones";



const Home = () => {
  return (
    <div id='Home'>
      <Navbar></Navbar>
      <header>
       <div className='hotelwall'>
         <div className='hotelwall_overlay'>
           <div className='hotelwall_overlay_text'>
            <h1>Vive la experiencia Remy Hotel</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
             <form action=''>
        <button type='submit'  className='reservar_button'>Reservar Aqui <i className='fas fa-calendar-alt'></i></button>
        </form>
           </div>
         </div>
        </div>
      </header>
      <Instalaciones></Instalaciones>
      <Footer></Footer>
    </div>
  );
}

export default Home;

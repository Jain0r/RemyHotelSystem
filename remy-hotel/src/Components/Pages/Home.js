import Navbar from "../Estaticos/Navbar";
import Footer from "../Estaticos/Footer";
import MainsectionHome from "../Noestaticos/MainsectionHome";
import Diferencias from "../Noestaticos/Diferencias";
import Instalaciones from "../Noestaticos/Instalaciones";
import Nosotros from "../Noestaticos/Nosotros";
import Locales from "../Noestaticos/Locales";
import Slider from "./Slider";



const Home = () => {
  return (
    <div id='Home'>
      <Navbar></Navbar>
      <MainsectionHome></MainsectionHome>
      <Nosotros></Nosotros>
      <Diferencias></Diferencias>
      <Slider></Slider>
      <Instalaciones></Instalaciones>
      <Locales></Locales>
      <Footer></Footer>
    </div>
  );
}

export default Home;
/** 
 <header>
       <div className='hotelwall'>
         <div className='hotelwall_overlay'>
           <div className='hotelwall_overlay_text'>
            <h1>Vive la experiencia Remy Hotel</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
             <form action=''>
        <button type='submit'  className='reservar_button'>Reserva Ahora<i class="fas fa-arrow-right"></i></button>
        </form>
           </div>
         </div>
        </div>
  </header>
*/
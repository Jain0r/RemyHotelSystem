import Navbar from "../Components/Estaticos/Navbar";
import MainsectionHome from "../Components/Noestaticos/MainsectionHome";
import Diferencias from "../Components/Noestaticos/Diferencias";
import Instalaciones from "../Components/Noestaticos/Instalaciones";
import Nosotros from "../Components/Noestaticos/Nosotros";
import Locales from "../Components/Noestaticos/Locales";
import Slider from "../Components/Noestaticos/Slider";
import Contacto from "../Components/Estaticos/Contacto";



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
      <Contacto></Contacto>
    </div>
  );
}

export default Home;
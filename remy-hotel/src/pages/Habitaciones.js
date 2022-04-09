import Navbar from '../Components/Estaticos/Navbar';
import MainsectionHab from '../Components/Noestaticos/MainsectionHab';
import Listado from '../Components/Noestaticos/Listado';
import Habitacionespaginated from '../Components/Noestaticos/Habitacionespaginated';




const  Habitaciones = () => {
  return (
    <div id='Habitaciones'>
      <Navbar></Navbar>
      <MainsectionHab></MainsectionHab>
      <Habitacionespaginated></Habitacionespaginated>
      <Listado></Listado>
    </div>
  );
}
export default Habitaciones;
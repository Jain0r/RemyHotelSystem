import Datahabi from './datahabi.json';
import Navbar from '../Estaticos/Navbar';
import Footer from '../Estaticos/Footer';
import MainsectionHab from '../Noestaticos/MainsectionHab';




const  Habitaciones = () => {
  return (
    <div id='Habitaciones'>
      <Navbar></Navbar>
      <MainsectionHab></MainsectionHab>
      <div className='main_container'>
        <p>Nuestras Habitaciones</p>
      <div className="container_habi">
       {
         Datahabi && Datahabi.map( data => {
           return(
           <div className='card_habi' key={data.id}>
             <div className='hab_overlay_container'>
            <div className='title_hab_overlay_container'>
             <h4>{data.section}</h4>
             </div>
             <div className='info_hab_overlay_container'>
             <p>{data.sub_section}</p>
             </div>
             <div>
             <strong>Precio por noche: </strong>
             <span>{data.price}</span>
             </div>
             </div>
             <div className='image_overlay_container'>
             <img  className='images_hab' src={`${data.image}`}alt="Imagenes de habitaciones"></img>
             </div>
           </div>
           )
         })
       }
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Habitaciones;

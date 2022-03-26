
import DataInsta from "./datainsta.json";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Instalaciones = () => {
    return ( 
        <div id="Instalaciones">
        <div className='instalaciones_container'>
        <div>
       <div className='instalaciones_items_container'>
        <div className='instalaciones_overlay'data-aos="fade-up">
        <p>Nuestras instalaciones</p>
        </div>
       {
        DataInsta && DataInsta.map( data => {
            return ( 
               <div  className='instalaciones_items' key={data.id}>
               <div  data-aos="fade-right" data-aos-duration="1000" className='overlay_items'>
               <div className='title_insta_items'>
               <h2>{data.section}</h2>
               </div>
               <div className='text_insta_items'>
               <p >{data.sub_section}</p>
               </div>
               </div>
               <div  data-aos="fade-left" data-aos-duration="1300" className='items_container'>
               <img className='items_img' src={`${data.image}`} alt='Imagen de instalación'></img>
               </div>
               </div>
            )
        })
       }
       </div>
        </div>
       </div>
       </div>
    );     
}

export default Instalaciones
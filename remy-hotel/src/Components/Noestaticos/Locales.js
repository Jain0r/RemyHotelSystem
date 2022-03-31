import React, { useState } from 'react';
import hsurco from './imgs/h-surco.jpg';
import hmiraflores from './imgs/h-miraflores.jpg';
import hlamolina from './imgs/h-lamolina.jpeg';



const Locales=() => {

    const locales =  ["Miraflores", "Surco", "La Molina"];
    const [myLocal, setMyLocal] = useState("Miraflores");
    return (
        <div id="Locales">
           <div className='locales_main_container'>
           <div className='title_locales_container' data-aos="fade-in">
               <strong>Nuestras sedes</strong>
           </div>
           <div>
               <div>
                   <div className='buttons_container' data-aos="fade-in"> 
                   {locales.map(local => (
                       <button key={local} className="button_local" autoFocus={local === "Miraflores"} onClick={()=> setMyLocal(local)}>{local}</button>
                   ))}
                   </div>
                   <div>
                         {myLocal === "Miraflores" && (
                             <div className='local_container'>
                             <div className='local_layout_container'data-aos="fade-in" >
                             <div>
                             <strong>{myLocal}</strong>
                             <p>Dirección: Cto. de Playas de la Costa Verde, Miraflores 15074.</p>
                             <p>Teléfono: 987 657 878</p>
                             <form action=''>
                             <button type='submit'  className='reservar_button_sede'>Reservar aquí</button>
                             </form>
                             </div>
                             </div>
                             <div className='local_img_container'data-aos="fade-in">
                              <img className='local_img' src={hmiraflores} alt="local miraflores"></img>
                             </div>
                             </div>
                           )}
                         {myLocal === "Surco" && (
                             <div className='local_container'>
                             <div className='local_layout_container' data-aos="fade-in">
                             <div>
                             <strong>{myLocal}</strong>
                             <p>Dirección: Av. Pedro Venturo 104, Santiago de Surco.</p>
                             <p>Teléfono: 999 558 878</p>
                             <form action=''>
                             <button type='submit'  className='reservar_button_sede'>Reservar aquí</button>
                             </form>
                             </div>
                             </div>
                             <div className='local_img_container' data-aos="fade-in">
                              <img className='local_img' src={hsurco} alt="local surco"></img>
                             </div>
                             </div>
                           )}
                         {myLocal === "La Molina" && (
                             <div className='local_container'>
                             <div className='local_layout_container' data-aos="fade-in">
                             <div>
                             <strong>{myLocal}</strong>
                             <p>Dirección: Av. Ricardo Elías Aparicio 740, La Molina.</p>
                             <p>Teléfono: 927 157 870</p>
                             <form action=''>
                             <button type='submit'  className='reservar_button_sede'>Reservar aquí</button>
                             </form>
                             </div>
                             </div>
                             <div className='local_img_container' data-aos="fade-in">
                              <img className='local_img' src={hlamolina} alt="local la molina"></img>
                             </div>
                             </div>
                           )}
                   </div>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Locales ;
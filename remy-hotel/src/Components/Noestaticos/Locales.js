import React, { useState } from 'react';
import DataLocal from './datalocal.json';
import '../css/locales.css'

const Locales=() => {
    
    const local = DataLocal
    
    const [itemnumber, setItemnumber] = useState(0)

    const localperpage = 1

    const localVisited = itemnumber*localperpage

    const onddlChange = (e) => {
        setItemnumber(e.target.value-1)
    }

    const displayLocal = local
        .slice(localVisited, localVisited + localperpage)
        .map (({id, name, dire, phone, image}) => {
            return (
                <div key={id} className='local_container'>
                             <div className='local_layout_container'data-aos="fade-in" >
                             <div>
                             <strong>{name}</strong>
                             <p>{dire}</p>
                             <p>{phone}</p>
                             <form action=''>
                             <button type='submit'  className='reservar_button_sede'>Reservar aquí</button>
                             </form>
                             </div>
                             </div>
                             <div className='local_img_container'data-aos="fade-in">
                              <img className='local_img' src={image} alt="local miraflores"></img>
                             </div>
                </div>
            )
        })
 
    return (
        <div id="Locales">
           <div className='locales_main_container'>
           <div className='title_locales_container' data-aos="fade-in">
               <strong>Nuestras sedes</strong>
           </div>
           <div>
               <div>
                   <div className='buttons_container' data-aos="fade-in"> 
                   {local.map(({id, name}) => (
                       <button key={id} value={id} className="button_local"  onClick={onddlChange} autoFocus={name === "Miraflores"}>{name}</button>
                   ))}
                   </div>
                   <div>
                   {displayLocal}
                   </div>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Locales ;

import DataInsta from "./datainsta.json"

const Instalaciones = () => {
    return ( 
        <div id="Instalaciones">
        <div className='instalaciones_container'>
        <div>
       <div className='instalaciones_items_container'>
        <div className='instalaciones_overlay'>
        <p>Nuestras instalaciones</p>
        </div>
       {
        DataInsta && DataInsta.map( data => {
            return ( 
               <div  className='instalaciones_items' key={data.id}>
               <div className='overlay_items'>
               <div className='title_insta_items'>
               <h2>{data.section}</h2>
               </div>
               <div className='text_insta_items'>
                 <i class="bi bi-arrow-return-right"></i>
               <p >{data.sub_section}</p>
               </div>
               </div>
               <div className='items_container'>
               <img className='items_img' src={`${data.image}`}></img>
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
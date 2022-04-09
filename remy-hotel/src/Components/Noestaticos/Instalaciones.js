
import DataInsta from "./datainsta.json";
import '../css/instalaciones.css'


const Insp = () => {

    return ( 
        
        <div id="Instalaciones">
        <div className="instalaciones_title">
            <strong data-aos="fade-right">Nuestras instalaciones</strong>
            <p data-aos="fade-right">Nuestro Hotel cuenta con la infraestructura y personal adecuado para hacer que tu estadía sea cómoda y agradable. </p>
        </div>
        <div>
        <div className="instalaciones_container">
            {
                DataInsta.map ( ({id, section, sub_section, image}) => {
                 return (
                     <div key={id} data-aos="fade-up" className="instalaciones_item">
                         <div className="img_overlay">
                             <strong>{section}</strong>
                             <p>{sub_section}</p>
                         </div>
                         <div className="img_container">
                            <img className="insta_img" src={image} alt={section}></img>
                         </div>
                     </div>
                 )
                }
                )
            }
            </div>
        </div>
        </div>
    );     
}

export default Insp;
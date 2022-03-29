
import DataInsta from "./datainsta.json";


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
                DataInsta && DataInsta.map ( data => {
                 return (
                     <div key={data.id} data-aos="fade-up">
                         <div className="img_container">
                            <img className="insta_img" src={data.image} alt="Instalaciones"></img>
                         </div>
                         <div className="img_overlay">
                             <h2>{data.section}</h2>
                             <p>{data.sub_section}</p>
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
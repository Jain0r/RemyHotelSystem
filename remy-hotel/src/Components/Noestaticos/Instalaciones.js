
import DataInsta from "./datainsta.json";


const Insp = () => {
    return ( 
        <div id="Instalaciones">
        <div className="instalaciones_title">
            <strong>Nuestras instalaciones</strong>
            <p>Nuestro Hotel cuenta con la infraestructura y personal adecuado para hacer que tu estadía sea cómoda y agradable. </p>
        </div>
        <div>
        <div className="instalaciones_container">
            {
                DataInsta && DataInsta.map ( data => {
                 return (
                     <div key={data.id}>
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
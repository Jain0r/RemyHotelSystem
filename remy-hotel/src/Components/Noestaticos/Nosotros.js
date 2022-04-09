
import logorh from '../assets/logorhwt.svg'
import '../css/nosotros.css'

const Nosotros=() => {
     return (
         <div  id="Nosotros" >
         <div className='nosotros_main_container'>
         <div>
            <div className='main_layout_container'>
                <div  data-aos="fade-left"className='nosotros_title_container'>
                  <strong>Sebgozu</strong>
                </div>
                <div  data-aos="fade-right"className='nosotros_subtitle_container'>
                   <p>Sebastian "Sebgozu" Cespedes nació en Estados Unidos, pero su orígenes provienen de Trujillo, Perú.</p>
                </div>
                <div data-aos="fade-down"className='nosotros_text_container'>
                   <p>Jefe de cocina y propietario de MAIDO. Estudió Artes Culinarias y Administración de Alimentos y Bebidas en Johnson & Wales University, Estados Unidos. Al graduarse viaja a Osaka- Japón, para especializarse en cocina japonesa, trabajó en restaurantes como ¨Seto Sushi¨: especializado en sushi e ¨Imo to Daikon¨ especializado en cocina estilo Izakaya (tapas japonesas). Regresó a Perú y trabajó en el Hotel Sheraton como jefe de partida, sous chef y asumió la Gerencia de Alimentos y Bebidas. Fue su pasión por la cocina peruana con técnicas e insumos japoneses, la gran cocina Nikkei que lo llevo a crear Maido (2009).</p>
                </div>
                <div className='nosotros_logo_container'>
                <img  data-aos="fade-in"className='logorh'src={logorh} alt='logo del rh'></img>
                </div>
            </div>
         </div >
         <div className='ceo_img_container' data-aos="zoom-in">
         </div>
         </div>
         </div>
     )
}

export default Nosotros;
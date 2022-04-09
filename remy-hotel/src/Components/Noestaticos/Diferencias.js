import Datadife from './datadife.json';
import rhflower from '../assets/rhflower.svg'
import '../css/diferencias.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();




const Diferencias = () => {
    return (
    <div id='Diferencias'>
    <div className="diferencias_container">
       <div className='main_title_container' data-aos="fade-left">
           <strong>¿Que nos diferencia?</strong>
       </div>
       <div className="diferencias_items_container">
        {
        Datadife.map(data => {
           return (
            <div className="diferencias_item" key={data.id}>
            <div className="item" data-aos="fade-right">
              <div className="item_title">
                <strong><i className={data.icon}></i>{data.section}</strong>
              </div>
              <div className="item_layout">
                <p>{data.sub_section}</p>
              </div>
            </div>
          </div>
           )
        })
        }
       </div>
    </div>
    <div>
        <img  className="flower"data-aos="fade-in" src={rhflower} alt='imagen de flor'></img>
    </div>
    </div>
    )
}
export  default Diferencias;
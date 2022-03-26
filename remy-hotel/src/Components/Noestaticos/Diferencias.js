import Datadife from './datadife.json';
import rhflower from '../Noestaticos/rhflower.svg'


const Diferencias = () => {
    return (
    <div id='Diferencias'>
    <div className="diferencias_container">
<<<<<<< HEAD
       <div className='main_title_container' data-aos="fade-left" data-aos-duration="1000">
=======
       <div className='main_title_container'>
>>>>>>> 29917f3b940e4c94f4113a763312cf28a5e9cbf4
           <strong>¿Que nos diferencia?</strong>
       </div>
       <div className="diferencias_items_container">
        {
        Datadife && Datadife.map(data => {
           return (
            <div className="diferencias_item" key={data.id}>
<<<<<<< HEAD
            <div className="item" data-aos="fade-right">
=======
            <div className="item">
>>>>>>> 29917f3b940e4c94f4113a763312cf28a5e9cbf4
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
<<<<<<< HEAD
        <img  className="flower"data-aos="fade-in" src={rhflower} alt='imagen de flor'></img>
=======
        <img  className="flower" src={rhflower} alt='imagen de flor'></img>
>>>>>>> 29917f3b940e4c94f4113a763312cf28a5e9cbf4
    </div>
    </div>
    )
}
export  default Diferencias;
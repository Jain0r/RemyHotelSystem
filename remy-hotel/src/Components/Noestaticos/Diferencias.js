import Datadife from './datadife.json';
import rhflower from '../Noestaticos/rhflower.svg'


const Diferencias = () => {
    return (
    <div id='Diferencias'>
    <div className="diferencias_container">
       <div className='main_title_container'>
           <strong>¿Que nos diferencia?</strong>
       </div>
       <div className="diferencias_items_container">
        {
        Datadife && Datadife.map(data => {
           return (
            <div className="diferencias_item" key={data.id}>
            <div className="item">
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
        <img  classname="flower"src={rhflower} alt='imagen de flor'></img>
    </div>
    </div>
    )
}
export  default Diferencias;
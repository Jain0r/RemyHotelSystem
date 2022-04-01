import Datahabi from './datahabi.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider=() => {
    
    return(
        <div id='Slider'>
        <div className='title_slider_container' data-aos="fade-in">
        <strong> Nuestras habitaciones</strong>
        </div>
        <Swiper className="container_habi mySwiper"
        data-aos="zoom-in"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        >
          
        {
          Datahabi && Datahabi.map( data => {
            return(
            <div>
            <SwiperSlide className='card_habi' data-swiper-autoplay="5000" key={data.id} pauseOnMouseEnter={true}>
              <div className='hab_overlay_container'>
             <div className='title_hab_overlay_container'>
              <h4>{data.section}</h4>
              </div>
              <div className='info_hab_overlay_container'>
              <p>{data.sub_section}</p>
              </div>
              <div>
              <strong>Precio por noche: </strong>
              <span>{data.price}</span>
              </div>
              </div>
              <div className='image_overlay_container'>
              <img  className='images_hab' src={`${data.image}`}alt="Imagenes de habitaciones"></img>
              </div>
            </SwiperSlide>
            </div>
            )
          })
        }
       </Swiper>
       </div>
    )
}
export default Slider;
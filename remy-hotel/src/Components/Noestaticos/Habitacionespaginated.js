
import { FetchAllHabis } from './FetchAllHabis';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import Loading from '../Estaticos/Loading';
import '../css/habitacionespaginated.css'




const  Habitacionespaginated = () => {

  const {isLoading, habis} = FetchAllHabis();
  const [pageNumber, setPageNumber] = useState(0)

  const habisPerPage = 2
  const pagesVisited = pageNumber * habisPerPage

  const filteredHabis = () =>{
    return habis.slice(pagesVisited, pagesVisited + habisPerPage);
  }

  const pageCount = Math.ceil(habis.length / habisPerPage)
  const changePange =({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div id='Habitaciones'>
      <div className='main_container'>
        <p>Nuestras Habitaciones</p>
      </div>
      {
        isLoading ?
        <Loading/>
        :
      <div className='habitaciones_paginated_container'>
        {
          filteredHabis().map(({id, section, sub_section, price, image}) => {
            return(
              
              <div className='card_habi' key={id}>
                <div className='hab_overlay_container' data-aos="zoom-in-up">
               <div className='title_hab_overlay_container'>
                <h4>{section}</h4>
                </div>
                <div className='info_hab_overlay_container'>
                <p>{sub_section}</p>
                <div>
                <strong>Precio por noche: </strong>
                <span>{price}</span>
                </div>
                </div>
                </div>
                <div className='image_overlay_container' data-aos="zoom-in-up">
                <img className='images_hab' src={image} alt={section}></img>
                </div>
              </div>
              )
        })}
        <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
       />
      </div>
      }
    </div>
  );
}
export default Habitacionespaginated;





































/**import Datahabi from '../Noestaticos/datahabi.json';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';




const  Habitacionespaginated = () => {

  const habis= Datahabi
  const [pageNumber, setPageNumber] = useState(0)
  const [loadedhabi, setLoadedhabi] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const habisPerPage = 2
  const pagesVisited = pageNumber * habisPerPage

  .slice(pagesVisited, pagesVisited + habisPerPage)
  .map(({id, section, sub_section, price, image}) => {
    return(
      
      <div className='card_habi' key={id}>
        <div className='hab_overlay_container' data-aos="zoom-in-up">
       <div className='title_hab_overlay_container'>
        <h4>{section}</h4>
        </div>
        <div className='info_hab_overlay_container'>
        <p>{sub_section}</p>
        <div>
        <strong>Precio por noche: </strong>
        <span>{price}</span>
        </div>
        </div>
        </div>
        <div className='image_overlay_container' data-aos="zoom-in-up">
        <img className='images_hab' src={image} alt={section}></img>
        </div>
      </div>
      )
        } )

  useEffect(() => {
      setLoadedhabi(displayHabi)
  }, );

  const pageCount = Math.ceil(habis.length / habisPerPage)
  const changePange =({selected}) => {
    setPageNumber(selected)
  }
  
  return (
    <div id='Habitaciones'>
      <div className='main_container'>
        <p>Nuestras Habitaciones</p>
      </div>
      {loadedhabi}
      <div>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
      <div className="container_habi">
      </div>
    </div>
  );
}
export default Habitacionespaginated; **/

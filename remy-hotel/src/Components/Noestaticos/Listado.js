import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Listado = () => {
  

  const [singleCharacter, setSingleCharacter] = useState([]);
  const [character, setCharacter] = useState([]);
  
    useEffect(function(){
        axios
          .get("https://rickandmortyapi.com/api/character")
          .then((response) => setCharacter(response.data.results))
          .catch((error) => console.log(error));
    },[]);
  const onddlChange =  (e)=> {
       //alert(e.target.value)  
       axios 
        .get(`https://rickandmortyapi.com/api/character/${e.target.value}`)
        .then((response) => setSingleCharacter(response.data))
        .catch((error) => console.log(error));
  };

  return (
    <div>
    <select className='form_rick' onChange={onddlChange}>
        <option value = '0'>---Select here---</option>
        {
          character.map((data) => (
              <option key={data.id} value={data.id}>
                  {data.name}
              </option>
          ))}
    </select>
    <br/>
    <br/>
    <div>
      <h1>{singleCharacter.name}</h1>
      <p></p>
    </div>
    </div>
  )
}

export default Listado
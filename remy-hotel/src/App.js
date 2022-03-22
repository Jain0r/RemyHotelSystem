
import './App.css';
import Home from './Components/Pages/Home';
import Habitaciones from './Components/Pages/Habitaciones';
import {Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Habitaciones' element={<Habitaciones/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;



/**
 <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/Habitaciones' element={<Habitaciones/>}/>
        <Route exact path='/Nosotros' element={<Nosotros/>}/>
  </Routes>
 */






















/** import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header>
       <div className='hotelwall'>
         <div className='hotelwall-overlay'>
           <div>
            <h1>Remy Hotel</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
           </div>
         </div>
        </div>
        <div>
          
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App; **/

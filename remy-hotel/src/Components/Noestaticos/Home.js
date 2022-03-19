import logo from '../Estaticos/img/rhlogo.svg';
import Navbar from '../Estaticos/Navbar';
import Footer from '../Estaticos/Footer';



const Home = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <header>
       <div className='hotelwall'>
         <div className='hotelwall-overlay'>
           <div>
            <h1>Home page</h1>
             <p class="card-text">Haremos de tu estancia lo más memorable de tu viaje, haremos tu viaje inolvidable.</p>
           </div>
         </div>
        </div>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default Home;

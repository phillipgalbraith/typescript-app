import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderBar from './components/HeaderBar';
import NavLinks from './components/NavLinks';
import UkraineBar from './components/UkraineBar';
import ProviderCard from './components/ProviderCard';




function App() {
  return (
    <div className="App">
      <div className="container" id="scroll-head">
        <HeaderBar  />
      </div>
      <div className="container sticky-top bg-white ">
        <NavLinks />
      </div>
      <div className='container'> 
       <UkraineBar />
      </div>
      <div className="container">
        <h2 className="text-center">Feline patients. Feline doctors. Simple.</h2>
        <div className="container">  
          <div className="row" id="topRow">
            {  ["Aging", "OBGYN", "Pediatrics", "Surgery"].map( e => <ProviderCard area={e} /> ) }
          </div>    
          <div className="row" id="topRow">
            {  ["Pharmacy", "Dentistry", "Optometry", "Hearing"].map( e => <ProviderCard area={e} /> ) }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

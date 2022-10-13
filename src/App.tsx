import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderBar from './components/HeaderBar';
import NavLinks from './components/NavLinks';
import UkraineBar from './components/UkraineBar';
import ProviderCard from './components/ProviderCard';


import agingCatImg from "./components/agingCat.jpg"; 
import getRealCatImg from "./components/getRealCat.jpg"; 
import hearingCatImg from "./components/hearingCat.jpg"; 
import kittenImg from "./components/kitten.jpg"; 
import momCatImg from "./components/momCat.jpg"; 
import surgeryCatImg from "./components/surgeryCat.jpg"; 
import glassesCatImg from "./components/glassesCat.jpg"; 
import dentistCatImg from "./components/dentistCat.jpg"
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
            {  
              [
                ["Aging", agingCatImg], 
                ["Behavior", momCatImg], 
                ["Pediatrics", kittenImg], 
                ["Surgery", surgeryCatImg]
              ].map( e => <ProviderCard area={e[0]} source={e[1]} /> ) }
          </div>    
          <div className="row" id="topRow">
            { 
              [
                ["Pharmacy", getRealCatImg], 
                ["Dentistry", dentistCatImg], 
                ["Optometry", glassesCatImg], 
                ["Hearing", hearingCatImg]
              ].map( e => <ProviderCard area={e[0]}  source={e[1]} /> ) }
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

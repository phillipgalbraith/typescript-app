import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderBar from './components/HeaderBar';
import NavLinks from './components/NavLinks';
import UkraineBar from './components/UkraineBar';



function App() {
  return (
    <div className="App">
      <div className="container" id="scroll-head">
        <HeaderBar />
      </div>
      <div className="container sticky-top bg-white ">
        <NavLinks />
      </div>
      <div className='container'> 
       <UkraineBar />
      </div>
      <div className="container">
        <h2>Cats need medical treatment from cats</h2>
        {"supercalifragilisticexpealidocious".split("").map( e => {
            return (
              <div className="card">
                <div className="card-body">
                <h5 className="card-title">Card title</h5>

                  This is some text within a card body.
                </div>
              </div>       
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

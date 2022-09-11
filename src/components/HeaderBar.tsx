import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderBar() {
    return (
        <header className="App-header container-fluid">            
            <div className="navbar navbar-expand-lg navbar-light bg-light container-fluid d-flex justify-content-between">
              <div className="navbar-brand">
                <a className="navbar-brand" href="#">          
                  <i className="bi bi-hospital text-danger"></i> Cats Treat Cats
                </a>
              </div>
              <div>
                <button className="btn">
                  <i className="bi bi-search"></i>
                </button>
                <button className="btn">
                  <i className="bi bi-bag"></i>
                </button>
                <button className="btn">
                  <i className="bi bi-person-circle"></i>
                  <> Sign In </>
                </button>
              </div>
            </div>

        </header>
    )
  }  

export default HeaderBar;
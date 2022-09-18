import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderBar() {
    return (
      <nav id="navLinks" className="bg-white nav navbar-expand-lg navbar-light navbar container-fluid d-flex justify-content-between">
        <div className="bg-white container-fluid">
          <ul className="bg-white navbar container-fluid navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <div className="navbar-brand">
                <a href="#" className="nav-link text-dark me-1 ms-1">
                  <i className="bi bi-hospital text-danger"></i> 
                  <> Cats Treat Cats </>
                </a>
              </div>     
            </li> 
            <li>
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
            </li>
          </ul>
        </div>
      </nav>
    )
  }  

export default HeaderBar;
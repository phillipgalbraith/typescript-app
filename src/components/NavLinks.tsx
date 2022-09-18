import React from "react";

export const NavLinks: React.FC = () => {    
    
    return (
        <nav id="navLinks" className="nav navbar-expand-lg navbar-light navbar container-fluid">
            <div className="container-fluid">
              <ul className="navbar-nav mb-2 mb-lg-0 ">

                <li className="nav-item">
                  <a href="#" className="nav-link text-dark me-1 ms-1">Primary</a>
                </li>  
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark me-1 ms-1">Family</a>  
                </li>  
                <li className="nav-item">  
                  <a href="#" className="nav-link text-dark me-1 ms-1">OBGYN</a>  
                </li>  
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark me-1 ms-1"> Specialists </a> 
                  </li>  
                <li className="nav-item navbar-text">
                |
                </li>  
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark me-1 ms-1"> Triage </a>  
                  </li>  
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark me-1 ms-1"> Emergency </a>
                </li>  
              </ul>
            </div>    
          </nav>
    )
}

export default NavLinks;
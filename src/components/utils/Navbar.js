import React from "react";
import mainLogo from "../../assets/logo_black.png";
import { Link,useLocation,useNavigate  } from "react-router-dom";
import '../../styles/navbar.css'
const Navbar = () => {
  const navigate=useNavigate();
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
        <img src={mainLogo} alt="..." className="img-fluid"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <p className="text-start text-dark my-1" id="text1">enquires@liberationcoaches.com</p>
          <p className="text-start text-dark my-1" id="text2">+91 9833122954</p>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/'&&'active'}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/contact'&&'active'}`} to="/contact">Contact Us</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
   
  );
};

export default Navbar;

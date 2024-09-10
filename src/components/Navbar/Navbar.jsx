import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import Flag from 'react-world-flags';
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-def ">
      <div className="container">
        <nav className={`navbar navbar-expand-lg navbar-custom`}>
          <div className="container-fluid">

            <div className="d-flex justify-content-center w-100 d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarSupportedContent"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} navbar-collapse-custom`}
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-custom`}>
                <li className="nav-item">
                  <Link className="nav-link active nav-link-hover" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/find-job">
                    Find Job
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/employers">
                    Employers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/candidates">
                    Candidates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/pricing-plans">
                    Pricing Plans
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-hover" to="/customer-supports">
                    Customer Supports
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex align-items-center ms-auto d-flex-custom">
            <div className="phone-number d-flex align-items-center me-3">
              <FaPhoneAlt className="me-2 phone-icon" />
              <span>+123 456 7890</span>
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle">
                <div className="d-flex align-items-center">
                  <Flag code="US" alt="English" className="flag-icon" />
                  <span className="ms-2">English</span>
                  <FaChevronDown className="dropdown-icon" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#/action-1" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <Flag code="US" alt="English" className="flag-icon" />
                    <span className="ms-2">English</span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

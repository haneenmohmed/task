import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import Flag from 'react-world-flags';
import { FaChevronDown } from 'react-icons/fa';
import './SearchNavbar.css';

const SearchNavbar = () => {
  return (
    <div className="search-navbar">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <FaBriefcase className="briefcase-icon" />
          <span className="ms-2 jobpilot-text">Jobpilot</span>
        </a>

        <div className="d-flex align-items-center search-container">
          <Dropdown className="input-group-prepend flex-grow-1">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              <div className="d-flex align-items-center">
                <Flag code="IN" alt="India" className="flag-icon" />
                <span className="ms-2">India</span>
                <FaChevronDown className="dropdown-icon" />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-border">
              <Dropdown.Item href="#/action-1">
                <div className="d-flex align-items-center">
                  <Flag code="IN" alt="India" className="flag-icon" />
                  <span className="ms-2">India</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <div className="d-flex align-items-center">
                  <Flag code="US" alt="USA" className="flag-icon" />
                  <span className="ms-2">USA</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Job title, keyword, company"
            aria-label="Search input"
          />
        </div>

        <div className="d-flex align-items-center mt-3 mt-md-0">
          <button className="btn btn-outline-primary me-2">Sign In</button>
          <button className="btn btn-primary">Post A Job</button>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;

import React from 'react';
import { candidate, employer } from '../../assets/images/images';
import './Employer.css'; 

const EmployerComponent = () => {
    return (
      <div className="container employer-container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-5 card-section">
            <div className="image-rectangle">
              <img src={candidate} className="img-fluid" alt="Candidate" />
              <div className="overlay-content">
                <h5 className="overlay-title">Become a Candidate</h5>
                <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</p>
                <a href="#" className="btn btn-primary btn-register">Register Now</a>
              </div>
            </div>
          </div>
  
          <div className="col-md-5 card-section">
            <div className="image-rectangle">
              <img src={employer} className="img-fluid" alt="Employer" />
              <div className="overlay-content">
                <h5 className="overlay-title">Become an Employer</h5>
                <p className="overlay-text">Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.</p>
                <a href="#" className="btn btn-primary btn-register">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EmployerComponent;

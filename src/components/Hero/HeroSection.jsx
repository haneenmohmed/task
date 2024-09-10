import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';
import {pic1} from '../../assets/images/images'
const HeroSection = () => {
  return (
    <div className='bg-def div-hs'> 
      <div className="container text-center ">
        <div className="row align-items-center pt-5"> 
          <div className="col-md-6 text-start pt-4"> 
            <h1>Find a job that suits your interest & skills.</h1>
            <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
            <div className="input-group my-4">
              <input type="text" className="form-control" placeholder="Job title, Keyword..." />
              <input type="text" className="form-control" placeholder="Your Location" />
              <button className="btn btn-primary">Find Job</button>
            </div>
            <p>Suggestion: Designer, Programming, <span className="text-primary">Digital Marketing</span>, Video, Animation.</p>
          </div>
          <div className="col-md-6">
            <img src={pic1} alt="Person working on laptop" className="img-fluid" />
          </div>
        </div>
<div className='spacer'></div>

        <div className="row mt-5">
        
          <div className="col-md-3">
            <div className="stat-box">
              <div className="icon-box">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div>
                <h5>1,75,324</h5>
                <p>Live Job</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="stat-box ">
              <div className="icon-box ico-hover">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div>
                <h5>97,354</h5>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-box">
              <div className="icon-box">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div>
                <h5>38,47,154</h5>
                <p>Candidates</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-box">
              <div className="icon-box">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div>
                <h5>7,532</h5>
                <p>New Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import './JobNotFound.css'; 

const JobNotFound = () => {
  return (
    <div className="job-not-found-container">
      <h1 className="job-not-found-title">Job Not Found</h1>
      <p className="job-not-found-message">
        We're sorry, but the job you are looking for doesn't exist or may have expired.
      </p>
      <button className="back-to-home-btn" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default JobNotFound;

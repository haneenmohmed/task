import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFileUpload, faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { arrow1, arrow2, arrow3 } from '/src/assets/images/images.js';
import './HowWork.css';

const HowWork = () => {
  return (
    <section className='bg-def sec-hw'>
      <div className=" container container-hw mt-5">
      <h2>How jobpilot work</h2>
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step">
            <div className="icon-hw">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <h3>Create account</h3>
            <p>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="icon-hw">
              <FontAwesomeIcon icon={faFileUpload} />
            </div>
            <h3>Upload CV/Resume</h3>
            <p>Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.</p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="icon-hw">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <h3>Find suitable job</h3>
            <p>Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
          </div>

          {/* Step 4 */}
          <div className="step">
            <div className="icon-hw">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3>Apply job</h3>
            <p>Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.</p>
          </div>

          <img src={arrow1} alt="arrow" className="arrow arrow1" />
          <img src={arrow2} alt="arrow" className="arrow arrow2" />
          <img src={arrow3} alt="arrow" className="arrow arrow3" />
        </div>
      </div>
    </section>
  );
};

export default HowWork;

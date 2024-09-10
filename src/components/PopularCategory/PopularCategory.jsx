import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faBullhorn, faVideo, faMusic, faChartLine, faHeart, faDatabase } from '@fortawesome/free-solid-svg-icons';
import './PopularCategory.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Graphics & Design', icon: faPalette, positions: 357 },
  { name: 'Code & Programming', icon: faCode, positions: 312 },
  { name: 'Digital Marketing', icon: faBullhorn, positions: 297 },
  { name: 'Video & Animation', icon: faVideo, positions: 247 },
  { name: 'Music & Audio', icon: faMusic, positions: 204 },
  { name: 'Account & Finance', icon: faChartLine, positions: 167 },
  { name: 'Health & Care', icon: faHeart, positions: 125 },
  { name: 'Data & Science', icon: faDatabase, positions: 57 }
];

const PopularCategory = () => {
  return (
    <section className="popular-category-section bg-light py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Popular Category</h2>
          <a href="/view-all" className="view-all">
  View All
  <FontAwesomeIcon icon={faArrowRight} className="arrow-pc" />
</a>
        </div>

        <div className="row justify-content-center">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="category-card card">
                <div className="icon-text-wrapper d-flex align-items-center">
                  <div className="icon-pc">
                    <FontAwesomeIcon icon={category.icon} size="lg" />
                  </div>
                  <div className="text-content">
                    <h5 className="category-title mb-1">{category.name}</h5>
                    <p className="text-muted mb-0">{category.positions} Open positions</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    
  );
};

export default PopularCategory;

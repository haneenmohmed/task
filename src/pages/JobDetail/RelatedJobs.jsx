import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { google } from '../../assets/images/images';
import './RelatedJobs.css';

const relatedJobs = [
  {
    id: 1,
    title: 'Technical Support Specialist',
    company: 'Google Inc.',
    type: 'Part-Time',
    salary: '$10,000 - $25,000',
    location: 'Dhaka, Bangladesh',
    logo: google,
  },
  {
    id: 2,
    title: 'Senior UX Designer',
    company: 'Google Inc.',
    type: 'Full-Time',
    salary: '$20,000 - $25,000',
    location: 'Dhaka, Bangladesh',
    logo: google,
  },
  {
    id: 3,
    title: 'Marketing Officer',
    company: 'Google Inc.',
    type: 'Internship',
    salary: '$10,000 - $15,000',
    location: 'Dhaka, Bangladesh',
    logo: google,
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Apple Inc.',
    type: 'Full-Time',
    salary: '$50,000 - $75,000',
    location: 'New York, USA',
    logo: google,
  },
  {
    id: 5,
    title: 'Frontend Developer',
    company: 'Microsoft Corp.',
    type: 'Contract',
    salary: '$40,000 - $60,000',
    location: 'San Francisco, USA',
    logo: google,
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'Amazon Inc.',
    type: 'Full-Time',
    salary: '$80,000 - $120,000',
    location: 'Seattle, USA',
    logo: google,
  },
];

const RelatedJobs = () => {
  return (
    <div className="related-jobs">
      <h5 className="mb-4">Related Jobs</h5>
      <Row>
        {relatedJobs.map((job) => (
          <Col lg={4} md={6} className="mb-3" key={job.id}>
            <Card className="related-job-card h-100">
              <Card.Body>
                <div className="job-title-type-salary mb-3">
                  <h6>{job.title}</h6>
                  <div className="d-flex align-items-center">
                    <Badge className="job-type-badge me-2">{job.type}</Badge>
                    <span className="salary-location">Salary: {job.salary}</span>
                  </div>
                </div>

                <div className="job-company-details d-flex align-items-center">
                  <div className="logo-container me-3">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="related-job-logo"
                    />
                  </div>
                  <div>
                    <p className="company-name mb-1">{job.company}</p>
                    <p className="salary-location mb-0">
                      <i className="bi bi-geo-alt-fill me-1"></i> {job.location}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedJobs;

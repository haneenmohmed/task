import React from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';
import jobs from '../../assets/mockData/featuredjobs'; 

const FeaturedJobs = () => {
  return (
    <div className="featured-jobs-container my-4 container">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-4">Featured Jobs</h2>
        <Button variant="link" className="text-decoration-none view-all">
          View All →
        </Button>
      </div>

      <Row>
        {jobs.map((job, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <h5>{job.title}</h5>
                
                <div className="d-flex align-items-center mb-3">
                  <Badge
                    bg={
                      job.type === 'Full-Time'
                        ? 'success'
                        : job.type === 'Internship'
                        ? 'info'
                        : 'warning'
                    }
                    className="me-2"
                  >
                    {job.type}
                  </Badge>
                  <span className="text-muted">Salary: {job.salary}</span>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <div
                    style={{
                      backgroundColor: '#EDEFF5',
                      borderRadius: '8px',
                      padding: '10px',
                      marginRight: '10px',
                      width: '40px',
                    }}
                  >
                    <img
                      src={job.logo}
                      alt="company logo"
                      style={{ width: '20px' }}
                    />
                  </div>
                  <h6 className="mb-0">{job.company}</h6>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">
                    <FaMapMarkerAlt /> {job.location}
                  </div>
                  <FaBookmark className="text-muted" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedJobs;

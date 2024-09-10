import React from 'react';
import { Card, Row, Col, Badge, Image, Form, InputGroup, Button, Pagination } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaBookmark, FaBell, FaBriefcase, FaFilter } from 'react-icons/fa'; // FaSearch included here
import Flag from 'react-world-flags';
import { Link } from 'react-router-dom';
import jobs from '../../assets/mockData/featuredjobs';
import { avatarImg } from '../../assets/images/images';
import './FindJob.css';

const FindJobs = () => {
  return (
    <div >
      <div className="d-flex justify-content-between align-items-center my-4 container">
        <div className="d-flex align-items-center">
          <FaBriefcase size={28} className="me-2" style={{ color: '#0A65CC' }} />
          <h4 className="mb-0" style={{ color: '#18191C' }}>Jobpilot</h4>
          <InputGroup className="ms-4">
            <InputGroup.Text>
              <Flag code="IN" style={{ width: '20px' }} />
            </InputGroup.Text>
            <Form.Select aria-label="Country select" className="border" defaultValue="India">
              <option value="IN"><Flag code="IN" style={{ width: '20px' }} /> India</option>
              <option value="GB"><Flag code="GB" style={{ width: '20px' }} /> England</option>
              <option value="US"><Flag code="US" style={{ width: '20px' }} /> USA</option>
              <option value="ES"><Flag code="ES" style={{ width: '20px' }} /> Spain</option>
            </Form.Select>
          </InputGroup>
        </div>

        <div className="d-flex align-items-center">
          <FaBell size={24} className="me-3 text-muted" />
          <Image src={avatarImg} roundedCircle width="40" height="40" alt="User Avatar" />
        </div>
      </div>

      <div className="find-job-title d-flex justify-content-between align-items-center my-3 bg-def">
        <h4>Find Job</h4>
        <div className="breadcrumb">
          <span>Home</span> / <span>Find Job</span>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-4 container">
        <InputGroup className="me-2" style={{ maxWidth: '300px' }}>
          <InputGroup.Text><FaSearch /></InputGroup.Text> {/* Search Icon */}
          <Form.Control type="text" placeholder="Job title, Position, Keyword..." />
        </InputGroup>

        <InputGroup className="me-2" style={{ maxWidth: '300px' }}>
          <InputGroup.Text><FaMapMarkerAlt /></InputGroup.Text> {/* Location Icon */}
          <Form.Control type="text" placeholder="City, state or zip code" />
        </InputGroup>

        <Button variant="light" className="me-2"><FaFilter /> Filters</Button>
        <Button variant="primary">Find Job</Button>
      </div>

      <Row className='container'>
        {jobs.map((job, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Link to={`/find-job/${index}`} className="text-decoration-none" style={{ color: '#18191C' }}>
                  <h5>{job.title}</h5>
                </Link>

                <div className="d-flex align-items-center mb-3">
                  <Badge
                    bg={job.type === 'Full-Time' ? 'success' : job.type === 'Internship' ? 'info' : 'warning'}
                    className="me-2"
                  >
                    {job.type}
                  </Badge>
                  <span className="text-muted">Salary: {job.salary}</span>
                </div>

                <div className="d-flex align-items-center mb-2">
                  <div style={{ backgroundColor: '#EDEFF5', borderRadius: '8px', padding: '10px', marginRight: '10px', width: '40px' }}>
                    <img src={job.logo} alt="company logo" style={{ width: '20px' }} />
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

      <div className="d-flex justify-content-center mt-4">
        <Pagination className="custom-pagination">
          <Pagination.Prev className="prev-next-btn" />
          <Pagination.Item active className="pagination-item">1</Pagination.Item>
          <Pagination.Item className="pagination-item">2</Pagination.Item>
          <Pagination.Item className="pagination-item">3</Pagination.Item>
          <Pagination.Next className="prev-next-btn" />
        </Pagination>
      </div>
    </div>
  );
};

export default FindJobs;

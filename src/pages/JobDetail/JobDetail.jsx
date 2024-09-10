import React from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; 
import './JobDetail.css';
import { facebook } from '../../assets/images/images';
import RelatedJobs from './RelatedJobs';  
import JobNotFound from '../JobNotFound/JobNotFound';

import {Image, Form, InputGroup, Pagination } from 'react-bootstrap';

import { FaBriefcase, FaBell } from 'react-icons/fa'; 
import Flag from 'react-world-flags';
import { avatarImg } from '../../assets/images/images';

const jobs = [
  {
    id: 0,
    title: "Senior UX Designer",
    company: "Facebook",
    type: "Full-Time",
    featured: true,
    salary: "100,000$ - 120,000$",
    location: "Dhaka, Bangladesh",
    postedDate: "14 Jun, 2021",
    expiryDate: "14 Aug, 2021",
    experience: "Entry Level",
    education: "Graduation",
    description: `Velstar is a Shopify Plus agency, and we partner with brands to help them grow. 
      We create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, 
      and creators work together to push brands to the next level.`,
    requirements: [
      "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on.",
      "3+ years of experience in back-end development working with multiple smaller projects or large-scale applications.",
      "Experience with HTML, JavaScript, CSS, PHP, Symphony, or Laravel.",
      "Working regularly with APIs and Web Services (REST, GraphQL, SOAP, etc.).",
      "Experience/awareness in Agile application development.",
      "Familiarity with version control and project management systems (e.g., Github, Jira)."
    ],
    desiredSkills: [
      "Working knowledge of eCommerce platforms, ideally Shopify, but also others like Magento, WooCommerce.",
      "Working knowledge of payment gateways.",
      "API platform experience / Building restful APIs."
    ],
    benefits: [
      "Early finish on Fridays and drink of your choice from the bar.",
      "28 days holiday rising by 1 day per year PLUS an additional day off on your birthday.",
      "Generous annual bonus.",
      "Healthcare package.",
      "Paid community days to volunteer for a charity of your choice.",
      "£100 contribution for personal learning and development.",
      "Free Breakfast on Mondays and free snacks in the office.",
      "Brand new MacBook Pro."
    ],
    logo: facebook
  }
];

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <JobNotFound />;
  }

  return (

    
    <div className="job-detail-container container my-4">
       <div className="d-flex justify-content-between align-items-center my-4">
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


      <Row>
        <Col lg={8}>
          <Card className="mb-4 job-card">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="company-logo me-3"
                  />
                  <div>
                    <h4 className="job-title">{job.title}</h4>
                    <p className="company-name text-muted">{job.company}</p>
                    <Badge bg="success" className="me-2">{job.type}</Badge>
                    {job.featured && <Badge bg="danger">Featured</Badge>}
                  </div>
                </div>

                <Button variant="primary" className="apply-btn">Apply Now</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4 job-details-card">
            <Card.Body>
              <h5>Job Description</h5>
              <p>{job.description}</p>

              <h5>Requirements</h5>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <h5>Desired Skills</h5>
              <ul>
                {job.desiredSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>

              <h5>Benefits</h5>
              <ul>
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
 
          <Card className="mb-4 card-bod">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="salary-section">
                  <h6 className="text-muted">Salary (USD)</h6>
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="salary-text text-center" style={{ color: '#0BA02C', fontSize: '20px' }}>
                      {job.salary}
                    </p>
                  </div>
                  <p className="text-muted" style={{ fontSize: '16px' }}>Yearly salary</p>
                </div>

                <div className="vertical-divider mx-3" style={{ borderLeft: "1px solid #ddd", height: "50px" }}></div>

                <div className="job-location-section text-center">
                  <i className="bi bi-map fs-2 mb-2"></i>
                  <h6 className="text-muted">Job Location</h6>
                  <p className="job-location text-muted" style={{ fontSize: '16px' }}>
                    <i className="bi bi-geo-alt"></i> {job.location}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mb-4">
  <Card.Body>
    <h5>Job Overview</h5>
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div className="d-flex align-items-center overview-item flex-column display-flex-center ">
        <i className="bi bi-calendar-check"></i>
        <span className="overview-title">Job Posted:</span>
        <span className="overview-value">{job.postedDate}</span>
      </div>
      <div className="d-flex align-items-center overview-item flex-column display-flex-center">
        <i className="bi bi-clock"></i>
        <span className="overview-title">Job Expire In:</span>
        <span className="overview-value">{job.expiryDate}</span>
      </div>
      <div className="d-flex align-items-center overview-item flex-column display-flex-center">
        <i className="bi bi-briefcase"></i>
        <span className="overview-title">Job Level:</span>
        <span className="overview-value">{job.experience}</span>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center overview-item flex-column display-flex-center">
        <i className="bi bi-graph-up"></i>
        <span className="overview-title">Experience:</span>
        <span className="overview-value">{job.salary}</span>
      </div>
      <div className="d-flex align-items-center overview-item flex-column display-flex-center">
        <i className="bi bi-mortarboard"></i>
        <span className="overview-title">Education:</span>
        <span className="overview-value">{job.education}</span>
      </div>
    </div>
  </Card.Body>
</Card>




          <Card className="mb-4">
  <Card.Body>
    <h5>Share this job:</h5>
    <div className="d-flex align-items-center">
      <Button variant="outline-primary" className="share-btn copy-link-btn">
        <i className="bi bi-link-45deg"> copy link</i>
      </Button>
      <Button variant="outline-primary" className="share-btn">
        <i className="bi bi-linkedin"></i>
      </Button>
      <Button variant="outline-primary" className="share-btn">
        <i className="bi bi-facebook"></i>
      </Button>
      <Button variant="outline-primary" className="share-btn">
        <i className="bi bi-twitter"></i>
      </Button>
      <Button variant="outline-primary" className="share-btn">
        <i className="bi bi-envelope"></i>
      </Button>
    </div>
  </Card.Body>
</Card>


        </Col>
      </Row>

      <RelatedJobs />
    </div>
  );
};

export default JobDetail;

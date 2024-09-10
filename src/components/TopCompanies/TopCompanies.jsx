import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import {dribble} from '../../assets/images/images'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './TopCompanies.css';
const TopCompanies = () => {
  const companies = [
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
    {
      name: 'Dribbble',
      location: 'Dhaka, Bangladesh',
      positions: 3,
      featured: true,
      logo: dribble,
    },
  ];
  return (
    <div className="container my-5 mt-5">
      <h2 className="mb-4" style={{ textAlign: 'left' }}>Top Companies</h2>
      <Row className="g-4">
        {companies.map((company, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <div
                    style={{ backgroundColor: '#EA4C89', padding: '10px', borderRadius: '5px', width: '50px' }}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      style={{ width: '30px', height: '30px', marginRight: '5px' }}
                    />
                  </div>

                  <div className="ms-3">
                    <Card.Title className="mb-0">
                      {company.name}{' '}
                      {company.featured && (
                        <Badge
                          className="rounded-pill-tc"
                          style={{
                            color: '#E05151',
                            borderRadius: '15px',
                            padding: '5px 10px',
                            border: 'none', 
                          }}
                        >
                          Featured
                        </Badge>
                      )}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      <i className="bi bi-geo-alt-fill" style={{ marginRight: '5px'  , color:"#00000"}}></i> {company.location}
                    </Card.Text>
                  </div>
                </div>

                <Button variant="outline-primary" style={{ width: '100%' }}>
                  Open Position ({company.positions})
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopCompanies;
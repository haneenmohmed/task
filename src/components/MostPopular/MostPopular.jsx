import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MostPopular.css'; 


const content = [
    { p: 'Anesthesiologists', span: '45,904 Open Positions' },
    { p: 'Surgeons', span: '50,364 Open Positions' },
    { p: 'Obstetricians', span: '4,339 Open Positions' },
    { p: 'Orthodontists', span: '20,079 Open Positions' },
    { p: 'Maxillofacial Surgeons', span: '74,875 Open Positions' },
    { p: 'Software Developer', span: '43359 Open Positions' },
    { p: 'Psychiatrists', span: '18,599 Open Positions' },
    { p: 'Data Scientist', span: '28,200 Open Positions' },
    { p: 'Financial Manager', span: '61,391 Open Positions' },
    { p: 'Management Analysis', span: '93,046 Open Positions' },
    { p: 'IT Manager', span: '50,963 Open Positions' },
    { p: 'Operations Research Analysis', span: '16,627 Open Positions' }
  ];
  
  
  const MostPopular = () => {
    return (
      <div className='container mt-5 ' >
        <h1 className='mb-5'>Most Popular Vacancies</h1>
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <Row key={rowIndex} className="mb-3"> 
            {Array.from({ length: 4 }).map((_, colIndex) => {
              const index = rowIndex * 4 + colIndex;
              const { p, span } = content[index];
              return (
                <Col key={colIndex} md={3} > 
                  <div className="most-popular-col p-3 "> 
                    <p>{p}</p>
                    <span>{span}</span>
                  </div>
                </Col>
                
              );
            })}
          </Row>
        ))}
      </div>
    );
  };
  
  export default MostPopular;
  
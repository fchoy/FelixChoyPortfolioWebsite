import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from '../data'
import { Button } from 'react-bootstrap';
import '../Components/PortfolioCardGroup.css'
import '../animate.css'

const PortfolioCardGroup = () => {
  return (
    <Row xs={1} xl={2} className="g-4 col-xxl-6 col-lg-7 col-md-8 col-sm-10 col-12 m-auto mb-4">
      {Array.from({ length: data.length }).map((_, idx) => (
        <Col key={idx}>
          <Card className="text-center portfolio-card animated-delay" style={{animationDelay: `${data[idx].animationDelayValue}s`}}>
            <Card.Img variant="top" className="card-image" src={data[idx].img} alt='no slide' />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{data[idx].title}</Card.Title>
              <Card.Text>
                {data[idx].description}
              </Card.Text>
              <Button type="link" href={data[idx].link} target="_blank" className="">{data[idx].buttonText}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PortfolioCardGroup
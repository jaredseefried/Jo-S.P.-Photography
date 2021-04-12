import React from 'react';
import Card from 'react-bootstrap/Card'

function MyCard(props) {
  return (
    <Card className='portfolio-card'>
      <Card.Img variant="top" src={props.src} alt='...' className='portfolio-card-img' />
      <Card.Body className="portfolio-card-body">
        <Card.Title className="portfolio-card-title">{props.title}</Card.Title>
        <Card.Text className="portfolio-card-text">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

function MyCard(props) {

  const [displayText, setDisplaytext] = useState(false)

  return (
    <Card className='portfolio-card'>
      <Card.Img variant="top" src={props.src} alt='...' className='portfolio-card-img' />
      <Card.Body className="portfolio-card-body">
        <Card.Title className="portfolio-card-title"><Card.Link href={props.title}>{props.title}</Card.Link></Card.Title>
        <Card.Text className="portfolio-card-text">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
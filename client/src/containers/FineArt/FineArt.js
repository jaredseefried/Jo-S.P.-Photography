import React from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import theImage from '../../images/josp-photography-2.jpeg'

function FineArt(props) {
  return (
    <div>
      <div>
        <Carousel variant="dark" style={{ position: 'inherit', width: 'auto', height: 'auto' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={theImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={theImage}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={theImage}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div >
    </div>
  );
}

export default FineArt;
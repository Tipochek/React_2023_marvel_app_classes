import Carousel from 'react-bootstrap/Carousel';

function SimpleCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <h3>1 First slide</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
        <h3>2 Second slide</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>-
      <Carousel.Item>
        <h3>3 Third slide</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default SimpleCarousel;
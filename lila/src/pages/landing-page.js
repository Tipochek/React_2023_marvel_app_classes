import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import baseImg from '../images/base.jpg'

import Greetings from '../components/Greetings/Greetings';
import SimpleCarousel from '../components/Slider/Slider'
import QuestionForm from '../components/QuestionForm/QuestionForm';

function LandingPage() {
  return (
    <>
      <Row className='justify-content-center mb-4'>
        <Col sm={12} md={6} lg={4}>
          <img src={baseImg} alt="Lila" width="100%" height="auto" />
          <h1>Leela game of the life</h1>
        </Col>
      </Row>

      <Row className='justify-content-center mb-4'>
        <Col sm={12} lg={8}>
          <Greetings/>
        </Col>
      </Row>

      <Row className='justify-content-center mb-4'>
        <Col sm={12} lg={8}>
          <SimpleCarousel/>
        </Col>
      </Row>

      <Row className='justify-content-center mb-4'>
        <Col sm={12} lg={8}>
          <QuestionForm/>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;

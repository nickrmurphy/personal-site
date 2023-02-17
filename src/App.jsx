import { Container, Row, Card, Alert, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row className='pt-5 justify-content-center'>
        <Col xs={12} md={10} lg={8}>
          <Card className='text-center' bg='light'>
            <Card.Body>
              <Card.Title className='display-1'>
                <strong>Hi!</strong></Card.Title>
              <Card.Text className='display-4'>I'm Nick.</Card.Text>
              <Card.Text>I'm a Full Stack Software Engineer with a drive to build solutions that have a positive impact on the world.</Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex'>
              <small>
                <a
                  href='https://www.linkedin.com/in/nrmurphy/'
                  target='_blank' 
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </small>
              <small className='mx-auto'>
                <a 
                  href='https://github.com/nickrmurphy' 
                  target='_blank' 
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </small>
              <small>
                <a 
                  href='mailto:hi@nickmurphy.io' 
                  target='_blank' 
                  rel="noreferrer"
                >
                  Email
                </a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

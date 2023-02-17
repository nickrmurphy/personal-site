import { Container, Row, Card, Alert, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row className='pt-3 justify-content-center'>
        <Col xs={12} md={10} lg={8}>
          <Alert className="text-center" variant="warning">Under Construction 🛠️</Alert>
          <Card className='text-center' bg='light'>
            <Card.Body>
              <Card.Title>
                <strong>Hi!</strong></Card.Title>
              <Card.Text>I'm Nick.</Card.Text>
              <Card.Text>I'm a Full Stack Software Engineer with a drive to build solutions that have a positive impact on the world.</Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex'>
              <small><a className='ps-1' href='https://www.linkedin.com/in/nrmurphy/' target='_blank'>LinkedIn</a></small>
              <small className='mx-auto'><a href='https://github.com/nickrmurphy' target='_blank'>GitHub</a></small>
              <small><a className='ps-1' href='mailto:hi@nickmurphy.io' target='_blank'>Email</a></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import { FaTheaterMasks } from "react-icons/fa";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>
              Repertoár <FaTheaterMasks />
            </h1>
            <p>Váš sprievodca kultúrou na Slovensku.</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

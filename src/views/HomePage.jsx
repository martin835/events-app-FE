import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import { FaTheaterMasks } from "react-icons/fa";
import MainFilter from "../components/MainFilter";

function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <MainFilter />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

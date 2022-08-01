import { Navbar, Container, Nav } from "react-bootstrap";
import { FaTheaterMasks } from "react-icons/fa";

function MyHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <FaTheaterMasks /> <small>sprievodca kultúrou</small>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyHeader;

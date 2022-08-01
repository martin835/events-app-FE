import { Navbar, Container, Nav } from "react-bootstrap";
import { FaTheaterMasks } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

function MyHeader() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <FaTheaterMasks /> <small>sprievodca kultúrou</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">+ Pridaj akciu</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Profil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;

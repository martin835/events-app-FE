import { Container, Navbar } from "react-bootstrap";

function MyFooter() {
  return (
    <Navbar fixed="bottom" bg="light" variant="light">
      <Container>
        <Navbar.Brand>Ⓒ Martin Konečný</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyFooter;

import { Form, Button } from "react-bootstrap";
import months from "../assets/months.json";

function MainFilter() {
  return (
    <Form>
      <Form.Group controlId="select-month-fitler">
        <Form.Label>Vyberte mesiac</Form.Label>
        <Form.Control as="select" value="">
          {months.map((month) => (
            <option key={month.order} value={month.order}>
              {month["name-sk"]}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MainFilter;

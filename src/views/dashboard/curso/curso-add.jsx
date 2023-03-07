import { useState } from "react";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

const Cursos = () => {
  //form validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const [validated1, setValidated1] = useState(false);
  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated1(true);
  };
  return (
    <Row>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title"> Cadastrar Curso</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md="6" className="mb-3">
                <Form.Label htmlFor="validationDefault04">
                  Area de Formação
                </Form.Label>
                <Form.Select id="validationDefault04" required>
                  <option defaultValue>Informática...</option>
                  <option>Mecanica</option>
                  <option>Química</option>
                </Form.Select>
              </Col>
              <Col md="6" className="mb-3">
                <Form.Label md="6" htmlFor="validationDefault01">
                  Nome do Curso
                </Form.Label>
                <Form.Control type="text" id="validationDefault01" required />
              </Col>
            </Row>

            <Form.Group>
              <Button variant="btn btn-primary" type="submit">
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Cursos;

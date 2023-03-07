import { useState } from "react";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

const FormValidation = () => {
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
            <h4 className="card-title">Cadastrar Area de Formação</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form validated={validated} onClick={handleSubmit}>
            <Row className="mb-3">
              <Col md="6" className="mb-3">
                <Form.Label htmlFor="validationCustom05">
                  Nome da Area de Formação
                </Form.Label>
                <Form.Control
                  defaultValue=""
                  type="text"
                  id="validationCustom05"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, insira o nome.
                </Form.Control.Feedback>
              </Col>

              <div className="col-12">
                <Button type="button">Cadastrar</Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default FormValidation;

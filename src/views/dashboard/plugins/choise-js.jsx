import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

//Choice
import ChoicesJs from "../../../components/choices";

// Components
import Card from "../../../components/bootstrap/card";

const options1 = [
  { value: "1", lable: "1" },
  { value: "2", lable: "2" },
  { value: "3", lable: "3" },
  { value: "4", lable: "4" },
];

const options2 = [
  { value: "Choices 1", lable: "Choices 1" },
  { value: "Choices 2", lable: "Choices 2" },
  { value: "Choices 3", lable: "Choices 3" },
  { value: "Choices 4", lable: "Choices 4" },
];

const Choisejs = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Choisejs</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Choisejs Plugin refer
                  <Link to="https://uppy.io">Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4>A Basic</h4>
              <p>
                In this method, selecting only one option from a lots of options
                while only using up as much space as a single option excepted.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <ChoicesJs
                options={options1}
                name="choices-multiple-remove-button"
                select="one"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4 className="card-title">Multiple Choice</h4>
              <p>
                when the multiple attribute is used with the select element, we
                can enable the selection of multiple options from the list.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <ChoicesJs
                options={options2}
                name="choices-multiple-remove-button"
                select="multi"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4 className="card-title">Text Inputs</h4>
              <p>
                An input element can be displayed in many ways, depending on the
                type attribute. Displays a single-line text input field.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <input
                className="form-control"
                id="choices-remove-button"
                type="text"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4 className="card-title">Option Group</h4>
              <p>
                The optgroup tag is used to group related options in a select
                element (drop-down list).
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="box">
                <select className=" form-control" id="choices-optiongroup">
                  <optgroup label="UK">
                    <option defaultValue="London">London</option>
                    <option defaultValue="Manchester">Manchester</option>
                  </optgroup>
                  <optgroup label="France">
                    <option defaultValue="Paris">Paris</option>
                    <option defaultValue="Marseille">Marseille</option>
                  </optgroup>
                </select>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4 className="card-title">Dropdown Items</h4>
              <p>
                A dropdown allows a user to select a defaultValue from a series
                of options. A selection dropdown can allow multiple search
                selections.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <select className="form-control" id="choices-dropdown">
                <option defaultValue="Dropdown item 1">Dropdown item 1</option>
                <option defaultValue="Dropdown item 2">Dropdown item 2</option>
                <option defaultValue="Dropdown item 3">Dropdown item 3</option>
                <option defaultValue="Dropdown item 4">Dropdown item 4</option>
                <option defaultValue="Dropdown item 5">Dropdown item 5</option>
                <option defaultValue="Dropdown item 6">Dropdown item 6</option>
                <option defaultValue="Dropdown item 7">Dropdown item 7</option>
                <option defaultValue="Dropdown item 8">Dropdown item 8</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4 className="card-title">Items Input</h4>
              <p>
                A dropdown allows a user to select a defaultValue from a series
                of options(Limit is 5 items).
              </p>
            </Card.Header>
            <Card.Body className="text-left">
              <select className="form-control" id="choices-selectitem">
                <option defaultValue="Item 1">Item 1</option>
                <option defaultValue="Item 2">Item 2</option>
                <option defaultValue="Item 3">Item 3</option>
                <option defaultValue="Item 4">Item 4</option>
                <option defaultValue="Item 1">Item 5</option>
                <option defaultValue="Item 2">Item 6</option>
                <option defaultValue="Item 3">Item 7</option>
                <option defaultValue="Item 4">Item 8</option>
                <option defaultValue="Item 1">Item 9</option>
                <option defaultValue="Item 2">Item 10</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4>Only Email Address</h4>
              <p>
                An email address identifies an email box to which messages are
                delivered.Only Email type content is available.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <input
                className="form-control"
                id="choices-email-filter"
                type="text"
                placeholder="This is a placeholder"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <h4>Email Disable</h4>
              <p>
                An email address identifies an email box to which messages are
                delivered.Only Email type content is available.
              </p>
            </Card.Header>
            <Card.Body className="text-center">
              <input
                className="form-control"
                id="choices-text-disabled"
                type="text"
                defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                placeholder="This is a placeholder"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Choisejs.displayName = "Choisejs";
export default Choisejs;

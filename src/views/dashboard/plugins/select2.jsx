import { memo, Fragment } from "react";

// Recat-bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

//React-select
import Select from "react-select";

const options = [
  { value: "Alabama", label: "Alabama" },
  { value: "Amalapuram", label: "Amalapuram" },
  { value: "Arizona", label: "Arizona" },
  { value: "Colorada", label: "Colorada" },
  { value: "Idaho", label: "Idaho" },
  { value: "Montana", label: "Montana" },
  { value: "Alabama", label: "Alabama" },
  { value: "Anakapalli", label: "Anakapalli" },
  { value: "Akkayapalem", label: "Akkayapalem" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "New Maxico", label: "New Maxico" },
  { value: "North Dakota", label: "North Dakota" },
];
const group1 = {
  label: "California",
  value: "California",
};

const options1 = [
  { readonly: true, label: "pacific Time zone", options: [group1] },
  { value: "Nevada", label: "Nevada" },
  { value: "Oregon", label: "Oregon" },
  { value: "Washington", label: "Washington" },
  { value: "Idaho", label: "Idaho" },
  { value: "Montana", label: "Montana" },
  { value: "Alabama", label: "Alabama" },
  { value: "Anakapalli", label: "Anakapalli" },
  { value: "Akkayapalem", label: "Akkayapalem" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "New Maxico", label: "New Maxico" },
  { value: "North Dakota", label: "North Dakota" },
];

const group = {
  value: "first",
  label: "First",
};

const options2 = [
  {
    readonly: true,
    label: "Colours",
    options: [group],
  },
  { value: "Second", label: "Second (disabled)", isDisabled: true },
  { value: "three", label: "Three" },
  { value: "Four", label: "Four" },
  { value: "Five", label: "Five (disabled)", isDisabled: true },
  { value: "Six", label: "Six" },
  { value: "Seven", label: "Seven" },
  { value: "eight", label: "Eight" },
  { value: "nine", label: "Nine" },
  { value: "ten", label: "Ten (disabled)", isDisabled: true },
];

const group2 = {
  value: "Arizona",
  label: "Arizona",
};

const group3 = {
  value: "Alabama",
  label: "Alabama",
};

const options3 = [
  { readonly: true, label: "pacific Time zone", options: [group1] },
  { value: "Nevada", label: "Nevada" },
  { value: "Oregon", label: "Oregon" },
  { value: "Washington", label: "Washington" },
  { readonly: true, label: "Mountain Time zone", options: [group2] },
  { value: "Colorada", label: "Colorada" },
  { value: "Idaho", label: "Idaho" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "New Maxico", label: "New Maxico" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { readonly: true, label: "Central Time zone", options: [group3] },
  { value: "Arkansas", label: "Arkansas" },
  { value: "Lowa", label: "Lowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Missouri", label: "Missouri" },
  { value: "Texas", label: "Texas" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Kentucky", label: "Kentucky" },
];

const Select2 = memo((props) => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Select2</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Select2 Plugin refer
                  <Link to="">Documentation</Link>
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
              <Card.Header.Title>
                <h4>Single select boxes</h4>
                <p>
                  Select2 can take a regular select box. By default it supports
                  all options and operations that are available in a standard
                  select box,but with added flexibility.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Select options={options} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Multiple select boxes</h4>
                <p>
                  Select2 also supports multi-value select boxes. The select
                  below is declared with the multiple attribute. We can select
                  multiple data in One time.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="card-body-inner">
                <Select options={options1} isMulti />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Disabled Results</h4>
                <p>
                  Select2 will correctly handle disabled results, both with data
                  coming from a standard select (when the disabled attribute is
                  set) and from remote sources, where the object has disabled:
                  true set.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Select options={options2} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Limiting the number of selections</h4>
                <p>
                  Select2 multi-value select boxes can set restrictions
                  regarding the maximum number of options selected. The select
                  below is declared with the multiple attribute with
                  maximumSelectionLength.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Select options={options3} isMulti />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Theme Support</h4>
                <p>
                  Select2 supports custom themes using the theme option so you
                  can style Select2 to match the rest of your application.These
                  examples use the classNameic theme.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <select
                className="select2-theme-single js-states form-control"
                name="state"
              >
                <optgroup label="UK">
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                </optgroup>
                <optgroup label="France">
                  <option value="Paris">Paris</option>
                  <option value="Marseille">Marseille</option>
                </optgroup>
                <optgroup label="Mountain Time zone">
                  <option value="Arizona">Arizona</option>
                  <option value="Colorada">Colorada</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="New Maxico">New Maxico</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Utah">Utah</option>
                  <option value="Wyoming">Wyoming</option>
                </optgroup>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Placeholder</h4>
                <p>
                  A placeholder value can be defined and will be displayed until
                  a selection is made. Select2 uses the placeholder attribute on
                  multiple select boxes
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <select
                className="select2-placeholder js-states form-control"
                name="state"
              >
                <optgroup label="UK">
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                </optgroup>
                <optgroup label="Mountain Time zone">
                  <option value="Arizona">Arizona</option>
                  <option value="Colorada">Colorada</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="New Maxico">New Maxico</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Utah">Utah</option>
                  <option value="Wyoming">Wyoming</option>
                </optgroup>
                <optgroup label="France">
                  <option value="Paris">Paris</option>
                  <option value="Marseille">Marseille</option>
                </optgroup>
              </select>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Select2.displayName = "Select2";
export default Select2;

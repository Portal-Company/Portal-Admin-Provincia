import { memo, Fragment } from "react";
import { Link } from "react-router-dom";

// React-bootstrap
import { Row, Col, Card } from "react-bootstrap";

// Components
// import Card from '../../../components/bootstrap/card'

const Rating = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Rating</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Rating Plugin refer
                  <Link to="https://www.npmjs.com/package/jquery-bar-rating">
                    Documentation
                  </Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Square Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="square-rating" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Horizontal Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="horizontal-rating">
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1" defaultValue="1">
                  1
                </option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">1/10 Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="bars-number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Pill Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="pill-rating">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Movie Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="movie-rating">
                <option value="Bad">Bad</option>
                <option value="Mediocre">Mediocre</option>
                <option value="Good">Good</option>
                <option value="Awesome">Awesome</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6" md="6">
          <Card>
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Reversed Rating</h4>
              </div>
            </div>
            <Card.Body>
              <select id="example-reversed" name="rating">
                <option value="Strongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neither Agree or Disagree" defaultValue={""}>
                  Neither Agree or Disagree
                </option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});
Rating.displayName = "Rating";
export default Rating;

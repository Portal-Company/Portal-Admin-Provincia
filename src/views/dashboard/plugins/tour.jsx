import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

const Tour1 = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Tour</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Tour Plugin refer
                  <Link to="#">Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Tour1.displayName = "Tour1";
export default Tour1;

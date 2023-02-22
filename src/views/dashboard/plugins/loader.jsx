import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

const Loader = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card className="card-block card-stretch card-height">
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Loader Style</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 1</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-1"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 2</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-2"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 3</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-3">
                      <div className="loader-outter"></div>
                      <div className="loader-inner"></div>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 4</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-4"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 5</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-5">
                      {" "}
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 6</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-6">
                      {" "}
                      <span className="inner inner1"></span>
                      <span className="inner inner2"></span>
                      <span className="inner inner3"></span>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 7</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-7"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 8</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-8"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 9</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-9"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 10</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-10"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 11</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-11"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 12</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-12"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 13</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-13"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 14</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-14"></div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 15</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-15">
                      <div className="loader-inner"></div>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={4}>
                  <h5 className="text-center pb-2 border-bottom">Loader 16</h5>
                  <div className="iq-loader-box">
                    <div className="iq-loader-16"></div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});
Loader.displayName = "Loader";
export default Loader;

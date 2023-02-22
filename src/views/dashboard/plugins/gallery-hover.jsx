import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Image } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

//Img
import img1 from "/src/assets/images/hover-effects/01.jpg";
import img2 from "/src/assets/images/hover-effects/02.jpg";
import img3 from "/src/assets/images/hover-effects/03.jpg";
import img4 from "/src/assets/images/hover-effects/04.jpg";
import img5 from "/src/assets/images/hover-effects/05.jpg";
import img6 from "/src/assets/images/hover-effects/06.jpg";
import img7 from "/src/assets/images/hover-effects/07.jpg";
import img8 from "/src/assets/images/hover-effects/08.jpg";
import img9 from "/src/assets/images/hover-effects/09.jpg";
import img10 from "/src/assets/images/hover-effects/10.jpg";
import img11 from "/src/assets/images/hover-effects/11.jpg";
import img12 from "/src/assets/images/hover-effects/12.jpg";

const Galleryhover = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card className="card-block card-stretch card-height">
            <Card.Header className="d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title mb-0">Hover Effects</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image
                        src={img1}
                        className="img-fluid rounded effect-1"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image
                        src={img2}
                        className="img-fluid rounded effect-2"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image
                        src={img3}
                        className="img-fluid rounded effect-3"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image
                        src={img4}
                        className="img-fluid rounded effect-4"
                        alt=""
                      />
                    </Link>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image src={img5} className="img-fluid rounded" alt="" />
                    </Link>
                    <div className="ovrlay-1-a"></div>
                    <div className="ovrlay-1-b"></div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image src={img6} className="img-fluid rounded" alt="" />
                    </Link>
                    <div className="ovrlay-2-a"></div>
                    <div className="ovrlay-2-b"></div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image src={img7} className="img-fluid rounded" alt="" />
                    </Link>
                    <div className="ovrlay-3-a"></div>
                    <div className="ovrlay-3-b"></div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Link to="#">
                      <Image src={img8} className="img-fluid rounded" alt="" />
                    </Link>
                    <div className="ovrlay-4-a"></div>
                    <div className="ovrlay-4-b"></div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Image src={img9} className="img-fluid rounded" alt="" />
                    <div className="ovrlay-5">
                      <h4 className="mt-4 mb-2">Lorem Ipsum</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                      <Link to="#" className="btn btn-primary mb-3">
                        Read More
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Image src={img10} className="img-fluid rounded" alt="" />
                    <div className="ovrlay-6">
                      <h4 className="mt-4 mb-2 text-center">Lorem Ipsum</h4>
                      <p className="text-center">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                      <div className="d-flex justify-content-center mb-3">
                        <Link to="#" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Image src={img11} className="img-fluid rounded" alt="" />
                    <div className="ovrlay-7">
                      <Link to="#" className="button">
                        <i className="fa fa-search"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xl={3} lg={4} ms={6} className="grid-m">
                  <div className="hover-effects">
                    <Image
                      src={img12}
                      className="img-fluid rounded effect-8"
                      alt=""
                    />
                    <div className="ovrlay-8">
                      <h4 className="mt-3 pl-2">Lorem ipsum</h4>
                      <Link to="#" className="i-btn">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
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

Galleryhover.displayName = "Galleryhover";
export default Galleryhover;

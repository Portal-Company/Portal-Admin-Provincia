import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Table } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

const Billing = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card className="rounded">
            <Card.Body>
              <Row>
                <Col sm="12" className="mb-3">
                  <h4 className="mb-2">Invoice #215462</h4>
                  <h5 className="mb-3">Hello , Devon Lane </h5>
                  {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p> */}
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Bill to:</h5>
                  <p>Anne Teak</p>
                  <p>
                    4517 Washington Ave. <br /> Manchester, Kentucky 39495
                  </p>
                </Col>
                <Col lg="3">
                  <h5>Bill from:</h5>
                  <p>Qompac UI ltd.</p>
                  <p>
                    2972 Westheimer Rd. Santa Ana,
                    <br /> Illinois 85486{" "}
                  </p>
                </Col>
                <Col lg="3">
                  <h5>Bill fromAmount Due:</h5>
                  <h4>$2,880.00</h4>
                </Col>
                <Col lg="2" className="text-end">
                  <h5>Invoice Date</h5>
                  <p>27 May 2021</p>
                  <h5>Invoice Date</h5>
                  <p className="mb-0">27 May 2021</p>
                </Col>
              </Row>
              <Row>
                <Col sm="12" className=" mt-4">
                  <div className="table-responsive-lg">
                    <Table>
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th className="text-center" scope="col">
                            Quantity
                          </th>
                          <th className="text-center" scope="col">
                            Price
                          </th>
                          <th className="text-center" scope="col">
                            Totals
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 1</h6>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </td>
                          <td className="text-center">5</td>
                          <td className="text-center">$120.00</td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 2</h6>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </td>
                          <td className="text-center">5</td>
                          <td className="text-center">$120.00</td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 1</h6>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </td>
                          <td className="text-center">5</td>
                          <td className="text-center">$120.00</td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 1</h6>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </td>
                          <td className="text-center">5</td>
                          <td className="text-center">$120.00</td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-center">Total:</h6>
                          </td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-center">Taxs:</h6>
                          </td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-center">Discount:</h6>
                          </td>
                          <td className="text-center">$2,880.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="mb-0 fw-bold">Net Amount</h5>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <b>$2,880.00</b>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <p className="mb-0 mt-4">
                    Please pay before the due date. Thank you for your business.
                  </p>
                  <div className="d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-primary">
                      Print
                    </button>
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

Billing.displayName = "Billing";
export default Billing;

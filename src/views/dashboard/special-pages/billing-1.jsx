import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Table } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

const Billing1 = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card className="rounded">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-center">
                    <svg
                      className="text-primary icon-40 text-center"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z"
                        fill="#7016d0"
                      />
                      <path
                        d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z"
                        fill="#3FF0B9"
                      />
                    </svg>
                  </p>
                  <h3>Qompac UI</h3>
                </div>
                <div className="text-end">
                  <p>Billed from</p>
                  <h5>Qompac UI ltd.</h5>
                  <h6>
                    2972 Westheimer Rd. Santa Ana,
                    <br />
                    Illinois 85486{" "}
                  </h6>
                </div>
              </div>

              <Row className="mt-4">
                <Col lg="8">
                  <Card className="invoice-card">
                    <div className="d-flex align-items-center justify-content-between ">
                      <div className="">
                        <p className="">Invoice Number</p>
                        <h4 className="my-2">#215462</h4>
                        <h6>Issued Date: 22 Mar 2021</h6>
                        <h6 className="mb-0">Due Date: 29 Mar 2021</h6>
                      </div>
                      <div className="text-end">
                        <h6>Billed to</h6>
                        <h5>Elon Musk</h5>
                        <p className="mb-0">
                          4517 Washington Ave. Manchester, Kentucky 39495
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="invoice-biling">
                    <h6 className="mb-0">
                      Amount Due <small>(USD)</small>
                    </h6>
                    <h3 className="mb-4">
                      $14,010.00 <small>(Tax incl.)</small>
                    </h3>
                    <div>
                      <div className="btn btn-sm btn-soft-danger">
                        Due Date: 29 Mar 2021
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col sm="12" className="mt-4">
                  <div className="table-responsive-lg">
                    <Table className="billing-1">
                      <thead>
                        <tr>
                          <th scope="col">Item Name</th>
                          <th className="text-center" scope="col">
                            Price
                          </th>
                          <th className="text-center" scope="col">
                            Quantity
                          </th>
                          <th className="text-end" scope="col">
                            Sub-Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 1</h6>
                          </td>
                          <td className="text-center">$2,100</td>
                          <td className="text-center">1</td>
                          <td className="text-end">$2,100</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 2</h6>
                          </td>
                          <td className="text-center">$4,205</td>
                          <td className="text-center">2</td>
                          <td className="text-end">$8,410</td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-0">Item 1</h6>
                          </td>
                          <td className="text-center">$1,500</td>
                          <td className="text-center">3</td>
                          <td className="text-end">$4,500</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <h6 className="mb-0 text-end">Total:</h6>
                          </td>
                          <td className="text-end">$15,010.00</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-end">Tax:</h6>
                          </td>
                          <td className="text-end">$1,500</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-end">Discount:</h6>
                          </td>
                          <td className="text-end">$2,500</td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="mb-0">
                              <b>Net Amount</b>
                            </h5>
                          </td>
                          <td className="text-center"></td>
                          <td className="text-center"></td>

                          <td className="text-end">
                            <b>$14,010.00</b>
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
                  <div className="d-flex justify-content-end mt-4">
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

Billing1.displayName = "Billing1";
export default Billing1;

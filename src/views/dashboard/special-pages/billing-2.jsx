import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Table } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

const Billing2 = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card className="rounded">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-5">
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
                  <p className="">Legal Registration No. 12231</p>
                  <p className="">Email: support@qompacui.com</p>
                  <p>Web: www.Qompacui.com</p>
                  <p className="mb-0">Phone: (208) 555-0112</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4>Invoice</h4>
                  <h5>3 Items Purchased</h5>
                  <div>
                    <span className="mt-2">Due Date: 29 Mar 2021</span>
                    <span className="ms-2">Due Date: 29 Mar 2021</span>
                  </div>
                </div>
                <div>
                  <svg
                    width="130"
                    height="130"
                    viewBox="0 0 130 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4_6485)">
                      <path
                        d="M64.6533 97.2398C64.6533 93.7514 67.4537 90.9564 70.9475 90.9564C74.4358 90.9564 77.2308 93.7514 77.2308 97.2398C77.2337 98.066 77.0732 98.8846 76.7585 99.6485C76.4438 100.412 75.9812 101.107 75.3972 101.691C74.8132 102.276 74.1195 102.739 73.3558 103.054C72.5922 103.369 71.7737 103.531 70.9475 103.529C70.1208 103.532 69.3017 103.372 68.5371 103.058C67.7726 102.743 67.0778 102.281 66.4927 101.697C65.9077 101.113 65.444 100.419 65.1283 99.6548C64.8126 98.8908 64.6512 98.0718 64.6533 97.2452V97.2398ZM90.2417 97.2452C90.2417 93.7514 93.0421 90.951 96.5304 90.951C100.019 90.951 102.819 93.7514 102.819 97.2398C102.819 100.728 100.019 103.529 96.5358 103.529C95.7092 103.532 94.89 103.372 94.1254 103.058C93.3609 102.743 92.6661 102.281 92.081 101.697C91.496 101.113 91.0323 100.419 90.7166 99.6548C90.4009 98.8908 90.2395 98.0718 90.2417 97.2452ZM30.9292 97.2452C30.9292 93.7514 33.7296 90.951 37.2179 90.951C40.7062 90.951 43.5013 93.7514 43.5013 97.2398C43.5013 100.728 40.7062 103.529 37.2179 103.529C36.3917 103.531 35.5731 103.371 34.8092 103.056C34.0453 102.741 33.3511 102.279 32.7666 101.695C32.1822 101.111 31.7189 100.417 31.4036 99.6535C31.0883 98.8899 30.927 98.0714 30.9292 97.2452ZM5.34083 97.2452C5.34083 93.7514 8.14125 90.951 11.6296 90.951C15.1179 90.951 17.9183 93.7514 17.9183 97.2398C17.9212 98.0664 17.7605 98.8855 17.4455 99.6497C17.1304 100.414 16.6673 101.108 16.0828 101.693C15.4982 102.278 14.8038 102.741 14.0396 103.056C13.2753 103.371 12.4562 103.531 11.6296 103.529C10.8038 103.531 9.98582 103.37 9.22252 103.055C8.45922 102.74 7.7657 102.277 7.18182 101.693C6.59793 101.109 6.13518 100.416 5.82017 99.6523C5.50517 98.889 5.34411 98.0709 5.34625 97.2452H5.34083ZM57.0754 86.1302H51.6046V108.138H57.0754V86.1302ZM17.875 108.138H23.3458V86.1302H17.875V87.896C15.968 86.5688 13.6984 85.8615 11.375 85.8702C5.08083 85.8702 0 90.951 0 97.2452C0 103.572 5.08083 108.615 11.375 108.615C13.7854 108.615 16.0225 107.884 17.875 106.589V108.138ZM102.776 108.138H108.247V86.1302H102.776V87.896C100.869 86.5688 98.5992 85.8615 96.2758 85.8702C89.9817 85.8702 84.9008 90.951 84.9008 97.2452C84.8958 98.7401 85.1867 100.221 85.7566 101.603C86.3265 102.985 87.1643 104.241 88.2216 105.298C89.279 106.355 90.535 107.192 91.9173 107.761C93.2996 108.33 94.7809 108.62 96.2758 108.615C98.6862 108.615 100.923 107.884 102.776 106.589V108.138ZM110.272 100.988C110.446 105.43 114.237 108.571 120.564 108.571C125.737 108.571 130 106.329 130 101.378C130 97.9331 128.061 95.9073 123.581 95.0406L120.093 94.3581C117.85 93.9248 116.301 93.4914 116.301 92.1589C116.301 90.6964 117.807 90.0464 119.703 90.0464C122.465 90.0464 123.581 91.4277 123.668 93.0635H129.182C128.879 88.7573 125.434 85.8702 119.876 85.8702C114.151 85.8702 110.744 89.0118 110.744 93.1068C110.744 98.101 114.795 98.9189 118.284 99.5689L121.171 100.084C123.24 100.474 124.145 101.075 124.145 102.283C124.145 103.361 123.11 104.433 120.651 104.433C117.076 104.433 115.917 102.581 115.873 100.988H110.272ZM43.4633 78.6335V87.896C41.5563 86.5688 39.2867 85.8615 36.9633 85.8702C30.6692 85.8702 25.5883 90.951 25.5883 97.2452C25.5883 103.572 30.6692 108.615 36.9633 108.615C39.3683 108.615 41.6108 107.884 43.4633 106.589V108.138H48.9342V78.6335H43.4633ZM77.1875 78.6335V87.896C75.2805 86.5688 73.0109 85.8615 70.6875 85.8702C64.3988 85.8702 59.3125 90.951 59.3125 97.2452C59.3075 98.7401 59.5983 100.221 60.1683 101.603C60.7382 102.985 61.576 104.241 62.6333 105.298C63.6907 106.355 64.9467 107.192 66.329 107.761C67.7113 108.33 69.1926 108.62 70.6875 108.615C73.0979 108.615 75.335 107.884 77.1875 106.589V108.138H82.6583V78.6335H77.1875ZM14.2133 72.1335L17.9183 78.6335H43.4633L33.3396 61.1431L14.2188 72.1281L14.2133 72.1335ZM57.0754 84.1044V78.6335H77.1875L55.7375 41.5023L36.5679 52.4873L51.6046 78.6335V84.1044H57.0754ZM85.3342 78.6335H110.917L77.8375 21.3848L58.7112 32.4131L85.3342 78.6335Z"
                        fill="#161D2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_6485">
                        <rect width="130" height="130" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <hr />
              <Row className="mt-4">
                <Col lg="3">
                  <div className="d-flex ">
                    <h5>To:</h5>
                    <div className="ms-2">
                      <h4>Qompac UI ltd.</h4>
                      <p className="">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </p>
                      <p>Phone: (208) 555-0112</p>
                    </div>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="d-flex ">
                    <h5>From:</h5>
                    <div className="ms-2">
                      <h4>Elon Musk</h4>
                      <p className="">
                        2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                      </p>
                      <p>Phone: (603) 555-0123</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="12" className="mt-4">
                  <div className="table-responsive-lg">
                    <Table>
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
                            <h6 className="mb-0 text-center">Total:</h6>
                          </td>
                          <td className="text-end">$15,010.00</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-center">Tax:</h6>
                          </td>
                          <td className="text-end">$1,500</td>
                        </tr>
                        <tr>
                          <td className="text-center"></td>
                          <td className="text-center"></td>
                          <td>
                            <h6 className="mb-0 text-center">Discount:</h6>
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

Billing2.displayName = "Billing2";
export default Billing2;

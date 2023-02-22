// import { Input } from 'choices.js/public/types/src/scripts/components'
import { useState, memo, Fragment } from "react";

//react-bootstrap
import { Col, Row, Table, Card, Button, Form } from "react-bootstrap";

const wrong = (
  <svg
    width="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 20L20 4M20 20L4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const right = (
  <svg
    width="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Pricing = memo(() => {
  const [pricing, setPricing] = useState("pricing");
  const [checked, setChecked] = useState(true);
  const pricingLists = [
    {
      title: "Feature 1",
      icon: right,
      icon1: right,
      icon2: right,
      icon3: right,
    },
    {
      title: "Feature 2",
      icon: wrong,
      icon1: right,
      icon2: right,
      icon3: right,
    },
    {
      title: "Feature 3",
      icon: wrong,
      icon1: right,
      icon2: right,
      icon3: right,
    },
    {
      title: "Feature 4",
      icon: right,
      icon1: right,
      icon2: right,
      icon3: right,
    },
    {
      title: "Feature 5",
      icon: wrong,
      icon1: wrong,
      icon2: right,
      icon3: right,
    },
  ];
  return (
    <Fragment>
      <Row>
        <Col md="12">
          <Row className=" row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center">
            <Col>
              <Card className=" mb-4">
                <Card.Header className="bg-soft-primary">
                  <h4 className="card-title pricing-card-title mb-3">Free</h4>
                  <h1 className="mb-3">
                    <b>$0</b>
                    <br />
                    /Month
                  </h1>
                  <button type="button" className="btn btn-primary mb-5">
                    Get started
                  </button>
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title as="h1" className=" pricing-card-title">$0<small className="text-muted fw-light">/mo</small></Card.Title>
                                    <h4 className="my-0 fw-normal mt-3">Free</h4> */}
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>10 users included</p>
                    </li>
                    <li>
                      <p>2 GB of storage</p>
                    </li>
                    <li>
                      <p>Email support</p>
                    </li>
                    <li>
                      <p>Help center access</p>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-outline-secondary disabled">Sign up for free</button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Header className="bg-soft-primary">
                  <h4 className="card-title pricing-card-title mb-3">Pro</h4>
                  <h1 className="mb-3">
                    <b>$199</b>
                    <br />
                    /Month
                  </h1>
                  <button type="button" className="btn btn-primary mb-5">
                    Get started
                  </button>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>20 users included</p>
                    </li>
                    <li>
                      <p>10 GB of storage</p>
                    </li>
                    <li>
                      <p>Priority email support</p>
                    </li>
                    <li>
                      <p>Help center access</p>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-outline-primary">Get started</button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Header className="bg-soft-primary">
                  <h4 className="card-title pricing-card-title mb-3">
                    Enterprise
                  </h4>
                  <h1 className="mb-3">
                    <b>$29</b>
                    <br />
                    /Month
                  </h1>
                  <button type="button" className="btn btn-primary mb-5">
                    Get started
                  </button>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>30 users included</p>
                    </li>
                    <li>
                      <p>15 GB of storage</p>
                    </li>
                    <li>
                      <p>Call and email support</p>
                    </li>
                    <li>
                      <p>Help center access</p>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-primary">Get Started</button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" mb-4 rounded-3 ">
                <Card.Header className="bg-soft-primary">
                  <h4 className="card-title pricing-card-title mb-3">
                    Premium
                  </h4>
                  <h1 className="mb-3">
                    <b>$49</b>
                    <br />
                    /Month
                  </h1>
                  <button type="button" className="btn btn-primary mb-5">
                    Get started
                  </button>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled my-3 p-0">
                    <li>
                      <p>50 users included</p>
                    </li>
                    <li>
                      <p>60 GB of storage</p>
                    </li>
                    <li>
                      <p>24 X 7 call support</p>
                    </li>
                    <li>
                      <p>Help center access</p>
                    </li>
                  </ul>
                  {/* <button type="button" className="btn btn-primary">Get Started</button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" row-cols-1">
            <Col sm="12">
              <Card>
                <Card.Header className=" pb-3">
                  <h3 className="block-title">Pricing 1</h3>
                </Card.Header>
                <Card.Body className=" p-0">
                  <div className="table-responsive pricing pt-2">
                    <Table id="my-table" className="table mb-0">
                      <thead>
                        <tr>
                          <th className="prc-wrap"></th>
                          <th className="prc-wrap">
                            <div
                              className={`pricing-box ${
                                pricing === "Basic" ? "active" : ""
                              } `}
                              onClick={() => setPricing("Basic")}
                            >
                              {/* <div className="h3 pt-4">$0<small> / month</small></div> 
                                                            <span className="type">Free</span> */}
                              <div className="h4">Free</div>
                              <div className="h2">
                                <b>$0</b>
                                <small> / month</small>
                              </div>{" "}
                              <small className="type-1">Recommended</small>
                            </div>
                          </th>
                          <th className="prc-wrap">
                            <div
                              className={`pricing-box  ${
                                pricing === "pricing" ? "active" : ""
                              }`}
                              onClick={() => setPricing("pricing")}
                            >
                              <div className="h4">Pro</div>
                              <div className="h2">
                                $15<small> / month</small>
                              </div>
                              <small className="type-1">Recommended</small>
                            </div>
                          </th>
                          <th className="prc-wrap">
                            <div
                              className={`pricing-box ${
                                pricing === "Platinum" ? "active" : ""
                              }`}
                              onClick={() => setPricing("Platinum")}
                            >
                              <div className="h4">Enterprise</div>
                              <div className="h2">
                                $29<small> / month</small>
                              </div>
                              <small className="type-1">Recommended</small>
                            </div>
                          </th>
                          <th className="prc-wrap">
                            <div
                              className={`pricing-box ${
                                pricing === "Premium" ? "active" : ""
                              } `}
                              onClick={() => setPricing("Premium")}
                            >
                              <span className="h4">Premium</span>
                              <div className="h2">
                                $49<small> / month</small>
                              </div>
                              <small className="type-1">Recommended</small>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pricingLists.map((item) => (
                          <tr key={item.title}>
                            <th className="text-center" scope="row">
                              {item.title}
                            </th>
                            <td
                              className={`text-center child-cell ${
                                pricing === "Basic" ? "active" : ""
                              }`}
                            >
                              {item.icon}
                            </td>
                            <td
                              className={`text-center child-cell ${
                                pricing === "pricing" ? "active" : ""
                              }`}
                            >
                              {item.icon1}
                            </td>
                            <td
                              className={`text-center child-cell ${
                                pricing === "Platinum" ? "active" : ""
                              }`}
                            >
                              {item.icon2}
                            </td>
                            <td
                              className={`text-center child-cell ${
                                pricing === "Premium" ? "active" : ""
                              }`}
                            >
                              {item.icon3}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-center">
                            <i className="ri-close-line i_close"></i>
                          </td>
                          <td className="text-center">
                            {" "}
                            <Button href="#" variant="outline-primary">
                              Free
                            </Button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <Button href="#" variant="outline-primary">
                              Purchase
                            </Button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <Button href="#" variant="outline-primary">
                              Purchase
                            </Button>
                          </td>
                          <td className="text-center">
                            {" "}
                            <Button href="#" variant="outline-primary">
                              Purchase
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
              {/* <Card>
                                <Card.Header className=" pb-3">
                                    <h3 className="block-title">Payments</h3>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive pricing pt-2">
                                        <Table className="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Free</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$0</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$0.00</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Free</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="text-bold h5">Pro</div>
                                                                <span className="badge rounded-pill bg-soft-success ms-2">Popular</span>
                                                            </div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$15</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$169.99</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Pro</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Enterprise</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$29</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$319.89</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Enterprise</button>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div>
                                                            <div className="text-bold h5">Premium</div>
                                                            <div className="d-flex justify-content-start align-items-center mt-4">
                                                                <small>USD</small>
                                                                <div className="mx-2 h4">$49</div>
                                                                <small> / mo</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <div className="d-flex">billed yearly</div>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="bold me-2">$549.09</small> billed monthly
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary rounded-pill mt-3 w-100">Buy Premium</button>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th colSpan="5" className="bg-light">Features</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 1</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 2</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 3</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Features 4</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colSpan="5" className="bg-light">Payment</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 1</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 2</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 3</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="6" y="11" width="12" height="2" rx="1" fill="currentColor" stroke="currentColor"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Payment 4</th>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center active">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">
                                                        <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23 7L6.44526 17.8042C5.85082 18.1921 5.0648 17.9848 4.72059 17.3493L1 10.4798" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card> */}
              {/* <Card>
                                <Row className=" no-gutters">
                                    <Col md="8">
                                        <Card.Body>
                                        <h4>Lifetime Membership</h4>
                                        <p className="mt-2">
                                            If you will take advantage of the above-listed amenities, classes, and services, Life Time's membership fees may be worth the cost.
                                        </p>
                                        <div className="mb-5 pt-2">
                                            <p className="line-around text-secondary mb-0"><span className="line-around-1">Included Features</span></p>
                                        </div>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6" md="6" sm="12" className="">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                            <Col lg="6" md-="6" sm="12">
                                                <div className="d-flex align-items-center">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    <div className="ms-2">Private forum access</div>
                                                </div>                           
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Col>
                                    <Col md="4">
                                        <Card.Body className=" text-center h-100 iq-single-card">
                                            <div className="d-flex align-items-center justify-content-center mb-2">
                                                <Card.Title as="h1" className=" pricing-card-title mb-0">
                                                    $599                              
                                                </Card.Title>
                                                <small className="ms-1 text-muted fw-light">USD</small>
                                            </div>
                                            <div className="font-medium text-center text-secondary">
                                                <div>No monthly subscription,</div>
                                                <div>you only pay once.</div>
                                            </div>
                                            <button className="btn btn-primary rounded-pill mt-5 w-100">Get Started</button>
                                        </Card.Body>
                                    </Col>
                                </Row>                  
                            </Card>                */}
            </Col>
          </Row>
          {/* <Row className=" iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5 mt-5 text-center">
                        <Col className=" iq-star-inserted-1">
                            <Card className=" my-5">
                                <Card.Body>
                                    <h2 className="my-0 fw-normal mb-4">Enterprise</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$29 <small className="text-secondary"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$79.9 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>30 users included</p></li>
                                        <li><p>15 GB of storage</p></li>
                                        <li><p>Call and email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className=" iq-star-inserted-2">
                            <Card className=" mb-0 shadow-lg">
                                <Card.Body>
                                    <h2><span className="badge rounded-pill bg-soft-primary mb-4"><small className="text-uppercase px-3">Popular</small></span></h2>
                                    <h2 className="my-0 fw-normal mb-4">Pro</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$15<small className="text-secondary"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$55.0 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>20 users included</p></li>
                                        <li><p>10 GB of storage</p></li>
                                        <li><p>Priority email support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className=" iq-star-inserted-3">
                            <Card className=" my-5">
                                <Card.Body>
                                    <h2 className="my-0 fw-normal mb-4">Premium</h2>
                                    <Card.Title as="h1" className=" pricing-card-title mb-0">$49 <small className="text-secondary"> / month</small></Card.Title>
                                    <p className="mb-0">billed yearly</p>
                                    <p>$99.9 billed monthly</p>
                                    <ul className="list-unstyled my-3 p-0">
                                        <li><p>50 users included</p></li>
                                        <li><p>60 GB of storage</p></li>
                                        <li><p>24 X 7 call support</p></li>
                                        <li><p>Help center access</p></li>
                                    </ul>
                                    <button type="button" className="btn btn-primary rounded-pill w-100">Get Started</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3 text-center">
            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="pricing-card-title mb-3">
                    <h3>
                      <b>Basic Plan </b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$9 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="h3 pricing-card-title mb-3">
                    <h3>
                      <b>Standard Plan</b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body className="card-body">
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$29 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="h3 pricing-card-title mb-3">
                    <h3>
                      <b>Professional Plan</b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$49 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="h3 pricing-card-title mb-3">
                    <h3>
                      <b>Business Plan</b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$39 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="h3 pricing-card-title mb-3">
                    <h3>
                      <b>VIP Plan</b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$69 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4">
                <Card.Header className="bg-soft-primary p-4">
                  <Card.Title className="h3 pricing-card-title mb-3">
                    <h3>
                      <b>Premium Plan</b>
                    </h3>
                  </Card.Title>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    className="me-2"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                      fill="#161D2B"
                    />
                    <path
                      d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                      fill="#161D2B"
                    />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled p-0 mb-0">
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        Sofbox series
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-center">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Streamit Special
                      </p>
                    </li>
                    <li className="mb-5">
                      <p className="mb-0 d-flex justify-content-center align-items-cente">
                        {" "}
                        <svg
                          width="14"
                          height="14"
                          className="me-3"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.65103 1.07509L9.13535 4.05794C9.24471 4.27405 9.45342 4.42413 9.69414 4.45748L13.0282 4.94306C13.2229 4.97041 13.3996 5.07312 13.519 5.22987C13.637 5.38462 13.6877 5.58072 13.659 5.77348C13.6356 5.93356 13.5603 6.08164 13.4449 6.19503L11.0291 8.53689C10.8524 8.7003 10.7724 8.94242 10.815 9.17921L11.4098 12.4716C11.4732 12.8691 11.2098 13.2439 10.815 13.3193C10.6523 13.3453 10.4856 13.318 10.3389 13.2433L7.36497 11.6938C7.14426 11.5824 6.88353 11.5824 6.66282 11.6938L3.68885 13.2433C3.32343 13.4374 2.87067 13.3053 2.66729 12.9451C2.59194 12.8017 2.56527 12.6383 2.58994 12.4789L3.18474 9.18588C3.22741 8.94976 3.14673 8.7063 2.97069 8.54289L0.554841 6.20236C0.267446 5.92489 0.258777 5.46799 0.535503 5.18051C0.541504 5.17451 0.548172 5.16784 0.554841 5.16117C0.669532 5.04444 0.820231 4.97041 0.982932 4.95106L4.31698 4.46481C4.55703 4.4308 4.76574 4.28206 4.87577 4.06461L6.30674 1.07509C6.4341 0.818961 6.69816 0.659547 6.98489 0.666217H7.07424C7.32296 0.696232 7.53967 0.850311 7.65103 1.07509Z"
                            fill="currentColor"
                          />
                          <path
                            d="M6.99484 11.6108C6.8657 11.6148 6.7399 11.6495 6.62674 11.7115L3.66731 13.2574C3.3052 13.4303 2.87187 13.2961 2.66885 12.9499C2.59363 12.8084 2.56634 12.6463 2.59164 12.4875L3.18272 9.20145C3.22266 8.96259 3.14279 8.71972 2.96905 8.55158L0.552121 6.21167C0.265231 5.93077 0.259906 5.46972 0.540805 5.18216C0.544799 5.17815 0.548127 5.17482 0.552121 5.17148C0.666611 5.05805 0.814383 4.98333 0.97347 4.95997L4.31032 4.4689C4.55194 4.43821 4.76162 4.28742 4.86812 4.06858L6.31855 1.04143C6.45634 0.797228 6.72059 0.651775 7.00016 0.667121C6.99484 0.865283 6.99484 11.476 6.99484 11.6108Z"
                            fill="currentColor"
                          />
                        </svg>
                        Prokit HD Shows
                      </p>
                    </li>
                  </ul>
                  <h4 className="mb-5">
                    <b>$69 </b>/Month
                  </h4>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card>
            <div className="justify-content-center justify-content-sm-between d-flex card-header border-bottom ">
              <h4 className="d-inline-block">Choose Plan</h4>
              <div className="d-flex justify-content-center align-items-center mt-1 mt-sm-0 col-sm-auto">
                <label className="me-2 form-check-label">Monthly</label>
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Check
                    className="form-switch mb-0 iq-status-switch"
                    type="switch"
                    id="flexSwitchCheckChecked"
                    defaultChecked={checked}
                    onClick={() => setChecked(!checked)}
                  />
                  <label
                    className="form-check-label iq-reset-status "
                    htmlFor="flexSwitchCheckChecked"
                  >
                    {/* {checked === true ?  'Online' : 'Offline' } */}
                    Yearly
                  </label>
                </div>
              </div>
            </div>
            <Card.Body>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div className="col">
                  <div className="card pricing-box-2 mb-lg-0">
                    <div className="card-body">
                      <h3>Premium</h3>
                      <p>Best For Everyone</p>
                      <h2 className="my-4 pricingtable__highlight montlypricing my-4">
                        <b>$50/Mo</b>
                      </h2>
                      <h2 className="my-4 pricingtable__highlight yearlypricing my-4">
                        <b>$150/Yr</b>
                      </h2>
                      <ul className="p-0 mb-0 list-unstyled">
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Unlimited Library Access
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Personalized for you
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            How and when you want
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Interactive learning
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Certificate of completion
                          </p>
                        </li>
                      </ul>
                      <div className="type-2">Popular</div>
                      <button type="button" className="btn btn-primary border">
                        Try For Free
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card pricing-box-2 active mb-lg-0">
                    <div className="card-body">
                      <h3>Pro</h3>
                      <p>Best For Professionals</p>
                      <h2 className="my-4 montlypricing">
                        <b>$200/Mo</b>
                      </h2>
                      <h2 className="my-4 yearlypricing">
                        <b>$250/Yr</b>
                      </h2>
                      <ul className="list-unstyled p-0 mb-0">
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Unlimited Library Access
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Personalized for you
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            How and when you want
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Interactive learning
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Certificate of completion
                          </p>
                        </li>
                      </ul>
                      <div className="type-2">Popular</div>
                      <button type="button" className="btn btn-primary border">
                        Try For Free
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card  pricing-box-2 mb-lg-0">
                    <div className="card-body">
                      <h3>Starter</h3>
                      <p>Best For Beginners</p>
                      <h2 className="my-4 pricingtable__highlight montlypricing my-4">
                        <b>$100/Mo</b>
                      </h2>
                      <h2 className="my-4 pricingtable__highlight yearlypricing my-4">
                        <b>$150/Yr</b>
                      </h2>
                      <ul className="list-unstyled p-0 mb-0">
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Unlimited Library Access
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Personalized for you
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            How and when you want
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Interactive learning
                          </p>
                        </li>
                        <li>
                          <p className="mb-4">
                            <svg
                              width="8"
                              className="me-2"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="4" cy="4" r="4" fill="currentColor" />
                            </svg>
                            Certificate of completion
                          </p>
                        </li>
                      </ul>
                      <div className="type-2">Popular</div>
                      <button type="button" className="btn btn-primary border">
                        Try For Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Pricing.displayName = "Pricing";
export default Pricing;

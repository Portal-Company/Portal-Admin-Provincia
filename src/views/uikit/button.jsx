import { memo, Fragment, useState } from "react";

// react-bootstrap
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Row,
  ToggleButton,
} from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";
// components
import Card from "../../components/bootstrap/card";
import CustomToggle from "../../components/dropdowns";

const Buttons = memo(() => {
  const [radioValue, setRadioValue] = useState("1");
  const [radioValue1, setRadioValue1] = useState("1");

  const radios = [
    { name: "Radio 1", value: "1" },
    { name: "Radio 2", value: "2" },
    { name: "Radio 3", value: "3" },
  ];
  const radios1 = [
    { name: "Radio 1", value: "1" },
    { name: "Radio 2", value: "2" },
    { name: "Radio 3", value: "3" },
  ];
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button
                variant="primary"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Primary
              </Button>{" "}
              <Button
                variant="secondary"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Secondary
              </Button>{" "}
              <Button
                variant="success"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Success
              </Button>{" "}
              <Button
                variant="danger"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Danger
              </Button>{" "}
              <Button
                variant="warning"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Warning
              </Button>{" "}
              <Button variant="info" className="btn btn-primary mt-2 me-1 me-1">
                Info
              </Button>{" "}
              <Button
                variant="light"
                className="btn btn-primary mt-2 me-1 me-1"
              >
                Light
              </Button>{" "}
              <Button variant="dark" className="btn btn-primary mt-2 me-1 me-1">
                Dark
              </Button>{" "}
              <Button variant="link" className="btn btn-primary mt-2 me-1 me-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Rounded Shape</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="rounded-pill mb-1">
                Primary
              </Button>{" "}
              <Button variant="secondary" className="rounded-pill mb-1">
                Secondary
              </Button>{" "}
              <Button variant="success" className="rounded-pill mb-1">
                Success
              </Button>{" "}
              <Button variant="danger" className="rounded-pill mb-1">
                Danger
              </Button>{" "}
              <Button variant="warning" className="rounded-pill mb-1">
                Warning
              </Button>{" "}
              <Button variant="info" className="rounded-pill mb-1">
                Info
              </Button>{" "}
              <Button variant="light" className="rounded-pill mb-1">
                Light
              </Button>{" "}
              <Button variant="dark" className="rounded-pill mb-1">
                Dark
              </Button>{" "}
              <Button variant="link" className="rounded-pill mb-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="mb-1">
                Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="mb-1">
                Secondary
              </Button>{" "}
              <Button variant="outline-success" className="mb-1">
                Success
              </Button>{" "}
              <Button variant="outline-warning" className="mb-1">
                Warning
              </Button>{" "}
              <Button variant="outline-danger" className="mb-1">
                Danger
              </Button>{" "}
              <Button variant="outline-info" className="mb-1">
                Info
              </Button>{" "}
              <Button variant="outline-dark" className="mb-1">
                Dark
              </Button>{" "}
              <Button variant="outline-link" className="mb-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="rounded-pill mb-1">
                Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="rounded-pill mb-1">
                Secondary
              </Button>{" "}
              <Button variant="outline-success" className="rounded-pill mb-1">
                Success
              </Button>{" "}
              <Button variant="outline-warning" className="rounded-pill mb-1">
                Warning
              </Button>{" "}
              <Button variant="outline-danger" className="rounded-pill mb-1">
                Danger
              </Button>{" "}
              <Button variant="outline-info" className="rounded-pill mb-1">
                Info
              </Button>{" "}
              <Button variant="outline-dark" className="rounded-pill mb-1">
                Dark
              </Button>{" "}
              <Button variant="outline-link" className="rounded-pill mb-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Soft Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="soft-primary" className="mb-1">
                Primary
              </Button>{" "}
              <Button variant="soft-secondary" className="mb-1">
                Secondary
              </Button>{" "}
              <Button variant="soft-success" className="mb-1">
                Success
              </Button>{" "}
              <Button variant="soft-danger" className="mb-1">
                Danger
              </Button>{" "}
              <Button variant="soft-warning">Warning</Button>{" "}
              <Button variant="soft-info">Info</Button>{" "}
              <Button variant="soft-dark">Dark</Button>{" "}
              <Button variant="soft-link">Link</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Soft Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="soft-primary" className="rounded-pill mb-1">
                Primary
              </Button>{" "}
              <Button variant="soft-secondary" className="rounded-pill mb-1">
                Secondary
              </Button>{" "}
              <Button variant="soft-success" className="rounded-pill mb-1">
                Success
              </Button>{" "}
              <Button variant="soft-danger" className="rounded-pill mb-1">
                Danger
              </Button>{" "}
              <Button variant="soft-warning" className="rounded-pill mb-1">
                Warning
              </Button>{" "}
              <Button variant="soft-info" className="rounded-pill mb-1">
                Info
              </Button>{" "}
              <Button variant="soft-dark" className="rounded-pill mb-1">
                Dark
              </Button>{" "}
              <Button variant="soft-link" className="rounded-pill mb-1">
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              {/* <i className="material-symbols-outlined me-1">favorite</i> */}
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="btn d-inline-flex mb-1">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Primary
              </Button>{" "}
              <Button variant="secondary" className="btn d-inline-flex mb-1">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Secondary
              </Button>{" "}
              <Button variant="success" className="btn d-inline-flex mb-1">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Success
              </Button>{" "}
              <Button variant="danger" className="btn d-inline-flex mb-1">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Danger
              </Button>{" "}
              <Button variant="warning" className="btn d-inline-flex mb-1">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Warning
              </Button>{" "}
              <Button
                variant="info"
                className="btn d-inline-flex mb-1 text-white"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Info
              </Button>{" "}
              <Button variant="light" className="btn d-inline-flex mb-1">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Light
              </Button>{" "}
              <Button variant="dark" className="btn d-inline-flex mb-1">
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Dark
              </Button>{" "}
              <Button variant="link" className="btn d-inline-flex mb-1">
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Rounded Shape</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button
                variant="primary"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Primary
              </Button>{" "}
              <Button
                variant="secondary"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Secondary
              </Button>{" "}
              <Button
                variant="success"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Success
              </Button>{" "}
              <Button
                variant="danger"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Danger
              </Button>{" "}
              <Button
                variant="warning"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Warning
              </Button>{" "}
              <Button
                variant="info"
                className="rounded-pill btn mb-1 d-inline-flex text-white"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Info
              </Button>{" "}
              <Button
                variant="light"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Light
              </Button>{" "}
              <Button
                variant="dark"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="16"
                  height="15"
                  className="me-2"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Dark
              </Button>{" "}
              <Button
                variant="link"
                className="rounded-pill btn mb-1 d-inline-flex"
              >
                <svg
                  width="15"
                  height="16"
                  className="me-2"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7162 14.2236H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.7162 10.0371H5.49622"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25131 5.86035H5.49631"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary">
                <i className="ri-heart-line me-1"></i>Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="mb-1">
                <i className="ri-alert-line me-1"></i>Secondary
              </Button>{" "}
              <Button variant="outline-success" className="mb-1">
                <i className="ri-heart-line me-1"></i>Success
              </Button>{" "}
              <Button variant="outline-warning" className="mb-1">
                <i className="ri-alert-line me-1"></i>Warning
              </Button>{" "}
              <Button variant="outline-danger" className="mb-1">
                <i className="ri-heart-line me-1"></i>Danger
              </Button>{" "}
              <Button variant="outline-info" className="mb-1">
                <i className="ri-alert-line me-1"></i>Info
              </Button>{" "}
              <Button variant="outline-dark" className="mb-1">
                <i className="ri-alert-line me-1"></i>Dark
              </Button>{" "}
              <Button variant="outline-link" className="mb-1">
                <i className="ri-heart-line me-1"></i>Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="outline-primary" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Primary
              </Button>{" "}
              <Button variant="outline-secondary" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Secondary
              </Button>{" "}
              <Button variant="outline-success" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Success
              </Button>{" "}
              <Button variant="outline-warning" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Warning
              </Button>{" "}
              <Button variant="outline-danger" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Danger
              </Button>{" "}
              <Button variant="outline-info" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Info
              </Button>{" "}
              <Button variant="outline-dark" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Dark
              </Button>{" "}
              <Button variant="outline-link" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="soft-primary">
                <i className="ri-heart-line me-1"></i>Primary
              </Button>{" "}
              <Button variant="soft-secondary" className="mb-1">
                <i className="ri-alert-line me-1"></i>Secondary
              </Button>{" "}
              <Button variant="soft-success" className="mb-1">
                <i className="ri-heart-line me-1"></i>Success
              </Button>{" "}
              <Button variant="soft-warning" className="mb-1">
                <i className="ri-alert-line me-1"></i>Warning
              </Button>{" "}
              <Button variant="soft-danger" className="mb-1">
                <i className="ri-heart-line me-1"></i>Danger
              </Button>{" "}
              <Button variant="soft-info" className="mb-1">
                <i className="ri-alert-line me-1"></i>Info
              </Button>{" "}
              <Button variant="soft-dark" className="mb-1">
                <i className="ri-alert-line me-1"></i>Dark
              </Button>{" "}
              <Button variant="soft-link" className="mb-1">
                <i className="ri-heart-line me-1"></i>Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Rounded Outline Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="soft-primary" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Primary
              </Button>{" "}
              <Button variant="soft-secondary" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Secondary
              </Button>{" "}
              <Button variant="soft-success" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Success
              </Button>{" "}
              <Button variant="soft-warning" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Warning
              </Button>{" "}
              <Button variant="soft-danger" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Danger
              </Button>{" "}
              <Button variant="soft-info" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Info
              </Button>{" "}
              <Button variant="soft-dark" className="rounded-pill mb-1">
                <i className="ri-alert-line me-1"></i>Dark
              </Button>{" "}
              <Button variant="soft-link" className="rounded-pill mb-1">
                <i className="ri-heart-line me-1"></i>Link
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Tags</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Link className="btn btn-primary mt-1" to="#" role="button">
                Link
              </Link>{" "}
              <Button variant="success" className="mt-1" type="submit">
                Button
              </Button>{" "}
              <input
                className="btn btn-danger mt-1"
                type="button"
                value="Input"
              />{" "}
              <input
                className="btn btn-warning mt-1"
                type="submit"
                value="Submit"
              />{" "}
              <input className="btn btn-info mt-1" type="reset" value="Reset" />{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Buttons Sizes</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" size="sm" className=" mt-1">
                Small button
              </Button>{" "}
              <Button variant="success" className="  mt-1">
                Button
              </Button>{" "}
              <Button variant="info" size="lg" className=" mt-1">
                Large Button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Block Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body className="d-grid gap-2">
              <p className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className=" btn-block mt-1">
                Block level button
              </Button>{" "}
              <Button variant="success" className="btn-block mt-1">
                Block level button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Icons Buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className=" d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg>
              </Button>{" "}
              <Button variant="secondary" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </Button>{" "}
              <Button variant="success" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </Button>{" "}
              <Button variant="danger" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-video"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                  <rect x="3" y="6" width="12" height="12" rx="2"></rect>
                </svg>
              </Button>{" "}
              <Button variant="warning" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </Button>{" "}
              <Button variant="info" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                </svg>
              </Button>{" "}
              <Button variant="light" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <polyline points="12 7 12 12 15 15"></polyline>
                </svg>
              </Button>{" "}
              <Button variant="dark" className="d-inline-flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
              </Button>{" "}
              {/* <Button variant="link" className="d-inline-flex mb-1">
                <i className="material-symbols-outlined me-0">album</i>
              </Button>{" "} */}
              <div className="d-inline-block w-100 mt-1">
                <Button variant="primary" className="d-inline-flex mb-1">
                  <svg
                    width="16"
                    height="15"
                    className="me-2"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="secondary" className="d-inline-flex mb-1">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="success" className="d-inline-flex mb-1">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="danger" className="d-inline-flex mb-1">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                    <rect x="3" y="6" width="16" height="15" rx="2"></rect>
                  </svg>
                  Buttons
                </Button>{" "}
                <Button variant="info" className="d-inline-flex mb-1">
                  <svg
                    className="me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                  Buttons
                </Button>{" "}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Social Disabled State</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="mb-2" disabled>
                Primary button
              </Button>{" "}
              <Button variant="success" className="mb-2" disabled>
                Button
              </Button>{" "}
              <Button variant="outline-primary" className="mb-2" disabled>
                Button
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Buttons Toggle States</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="mb-2">
                Single toggle
              </Button>{" "}
              <Button
                variant="primary active"
                data-bs-toggle="button"
                aria-pressed="true"
                className="mb-2"
              >
                Single toggle
              </Button>{" "}
              <Button variant="primary" className="mb-2" disabled>
                Single toggle
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Default Buttons Active</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <Button variant="primary" className="active mb-1">
                Active
              </Button>{" "}
              <Button variant="secondary" className="active mb-1">
                Active
              </Button>{" "}
              <Button variant="warning" className="active mb-1">
                Active
              </Button>{" "}
              <Button variant="accent" className="mb-1" disabled>
                Disabled
              </Button>{" "}
              <Button variant="primary" className="mb-1" disabled>
                Disabled
              </Button>{" "}
              <Button variant="outline-primary" className="mb-1" disabled>
                Disabled
              </Button>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group Sizing</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div className="bd-example">
                <div
                  className="btn-group btn-group-lg d-block mb-2"
                  role="group"
                  aria-label="Large button group"
                >
                  <Button variant="outline-primary">Left</Button>{" "}
                  <Button variant="outline-primary">Middle</Button>{" "}
                  <Button variant="outline-primary">Right</Button>{" "}
                </div>

                <div
                  className="btn-group d-block mb-2"
                  role="group"
                  aria-label="Default button group"
                >
                  <Button variant="outline-primary">Left</Button>{" "}
                  <Button variant="outline-primary">Middle</Button>{" "}
                  <Button variant="outline-primary">Right</Button>{" "}
                </div>

                <div
                  className="btn-group btn-group-sm d-block"
                  role="group"
                  aria-label="Small button group"
                >
                  <Button variant="outline-primary">Left</Button>{" "}
                  <Button variant="outline-primary">Middle</Button>{" "}
                  <Button variant="outline-primary">Right</Button>{" "}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group Vertical</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <ButtonGroup vertical={true}>
                {radios1.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="outline-danger"
                    name="radio"
                    value={radio.value}
                    checked={radioValue1 === radio.value}
                    onChange={(e) => setRadioValue1(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Checkbox and radio button groups</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group checkboxradio mb-1"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input type="checkbox" className="btn-check" id="btncheck1" />
                <label className="btn btn-outline-primary">Checkbox 1</label>
                <input type="checkbox" className="btn-check" id="btncheck2" />
                <label className="btn btn-outline-primary">Checkbox 2</label>
                <input type="checkbox" className="btn-check" id="btncheck3" />
                <label className="btn btn-outline-primary">Checkbox 3</label>
              </div>{" "}
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="outline-primary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Group</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group mt-1"
                role="group"
                aria-label="Basic example"
              >
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </div>{" "}
              <div className="btn-group mt-1">
                <Link
                  to="#"
                  className="btn btn-primary active"
                  aria-current="page"
                >
                  Active link
                </Link>
                <Link to="#" className="btn btn-primary">
                  Link
                </Link>
                <Link to="#" className="btn btn-primary">
                  Link
                </Link>
              </div>{" "}
              <div
                className="btn-group mt-1"
                role="group"
                aria-label="Basic outlined example"
              >
                <Button variant="outline-primary">Left</Button>
                <Button variant="outline-primary">Middle</Button>
                <Button variant="outline-primary">Right</Button>
              </div>{" "}
              <div
                className="btn-group mt-1"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <Button variant="danger">Left</Button>
                <Button variant="warning">Middle</Button>
                <Button variant="success">Right</Button>
              </div>{" "}
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button Dropdown</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <div className="btn-group" role="group">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <Button
                        variant="primary"
                        id="btnGroupDrop1"
                        type="button"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Dropdown link</Dropdown.Item>
                      <Dropdown.Item>Dropdown link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="d-block mt-1">
                <div
                  className="btn-group-vertical "
                  role="group"
                  aria-label="Vertical button group"
                >
                  <Button variant="primary">Button</Button>
                  <Button variant="primary">Button</Button>
                  <div className="btn-group">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        <Button
                          variant="primary"
                          type="button"
                          className="dropdown-toggle"
                        >
                          Dropdown
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Button variant="primary">Button</Button>
                  <Button variant="primary">Button</Button>
                  <div className="btn-group" role="group">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        <Button
                          variant="primary"
                          id="btnGroupDrop1"
                          type="button"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group" role="group">
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        <Button
                          variant="primary"
                          id="btnGroupDrop1"
                          type="button"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Dropdown links</Dropdown.Item>
                        <Dropdown.Item>Dropdown links</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <ButtonGroup>
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}>
                        <Button
                          variant="primary"
                          id="btnGroupDrop1"
                          type="button"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                        <Dropdown.Item>Dropdown link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Button toolbar</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <Button variant="primary">1</Button>
                  <Button variant="primary">2</Button>
                  <Button variant="primary">3</Button>
                  <Button variant="primary">4</Button>
                </div>
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="Second group"
                >
                  <Button variant="secondary">5</Button>
                  <Button variant="secondary">6</Button>
                  <Button variant="secondary">7</Button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <Button variant="info">8</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Buttons.displayName = "Buttons";
export default Buttons;

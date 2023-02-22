import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Form, Image, Dropdown } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

//Img
import story from "/src/assets/images/avatars/01.png";
import story1 from "/src/assets/images/avatars/02.png";
import story2 from "/src/assets/images/avatars/03.png";
import story3 from "/src/assets/images/avatars/04.png";
import story4 from "/src/assets/images/avatars/05.png";
import story5 from "/src/assets/images/avatars/06.png";
import story6 from "/src/assets/images/avatars/07.png";

const Todo = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg={3}>
          <Card>
            <Card.Body>
              <div className="iq-todo-page">
                <Form className="position-relative">
                  <Form.Group className="mb-0">
                    <Form.Control
                      type="text"
                      className="todo-search"
                      id="exampleInputEmail002"
                      placeholder="Search"
                    />
                    <Link className="search-link" to="#">
                      <svg
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11.7669"
                          cy="11.7666"
                          r="8.98856"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></circle>
                        <path
                          d="M18.0186 18.4851L21.5426 22"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </Link>
                  </Form.Group>
                </Form>
                <div className="add-new-project mt-3 mb-3">
                  <Link
                    to="#javascript:void(0);"
                    className="d-block nrw-project"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4V20"
                        stroke="#232D42"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 12H4"
                        stroke="#232D42"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    add Project
                  </Link>
                </div>
                <ul className="todo-task-list p-0 m-0">
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      href="#todo-task1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="ms-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.142L4.54434 8L12 3.85797L19.4557 8L12 12.142Z"
                          stroke="black"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3.5 11.5L12 16L20.5 11.5M3.5 15.5L12 20L20.5 15.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Secret Project
                    </a>
                    <ul id="todo-task1" className="collapse show mt-2 p-0">
                      <li className="active">
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-success"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          All Task
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-warning"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          People
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-danger"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Files{" "}
                          <span className="badge bg-danger ms-2 float-end">
                            44
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Statistics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      href="#todo-task2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="ms-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.142L4.54434 8L12 3.85797L19.4557 8L12 12.142Z"
                          stroke="black"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3.5 11.5L12 16L20.5 11.5M3.5 15.5L12 20L20.5 15.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      Bnie Mobile App
                    </a>
                    <ul id="todo-task2" className="collapse mt-2 p-0">
                      <li className="active">
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-success"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          All Task
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-warning"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          People
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-danger"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Files{" "}
                          <span className="badge bg-danger ms-2 float-end">
                            20
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Statistics
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      href="#todo-task3"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <svg
                        width="20"
                        height="20"
                        className="ms-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.142L4.54434 8L12 3.85797L19.4557 8L12 12.142Z"
                          stroke="black"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3.5 11.5L12 16L20.5 11.5M3.5 15.5L12 20L20.5 15.5"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      New Portfolio Site
                    </a>
                    <ul id="todo-task3" className="collapse mt-2 p-0">
                      <li className="active">
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-success"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          All Task
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-warning"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          People
                        </Link>
                      </li>
                      <li>
                        <Link to="#javascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-danger"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Files{" "}
                          <span className="badge bg-danger ms-2 float-end">
                            10
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#Sjavascript:void(0);">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </svg>
                          Statistics
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>
          <Row>
            <Col sm={12}>
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="todo-date d-flex me-3">
                      <svg
                        className="ri-calendar-2-line text-success me-2 mt-1"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.4109 2.76862L16.4119 3.51824C19.1665 3.73413 20.9862 5.61119 20.9891 8.48975L21 16.9155C21.0039 20.054 19.0322 21.985 15.8718 21.99L8.15188 22C5.01119 22.004 3.01482 20.027 3.01087 16.8795L3.00001 8.55272C2.99606 5.65517 4.75153 3.78311 7.50617 3.53024L7.50518 2.78061C7.5042 2.34083 7.83001 2.01 8.26444 2.01C8.69886 2.009 9.02468 2.33883 9.02567 2.77861L9.02666 3.47826L14.8914 3.47027L14.8904 2.77062C14.8894 2.33084 15.2152 2.001 15.6497 2C16.0742 1.999 16.4099 2.32884 16.4109 2.76862ZM4.52148 8.86157L19.4696 8.84158V8.49175C19.4272 6.34283 18.349 5.21539 16.4138 5.04748L16.4148 5.81709C16.4148 6.24688 16.0801 6.5877 15.6556 6.5877C15.2212 6.5887 14.8943 6.24887 14.8943 5.81909L14.8934 5.0095L9.02863 5.01749L9.02962 5.82609C9.02962 6.25687 8.70479 6.5967 8.27036 6.5967C7.83594 6.5977 7.50913 6.25887 7.50913 5.82809L7.50815 5.05847C5.58286 5.25137 4.51753 6.38281 4.52049 8.55072L4.52148 8.86157ZM15.2399 13.4043V13.4153C15.2498 13.8751 15.625 14.2239 16.0801 14.2139C16.5244 14.2029 16.8789 13.8221 16.869 13.3623C16.8483 12.9225 16.4918 12.5637 16.0485 12.5647C15.5944 12.5747 15.2389 12.9445 15.2399 13.4043ZM16.0554 17.892C15.6013 17.882 15.235 17.5032 15.234 17.0435C15.2241 16.5837 15.5884 16.2029 16.0426 16.1919H16.0525C16.5165 16.1919 16.8927 16.5707 16.8927 17.0405C16.8937 17.5102 16.5185 17.891 16.0554 17.892ZM11.1721 13.4203C11.1919 13.8801 11.568 14.2389 12.0222 14.2189C12.4665 14.1979 12.821 13.8181 12.8012 13.3583C12.7903 12.9085 12.425 12.5587 11.9807 12.5597C11.5266 12.5797 11.1711 12.9605 11.1721 13.4203ZM12.0262 17.8471C11.572 17.8671 11.1968 17.5082 11.1761 17.0485C11.1761 16.5887 11.5305 16.2089 11.9847 16.1879C12.429 16.1869 12.7953 16.5367 12.8052 16.9855C12.8259 17.4463 12.4705 17.8261 12.0262 17.8471ZM7.10433 13.4553C7.12408 13.915 7.50025 14.2749 7.95442 14.2539C8.39872 14.2339 8.75317 13.8531 8.73243 13.3933C8.72256 12.9435 8.35725 12.5937 7.91196 12.5947C7.45779 12.6147 7.10334 12.9955 7.10433 13.4553ZM7.95837 17.8521C7.5042 17.8731 7.12901 17.5132 7.10828 17.0535C7.10729 16.5937 7.46273 16.2129 7.9169 16.1929C8.3612 16.1919 8.7275 16.5417 8.73737 16.9915C8.7581 17.4513 8.40365 17.8321 7.95837 17.8521Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Wednesday, 08th January, 2020</span>
                    </div>
                    <div className="todo-notification d-flex align-items-center">
                      <div className="notification-icon position-relative d-flex align-items-center me-3">
                        <Link to="#">
                          <svg
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M14.3889 20.8572C13.0247 22.3719 10.8967 22.3899 9.51953 20.8572"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Link>
                        <span className="bg-danger text-white">5</span>
                      </div>
                      <button type="submit" className="btn iq-bg-success">
                        Add Task
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <Card.Body className="p-0">
                  <ul className="todo-task-lists m-0 p-0">
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3 rtl-me-3 rtl-ms-0">
                          <h6 className="d-inline-block">
                            Landing page for secret Project
                          </h6>
                          <span className="badge bg-warning ms-3 text-white">
                            expirinq
                          </span>
                          <p className="mb-0">by Danlel Cllfferton</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check1"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3 active-task">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Fix Critical Crashes</h6>
                          <p className="mb-0">by Cralg Danles</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check2"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check2"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story1}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6 className="d-inline-block">
                            IOS App - Redesign the contact
                          </h6>
                          <span className="badge bg-success ms-3">ending</span>
                          <p className="mb-0">by Simona Gomez </p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check3"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story2}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Final Meetup for the Secrat Project Client</h6>
                          <p className="mb-0">bt Serena Gemoz</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check4"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story3}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Code the Parsing Element</h6>
                          <p className="mb-0">by Jeena Gaze</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check5"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story4}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6 className="d-inline-block">
                            Test the Bug, that causes design
                          </h6>
                          <span className="badge bg-danger ms-3">urgent</span>
                          <p className="mb-0">by migule Slimmonas</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check6"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story5}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Android App Design</h6>
                          <p className="mb-0">by Becky Dimes</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check7"
                          ></label>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between align-items-center p-3">
                      <div className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <Image
                            src={story6}
                            alt="story-img"
                            className="rounded avatar-40"
                          />
                        </div>
                        <div className="media-support-info ms-3">
                          <h6>Skype Meetup with clients</h6>
                          <p className="mb-0">by James Romero</p>
                        </div>
                      </div>
                      <div className="card-header-toolbar d-flex align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="todo-check"
                            className="custom-control-input"
                            id="check8"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="check8"
                          ></label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <div className="iq-todo-right">
                    <Form className="position-relative">
                      <Form.Group className="mb-0">
                        <input
                          type="text"
                          className="form-control todo-search"
                          id="exampleInputEmail001"
                          placeholder="Search"
                        />
                        <Link className="search-link" to="#">
                          <svg
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="11.7669"
                              cy="11.7666"
                              r="8.98856"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></circle>
                            <path
                              d="M18.0186 18.4851L21.5426 22"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </Link>
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="iq-todo-friendlist mt-3">
                    <ul className="suggestions-lists m-0 p-0">
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">trainee</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton41"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story1}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Anna Mull</h6>
                            <p className="mb-0">Web Developer</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton42"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-start">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story2}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Paige Turner</h6>
                            <p className="mb-0">trainee</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton43"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story3}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Barb Ackue</h6>
                            <p className="mb-0">Web Designer</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton44"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story4}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Greta Life</h6>
                            <p className="mb-0">Tester</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton45"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story5}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Ira Membrit</h6>
                            <p className="mb-0">Android Developer</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown>
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton46"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap mb-4 justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="user-img img-fluid">
                            <Image
                              src={story6}
                              alt="story-img"
                              className="rounded avatar-40"
                            />
                          </div>
                          <div className="media-support-info ms-3">
                            <h6>Pete Sariya</h6>
                            <p className="mb-0">Web Designer</p>
                          </div>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                          <Dropdown className="ms-5">
                            <svg
                              width="3"
                              className="dropdown-toggle text-primary"
                              id="dropdownMenuButton47"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              role="button"
                              viewBox="0 0 5 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="2.5"
                                cy="3"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="14"
                                r="2.5"
                                fill="currentcolor"
                              />
                              <circle
                                cx="2.5"
                                cy="25"
                                r="2.5"
                                fill="currentcolor"
                              />
                            </svg>
                            <Dropdown.Menu className="dropdown-menu-end">
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.87663 15.2062C6.03263 15.2062 2.74963 15.7872 2.74963 18.1152C2.74963 20.4432 6.01263 21.0452 9.87663 21.0452C13.7216 21.0452 17.0036 20.4632 17.0036 18.1362C17.0036 15.8092 13.7416 15.2062 9.87663 15.2062Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84088 14.4446 7.31788C14.4446 4.79488 12.3996 2.74988 9.8766 2.74988C7.3546 2.74988 5.3096 4.79488 5.3096 7.31788C5.3006 9.83188 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M20.4661 12.466L17.0001 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M17.0012 12.466L20.4672 9"
                                    stroke="#232D42"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                Unfollow
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3955 9.59497L9.60352 14.387"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M14.3971 14.3898L9.60107 9.59277"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                Unfriend
                              </Dropdown.Item>
                              <Dropdown.Item href="#javascript:void(0);">
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.4232 9.4478V7.3008C16.4232 4.7878 14.3852 2.7498 11.8722 2.7498C9.35925 2.7388 7.31325 4.7668 7.30225 7.2808V7.3008V9.4478"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M15.683 21.2497H8.042C5.948 21.2497 4.25 19.5527 4.25 17.4577V13.1687C4.25 11.0737 5.948 9.37671 8.042 9.37671H15.683C17.777 9.37671 19.475 11.0737 19.475 13.1687V17.4577C19.475 19.5527 17.777 21.2497 15.683 21.2497Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M11.8628 14.2026V16.4236"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                                block
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
});

export default Todo;

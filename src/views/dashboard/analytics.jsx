import { useEffect, memo, Fragment } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";

//apexcharts
import Chart from "react-apexcharts";

// Redux Selector / Action
import { useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

//router-dom
import { Link } from "react-router-dom";

//component
import CustomToggle from "../../components/dropdowns";

const Analytics = memo((props) => {
  useSelector(SettingSelector.theme_color);

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}secondary`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    const color5 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}tertiray`
    );
    return {
      primary: color1.trim(),
      secondary: color2.trim(),
      primary_light: color3.trim(),
      warning: color4.trim(),
      tertiray: color5.trim(),
    };
  };
  const variableColors = getVariableColor();
  const colors = [
    variableColors.secondary,
    variableColors.tertiray,
    variableColors.primary,
  ];
  useEffect(() => {
    return () => colors;
  });

  const chart4 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          colors: colors,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        padding: {
          right: 0,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      legend: {
        show: false,
      },
      yaxis: {
        labels: {
          minWidth: 20,
          maxWidth: 20,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nove",
          "Dec",
        ],
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
    series: [
      {
        name: "Avg.Session",
        data: [11, 5, 32, 20, 33, 15, 25, 45, 10, 25, 15, 30],
      },
      {
        name: "Conversion Rate",
        data: [20, 25, 15, 30, 35, 40, 25, 42, 28, 45, 15, 20],
      },
      {
        name: "Avg. Session Durations",
        data: [22, 17, 20, 25, 15, 15, 10, 25, 18, 25, 35, 45],
      },
    ],
  };

  // const variableColors = getVariableColor();
  const colors1 = [variableColors.primary, variableColors.secondary];
  const chart5 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          borderRadius: 3,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: colors1,
      legend: {
        show: false,
      },
      stroke: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true,
        },
      },
      xaxis: {
        categories: [
          "Korrea",
          "India",
          "Spain",
          "UAE",
          "USA",
          "Japan",
          "Italy",
          "Greece",
        ],
      },

      yaxis: {
        labels: {
          show: true,
          minWidth: 20,
          maxWidth: 20,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    series: [
      {
        data: [800, 780, 610, 410, 350, 200, 110, 80],
      },
    ],
  };
  const colors3 = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  const chart6 = {
    options: {
      plotOptions: {
        pie: {
          startAngle: -120,
          endAngle: 120,
        },
      },
      colors: colors3,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        padding: {
          bottom: -80,
        },
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              width: 290,
              height: 300,
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
    series: [44, 55, 41],
  };
  const colors2 = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  const chart7 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: true,
        position: "bottom",
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          borderRadius: 3,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: colors2,
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 5,
        colors: ["transparent"],
      },

      xaxis: {
        categories: ["USA", "Russia", "Brazil", "India", "UK", "Canada"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
      },
    },
    series: [
      {
        name: "High",
        data: [44, 55, 41],
      },
      {
        name: "Medium",
        data: [53, 32, 48],
      },
      {
        name: "Low",
        data: [43, 55, 40],
      },
    ],
  };

  return (
    <Fragment>
      <Row>
        <Col lg="8">
          <Row>
            <h4 className="mb-5">Analytics Overview</h4>
            <Col lg="3">
              <Card className="text-center">
                <Card.Body>
                  <h2 className="mb-3">862k</h2>
                  <h5>Users</h5>
                  <small>10% Decrease last week</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="text-center">
                <Card.Body>
                  <h2 className="mb-3">4.1M</h2>
                  <h5>Sessions</h5>
                  <small>24% Decrease last week</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="text-center">
                <Card.Body>
                  <h2 className="mb-3">143k</h2>
                  <h5>Visit Duration</h5>
                  <small>10% change</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="text-center">
                <Card.Body>
                  <h2 className="mb-3">32%</h2>
                  <h5>Bounce Rate</h5>
                  <small>10% change</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className="flex-wrap d-flex justify-content-between align-items-center">
                    <div className="header-title">
                      <h4>Audience Metrics</h4>
                    </div>
                    <div className="d-flex">
                      <div className="me-3">
                        <p className="mb-0">
                          <svg
                            className="text-primary"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="5" cy="5" r="5" fill="currentColor" />
                          </svg>{" "}
                          Avg.Session
                        </p>
                      </div>
                      <div className="me-3">
                        <p className="mb-0">
                          <svg
                            className="text-secondary"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="5" cy="5" r="5" fill="currentColor" />
                          </svg>{" "}
                          Conversion Rate
                        </p>
                      </div>
                      <div className="">
                        <p className="mb-0">
                          <svg
                            className="text-tertiray"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="5" cy="5" r="5" fill="currentColor" />
                          </svg>{" "}
                          Avg. Session Durations
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Chart
                    options={chart4.options}
                    series={chart4.series}
                    type="area"
                    height=" 400"
                    className="analytics-chart-01"
                  ></Chart>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className="flex-wrap  d-flex justify-content-between">
                    <div className="header-title">
                      <h4>Live Users</h4>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        to="#"
                        variant="text-gray"
                        size="sm"
                        id="dropdownMenuButton34"
                      >
                        <svg
                          width="22"
                          height="5"
                          viewBox="0 0 22 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item to="#">Year</Dropdown.Item>
                        <Dropdown.Item to="#">Month</Dropdown.Item>
                        <Dropdown.Item to="#">Week</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Chart
                    options={chart5.options}
                    series={chart5.series}
                    type="bar"
                    height="100%"
                    className="analytics-chart-02"
                  ></Chart>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className="flex-wrap d-flex justify-content-between">
                    <div className="header-title">
                      <h4>Sessions By Countries</h4>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        to="#"
                        variant="text-gray"
                        size="sm"
                        id="dropdownMenuButton30"
                      >
                        <svg
                          width="22"
                          height="5"
                          viewBox="0 0 22 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item to="#">Year</Dropdown.Item>
                        <Dropdown.Item to="#">Month</Dropdown.Item>
                        <Dropdown.Item to="#">Week</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Chart
                    options={chart7.options}
                    series={chart7.series}
                    type="bar"
                    height="100%"
                    className="analytics-chart-03"
                  ></Chart>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card>
            <Card.Header>
              <div className="flex-wrap d-flex justify-content-between">
                <div className="header-title">
                  <h4>Users By Device</h4>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray dropdown-toggle"
                    size="sm"
                    id="dropdownMenuButton29"
                  >
                    This Week
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <Chart
                options={chart6.options}
                series={chart6.series}
                type="donut"
                className="analytics-chart-04"
              ></Chart>

              <div className="d-flex justify-content-between mb-3 mt-4">
                <div className="d-flex align-items-center">
                  <svg
                    className=" text-primary"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">Desktop Users</p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.34933 11.8579C3.38553 11.8579 0 12.4702 0 14.9175C0 17.3668 3.364 18.0002 7.34933 18.0002C11.3131 18.0002 14.6987 17.3879 14.6987 14.9405C14.6987 12.4913 11.3347 11.8579 7.34933 11.8579Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M7.34935 9.52482C10.049 9.52482 12.2124 7.40617 12.2124 4.76241C12.2124 2.11865 10.049 0 7.34935 0C4.65072 0 2.48633 2.11865 2.48633 4.76241C2.48633 7.40617 4.65072 9.52482 7.34935 9.52482Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M14.1738 4.84873C14.1738 6.19505 13.7609 7.45129 13.0368 8.4948C12.9614 8.60212 13.028 8.74682 13.1591 8.76981C13.3411 8.79952 13.528 8.81773 13.7188 8.82156C15.617 8.87043 17.3205 7.6736 17.7912 5.87116C18.4888 3.19674 16.4419 0.79541 13.8342 0.79541C13.5515 0.79541 13.2804 0.824157 13.0162 0.87686C12.98 0.884526 12.9409 0.901774 12.9213 0.932437C12.8959 0.971725 12.9145 1.02251 12.9399 1.05605C13.7237 2.13214 14.1738 3.44205 14.1738 4.84873Z"
                      fill="#6D6D6D"
                    />
                    <path
                      d="M19.7794 12.1693C19.4321 11.4439 18.5935 10.9465 17.3176 10.7022C16.7158 10.5585 15.0857 10.3544 13.57 10.3831C13.5475 10.386 13.5348 10.4013 13.5328 10.4109C13.5299 10.4262 13.5368 10.4492 13.5661 10.4655C14.2667 10.8047 16.9741 12.2804 16.6336 15.3927C16.619 15.5288 16.7295 15.6438 16.8675 15.6246C17.5338 15.5317 19.2481 15.1704 19.7794 14.0474C20.074 13.4533 20.074 12.7634 19.7794 12.1693Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                  <p className="mb-0 ms-2">50.62k</p>
                </div>
                <p className="mb-0 text-success">
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 0L7.4641 4.5H0.535898L4 0Z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                  3.45%
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-info"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">Mobile Users</p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.34933 11.8579C3.38553 11.8579 0 12.4702 0 14.9175C0 17.3668 3.364 18.0002 7.34933 18.0002C11.3131 18.0002 14.6987 17.3879 14.6987 14.9405C14.6987 12.4913 11.3347 11.8579 7.34933 11.8579Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M7.34935 9.52482C10.049 9.52482 12.2124 7.40617 12.2124 4.76241C12.2124 2.11865 10.049 0 7.34935 0C4.65072 0 2.48633 2.11865 2.48633 4.76241C2.48633 7.40617 4.65072 9.52482 7.34935 9.52482Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M14.1738 4.84873C14.1738 6.19505 13.7609 7.45129 13.0368 8.4948C12.9614 8.60212 13.028 8.74682 13.1591 8.76981C13.3411 8.79952 13.528 8.81773 13.7188 8.82156C15.617 8.87043 17.3205 7.6736 17.7912 5.87116C18.4888 3.19674 16.4419 0.79541 13.8342 0.79541C13.5515 0.79541 13.2804 0.824157 13.0162 0.87686C12.98 0.884526 12.9409 0.901774 12.9213 0.932437C12.8959 0.971725 12.9145 1.02251 12.9399 1.05605C13.7237 2.13214 14.1738 3.44205 14.1738 4.84873Z"
                      fill="#6D6D6D"
                    />
                    <path
                      d="M19.7794 12.1693C19.4321 11.4439 18.5935 10.9465 17.3176 10.7022C16.7158 10.5585 15.0857 10.3544 13.57 10.3831C13.5475 10.386 13.5348 10.4013 13.5328 10.4109C13.5299 10.4262 13.5368 10.4492 13.5661 10.4655C14.2667 10.8047 16.9741 12.2804 16.6336 15.3927C16.619 15.5288 16.7295 15.6438 16.8675 15.6246C17.5338 15.5317 19.2481 15.1704 19.7794 14.0474C20.074 13.4533 20.074 12.7634 19.7794 12.1693Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                  <p className="mb-0 ms-2">34.24k</p>
                </div>
                <p className="mb-0 text-danger">
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z"
                      fill="currentColor"
                    />
                  </svg>
                  9.34%
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-tertiray"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">Tablet Users</p>
                </div>
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.34933 11.8579C3.38553 11.8579 0 12.4702 0 14.9175C0 17.3668 3.364 18.0002 7.34933 18.0002C11.3131 18.0002 14.6987 17.3879 14.6987 14.9405C14.6987 12.4913 11.3347 11.8579 7.34933 11.8579Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M7.34935 9.52482C10.049 9.52482 12.2124 7.40617 12.2124 4.76241C12.2124 2.11865 10.049 0 7.34935 0C4.65072 0 2.48633 2.11865 2.48633 4.76241C2.48633 7.40617 4.65072 9.52482 7.34935 9.52482Z"
                      fill="#6D6D6D"
                    />
                    <path
                      opacity="0.4"
                      d="M14.1738 4.84873C14.1738 6.19505 13.7609 7.45129 13.0368 8.4948C12.9614 8.60212 13.028 8.74682 13.1591 8.76981C13.3411 8.79952 13.528 8.81773 13.7188 8.82156C15.617 8.87043 17.3205 7.6736 17.7912 5.87116C18.4888 3.19674 16.4419 0.79541 13.8342 0.79541C13.5515 0.79541 13.2804 0.824157 13.0162 0.87686C12.98 0.884526 12.9409 0.901774 12.9213 0.932437C12.8959 0.971725 12.9145 1.02251 12.9399 1.05605C13.7237 2.13214 14.1738 3.44205 14.1738 4.84873Z"
                      fill="#6D6D6D"
                    />
                    <path
                      d="M19.7794 12.1693C19.4321 11.4439 18.5935 10.9465 17.3176 10.7022C16.7158 10.5585 15.0857 10.3544 13.57 10.3831C13.5475 10.386 13.5348 10.4013 13.5328 10.4109C13.5299 10.4262 13.5368 10.4492 13.5661 10.4655C14.2667 10.8047 16.9741 12.2804 16.6336 15.3927C16.619 15.5288 16.7295 15.6438 16.8675 15.6246C17.5338 15.5317 19.2481 15.1704 19.7794 14.0474C20.074 13.4533 20.074 12.7634 19.7794 12.1693Z"
                      fill="#6D6D6D"
                    />
                  </svg>
                  <p className="mb-0 ms-2">35.24k</p>
                </div>
                <p className="mb-0 text-success">
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 0L7.4641 4.5H0.535898L4 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  4.51%
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card>
            <div className="flex-wrap card-header d-flex justify-content-between">
              <div className="header-title">
                <h4>Top Referral Pages</h4>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  to="#"
                  variant="text-gray dropdown-toggle"
                  size="sm"
                  id="dropdownMenuButton35"
                >
                  This Week
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item to="#">This Year</Dropdown.Item>
                  <Dropdown.Item to="#">This Month</Dropdown.Item>
                  <Dropdown.Item to="#">This Week</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Card.Body>
              <div className=" mb-3">
                <h6>Average Referals Pages</h6>
                <h4>652,524</h4>
                <small className="mb-0 text-success">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.27967 4.14454L5.53167 0.379543C5.24967 0.0965433 4.75067 0.0965433 4.46767 0.379543L0.71967 4.14454C0.42767 4.43854 0.428671 4.91354 0.722671 5.20554C1.01667 5.49754 1.49067 5.49754 1.78367 5.20354L4.25067 2.72654L4.25067 9.08154C4.25067 9.49654 4.58667 9.83154 5.00067 9.83154C5.41467 9.83154 5.75067 9.49654 5.75067 9.08154L5.75067 2.72654L8.21667 5.20354C8.36367 5.35054 8.55567 5.42354 8.74867 5.42354C8.93967 5.42354 9.13167 5.35054 9.27767 5.20554C9.57067 4.91354 9.57167 4.43854 9.27967 4.14454Z"
                      fill="currentColor"
                    />
                  </svg>
                  12.52 %{" "}
                </small>
                <small>then previous month</small>
              </div>
              <div className="progress analytics-progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-label="Segment one"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "15%", transition: "width 2s ease 0s" }}
                ></div>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-label="Segment two"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "30%", transition: "width 2s ease 0s" }}
                ></div>
                <div
                  className="progress-bar bg-tertiray"
                  role="progressbar"
                  aria-label="Segment three"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "30%", transition: "width 2s ease 0s" }}
                ></div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  aria-label="Segment three"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "20%", transition: "width 2s ease 0s" }}
                ></div>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Segment three"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "10%", transition: "width 2s ease 0s" }}
                ></div>
              </div>
              <div className="d-flex justify-content-between mb-3 mt-4">
                <div className="w-100 d-flex align-items-center">
                  <svg
                    className="text-primary"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">www.google.com</p>
                </div>
                <p className="mb-0">28.34%</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="w-100 d-flex align-items-center">
                  <svg
                    className="text-info"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">www.youtube.com</p>
                </div>
                <p className="mb-0">45.56%</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="w-100 d-flex align-items-center">
                  <svg
                    className="text-tertiray"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">www.meta.com</p>
                </div>
                <p className="mb-0">52.35%</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="w-100 d-flex align-items-center">
                  <svg
                    className="text-warning"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">www.dribble.com</p>
                </div>
                <p className="mb-0">32.16%</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="w-100 d-flex align-items-center">
                  <svg
                    className="text-danger"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="5" cy="5" r="5" fill="currentColor" />
                  </svg>
                  <p className="ms-2 mb-0">Other</p>
                </div>
                <p className="mb-0">32.16%</p>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="#" className="text-center text-decoration-underline ">
                  Show all
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" md="12" sm="12">
          <Card>
            <Card.Header>
              <div className="flex-wrap d-flex justify-content-between">
                <div className="header-title">
                  <h4>Top Pages</h4>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray dropdown-toggle"
                    size="sm"
                    id="dropdownMenuButton24"
                  >
                    This Week
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">This Day</Dropdown.Item>
                    <Dropdown.Item to="#">This Month</Dropdown.Item>
                    <Dropdown.Item to="#">Yhis Year</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <div className="card-body">
              <div className="table-responsive border rounded">
                <table
                  id="transaction-table"
                  className="table mb-0 table-striped"
                  role="grid"
                >
                  <thead className="bg-soft-primary">
                    <tr className="">
                      <th>Active Pages</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>/buy_iT/e-commerce</td>
                      <td>36.4%</td>
                    </tr>
                    <tr>
                      <td>/interior.fox/home</td>
                      <td>32.4%</td>
                    </tr>
                    <tr>
                      <td>/freindbox/user profile</td>
                      <td>28.6%</td>
                    </tr>
                    <tr>
                      <td>/freindbox/chat</td>
                      <td>15.4%</td>
                    </tr>
                    <tr>
                      <td>/buy_iT/products</td>
                      <td>12.4%</td>
                    </tr>
                    <tr>
                      <td>/restro-.in/book table</td>
                      <td>12.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Analytics.displayName = "Analytics";
export default Analytics;

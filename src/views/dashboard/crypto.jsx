import { useEffect, memo, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

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
import ChoicesJs from "../../components/choices";

//select

const options3 = [
  { value: "Enter Amount in BTC", label: "Enter Amount in BTC" },
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "500", label: "500" },
];
const options4 = [
  { value: "Enter Amount in USD", label: "Enter Amount in USD" },
  { value: "34,85.10", label: "34,85.10" },
  { value: "34,85.11", label: "34,85.11" },
  { value: "34,85.12", label: "34,85.12" },
];

const Crypto = memo((props) => {
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
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  useEffect(() => {
    return () => colors;
  });

  const chart1 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };

  const chart2 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#C03221"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart4 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#7016d0"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart5 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#7016d0",
            downward: "#08B1BA",
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
        ],
      },
    ],
  };
  const chart6 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#c03221"],
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          minWidth: 20,
          maxWidth: 20,
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
        fixed: {
          enabled: false,
          position: "topRight",
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        yaxis: {
          lines: {
            offsetX: -30,
          },
        },
      },
    },
    series: [
      {
        data: [
          {
            x: 1996,
            y: 500,
          },
          {
            x: 1997,
            y: 400,
          },
          {
            x: 1998,
            y: 429,
          },
          {
            x: 1999,
            y: 342,
          },
          {
            x: 2000,
            y: 448,
          },
          {
            x: 2001,
            y: 234,
          },
          {
            x: 2002,
            y: 325,
          },
          {
            x: 2003,
            y: 316,
          },
          {
            x: 2004,
            y: 218,
          },
          {
            x: 2005,
            y: 430,
          },
          {
            x: 2006,
            y: 355,
          },
          {
            x: 2007,
            y: 466,
          },
          {
            x: 2008,
            y: 337,
          },
          {
            x: 2009,
            y: 452,
          },
          {
            x: 2010,
            y: 377,
          },
        ],
      },
    ],
  };
  return (
    <Fragment>
      <Row>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0">Total de Inscritos (Luanda)</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton36"
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
                    <Dropdown.Item to="#">Mascolino</Dropdown.Item>
                    <Dropdown.Item to="#">Femenino</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>356</h3>
                  <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">Candidatos</small>
                </div>
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">
                    Total de Alunos Rejeitados (Luanda)
                  </h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton38"
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
                    <Dropdown.Item to="#">Mascolino</Dropdown.Item>
                    <Dropdown.Item to="#">Femenino</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>2.850</h3>
                  <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">Alunos</small>
                </div>
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">
                    Total de Inscritos Apurados (Luanda)
                  </h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton39"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3> 34.850,10</h3>
                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">Alunos</small>
                </div>
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <h6 className="mb-0 ms-2">Total de Escola (Luanda)</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton40"
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
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3> 34.850</h3>
                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">Candidatos</small>
                </div>
                <Chart
                  options={chart4.options}
                  series={chart4.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="7" xl="8">
          <Row>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <div className="flex-wrap card-header d-flex justify-content-between align-items-center">
                  <div className="header-title">
                    <h4>Balanço de 2023</h4>
                  </div>
                  <div className="d-flex align-items-center form-group mb-0"></div>
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      to="#"
                      variant="text-gray dropdown-toggle"
                      size="sm"
                      id="dropdownMenuButton40"
                    >
                      Anos Anteriores
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#">Balanço 2022</Dropdown.Item>
                      <Dropdown.Item to="#">Balanço 2021</Dropdown.Item>
                      <Dropdown.Item to="#">Balanço 2020</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Card.Body>
                  <Chart
                    options={chart5.options}
                    series={chart5.series}
                    type="candlestick"
                    height="280"
                  ></Chart>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="5" xl="4">
          <Card className="portfolio-card bg-primary">
            <div className=" p-4 d-flex align-items-center justify-content-between flex-wrap pb-0">
              <div className="header-title">
                <h6 className="mb-2">Estatistica 2023</h6>
                <h3 className="mb-2">Total 26,246.00</h3>
                <p className="mb-0 text-danger bg-white p-1 px-3 rounded">
                  526.23(-2.42%) Por dia
                </p>
              </div>
              <div className="text-end">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M14.6756 0H5.33333C1.92889 0 0 1.92889 0 5.33333V14.6667C0 18.0711 1.92889 20 5.33333 20H14.6756C18.08 20 20 18.0711 20 14.6667V5.33333C20 1.92889 18.08 0 14.6756 0Z"
                    fill="white"
                  />
                  <path
                    d="M5.36866 7.36914C4.91533 7.36914 4.54199 7.74247 4.54199 8.2047V15.0758C4.54199 15.5291 4.91533 15.9025 5.36866 15.9025C5.83088 15.9025 6.20421 15.5291 6.20421 15.0758V8.2047C6.20421 7.74247 5.83088 7.36914 5.36866 7.36914Z"
                    fill="white"
                  />
                  <path
                    d="M10.0357 4.08887C9.58232 4.08887 9.20898 4.4622 9.20898 4.92442V15.0755C9.20898 15.5289 9.58232 15.9022 10.0357 15.9022C10.4979 15.9022 10.8712 15.5289 10.8712 15.0755V4.92442C10.8712 4.4622 10.4979 4.08887 10.0357 4.08887Z"
                    fill="white"
                  />
                  <path
                    d="M14.6402 10.9956C14.178 10.9956 13.8047 11.3689 13.8047 11.8312V15.0756C13.8047 15.5289 14.178 15.9023 14.6314 15.9023C15.0936 15.9023 15.4669 15.5289 15.4669 15.0756V11.8312C15.4669 11.3689 15.0936 10.9956 14.6402 10.9956Z"
                    fill="white"
                  />
                </svg>
                <p className="mb-0 text-white mt-2">+1.2%</p>
              </div>
            </div>
            <Card.Body className="pt-0">
              <hr />
              <h4 className="mb-3">Cursos</h4>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="ms-2">
                    <h6>Química</h6>
                    <p className="mb-0">234 Candidatos</p>
                  </div>
                </div>
                <h5 className="text-white">24,3%</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="ms-2">
                    <h6>Electricidade</h6>
                    <p className="mb-0">34.231 Candidato</p>
                  </div>
                </div>
                <h5 className="text-white">13%</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="ms-2">
                    <h6>Informática</h6>
                    <p className="mb-0">821 Candidato</p>
                  </div>
                </div>
                <h5 className="text-white">86%</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="ms-2">
                    <h6>Mecânicas</h6>
                    <p className="mb-0">235 Candidato</p>
                  </div>
                </div>
                <h5 className="text-white">46%</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Crypto.displayName = "Crypto";
export default Crypto;

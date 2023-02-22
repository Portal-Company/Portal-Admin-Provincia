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
                  <svg
                    className="me-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_207_7366)">
                      <path
                        d="M23.641 14.9019C22.0377 21.3339 15.521 25.2439 9.09824 23.6405C2.66605 22.0371 -1.24389 15.5208 0.359518 9.09805C1.96283 2.66605 8.47002 -1.24389 14.9022 0.359519C21.325 1.95346 25.2444 8.46983 23.641 14.9019Z"
                        fill="url(#paint0_linear_207_7366)"
                      />
                      <path
                        d="M17.7131 10.5045C17.9475 8.91074 16.7381 8.04824 15.0693 7.47637L15.6131 5.31074L14.3006 4.98262L13.7756 7.09199C13.4287 7.00762 13.0725 6.92324 12.7162 6.84824L13.2412 4.72949L11.9287 4.40137L11.3943 6.55762C11.1037 6.49199 10.8225 6.42637 10.5506 6.36074V6.35137L8.73184 5.90137L8.38496 7.30762C8.38496 7.30762 9.35996 7.53262 9.34121 7.54199C9.87559 7.67324 9.96934 8.02949 9.95059 8.31074L9.33184 10.7764C9.36934 10.7857 9.41621 10.7951 9.47246 10.8232C9.42559 10.8139 9.37871 10.8045 9.33184 10.7857L8.46934 14.2357C8.40371 14.3951 8.23496 14.6389 7.86934 14.5451C7.87871 14.5639 6.91309 14.3107 6.91309 14.3107L6.25684 15.8201L7.97246 16.2514C8.29121 16.3357 8.60059 16.4107 8.90996 16.4951L8.36621 18.6795L9.67871 19.0076L10.2225 16.842C10.5787 16.9357 10.935 17.0295 11.2725 17.1139L10.7381 19.2701L12.0506 19.5982L12.5943 17.4139C14.8443 17.8357 16.5318 17.667 17.235 15.6326C17.8068 14.0014 17.2068 13.0545 16.0256 12.4357C16.8975 12.2389 17.5443 11.667 17.7131 10.5045ZM14.7037 14.7232C14.3006 16.3545 11.5443 15.4732 10.6537 15.2482L11.3756 12.3514C12.2662 12.5764 15.135 13.017 14.7037 14.7232ZM15.1162 10.4764C14.7412 11.967 12.4537 11.2076 11.7131 11.0201L12.3693 8.39512C13.11 8.58262 15.5006 8.92949 15.1162 10.4764Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_207_7366"
                        x1="11.9935"
                        y1="-0.00575999"
                        x2="11.9935"
                        y2="23.9976"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#F9AA4B" />
                        <stop offset="1" stopColor="#F7931A" />
                      </linearGradient>
                      <clipPath id="clip0_207_7366">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="mb-0">Total de Escolas (Luanda)</h6>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6596 5.3999H7.40015V11.0393H4.80078V12.9191H7.40015V18.5585H11.6596C13.9078 18.5585 14.3923 18.3238 15.3612 17.8543C15.4364 17.8179 15.5145 17.78 15.5966 17.7408C16.7364 17.1956 17.6221 16.428 18.2539 15.438C18.8856 14.448 19.2015 13.2951 19.2015 11.9792C19.2015 10.6633 18.8856 9.5104 18.2539 8.52036C17.6221 7.53033 16.7364 6.76276 15.5966 6.21761C14.4569 5.67247 13.1445 5.3999 11.6596 5.3999ZM10.5657 12.9191V16.0583H11.5035C12.8712 16.0583 13.9621 15.6918 14.7763 14.9587C15.5904 14.2255 15.9974 13.2324 15.9974 11.9792C15.9974 10.726 15.5904 9.73283 14.7763 8.99971C13.9621 8.26658 12.8712 7.90002 11.5035 7.90002H10.5657V11.0393H13.5932V12.9191H10.5657Z"
                      fill="#7016d0"
                    />
                  </svg>
                  <h6 className="mb-0 ms-2">Total de Inscritos (Luanda)</h6>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_223_7456)">
                      <path
                        d="M12.2759 3L12.1553 3.41007V15.3094L12.2759 15.4298L17.7995 12.1649L12.2759 3Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M12.2755 3L6.75195 12.1649L12.2755 15.4299V9.6543V3Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M12.276 16.4757L12.208 16.5586V20.7974L12.276 20.996L17.8028 13.2124L12.276 16.4757Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M12.2755 20.996V16.4757L6.75195 13.2124L12.2755 20.996Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M12.2764 15.4298L17.7998 12.1649L12.2764 9.6543V15.4298Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.75195 12.1649L12.2754 15.4298V9.6543L6.75195 12.1649Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_223_7456">
                        <rect
                          width="11.055"
                          height="18"
                          fill="white"
                          transform="translate(6.75 3)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="currentColor" />
                    <path
                      d="M15.1875 4.5H11.4375L9.09375 12.2273L7.21875 12.6818L6.75 14.5L8.625 14.0455L6.75 19.5H17.0625L18 16.7727H11.4375L12.375 13.5909L15.1875 12.2273L15.6562 10.4091L13.3125 11.3182L15.1875 4.5Z"
                      fill="white"
                    />
                  </svg>
                  <h6 className="mb-0 ms-2">
                    Total de Inscritos Rejeitados (Luanda)
                  </h6>
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
              <h4 className="mb-3">Curos</h4>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_223_7038)">
                      <path
                        d="M31.5214 20.3692C29.3836 28.9452 20.6947 34.1585 12.131 32.0206C3.55473 29.8829 -1.65852 21.1944 0.479358 12.6307C2.61711 4.05473 11.2934 -1.15852 19.8696 0.979359C28.4334 3.10461 33.6592 11.7931 31.5214 20.3692Z"
                        fill="url(#paint0_linear_223_7031)"
                      />
                      <path
                        d="M23.6178 14.5062C23.9303 12.3812 22.3178 11.2312 20.0928 10.4687L20.8178 7.58115L19.0678 7.14365L18.3678 9.95615C17.9053 9.84365 17.4303 9.73115 16.9553 9.63115L17.6553 6.80615L15.9053 6.36865L15.1928 9.24365C14.8053 9.15615 14.4303 9.06865 14.0678 8.98115V8.96865L11.6428 8.36865L11.1803 10.2437C11.1803 10.2437 12.4803 10.5437 12.4553 10.5562C13.1678 10.7312 13.2928 11.2062 13.2678 11.5812L12.4428 14.8687C12.4928 14.8812 12.5553 14.8937 12.6303 14.9312C12.5678 14.9187 12.5053 14.9062 12.4428 14.8812L11.2928 19.4812C11.2053 19.6937 10.9803 20.0187 10.4928 19.8937C10.5053 19.9187 9.21777 19.5812 9.21777 19.5812L8.34277 21.5937L10.6303 22.1687C11.0553 22.2812 11.4678 22.3812 11.8803 22.4937L11.1553 25.4062L12.9053 25.8437L13.6303 22.9562C14.1053 23.0812 14.5803 23.2062 15.0303 23.3187L14.3178 26.1937L16.0678 26.6312L16.7928 23.7187C19.7928 24.2812 22.0428 24.0562 22.9803 21.3437C23.7428 19.1687 22.9428 17.9062 21.3678 17.0812C22.5303 16.8187 23.3928 16.0562 23.6178 14.5062ZM19.6053 20.1312C19.0678 22.3062 15.3928 21.1312 14.2053 20.8312L15.1678 16.9687C16.3553 17.2687 20.1803 17.8562 19.6053 20.1312ZM20.1553 14.4687C19.6553 16.4562 16.6053 15.4437 15.6178 15.1937L16.4928 11.6937C17.4803 11.9437 20.6678 12.4062 20.1553 14.4687Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_223_7038"
                        x1="15.9913"
                        y1="0.49232"
                        x2="15.9913"
                        y2="32.4968"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#F9AA4B" />
                        <stop offset="1" stopColor="#F7931A" />
                      </linearGradient>
                      <clipPath id="clip0_223_7038">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_4_2734)">
                      <path
                        d="M16.3679 4L16.207 4.54676V20.4125L16.3679 20.5731L23.7326 16.2199L16.3679 4Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 4L9.00391 16.2199L16.3686 20.5732V12.8724V4Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.368 21.9678L16.2773 22.0783V27.73L16.368 27.9948L23.7371 17.6167L16.368 21.9678Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 27.9943V21.9673L9.00391 17.6162L16.3686 27.9943Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.3672 20.5732L23.7318 16.22L16.3672 12.8726V20.5732Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.00391 16.22L16.3685 20.5732V12.8726L9.00391 16.22Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_2735">
                        <rect
                          width="14.74"
                          height="24"
                          fill="white"
                          transform="translate(9 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6596 5.3999H7.40015V11.0393H4.80078V12.9191H7.40015V18.5585H11.6596C13.9078 18.5585 14.3923 18.3238 15.3612 17.8543C15.4364 17.8179 15.5145 17.78 15.5966 17.7408C16.7364 17.1956 17.6221 16.428 18.2539 15.438C18.8856 14.448 19.2015 13.2951 19.2015 11.9792C19.2015 10.6633 18.8856 9.5104 18.2539 8.52036C17.6221 7.53033 16.7364 6.76276 15.5966 6.21761C14.4569 5.67247 13.1445 5.3999 11.6596 5.3999ZM10.5657 12.9191V16.0583H11.5035C12.8712 16.0583 13.9621 15.6918 14.7763 14.9587C15.5904 14.2255 15.9974 13.2324 15.9974 11.9792C15.9974 10.726 15.5904 9.73283 14.7763 8.99971C13.9621 8.26658 12.8712 7.90002 11.5035 7.90002H10.5657V11.0393H13.5932V12.9191H10.5657Z"
                      fill="#7016d0"
                    />
                  </svg>
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_4_2734)">
                      <path
                        d="M16.3679 4L16.207 4.54676V20.4125L16.3679 20.5731L23.7326 16.2199L16.3679 4Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 4L9.00391 16.2199L16.3686 20.5732V12.8724V4Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.368 21.9678L16.2773 22.0783V27.73L16.368 27.9948L23.7371 17.6167L16.368 21.9678Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 27.9943V21.9673L9.00391 17.6162L16.3686 27.9943Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.3672 20.5732L23.7318 16.22L16.3672 12.8726V20.5732Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.00391 16.22L16.3685 20.5732V12.8726L9.00391 16.22Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_2736">
                        <rect
                          width="14.74"
                          height="24"
                          fill="white"
                          transform="translate(9 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
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

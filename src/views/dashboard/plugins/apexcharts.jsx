import { memo, Fragment, useEffect } from "react";

// React-bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

//Chat
import Chart from "react-apexcharts";

const Apexcharts = memo(() => {
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
  const colors = [variableColors.primary, variableColors.secondary];
  useEffect(() => {
    return () => colors;
  });

  const chart1 = {
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: colors,
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
        },
      },
      stroke: {
        show: true,
        width: 1,
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    },
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
  };
  const chart2 = {
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      stroke: {
        width: [4, 4],
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#8A92A6",
          },
          labels: {
            style: {
              colors: "#8A92A6",
            },
          },
          title: {
            text: "Series A",
            style: {
              colors: "#8A92A6",
            },
          },
        },
        {
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            colors: "#8A92A6",
          },
          labels: {
            style: {
              colors: "#8A92A6",
            },
          },
          title: {
            text: "Series B",
            style: {
              colors: "#8A92A6",
            },
          },
        },
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
    series: [
      {
        name: "Series A",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: "Series B",
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        height: 385,
        type: "radialBar",
      },
      colors: colors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: "TOTAL",
            },
          },
        },
      },
      labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D"],
    },
    series: [67, 84, 97, 61],
  };
  const chart4 = {
    options: {
      chart: {
        type: "pie",
        height: 365,
      },
      colors: colors,
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 365,
      type: "pie",
    },
  };
  const chart5 = {
    options: {
      colors: colors,
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Radar Chart - Multi Series",
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    },
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
      },
    ],
  };
  const chart6 = {
    options: {
      colors: colors,
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          enabled: true,
          type: "xy",
        },
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          },
        },
      },
      yaxis: {
        tickAmount: 7,
      },
    },
    series: [
      {
        name: "SAMPLE A",
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
          [13.6, 3.2],
          [10.9, 7.4],
          [10.9, 0],
          [10.9, 8.2],
          [16.4, 0],
          [16.4, 1.8],
          [13.6, 0.3],
          [13.6, 0],
          [29.9, 0],
          [27.1, 2.3],
          [16.4, 0],
          [13.6, 3.7],
          [10.9, 5.2],
          [16.4, 6.5],
          [10.9, 0],
          [24.5, 7.1],
          [10.9, 0],
          [8.1, 4.7],
          [19, 0],
          [21.7, 1.8],
          [27.1, 0],
          [24.5, 0],
          [27.1, 0],
          [29.9, 1.5],
          [27.1, 0.8],
          [22.1, 2],
        ],
      },
      {
        name: "SAMPLE B",
        data: [
          [36.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
          [3.6, 12.2],
          [1.9, 14.4],
          [1.9, 9],
          [1.9, 13.2],
          [1.4, 7],
          [6.4, 8.8],
          [3.6, 4.3],
          [1.6, 10],
          [9.9, 2],
          [7.1, 15],
          [1.4, 0],
          [3.6, 13.7],
          [1.9, 15.2],
          [6.4, 16.5],
          [0.9, 10],
          [4.5, 17.1],
          [10.9, 10],
          [0.1, 14.7],
          [9, 10],
          [12.7, 11.8],
          [2.1, 10],
          [2.5, 10],
          [27.1, 10],
          [2.9, 11.5],
          [7.1, 10.8],
          [2.1, 12],
        ],
      },
    ],
  };
  const colors2 = [variableColors.primary, variableColors.secondary];
  const chart7 = {
    options: {
      fill: {
        opacity: 0.8,
      },
      colors: colors2,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      height: 365,
      type: "polarArea",
    },
  };

  const colors1 = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  const chart8 = {
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      colors: colors1,
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "TEAM C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
  };

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Apexcharts</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Apexcharts Plugin refer
                  <Button
                    bsPrefix=" "
                    target="_blank"
                    href="https://apexcharts.com/docs/react-charts/"
                  >
                    Documentation
                  </Button>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4> Bar Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart1.options}
                series={chart1.series}
                type="bar"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Line Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="line"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Radialbar Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart3.options}
                series={chart3.series}
                type="radialBar"
                height="385"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Pie Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart4.options}
                series={chart4.series}
                type="pie"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Radar Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart5.options}
                series={chart5.series}
                type="radar"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Scatter Chart</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart6.options}
                series={chart6.series}
                type="scatter"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4> Polar Area Charts</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart7.options}
                series={chart7.series}
                type="polarArea"
                height="365"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <Card.Header.Title>
                <h4>Mixed</h4>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Chart
                options={chart8.options}
                series={chart8.series}
                type="line"
                height="350"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Apexcharts.displayName = "Apexcharts";
export default Apexcharts;

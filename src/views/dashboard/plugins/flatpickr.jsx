import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

//Flatpickr
import Flatpickr from "react-flatpickr";

const Flatpickrr = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Flatpickr</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Flatpickr Plugin refer
                  <Link to="https://uppy.io">Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Basic Date Time</h4>
                <p> flatpickr without any config</p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ enableTime: true }}
                className="flatepickr_datetime form-control"
                placeholder="Select Date time.."
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Selecting multiple dates</h4>
                <p> It is possible to select multiple dates.</p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ mode: "multiple" }}
                className="flatpicker_multidate form-control"
                placeholder="Select Date.."
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>minDate</h4>
                <p>
                  {" "}
                  minDate option specifies the minimum/earliest date
                  (inclusively) allowed for selection.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ minDate: "2020-01" }}
                placeholder="Select Date.."
                className="flatpicker_minDate form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>maxDate</h4>
                <p>
                  {" "}
                  maxDate option specifies the maximum/latest date (inclusively)
                  allowed for selection.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ dateFormat: "d.m.Y", maxDate: "15.12.2017" }}
                placeholder="Select Date.."
                className="flatpicker_maxDate form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Disabling Specific dates</h4>
                <p>
                  {" "}
                  If you’d like to make certain dates unavailable for selection
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{
                  disable: [
                    "2022-05-30",
                    "2022-05-21",
                    "2022-05-08",
                    new Date(2022, 4, 9),
                  ],
                  dateFormat: "Y-m-d",
                }}
                placeholder="Select Date.."
                className="w-100 form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Time_picker</h4>
                <p>
                  {" "}
                  Time pickers allow users to enter a specific Time value .
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="form-group">
                <Flatpickr
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                  }}
                  className="form-control flatpickrtime"
                  placeholder="Select Time "
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Disabling all dates except select few</h4>
                <p>
                  {" "}
                  This is the enable option, which takes in an array of date
                  strings, date ranges and functions. Essentially the same as
                  the disable option above, but reversed.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ enable: ["2025-03-30"] }}
                className="form-control flatpickr_disableexcept"
                placeholder="Select Date.."
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>minDate</h4>
                <p>
                  {" "}
                  minDate option specifies the minimum/earliest date
                  (inclusively) allowed for selection.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ minDate: "2020-01" }}
                placeholder="Select Date.."
                className="flatpicker_minDate form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>maxDate</h4>
                <p>
                  {" "}
                  maxDate option specifies the maximum/latest date (inclusively)
                  allowed for selection.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ dateFormat: "d.m.Y", maxDate: "15.12.2017" }}
                placeholder="Select Date.."
                className="flatpicker_maxDate form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Disabling Specific dates</h4>
                <p>
                  {" "}
                  If you’d like to make certain dates unavailable for selection
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{
                  disable: [
                    "2022-05-30",
                    "2022-05-21",
                    "2022-05-08",
                    new Date(2022, 4, 9),
                  ],
                  dateFormat: "Y-m-d",
                }}
                placeholder="Select Date.."
                className="w-100 form-control"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Time_picker</h4>
                <p>
                  {" "}
                  Time pickers allow users to enter a specific Time value .
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="form-group">
                <Flatpickr
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                  }}
                  className="form-control flatpickrtime"
                  placeholder="Select Time "
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Disabling all dates except select few</h4>
                <p>
                  {" "}
                  This is the enable option, which takes in an array of date
                  strings, date ranges and functions. Essentially the same as
                  the disable option above, but reversed.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                options={{ enable: ["2025-03-30"] }}
                className="form-control flatpickr_disableexcept"
                placeholder="Select Date.."
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Human-friendly Dates</h4>
                <p>
                  {" "}
                  Upon date selection, the original input will contain a
                  Y-m-d... string, while the altInput will display the date in a
                  more legible, customizable format.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Flatpickr
                className="form-control flatpickr_humandate "
                placeholder="Select Date.."
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Range Calendar</h4>
                <p> Select a range of dates using the range calendar.</p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="form-group">
                <Flatpickr
                  options={{ mode: "range" }}
                  className="form-control flatpickrrange"
                  placeholder="Select Date "
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4> Date Picker</h4>
                <p> Date pickers allow users to enter a specific date . </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <div className="form-group">
                <Flatpickr
                  options={{ minDate: "today" }}
                  className="form-control flatpickrdate"
                  placeholder="Select Date... "
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Flatpickrr.displayName = "Flatpickrr";
export default Flatpickrr;

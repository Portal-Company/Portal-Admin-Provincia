import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

// fullcalender
import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import HeaderBread from "../../../components/partials/components/header-breadcrumb";

const Calender = memo(() => {
  return (
    <Fragment>
      <HeaderBread />
      <Row>
        <Col lg="12">
          <Row>
            <Col lg="12">
              <Card>
                <Card.Body>
                  <FullCalendar
                    plugins={[dayGridPlugin, listPlugin, bootstrapPlugin]}
                    // headerToolbar={{

                    //     left: 'prev,next today',
                    //     center: 'title',
                    //     right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',

                    // }}
                    events={[
                      {
                        title: "5:30a Click for Google",
                        url: "http://google.com/",
                        date: "2022-12-05",
                        textColor: "rgba(58,87,232,1)",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "5:30a All Day Event",
                        date: "2022-12-07",
                        textColor: "rgba(108,117,125,1)",
                        backgroundColor: "rgba(108,117,125,0.2)",
                        borderColor: "rgba(108,117,125,1)",
                      },
                      {
                        title: "5:30a Long Event",
                        date: "2022-12-09",
                        end: "2021-08-12",
                        textColor: "rgba(8,130,12,1)",
                        backgroundColor: "rgba(8,130,12,0.2)",
                        borderColor: "rgba(8,130,12,1)",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2022-12-11",
                        textColor: "rgba(4,118,133,1)",
                        backgroundColor: "rgba(4,118,133,0.2)",
                        borderColor: "rgba(4,118,133,1)",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2022-12-13",
                        textColor: "rgba(235,153,27,1)",
                        backgroundColor: "rgba(235,153,27,0.2)",
                        borderColor: "rgba(235,153,27,1)",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2022-12-15",
                        textColor: "rgba(206,32,20,1)",
                        backgroundColor: "rgba(206,32,20,0.2)",
                        borderColor: "rgba(206,32,20,1)",
                      },
                      {
                        title: "Birthday Party",
                        date: "2022-12-17",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "Meeting",
                        date: "2022-12-19",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "Birthday Party",
                        date: "2022-12-20",
                        backgroundColor: "rgba(235,153,27,0.2)",
                        textColor: "rgba(235,153,27,1)",
                        borderColor: "rgba(235,153,27,1)",
                      },
                      {
                        title: "Birthday Party",
                        date: "2022-12-23",
                        backgroundColor: "rgba(235,153,27,0.2)",
                        textColor: "rgba(235,153,27,1)",
                        borderColor: "rgba(235,153,27,1)",
                      },
                      {
                        title: "Birthday Party",
                        date: "2022-12-25",
                        backgroundColor: "rgba(235,153,27,0.2)",
                        textColor: "rgba(235,153,27,1)",
                        borderColor: "rgba(235,153,27,1)",
                      },
                      {
                        title: "Meeting",
                        date: "2022-12-25",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "Click for Google",
                        url: "http://google.com/",
                        date: "2022-12-25",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "5:30a All Day Event",
                        date: "2022-12-26",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2023-01-01",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                      {
                        title: "5:30a Repeating Event",
                        date: "2023-01-04",
                        backgroundColor: "rgba(58,87,232,0.2)",
                        textColor: "rgba(58,87,232,1)",
                        borderColor: "rgba(58,87,232,1)",
                      },
                    ]}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
});

Calender.displayName = "Calender";
export default Calender;

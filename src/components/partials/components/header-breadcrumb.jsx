import { memo, Fragment } from 'react'

//react-bootstrap
import { Row, Col } from 'react-bootstrap'

// Img
import CalenderImg from '/src/assets/images/dashboard/calender-img.png'
//componets
import Card from '../../bootstrap/card'

const HeaderBread = memo(() => {
    return (
        <Fragment>
            <Row>
                <Col md="12">
                    {/* <Card>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <div className="card-title mb-0">
                                <h4 className="mb-0">Calender</h4>
                            </div>
                            <div className="card-action">
                                <Link to="#" className="btn btn-primary" role="button">Back</Link>
                            </div>
                        </Card.Body>
                    </Card> */}
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg='4'>
                                    <div className="d-flex align-items-center mb-4">
                                        <h5>19 May</h5>
                                        <div className="btn btn-info ms-3 btn-sm">
                                            Today
                                        </div>
                                    </div>
                                    <div className="p-2 show mb-4 h4 bg-soft-warning alert-left alert-warning d-inline-block rounded">
                                        <span> 5:30am Doctor Appointment</span>
                                    </div>
                                    <h6>Details</h6>
                                    <div className="d-flex align-items-center">
                                        <p className="pe-3 border-end">
                                            Time: 5:30 am
                                        </p>
                                        <p className="ms-3">
                                            Event: Doctor Appointment
                                        </p>
                                    </div>
                                    <h6 className="mb-3">More Events</h6>
                                    <div className="p-2 show mb-3 h6 bg-soft-success alert-left alert-success d-table rounded">
                                        <span> 5:30am Meeting</span>
                                    </div>
                                    <div className="p-2 show mb-3 h6 bg-soft-primary alert-left alert-primary d-inline-block rounded">
                                        <span>5:30am click for Google</span>
                                    </div>
                                </Col>
                                <Col lg="8">
                                    <button type="button" className="btn btn-primary ms-2 text-right float-end mb-lg-0 mb-3">
                                        <span>Edit Event</span>
                                        <svg width="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M16.9927 15.9531H11.2984C10.7429 15.9531 10.291 16.4121 10.291 16.9765C10.291 17.5419 10.7429 17.9999 11.2984 17.9999H16.9927C17.5483 17.9999 18.0001 17.5419 18.0001 16.9765C18.0001 16.4121 17.5483 15.9531 16.9927 15.9531Z" fill="white" />
                                            <path d="M7.30902 3.90361L12.7049 8.2637C12.835 8.36797 12.8573 8.55932 12.7557 8.69261L6.35874 17.028C5.95662 17.5429 5.36402 17.8342 4.72908 17.8449L1.23696 17.8879C1.05071 17.8901 0.887748 17.7611 0.845419 17.5762L0.0517547 14.1255C-0.0858138 13.4913 0.0517547 12.8356 0.453878 12.3303L6.88256 3.95521C6.98627 3.82083 7.1778 3.79719 7.30902 3.90361Z" fill="white" />
                                            <path opacity="0.4" d="M15.1203 5.66544L14.0801 6.96401C13.9753 7.09623 13.7869 7.11773 13.6568 7.01238C12.3922 5.98901 9.15405 3.36285 8.25563 2.63509C8.12441 2.52759 8.10642 2.33625 8.21224 2.20295L9.21543 0.957057C10.1255 -0.214663 11.7128 -0.322161 12.9933 0.699064L14.4642 1.87078C15.0674 2.34377 15.4695 2.96726 15.6071 3.62299C15.7658 4.3443 15.5965 5.0527 15.1203 5.66544Z" fill="white" />
                                        </svg>
                                    </button>
                                    <img src={CalenderImg} alt="calender" className="img-fluid" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
})
HeaderBread.displayName = "HeaderBread"
export default HeaderBread
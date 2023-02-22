import { memo, Fragment } from 'react'

//react-bootstrap
import { Container, Image, Col, Row } from 'react-bootstrap'

//router
import { Link } from 'react-router-dom'

// img

import error500 from '/src/assets/images/error/08.png'
import Footer from '../../../components/partials/dashboard/footerstyle/footer'

const Maintenance = memo(() => {


    return (
        <Fragment>
            <div className="error-bg vh-100 bg-primary">
                <Container>
                    <Row className='align-items-center align-self-center vh-100'>
                        <Col lg='7' className='md-lg-0'>
                            <Image src={error500} className="img-fluid mb-4 w-100" alt="" />
                        </Col>
                        <Col lg='5' className='text-end'>
                            <h2 className="mb-0 mt-4 text-white">Hang on! We are under maintenance </h2>
                            <p className="mt-2 text-white">The requested page dose not exist.</p>
                            <Link className="btn btn-outline-light d-inline-flex align-items-center" to="/">Back to Home</Link>
                        </Col>
                    </Row>
                </Container>
                <div className="box">
                    <div className="c xl-circle">
                        <div className="c lg-circle">
                            <div className="c md-circle">
                                <div className="c sm-circle">
                                    <div className="c xs-circle">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
)

Maintenance.displayName = "Maintenance"
export default Maintenance;

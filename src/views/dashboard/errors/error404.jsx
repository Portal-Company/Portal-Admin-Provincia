import { memo, Fragment } from 'react'

//react-bootstrap
import { Col, Container, Image, Row } from 'react-bootstrap'

//router
import { Link } from 'react-router-dom'

// img
import error404 from '/src/assets/images/error/06.png'
import Footer from '../../../components/partials/dashboard/footerstyle/footer'

const Error404 = memo(() => {
    return (
        <Fragment>
            <div className="error-bg vh-100 bg-primary" style={{ backgroundImage: { error404 }, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <Container>
                    <Row className='align-items-center align-self-center vh-100'>
                        <Col lg='7' className='md-lg-0'>
                            <Image src={error404} className="img-fluid mb-4 w-100" alt="" />
                        </Col>
                        <Col lg='5' className='text-end'>
                            <h2 className="mb-0 mt-4 text-white">Oops! This Page is Not Found.</h2>
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

Error404.displayName = "Error404"
export default Error404;

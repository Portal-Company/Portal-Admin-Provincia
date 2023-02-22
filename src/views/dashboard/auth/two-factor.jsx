import { memo, Fragment } from 'react'

//React-bootstrap
import { Row, Col, Image, Form, Button } from 'react-bootstrap'

//router
import { Link, useNavigate } from 'react-router-dom'

//components
import Card from '../../../components/bootstrap/card'

// img
import auth1 from '/src/assets/images/auth/01.png'

// Import selectors & action from setting store
import * as SettingSelector from '../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';

const TwoFactor = memo(() => {
   const appName = useSelector(SettingSelector.app_name)
   let history = useNavigate()
   return (
      <Fragment>
         <section className="login-content overflow-hidden">
            <Row className="m-0 align-items-center bg-white">
               <Col md='12' lg='6'>
                  <Link to="/" className="navbar-brand d-flex align-items-center justify-content-center mb-3">
                     <div className="logo-normal">
                        <svg className="text-primary" viewBox="0 0 32 32" width="80px" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z" fill="currentColor" />
                           <path d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z" fill="#3FF0B9" />
                        </svg>
                     </div>
                     <h2 className="logo-title ms-3">{appName}</h2>
                  </Link>
                  <Row className="justify-content-center pt-5">
                     <Col md='8'>
                        <Card className="d-flex  mb-0  iq-auth-form">
                           <Card.Body>
                              <h2 className="mb-2">Two Factor -Verification</h2>
                              <p className="">Enter your email address and we’ll send you an email with instructions to reset your password</p>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="floating-label form-group">
                                          <Form.Label htmlFor="email" className="">Phone Number</Form.Label>
                                          <Form.Control type="email" className="" id="email" aria-describedby="email" placeholder="+1 123456789" />
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <div className="d-flex">
                                    <Button onClick={() => history('/auth/recoverpw')} type="button" variant="primary">Reset</Button>
                                 </div>
                              </Form>
                              <Form className='mt-3'>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="floating-label form-group">
                                          <Form.Label htmlFor="email" className="">Enter the OTP you recieved to veify your device</Form.Label>
                                          <Form.Control type="email" className="" id="email" aria-describedby="email" placeholder="0000" />
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <div className="d-flex">
                                    <Button type="button" variant="primary">Verify</Button>
                                 </div>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 overflow-hidden">
                  <Image src={auth1} className="img-fluid gradient-main" alt="images" />
               </Col>
            </Row>
         </section>
      </Fragment>
   )
}
)

TwoFactor.displayName = "TwoFactor"
export default TwoFactor

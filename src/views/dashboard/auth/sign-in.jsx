import { memo, Fragment, useContext, useState } from "react";
import { toast } from "react-toastify";

//react-bootstrap
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

import Logo from "../../../assets/images/Logo.png";

// img
import facebook from "/src/assets/images/brands/fb.svg";
import google from "/src/assets/images/brands/gm.svg";
import instagram from "/src/assets/images/brands/im.svg";
import linkedin from "/src/assets/images/brands/li.svg";
import auth1 from "/src/assets/images/auth/01.png";
import { setCookie } from "nookies";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";
import { useFormik } from "formik";
import * as yup from "yup";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { api } from "../../../services";
import { getUserInfo } from "./services";

const SignIn = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  const [isSubmiting, setIsSubmiting] = useState(false);

  let history = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Email inválido")
        .required("Este campo é obrigatório"),

      senha: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        const response = await api.post("/auth/login", data);
        const { token } = response.data;
        setCookie(null, "token", token, { path: "/" });
        if (response.data) history("/");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setTimeout(() => {
          setIsSubmiting(false);
        }, 4000);
      }
    },
  });
  const user = getUserInfo();

  return (
    <Fragment>
      <section className="login-content">
        <Row className="row m-0 align-items-center bg-white">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center  justify-content-center text-primary"
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
                className="logo-normal"
              >
                <img
                  style={{
                    width: "50%",
                  }}
                  src={Logo}
                />
              </div>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col md="10">
                <Card className="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <h2 className="mb-2 text-center">Entrar</h2>
                    <p className="text-center">Entre para ficar conectado.</p>
                    <Form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              id="email"
                              name="email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              aria-describedby="email"
                              placeholder=" "
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <span className="text-danger">
                                {formik.errors.email}
                              </span>
                            ) : null}
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Senha
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="senha"
                              name="senha"
                              onChange={formik.handleChange}
                              value={formik.values.senha}
                              aria-describedby="password"
                              placeholder=""
                            />
                            {formik.touched.senha && formik.errors.senha ? (
                              <span className="text-danger">
                                {formik.errors.senha}
                              </span>
                            ) : null}
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-between">
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              Lembre-me
                            </Form.Check.Label>
                          </Form.Check>
                          <Link to="/auth/recoverpw">
                            Esqueceu a sua senha?
                          </Link>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          // onClick={() => history("/")}
                          type="submit"
                          variant="btn btn-primary"
                          disabled={isSubmiting}
                        >
                          Sign In
                        </Button>
                      </div>
                      <p className="text-center my-3">
                        Entrar com outras redes
                      </p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={facebook} alt="fb" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={instagram} alt="im" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item as="li" className="border-0 pb-0">
                            <Link to="#">
                              <Image src={linkedin} alt="li" />
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      {/* <p className="mt-3 text-center">
                        Não tem uma conta?{" "}
                        <Link to="/auth/sign-up" className="text-underline">
                          Clique aqui para se inscrever.
                        </Link>
                      </p> */}
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden"
          >
            <Image
              src={auth1}
              className="Image-fluid gradient-main"
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
});

SignIn.displayName = "SignIn";
export default SignIn;

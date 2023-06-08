import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//router
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.png";

//components
import Card from "../../../../components/bootstrap/card";

// img
import auth1 from "../../../../../src/assets/images/ben-white-83tkHLPgg2Q-unsplash.jpg";
// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../../../services";

const ResetPassword = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);

  const formik = useFormik({
    initialValues: {
      nova_senha: "",
      resetToken: token,
    },
    validationSchema: yup.object({
      nova_senha: yup
        .string()
        .trim()
        .min(8, "A senha deve conter pelo menos oito caracteres")
        .required("A senha é obrigatória"),
    }),
    onSubmit: async (data) => {
      try {
        const response = await (
          await api.patch(`/auth/reset_password/${data?.resetToken}`, data)
        ).data;
        if (response) {
          navigate("/auth/sign-in");
          formik.resetForm();
          toast.success(response?.message);
        }
      } catch (err) {
        toast(err?.response?.data?.message);
      }
    },
  });
  return (
    <Fragment>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="12" lg="6" className="align-self-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary"
            >
              <div className="logo-normal">
                <img
                  style={{
                    width: "50%",
                  }}
                  src={Logo}
                />
              </div>
            </Link>
            <Row className="justify-content-center pt-5">
              <Col lg="8">
                <Card className="d-flex justify-content-center mb-0">
                  <Card.Body>
                    <h2 className="mb-2">Recuperar senha</h2>
                    {/* <p>
                      Digite seu endereço de e-mail e enviaremos um e-mail com
                      instruções para redefinir sua senha.
                    </p> */}
                    <form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="floating-label form-group">
                            <Form.Label htmlFor="Senha" className="">
                              Nova Senha
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              onChange={formik.handleChange}
                              name="nova_senha"
                              id="nova_senha"
                              aria-describedby="senha"
                              placeholder=" "
                            />
                            {formik.touched.nova_senha &&
                            formik.errors.nova_senha ? (
                              <span className="text-danger">
                                {formik.errors.nova_senha}
                              </span>
                            ) : null}
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button type="submit" variant="btn btn-primary">
                        Resetar
                      </Button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden"
            style={{ height: "100vh" }}
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

ResetPassword.displayName = "ResetPassword";
export default ResetPassword;

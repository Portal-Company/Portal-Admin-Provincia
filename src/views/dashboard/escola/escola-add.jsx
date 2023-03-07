import { memo, useState, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

//router
import { Link } from "react-router-dom";

// img
import avatars1 from "/src/assets/images/avatars/01.png";
import avatars2 from "/src/assets/images/avatars/avtar_1.png";
import avatars3 from "/src/assets/images/avatars/avtar_2.png";
import avatars4 from "/src/assets/images/avatars/avtar_3.png";
import avatars5 from "/src/assets/images/avatars/avtar_4.png";
import avatars6 from "/src/assets/images/avatars/avtar_5.png";

const FuncionarioAdd = memo(() => {
  const [isProf, setProf] = useState(false);

  return (
    <Fragment>
      <Row>
        <Col xl="3" lg="4" className="">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Nova Escola</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="form-group">
                  <div className="profile-img-edit position-relative">
                    <Image
                      className="theme-color-default-img  profile-pic rounded avatar-100"
                      src={avatars1}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-purple-img profile-pic rounded avatar-100"
                      src={avatars2}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-blue-img profile-pic rounded avatar-100"
                      src={avatars3}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-green-img profile-pic rounded avatar-100"
                      src={avatars5}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-yellow-img profile-pic rounded avatar-100"
                      src={avatars6}
                      alt="profile-pic"
                    />
                    <Image
                      className="theme-color-pink-img profile-pic rounded avatar-100"
                      src={avatars4}
                      alt="profile-pic"
                    />
                    <div className="upload-icone bg-primary">
                      <svg
                        className="upload-button"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        />
                      </svg>
                      <Form.Control
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="img-extension mt-3">
                    <div className="d-inline-block align-items-center">
                      <Link to="#">.jpg</Link> <Link to="#">.png</Link>{" "}
                      <Link to="#">.jpeg</Link>{" "}
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>Categoria</Form.Label>
                  <select
                    name="type"
                    className="selectpicker form-control"
                    data-style="py-0"
                  >
                    <option>Ensino Primario</option>
                    <option>Ensino Secundário</option>
                    <option>Ensino Médio</option>
                  </select>
                </Form.Group>

                <Form.Group className="mb-0 form-group">
                  <Form.Label htmlFor="lurl">Linkedin Url:</Form.Label>
                  <Form.Control
                    type="text"
                    id="lurl"
                    placeholder="Linkedin Url"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="9" lg="8">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Informações da nova escola</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="new-user-info">
                <Form>
                  <div className="row">
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="fname">Name:</Form.Label>
                      <Form.Control
                        type="text"
                        id="fname"
                        placeholder="Primeiro Nome"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="lname">Localização:</Form.Label>
                      <Form.Control
                        type="text"
                        id="lname"
                        placeholder="Luanda Vila Alice"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="add1">E-mail:</Form.Label>
                      <Form.Control
                        type="email"
                        id="add1"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="add2">Telefone</Form.Label>
                      <Form.Control
                        type="number"
                        id="add2"
                        placeholder="Número de telefone"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="add2">NIF</Form.Label>
                      <Form.Control
                        type="number"
                        id="add2"
                        placeholder="Número de telefone"
                      />
                    </Form.Group>
                  </div>
                  <hr />
                  <h5 className="mb-3">Dados de acesso</h5>
                  <div className="row">
                    <Form.Group className="col-md-12 form-group">
                      <Form.Label htmlFor="uname">Name de Usuário:</Form.Label>
                      <Form.Control
                        type="text"
                        id="uname"
                        placeholder="ipilmakarenco"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="pass">Senha:</Form.Label>
                      <Form.Control
                        type="password"
                        id="pass"
                        placeholder="Palavra Chave"
                      />
                    </Form.Group>
                    <Form.Group className="col-md-6 form-group">
                      <Form.Label htmlFor="rpass">Repita a Senha:</Form.Label>
                      <Form.Control
                        type="password"
                        id="rpass"
                        placeholder="Repita a Senha "
                      />
                    </Form.Group>
                  </div>

                  <Button type="button" variant="btn btn-primary">
                    Adicionar
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

FuncionarioAdd.displayName = "FuncionarioAdd";
export default FuncionarioAdd;

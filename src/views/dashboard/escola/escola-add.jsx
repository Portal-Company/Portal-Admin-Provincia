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
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Cadastrar Area de Formação</h4>
            </div>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={formik?.handleSubmit} encType="multipart/form-data">
              <Row className="mb-3">
                <Col md="6" className="mb-3">
                  <Form.Label htmlFor="validationCustom05">Nome</Form.Label>
                  <Form.Control
                    onChange={formik.handleChange}
                    name="nome"
                    value={formik.values.nome}
                    type="text"
                    id="nome"
                    required
                  />
                  {formik?.touched?.nome && formik?.errors?.nome ? (
                    <label className="mt-1 text-danger">
                      {formik?.errors?.nome}
                    </label>
                  ) : null}
                  <Form.Label htmlFor="validationCustom05">
                    Categoria
                  </Form.Label>
                  <Form.Select
                    id="categoriaId"
                    name="categoriaId"
                    required
                    onChange={formik.handleChange}
                  >
                    <option defaultChecked>Selecione um Categoria</option>
                    {categoria?.map((item) => (
                      <option key={item?.id} value={item?.id}>
                        {item?.nome}
                      </option>
                    ))}
                  </Form.Select>
                  {formik?.touched?.categoriaId &&
                  formik?.errors?.categoriaId ? (
                    <label className="mt-1 text-danger">
                      {formik?.errors?.categoriaId}
                    </label>
                  ) : null}

                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label htmlFor="exampleFormControlTextarea1">
                      Descrição
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="descricao"
                      value={formik.values.descricao}
                      name="descricao"
                      onChange={formik.handleChange}
                      rows="5"
                    />
                    {formik?.touched?.descricao && formik?.errors?.descricao ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.descricao}
                      </label>
                    ) : null}
                  </Form.Group>
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label className="custom-file-input">
                      Carregar imagem
                    </Form.Label>
                    <Form.Control
                      type="file"
                      id="fotoUrl"
                      name="fotoUrl"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "fotoUrl",
                          event?.currentTarget?.files
                        );
                      }}
                    />
                    {formik?.touched?.fotoUrl && formik?.errors?.fotoUrl ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.fotoUrl}
                      </label>
                    ) : null}
                  </Form.Group>
                </Col>

                <div className="col-12">
                  <Button type="submit" disabled={isSubmiting}>
                    Cadastrar
                  </Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  );
});

FuncionarioAdd.displayName = "FuncionarioAdd";
export default FuncionarioAdd;

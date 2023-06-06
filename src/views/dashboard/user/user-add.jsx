import { memo, useState, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import * as yup from "yup";

//router
import { Link } from "react-router-dom";

// img
import avatars1 from "/src/assets/images/avatars/01.png";
import avatars2 from "/src/assets/images/avatars/avtar_1.png";
import avatars3 from "/src/assets/images/avatars/avtar_2.png";
import avatars4 from "/src/assets/images/avatars/avtar_3.png";
import avatars5 from "/src/assets/images/avatars/avtar_4.png";
import avatars6 from "/src/assets/images/avatars/avtar_5.png";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { api } from "../../../services";

const FuncionarioAdd = memo(() => {
  const [isProf, setProf] = useState(false);
  const user = getUserInfo();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: categoria } = useFetch(`/province/list`);
  const { data } = useFetch(`/school/list`);

  const schools = data?.filter(
    (item) => item?.Localizacao?.provinciaId === userData?.provinciaId
  );

  console.log(schools);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
      fotoUrl: "",
      provinciaId: userData?.provinciaId,
      escolaId: "",
      tipoUsuario: "ADMINISTRADOR_ESCOLA",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),
      senha: yup.string().required("Este campo  é obrigatório"),
      email: yup.string().required("Este campo  é obrigatório"),
      provinciaId: yup.string().required("Este campo  é obrigatório"),
      escolaId: yup.string().required("Este campo  é obrigatório"),
      tipoUsuario: yup.string().required("Este campo  é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        const formData = new FormData();
        formData.append("file", data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData);
        if (fotoUrl) {
          data = { ...data, fotoUrl: fotoUrl?.id };
          const response = await api.post("/user/post", data);
          if (response) {
            toast.success("Administrador cadastrado com sucesso");
            formik.resetForm();
          }
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setTimeout(() => {
          setIsSubmiting(false);
        }, 4000);
      }
    },
  });

  async function getFile(data) {
    const dataD = await api.post("/file", data);
    return dataD.data;
  }

  return (
    <Fragment>
      <Row>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Cadastrar Administrador (Escola)</h4>
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
                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label htmlFor="exampleFormControlTextarea1">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      value={formik.values.email}
                      name="email"
                      onChange={formik.handleChange}
                    />
                    {formik?.touched?.email && formik?.errors?.email ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.email}
                      </label>
                    ) : null}
                  </Form.Group>
                  <Form.Label htmlFor="validationCustom05">
                    Provincia
                  </Form.Label>
                  <Form.Select
                    id="provinciaId"
                    name="provinciaId"
                    value={formik.values.provinciaId}
                    required
                    disabled={true}
                    onChange={formik.handleChange}
                  >
                    <option defaultChecked>Selecione uma provincia</option>
                    {categoria?.map((item) => (
                      <option key={item?.id} value={item?.id}>
                        {item?.nome}
                      </option>
                    ))}
                  </Form.Select>
                  {formik?.touched?.provinciaId &&
                  formik?.errors?.provinciaId ? (
                    <label className="mt-1 text-danger">
                      {formik?.errors?.provinciaId}
                    </label>
                  ) : null}
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label className="custom-file-input">
                      Carregar imagem
                    </Form.Label>
                    <Form.Control
                      type="file"
                      id="fotoUrl"
                      accept="image/png, image/jpg, image/jpeg, image/gif"
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
                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label htmlFor="exampleFormControlTextarea1">
                      Senha
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="senha"
                      value={formik.values.senha}
                      name="senha"
                      onChange={formik.handleChange}
                    />
                    {formik?.touched?.senha && formik?.errors?.senha ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.senha}
                      </label>
                    ) : null}
                  </Form.Group>
                  <Form.Label htmlFor="validationCustom05">Escola</Form.Label>
                  <Form.Select
                    id="escolaId"
                    name="escolaId"
                    value={formik.values.escolaId}
                    required
                    // disabled={true}
                    onChange={formik.handleChange}
                  >
                    <option defaultChecked>Selecione uma escola</option>
                    {schools?.map((item) => (
                      <option key={item?.id} value={item?.id}>
                        {item?.nome}
                      </option>
                    ))}
                  </Form.Select>
                  {formik?.touched?.escolaId && formik?.errors?.escolaId ? (
                    <label className="mt-1 text-danger">
                      {formik?.errors?.escolaId}
                    </label>
                  ) : null}
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

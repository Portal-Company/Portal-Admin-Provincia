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
import { mutate } from "swr";

const FuncionarioAdd = memo(() => {
  const [isProf, setProf] = useState(false);
  const user = getUserInfo();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: categoria } = useFetch(`/province/list`);

  const formik = useFormik({
    initialValues: {
      nome: userData?.nome,
      email: userData?.email,
      senha: "",
      fotoUrl: userData?.fotoUrl,
      tipoUsuario: "ADMINISTRADOR_GERAL",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo  é obrigatório"),
      senha: yup.string().required("Este campo  é obrigatório"),
      email: yup.string().required("Este campo  é obrigatório"),
      tipoUsuario: yup.string().required("Este campo  é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        if (data?.fotoUrl === userData?.fotoUrl) {
          const response = await api.put(`/user/put/${userData?.id}`, data);
          if (response) {
            formik.resetForm();
            mutate(`/user/list/${user?.sub}`);
            toast.success("Administrador actualizado com sucesso");
          }
        } else {
          const formData = new FormData();
          formData.append("file", data?.fotoUrl[0]);
          const fotoUrl = await getFile(formData);
          if (fotoUrl) {
            data = { ...data, fotoUrl: fotoUrl?.id };
            const response = await api.post(`/user/put/${userData?.id}`, data);
            if (response) {
              formik.resetForm();
              mutate(`/user/list/${user?.sub}`);
              toast.success("Administrador actualizado com sucesso");
            }
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
              <h4 className="card-title">Actualizar Administrador</h4>
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
                  {/* <Form.Label htmlFor="validationCustom05">
                    Provincia
                  </Form.Label>
                  <Form.Select
                    id="provinciaId"
                    name="provinciaId"
                    required
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
                  ) : null} */}
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
                </Col>

                <div className="col-12">
                  <Button type="submit" disabled={isSubmiting}>
                    Actualizar
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

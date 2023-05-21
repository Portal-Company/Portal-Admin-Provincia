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
  const { data: categoria } = useFetch(`/category/list`);

  const formik = useFormik({
    initialValues: {
      nome: "",
      nif: "",
      fotoUrl: "",
      logo: "",
      categoriaId: "",
      provinciaId: userData?.Provincia?.id,
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (!value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),
      logo: yup
        .mixed()
        .test(
          "isImage",
          "Por favor selecione um arquivo de imagem válido!",
          (value) => {
            if (!value) return true; // permite que o campo seja vazio
            return (
              value &&
              ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(
                value.type
              )
            );
          }
        ),
      nif: yup.string().required("Este campo é obrigatório"),
      categoriaId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        const formData = new FormData();
        const formData1 = new FormData();
        formData1.append("file", data?.logo[0]);
        formData.append("file", data?.fotoUrl[0]);
        const logo = await getFile(formData1);
        const fotoUrl = await getFile(formData);
        if (fotoUrl) {
          data = { ...data, fotoUrl: fotoUrl?.id, logo: logo?.id };
          const response = await api.post("/school/post", data);
          if (response) {
            toast.success("Escola cadastrada com sucesso");
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

  console.log(formik.errors);

  return (
    <Fragment>
      <Row>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Cadastrar Escola</h4>
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
                      NIF
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="nif"
                      value={formik.values.nif}
                      name="nif"
                      onChange={formik.handleChange}
                    />
                    {formik?.touched?.nif && formik?.errors?.nif ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.nif}
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
                  <Form.Group className="mb-3 form-group mt-2">
                    <Form.Label className="custom-file-input">
                      Carregar imagem logo
                    </Form.Label>
                    <Form.Control
                      type="file"
                      id="logo"
                      name="logo"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "logo",
                          event?.currentTarget?.files
                        );
                      }}
                    />
                    {formik?.touched?.logo && formik?.errors?.logo ? (
                      <label className="mt-1 text-danger">
                        {formik?.errors?.logo}
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

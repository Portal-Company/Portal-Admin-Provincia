import { useState } from "react";
import { useFormik } from "formik";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import { api } from "../../../services";
import { getUserInfo } from "../auth/services";
import useFetch from "../../../hooks";
import { toast } from "react-toastify";
import * as yup from "yup";

const FormValidation = () => {
  const user = getUserInfo();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: categoria } = useFetch(`/category/list`);

  const formik = useFormik({
    initialValues: {
      nome: "",
      fotoUrl: "",
      descricao: "",
      // escolaId: userData?.Escola?.id,
      categoriaId: "",
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
      descricao: yup.string().required("Este campo é obrigatório"),
      escolaId: yup.string().required("Este campo é obrigatório"),
      categoriaId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        const formData = new FormData();
        formData.append("file", data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData);
        if (fotoUrl) {
          data = { ...data, fotoUrl: fotoUrl?.id };
          const response = await api.post("/trainingArea/post", data);
          if (response) {
            toast.success("Area de Formação cadastrada com sucesso");
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
                <Form.Label htmlFor="validationCustom05">Categoria</Form.Label>
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
                {formik?.touched?.categoriaId && formik?.errors?.categoriaId ? (
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
  );
};

export default FormValidation;

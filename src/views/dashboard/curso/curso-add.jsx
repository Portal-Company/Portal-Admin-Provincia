import { useFormik } from "formik";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";
import useFetch from "../../../hooks";
import { getUserInfo } from "../auth/services";
import * as yup from "yup";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { useState } from "react";

const Cursos = () => {
  const user = getUserInfo();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: Area } = useFetch(`/trainingArea/list`);

  const formik = useFormik({
    initialValues: {
      nome: "",
      fotoUrl: "",
      descricao: "",
      areaDeFormacaoId: "",
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
      areaDeFormacaoId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      try {
        setIsSubmiting(true);
        const formData = new FormData();
        formData.append("file", data?.fotoUrl[0]);
        const fotoUrl = await getFile(formData);
        if (fotoUrl) {
          data = { ...data, fotoUrl: fotoUrl?.id };
          const response = await api.post("/course/post", data);
          if (response) {
            toast.success("Curso cadastrado com sucesso");
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
            <h4 className="card-title"> Cadastrar Curso</h4>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Row>
              <Col md="6" className="mb-3">
                <Form.Label htmlFor="validationDefault04">
                  Area de Formação
                </Form.Label>
                <Form.Select
                  id="areaDeFormacaoId"
                  name="areaDeFormacaoId"
                  required
                  onChange={formik.handleChange}
                >
                  <option defaultChecked>Selecione um area de formação</option>
                  {Area?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.nome}
                    </option>
                  ))}
                </Form.Select>
                {formik?.touched?.areaDeFormacaoId &&
                formik?.errors?.areaDeFormacaoId ? (
                  <label className="mt-1 text-danger">
                    {formik?.errors?.areaDeFormacaoId}
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
                <Form.Label md="6" htmlFor="validationDefault01">
                  Nome do Curso
                </Form.Label>
                <Form.Control
                  type="text"
                  id="nome"
                  name="nome"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  required
                />
                {formik?.touched?.nome && formik?.errors?.nome ? (
                  <label className="mt-1 text-danger">
                    {formik?.errors?.nome}
                  </label>
                ) : null}
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
            </Row>
            <Form.Group>
              <Button
                variant="btn btn-primary"
                type="submit"
                disabled={isSubmiting}
              >
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Cursos;

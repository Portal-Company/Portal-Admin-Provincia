import {
  Modal,
  Button,
  Col,
  Form,
  Row,
  Card,
  Container,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { api } from "../../../../../services";
import { toast } from "react-toastify";
import useFetch from "../../../../../hooks";

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {
  const { data: categoria } = useFetch(`/category/list`);

  const formik = useFormik({
    initialValues: {
      nome: item?.nome,
      fotoUrl: item?.fotoUrl,
      nif: item?.nif,
      logo: item?.logo,
      categoriaId: item?.Categoria?.id,
      provinciaId: item?.Provincia?.id,
    },
    validationSchema: yup.object({
      nome: yup.string().required("Este campo é obrigatório"),
      fotoUrl: yup.string().required("Este campo é obrigatório"),
      nif: yup.string().required("Este campo é obrigatório"),
      logo: yup.string().required("Este campo é obrigatório"),
      categoriaId: yup.string().required("Este campo é obrigatório"),
      provinciaId: yup.string().required("Este campo é obrigatório"),
    }),
    onSubmit: async (data) => {
      if (item?.fotoUrl === data?.fotoUrl) {
        try {
          const response = await api.put(`/school/put/${item?.id}`, data);
          if (response) {
            toast.success("Escola actualizada com sucesso");
            mutate();
            setShowModalUpadate(false);
          }
        } catch (err) {
          toast.error(err?.response?.data?.message);
        }
      } else {
        try {
          const formData = new FormData();
          formData.append("file", data?.fotoUrl[0]);
          const fotoUrl = await getFile(formData);
          if (fotoUrl) {
            data = { ...data, fotoUrl: fotoUrl?.id };
            const response = await api.put(`/school/put/${item?.id}`, data);
            if (response) {
              toast.success("Area de Formação actualizada com sucesso");
              setShowModalUpadate(false);
            }
          }
        } catch (err) {
          toast.error(err?.response?.data?.message);
        }
      }
    },
  });

  async function getFile(data) {
    const dataD = await api.post("/file", data);

    return dataD.data;
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar a Escola</Modal.Title>
      </Modal.Header>
      <Card.Body
        style={{
          width: "100%",
          padding: "1rem 1rem",
          display: "flex",
        }}
      >
        <Form onSubmit={formik?.handleSubmit} encType="multipart/form-data">
          <Container>
            <Col xs={12} sm={12} md={12} lg={50} xl={20} className="mb-3 ">
              <Form.Label htmlFor="validationCustom05">Nome</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                name="nome"
                value={formik.values.nome}
                type="text"
                id="nome"
                required
              />
              <Form.Group>
                <Form.Label htmlFor="validationCustom05">Nif</Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  name="nif"
                  value={formik.values.nif}
                  type="text"
                  id="nif"
                  required
                />
              </Form.Group>
              <Form.Group>
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
              </Form.Group>
              <Form.Group className="mb-3 form-group mt-2">
                <Form.Label className="custom-file-input">
                  Escolha o ficheiro
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
              </Form.Group>
              <Form.Group className="mb-3 form-group mt-2">
                <Form.Label className="custom-file-input">
                  Escolha o ficheiro para logo
                </Form.Label>
                <Form.Control
                  type="file"
                  id="logo"
                  name="logo"
                  onChange={(event) => {
                    formik.setFieldValue("logo", event?.currentTarget?.files);
                  }}
                />
              </Form.Group>
            </Col>
          </Container>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Actualizar</Button>
          </Modal.Footer>
        </Form>
      </Card.Body>
    </Modal>
  );
}

export { ModalUpdate };

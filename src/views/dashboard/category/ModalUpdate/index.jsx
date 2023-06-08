import { Modal, Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
import { api } from '../../../../services';

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {  
  const formik = useFormik({
    initialValues: {
      nome: item?.nome,
    },
    validationSchema: yup.object({}),
    onSubmit: async (data) =>{
        try{
            const response = await api.put(`/role/put/${item?.id}`, data)
            if(response){
              toast.success("Curso actualizado com sucesso")
              mutate()
              setShowModalUpadate(false)
            }
        }catch(err){
          toast.error(err?.response?.data?.message)
        }
  }})

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Cargo</Modal.Title>
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
                <Form.Label htmlFor="validationCustom05">
                  Nome
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  name="nome"
                  value={formik.values.nome}
                  type="text"
                  id="nome"
                />
              </Col>
            </Container>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button type='submit'>
          Actualizar
        </Button>
      </Modal.Footer>
      </Form>
      </Card.Body>
    </Modal>
  );
}

export { ModalUpdate }
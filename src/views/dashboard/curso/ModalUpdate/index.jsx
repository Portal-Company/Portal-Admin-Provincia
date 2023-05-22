import { Modal, Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
import { api } from '../../../../services';

function ModalUpdate({ onClose, item, mutate, setShowModalUpadate }) {  
  const formik = useFormik({
    initialValues: {
      nome: item?.nome,
      fotoUrl: item?.fotoUrl,
      descricao: item?.descricao,
    },
    validationSchema: yup.object({}),
    onSubmit: async (data) =>{
      if(item?.fotoUrl === data?.fotoUrl){
        try{
            const response = await api.put(`/course/put/${item?.id}`, data)
            if(response){
              toast.success("Curso actualizado com sucesso")
              mutate()
              setShowModalUpadate(false)
            }
        }catch(err){
          toast.error(err?.response?.data?.message)
        }
      }else{
        try{
          const formData = new FormData();
          formData.append('file', data?.fotoUrl[0]);
          const fotoUrl = await getFile(formData)
          if(fotoUrl){
            data = {...data, fotoUrl: fotoUrl?.id};
            const response = await api.put(`/course/put/${item?.id}`, data)
            if(response){
              toast.success("Curso actualizado com sucesso")
              setShowModalUpadate(false)
            }
          }
        }catch(err){
          toast.error(err?.response?.data?.message)
        }
      }
      }
  }) 

  async function getFile (data) {
    const dataD = await api.post("/file", data)

    return dataD.data
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Curso</Modal.Title>
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
                <Form.Group className="mb-3 form-group mt-2">
                                <Form.Label htmlFor="exampleFormControlTextarea1">Descrição</Form.Label>
                                <Form.Control as="textarea" id="descricao" value={formik.values.descricao} name="descricao" onChange={formik.handleChange} rows="5" />
                </Form.Group>
                <Form.Group className="mb-3 form-group mt-2">
                  <Form.Label className="custom-file-input">Escolha o ficheiro</Form.Label>
                  <Form.Control
                      type="file"
                      id="fotoUrl"
                      name="fotoUrl"
                      onChange={(event) =>{
                        formik.setFieldValue('fotoUrl', event?.currentTarget?.files)
                      }}  
                  />
              </Form.Group>
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
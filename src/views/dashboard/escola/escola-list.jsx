import { memo, Fragment, useState } from "react";

// React-bootstrap
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import nookies from "nookies";

//Components
import Card from "../../../components/bootstrap/card";

//Img

import useFetch from "../../../hooks";
import { ImageView } from "../../../components/ImageView";
import { ViewSchool } from "./components/viewSchool";
import { ModalUpdate } from "./components/ModalUpdate";
import { ViewDataCandidate } from "../inscritos/components";
import { getUserInfo } from "../auth/services";

const FuncionarioList = memo(() => {
  const user = getUserInfo();
  const { data: userData } = useFetch(`/user/list/${user?.sub}`);
  const { data: School } = useFetch(`/school/list`);
  const [item, setItem] = useState({});
  const [isModal, setIsModal] = useState(false);

  console.log(School);

  const SchoolData = School?.length
    ? School?.filter(
        (item) => item?.Localizacao?.Provincia?.id === userData?.provinciaId
      )
    : [];

  console.log(nookies.get(null).token);

  function handleView(item) {
    setIsModal(true);
    setItem(item);
  }
  function handleClose() {
    setIsModal(false);
  }

  return (
    <Fragment>
      {isModal && (
        <ViewSchool
          item={item}
          show={isModal}
          handleClose={handleClose}
          setIsModal={setIsModal}
        />
      )}
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="custom-table-effect table-responsive border rounded mt-3">
                <Table className="mb-0" id="datatable" data-toggle="data-table">
                  <thead>
                    <tr className="bg-white">
                      <th scope="col">Nome</th>
                      <th scope="col">Contacto</th>
                      <th scope="col">Email</th>

                      <th scope="col">NIF</th>
                      <th scope="col">Acção</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SchoolData?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center">
                              <ImageView item={item} />
                              <div className="media-support-info">
                                <h6 className="mb-0">{item?.nome}</h6>
                                <p className="mb-0">{item?.Categoria?.nome}</p>
                              </div>
                            </div>
                          </td>
                          <td className="text-dark">
                            {item?.Contato?.numeroTelefone}
                          </td>
                          <td className="text-dark">{item?.Contato?.email}</td>

                          <td className="text-dark">{item?.nif}</td>
                          <td>
                            <div className="d-flex justify-content-evenly">
                              <Button
                                className="btn btn-primary "
                                to="#"
                                role="button"
                                onClick={() => handleView(item)}
                              >
                                Ver mais
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

FuncionarioList.displayName = "Borderedtable";
export default FuncionarioList;

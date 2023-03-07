import { memo, Fragment, useState } from "react";

//react-bootstrap
import { Row, Col, Image } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

const userlist = [
  {
    name: "Hans Olo",
    phone: "+91 2586 253 125",
    email: "hansolo@gmail.com",
    country: "12",
    status: "Rejeitado",

    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "António Pedro Muteka",
    phone: "+27 5625 456 589",
    email: "margearita@gmail.com",
    country: "17",
    status: "Apurado",

    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "Ernesto Cabingano Salias",
    phone: "+91 2586 253 125",
    email: "hansolo@gmail.com",
    country: "12",
    status: "Rejeitado",
    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "Luís Carlos Sebastião Baptista",
    phone: "+91 2586 253 125",
    email: "hansolo@gmail.com",
    country: "12",
    status: "Rejeitado",

    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "Domingos Pascol João Matumona",
    phone: "+27 5625 456 589",
    email: "margearita@gmail.com",
    country: "17",
    status: "Rejeitado",

    joindate: "2019/12/01",
    color: "bg-danger",
  },

  {
    name: "Mauricio Costa",
    phone: "+27 5625 456 589",
    email: "margearita@gmail.com",
    country: "17",
    status: "Rejeitado",

    joindate: "2019/12/01",
    color: "bg-danger",
  },
];

const UserList = () => {
  const [query, setQuery] = useState("");

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Inscrições Não Aceite</h4>
              </div>
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Pequisar..."
                  aria-label="Search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </Card.Header>
            <Card.Body className="px-0">
              <div className="table-responsive">
                <table
                  id="user-list-table"
                  className="table table-striped"
                  role="grid"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr className="ligth">
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Media Final</th>
                      <th>Status</th>

                      <th>Data da Inscrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userlist
                      .filter((user) =>
                        user.email.toLocaleLowerCase().includes(query)
                      )
                      .map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>{item.country}</td>
                          <td>
                            <span className={`badge ${item.color}`}>
                              {item.status}
                            </span>
                          </td>

                          <td>{item.joindate}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

UserList.displayName = "UserList";
export default UserList;

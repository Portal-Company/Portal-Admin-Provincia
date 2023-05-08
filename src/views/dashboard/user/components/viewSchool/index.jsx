import { Button, Image, Modal } from "react-bootstrap";
import useFetch from "../../../../../hooks";

export const ViewSchool = ({ item, show, handleClose, setIsModal }) => {
  const { data: fotoUrl } = useFetch(`/file/${item?.fotoUrl}`);

  console.log(item);

  function onclose() {
    setIsModal(false);
  }

  return (
    <>
      <Modal
        onHide={onclose}
        show={show}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Dados da Escola</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <div>
              {/* <p className="mb-0">Foto:</p> */}
              <Image
                style={{ cursor: "pointer" }}
                src={fotoUrl?.link}
                loading="lazy"
                alt="perfil"
                width={100}
                onClick={() => (window.location.href = fotoUrl?.link)}
              />
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Nome:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{item?.nome}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Email:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{item?.email}</p>
              </div>
            </div>
            {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Contacto:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.Contato?.numeroTelefone}
                </p>
              </div>
            </div> */}
            {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Endereço:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  {item?.Candidato?.Localizacao?.endereco1}
                </p>
              </div>
            </div> */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Tipo de Administrador:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{item?.tipoUsuario}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Provincia:</p>
              </div>
              <div className="">
                <p className="text-muted mb-0">{item?.Provincia?.nome}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Escola:</p>
              </div>
              <div className="">
                <p className="text-muted mb-0">
                  {item?.Escola?.nome
                    ? item?.Escola?.nome
                    : "sem escola associada no momento"}
                </p>
              </div>
            </div>
            {/* <div>
              <p className="mb-0">Codigo do Documento:</p>
            </div>
            <div className="">
              <p className="text-muted mb-0">
                {item?.Candidato?.codigoDocumento}
              </p>
              <p>Tipo de Identificaçao: {item?.Candidato?.tipoIdentificacao}</p>
            </div> */}

            {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <div>
                <p className="mb-0">Cursos Pretendidos:</p>
              </div>
              <div className="">
                {item?.CursoPretendido?.map((item, index) => (
                  <p className="text-muted mb-0" key={index}>
                    | {item?.Curso?.nome} |
                  </p>
                ))}
              </div>
            </div> */}
            {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Baixar logo da escola:</p>
              </div>
              <div className="col-sm-9">
                <a href={identificacao?.link} download>
                  baixar
                </a>
              </div>
            </div> */}
            {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="">
                <p className="mb-0">Baixar a foto de perfil da escola</p>
              </div>
              <div className="col-sm-9">
                <a href={certificado?.link} download>
                  baixar
                </a>
              </div>
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* {state !== "ACEITE"  ? (
                <>
                <Button variant="primary" onClick={() => handleOpen("aprovar")}>Aprovar</Button>
                <Button variant="danger">Rejeitar</Button>
                </>
            ): null} */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

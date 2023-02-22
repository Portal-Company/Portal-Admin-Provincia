import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Dropzone
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";

const Uppyplugin = memo(() => {
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Uppy</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Uppy Plugin refer
                  <Link to="https://uppy.io">Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Introduction</h4>
                <p>
                  Uppy is a sleek and modular file uploader. It fetches files
                  from local disk, Google Drive, Instagram, remote urls, cameras
                  etc, and then uploads them to the final destination. It’s
                  fast, has a comprehensible API and lets you worry about more
                  important problems than building a file uploader.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Dropzone
                inputContent={"Drop files here or browse files"}
                inputWithFilesContent={"Add more"}
                submitButtonContent={"Save"}
                onSubmit={handleSubmit}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Uppyplugin.displayName = "Uppyplugin";
export default Uppyplugin;

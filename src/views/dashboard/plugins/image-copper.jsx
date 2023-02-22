import { useState, memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Components
import Card from "../../../components/bootstrap/card";

//Cropper
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

//Img
import Picture from "/src/assets/images/plugins/img11.jpg";

const Imagecopper = memo(() => {
  const image = useState();
  const [cropData, setCropData] = useState();
  const [cropper, setCropper] = useState();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      image(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <Fragment>
      <Card>
        <Card.Header>
          <h4>Cropper</h4>
        </Card.Header>
        <Card.Body>
          <label className=" btn-upload  mb-3">
            <input type="file" onChange={onChange} />
          </label>
          <Row>
            <Col lg="6">
              <Cropper
                src={Picture}
                preview=".img-preview"
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
              />
            </Col>
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <div className="box">
                    <h1>Preview</h1>
                    <div
                      className="img-preview"
                      style={{
                        width: "100%",
                        height: "100px",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <Button variant="primary my-2" onClick={getCropData}>
                    Crop Image
                  </Button>
                  <img style={{ width: "100%" }} src={cropData} alt="cropped" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

Imagecopper.displayName = "Imagecopper";
export default Imagecopper;

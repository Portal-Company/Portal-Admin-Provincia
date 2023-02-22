import { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

// Components
import Card from "../../../components/bootstrap/card";

// Sweetalert
import Swal from "sweetalert2";

//Img
import img1 from "/src/assets/images/plugins/img2.jpg";
import img2 from "/src/assets/images/plugins/img1.jpeg";
import img3 from "/src/assets/images/plugins/nyan-cat.gif";

const Sweetalert = memo(() => {
  function Sweetalert1() {
    Swal.fire({
      title: "Hello! This is a Basic Message.",
      backdrop: `rgba(60,60,60,0.8)`,
    });
  }
  function Sweetalert2() {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around? question",
      backdrop: `rgba(60,60,60,0.8)`,
    });
  }
  function Sweetalert3() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      backdrop: `rgba(60,60,60,0.8)`,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
  function Sweetalert4() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      backdrop: `
            rgba(60,60,60,0.8)`,
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 55000,
    });
  }
  function Sweetalert5() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  function Sweetalert6() {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: img1,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      backdrop: `rgba(60,60,60,0.8)`,
    });
  }
  function Sweetalert7() {
    Swal.fire({
      title: "Custom width, padding, background.",
      width: 600,
      padding: "3em",
      background: `#fff url(${img2})`,
      backdrop: `rgba(60,60,60,0.8)
                      url(${img3})
                      left top
                      no-repeat`,
    });
  }
  function Sweetalert8() {
    Swal.fire({
      title: "<strong>HTML Example</strong>",
      icon: "info",
      html:
        "You can use <b>bold text</b>, " +
        '<a href="//sweetalert2.github.io">links</a> ' +
        "and other HTML tags",
      backdrop: `rgba(60,60,60,0.8)`,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i className="fa fa-thumbs-down"></i> Cancel',
      cancelButtonAriaLabel: "Thumbs down, cancel!",
    });
  }
  function Sweetalert9() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Don't save`,
      backdrop: `
            rgba(60,60,60,0.8)`,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  function Sweetalert10() {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: "Look up",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
          backdrop: `rgba(60,60,60,0.8)`,
        });
      }
    });
  }

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Sweetalert</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Sweetalert Plugin refer
                  <Link to="#">Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>A Basic Message</h4>
                <p>
                  A short communication sent from one person to another or the
                  central theme or idea of a communication.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert1}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Title with a Text</h4>
                <p>
                  Image title text is an attribute used to provide additional
                  information about the image as well as displayed as a tooltip.{" "}
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert2}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>A modal with a title and a footer</h4>
                <p>
                  Modal-header className is used to define the style for the
                  header of the modal and footer define the style for the footer
                  of the modal.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert3}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Custom positioned dialog</h4>
                <p>
                  It set using the position property by providing custom X and Y
                  coordinates also positioned inside the target.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert4}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>A confirm dialog</h4>
                <p>
                  Confirm dialog with a function attached to the
                  "Confirm"-Button and specified message, along with an OK and a
                  Cancel Button.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert5}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Message with a custom image</h4>
                <p>
                  Custom images do not include the data from any attached block
                  volumes. For information about backing up volumes.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert6}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Message with custom</h4>
                <p>
                  A message with custom width, padding, background and animated
                  Nyan Cat.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert7}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>ARIA labels</h4>
                <p>
                  ARIA labels to create accessible element descriptions. ... if
                  a Button has both text content and an aria-label.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert8}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>A dialog with three buttons</h4>
                <p>
                  There are three functions for adding Buttons to Android
                  Dialog, setPositiveButton(int textId, DialogInterface).
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert9}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>AJAX request example</h4>
                <p>
                  The ajax() method in jQuery is used to perform an AJAX request
                  or asynchronous HTTP request.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
              <Button onClick={Sweetalert10}>Try Me</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Sweetalert.displayName = "Sweetalert";
export default Sweetalert;

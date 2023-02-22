import { memo, Fragment } from "react";

//React-bootstrap
import { Offcanvas, Navbar, Container, Nav, Button } from "react-bootstrap";

//Router
import { Link, useLocation } from "react-router-dom";

const HorizontalNav = memo(() => {
  //location
  let location = useLocation();
  return (
    <Fragment>
      <Navbar
        expand="xl"
        id="navbar_main"
        className="mobile-offcanvas  hover-nav horizontal-nav mx-md-auto "
      >
        <Container fluid>
          <Offcanvas.Header closeButton>
            <Navbar.Brand>
              <svg
                width="30"
                className="text-primary"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.757324"
                  y="19.2427"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 -0.757324 19.2427)"
                  fill="currentColor"
                />
                <rect
                  x="7.72803"
                  y="27.728"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 7.72803 27.728)"
                  fill="currentColor"
                />
                <rect
                  x="10.5366"
                  y="16.3945"
                  width="16"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5366 16.3945)"
                  fill="currentColor"
                />
                <rect
                  x="10.5562"
                  y="-0.556152"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5562 -0.556152)"
                  fill="currentColor"
                />
              </svg>
              <h4 className="logo-title">Portal</h4>
            </Navbar.Brand>
            <Button className="close float-end"></Button>
          </Offcanvas.Header>
          <Nav className="iq-nav-menu">
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/index-horizontal" ? "active" : ""
                } nav-link `}
                to="/index-horizontal"
              >
                {" "}
                Horizontal{" "}
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/index-dual-compact" ? "active" : ""
                } nav-link `}
                to="/index-dual-compact"
              >
                <span className="item-name">Dual Compact</span>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/index-boxed" ? "active" : ""
                } nav-link `}
                to="/index-boxed"
              >
                {" "}
                Boxed Horizontal{" "}
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
});

HorizontalNav.displayName = "HorizontalNav";
export default HorizontalNav;

import { useState, useEffect, memo } from "react";

//react-bootstrap
import { Navbar, Container, Nav, Collapse } from "react-bootstrap";

//router
import { Link, useLocation } from "react-router-dom";

//Tste

// Component
import SubNav from "../../partials/dashboard/headerstyle/sub-nav";

// logo
import Logo from "../components/logo";

const Header = memo((props) => {
  useEffect(() => {
    //offcanvase code
    const result = window.matchMedia("(max-width: 1200px)");
    window.addEventListener("resize", () => {
      if (result.matches === true) {
        if (show1 === true) {
          document.documentElement.style.setProperty("overflow", "hidden");
        } else {
          document.documentElement.style.removeProperty("overflow");
        }
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    });
    if (window.innerWidth <= "1200") {
      if (show1 === true) {
        document.documentElement.style.setProperty("overflow", "hidden");
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  });

  const [show1, setShow1] = useState(false);

  //collapse
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  let location = useLocation();

  return (
    <Navbar expand="xl" className="nav iq-navbar">
      <Container fluid className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <Logo color={true} />
          <h4 className="logo-title d-none d-sm-block">{props.app_name}</h4>
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon d-flex">
            <svg width="20px" viewBox="0 0 24 24" className="icon-20">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i>
        </div>
        <div className="d-flex align-items-center justify-content-between product-offcanvas">
          <div className="breadcrumb-title border-end me-3 pe-3 d-none d-xl-block">
            <small className="mb-0 text-capitalize">
              {" "}
              {`${
                location.pathname === "/"
                  ? "home"
                  : "" || location.pathname === "/analytics"
                  ? "Analytics"
                  : "" || location.pathname === "/crypto"
                  ? "Crypto"
                  : "" || location.pathname === "/special-pages/billing"
                  ? "Billing"
                  : "" || location.pathname === "/special-pages/billing-1"
                  ? "Billing-1"
                  : "" ||
                    location.pathname === "/dashboard/special-pages/billing-2"
                  ? "Billing-2"
                  : "" || location.pathname === "/special-pages/calender"
                  ? "Calender"
                  : "" || location.pathname === "/special-pages/kanban"
                  ? "Kanban"
                  : "" || location.pathname === "/special-pages/pricing"
                  ? "Pricing"
                  : "" || location.pathname === "/special-pages/timeline"
                  ? "Timeline"
                  : "" || location.pathname === "/app/user-profile"
                  ? "User Profile"
                  : "" || location.pathname === "/app/user-add"
                  ? "Add User"
                  : "" || location.pathname === "/app/user-list"
                  ? "User List"
                  : "" || location.pathname === "/plugins/apexcharts"
                  ? "Apexchart"
                  : "" || location.pathname === "/plugins/button-hover"
                  ? "Button Hover"
                  : "" || location.pathname === "/plugins/choise-js"
                  ? "Choice JS"
                  : "" || location.pathname === "/plugins/flatpickr"
                  ? "Flatpickr"
                  : "" || location.pathname === "/plugins/fslightbox"
                  ? "Fslightbox"
                  : "" || location.pathname === "/plugins/gallery-hover"
                  ? "Gallery-hover"
                  : "" || location.pathname === "/plugins/image-copper"
                  ? "Image-copper"
                  : "" || location.pathname === "/plugins/loader"
                  ? "Loader"
                  : "" || location.pathname === "/plugins/rating"
                  ? "Rating"
                  : "" || location.pathname === "/plugins/select2"
                  ? "Select2"
                  : "" || location.pathname === "/plugins/sweet-alert"
                  ? "Sweet-alert"
                  : "" || location.pathname === "/plugins/quill-editor"
                  ? "Quill-editor"
                  : "" || location.pathname === "/plugins/uppy"
                  ? "Uppy"
                  : "" || location.pathname === "/extra/blank-page"
                  ? "Blank Page"
                  : "" || location.pathname === "/ui-elements/avatars"
                  ? "Ui-Avatars"
                  : "" || location.pathname === "/ui-elements/alerts"
                  ? "Ui-Alerts"
                  : "" || location.pathname === "/ui-elements/badges"
                  ? "Ui-Badges"
                  : "" || location.pathname === "/ui-elements/breadcrumb"
                  ? "Ui-Breadcrumb"
                  : "" || location.pathname === "/ui-elements/buttons"
                  ? "Ui-Buttons"
                  : "" || location.pathname === "/ui-elements/button-group"
                  ? "Ui-Button-group"
                  : "" || location.pathname === "/ui-elements/offcanvas"
                  ? "Ui-Offcanvas"
                  : "" || location.pathname === "/ui-elements/color"
                  ? "Ui-Color"
                  : "" || location.pathname === "/ui-elements/cards"
                  ? "Ui-Cards"
                  : "" || location.pathname === "/ui-elements/carousel"
                  ? "Ui-Carousel"
                  : "" || location.pathname === "/ui-elements/grid"
                  ? "Ui-Grid"
                  : "" || location.pathname === "/ui-elements/images"
                  ? "Ui-Images"
                  : "" || location.pathname === "/ui-elements/list-groups"
                  ? "Ui-List-groups"
                  : "" || location.pathname === "/ui-elements/modal"
                  ? "Ui-Modal"
                  : "" || location.pathname === "/ui-elements/notifications"
                  ? "Ui-Notifications"
                  : "" || location.pathname === "/ui-elements/pagination"
                  ? "Ui-Pagination"
                  : "" || location.pathname === "/ui-elements/popovers"
                  ? "Ui-Popovers"
                  : "" || location.pathname === "/ui-elements/progressbars"
                  ? "Ui-Progressbars"
                  : "" || location.pathname === "/ui-elements/typography"
                  ? "Ui-Typography"
                  : "" || location.pathname === "/ui-elements/tabs"
                  ? "Ui-Tabs"
                  : "" || location.pathname === "/ui-elements/tooltips"
                  ? "Ui-Tooltips"
                  : "" || location.pathname === "/ui-elements/embed-video"
                  ? "Ui-Embed-video"
                  : "" || location.pathname === "/widget/widgetbasic"
                  ? "Widgetbasic"
                  : "" || location.pathname === "/widget/widgetchart"
                  ? "Widgetchart"
                  : "" || location.pathname === "/widget/widgetcard"
                  ? "Widgetcard"
                  : "" || location.pathname === "/map/google"
                  ? "Google map"
                  : "" || location.pathname === "/form/form-element"
                  ? "Form-elelment"
                  : "" || location.pathname === "/form/form-wizard"
                  ? "Form-wizard"
                  : "" || location.pathname === "/form/form-validation"
                  ? "Form-validation"
                  : "" || location.pathname === "/table/bootstrap-table"
                  ? "Bootstrap Table"
                  : "" || location.pathname === "/table/table-data"
                  ? "Data Table"
                  : "" || location.pathname === "/table/border-table"
                  ? "Border Table"
                  : "" || location.pathname === "/table/fancy-table"
                  ? "Fancy Table"
                  : "" || location.pathname === "/table/fixed-table"
                  ? "Fixed Table"
                  : "" || location.pathname === "/icon/solid"
                  ? "Solid"
                  : "" || location.pathname === "/icon/outline"
                  ? "Outline"
                  : "" || location.pathname === "/icon/dual-tone"
                  ? "Dual-tone"
                  : ""
              }`}
            </small>
          </div>
          <div
            className={`offcanvas offcanvas-end shadow-none iq-product-menu-responsive ${
              show1 === true ? "show" : ""
            } `}
            tabIndex="-1"
            id="offcanvasBottom"
            style={{ visibility: `${show1 === true ? "visible" : "hidden"}` }}
          >
            <div className="offcanvas-body">
              <ul className="iq-nav-menu list-unstyled">
                <Nav.Item as="li" className="active">
                  <Nav.Link
                    className="nav-link menu-arrow justify-content-start active"
                    onClick={() => setOpen(!open)}
                    aria-controls="homeData"
                    aria-expanded={open}
                    role="button"
                  >
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="nav-text ms-2">Home</span>
                  </Nav.Link>
                  <Collapse in={open}>
                    <ul
                      className="iq-header-sub-menu list-unstyled "
                      id="homeData"
                    >
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname === "/" ? "active" : ""
                          } nav-link `}
                          to="/"
                        >
                          {" "}
                          Principal
                        </Link>
                      </Nav.Item>

                      <Nav.Item
                        as="li"
                        bsPrefix={`nav-item ${
                          "active" === "menustyle" ? "active nav-link" : ""
                        } `}
                      >
                        <Link
                          className={`${
                            location.pathname === "/analytics" ? "active" : ""
                          } nav-link `}
                          aria-current="page"
                          to="/analytics"
                        >
                          Salias
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Link
                          className={`${
                            location.pathname === "/crypto" ? "active" : ""
                          } nav-link `}
                          to="/crypto"
                        >
                          Crypto
                        </Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen1(!open1)}
                          aria-expanded={open1}
                          role="button"
                          aria-controls="menuStyles"
                        >
                          Menu Style
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open1}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled "
                            id="menuStyles"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/index-horizontal"
                                    ? "active"
                                    : ""
                                } nav-link `}
                                to="/index-horizontal"
                              >
                                {" "}
                                Horizontal Dashboard{" "}
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/index-dual-compact"
                                    ? "active"
                                    : ""
                                } nav-link `}
                                to="/index-dual-compact"
                              >
                                Dual Compact
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/index-boxed"
                                    ? "active"
                                    : ""
                                } nav-link `}
                                to="/index-boxed"
                              >
                                {" "}
                                Boxed Horizontal{" "}
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                    </ul>
                  </Collapse>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    className="menu-arrow justify-content-start"
                    onClick={() => setOpen2(!open2)}
                    aria-expanded={open2}
                    role="button"
                    aria-controls="allPagesData"
                  >
                    <svg
                      width="20"
                      className="icon-20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="nav-text ms-2">Páginas</span>
                  </Nav.Link>
                  <Collapse in={open2}>
                    <ul
                      className="iq-header-sub-menu list-unstyled "
                      id="allPagesData"
                    >
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow "
                          onClick={() => setOpen3(!open3)}
                          aria-expanded={open3}
                          role="button"
                          aria-controls="specialPages"
                        >
                          Special Pages
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open3}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled "
                            id="specialPages"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/special-pages/billing"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/special-pages/billing"
                              >
                                Billing
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/special-pages/calender"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/special-pages/calender"
                              >
                                Calender
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/special-pages/kanban"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/special-pages/kanban"
                              >
                                Kanban
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/special-pages/pricing"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/special-pages/pricing"
                              >
                                Pricing
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/special-pages/timeline"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/special-pages/timeline"
                              >
                                Timeline
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen4(!open4)}
                          aria-expanded={open4}
                          role="button"
                          aria-controls="authSkins"
                        >
                          Auth skins
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open4}>
                          <Collapse in={open4}>
                            <ul
                              className="iq-header-sub-menu left list-unstyled"
                              id="authSkins"
                            >
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/sign-in"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/sign-in"
                                >
                                  Sign In
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/sign-up"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/sign-up"
                                >
                                  Sign Up
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/confirm-mail"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/confirm-mail"
                                >
                                  Email Verified
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/recoverpw"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/recoverpw"
                                >
                                  Reset Password
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/lock-screen"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/lock-screen"
                                >
                                  Lock Screen
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname === "/auth/two-factor"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/two-factor"
                                >
                                  Two Factor
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  className={`${
                                    location.pathname ===
                                    "/auth/account-deactivate"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                  to="/auth/account-deactivate"
                                >
                                  Account Deactive
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen9(!open9)}
                          aria-expanded={open9}
                          role="button"
                          aria-controls="authSkins"
                        >
                          User
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open9}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled "
                            id="userApps"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/app/user-profile"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/app/user-profile"
                              >
                                User Profile
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/app/user-add"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/app/user-add"
                              >
                                User Add
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/app/user-list"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/app/user-list"
                              >
                                User List
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen10(!open10)}
                          aria-expanded={open10}
                          role="button"
                          aria-controls="utilities"
                        >
                          Utilities
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open10}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled"
                            id="utilities"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/errors/maintenance"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/errors/maintenance"
                              >
                                Maintenance
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/errors/error-404"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/errors/error-404"
                              >
                                404
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/errors/error-500"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/errors/error-500"
                              >
                                505
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen11(!open11)}
                          aria-expanded={open11}
                          role="button"
                          aria-controls="utilities"
                        >
                          Plugins
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open11}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled "
                            id="extraPlugins"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/button-hover"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/button-hover"
                              >
                                Button Hover
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/choise-js"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/choise-js"
                              >
                                Choise JS
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/flatpickr"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/flatpickr"
                              >
                                Flatpickr
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/fslightbox"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/fslightbox"
                              >
                                FSlightbox
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/apexcharts"
                                    ? "active"
                                    : ""
                                }nav-link`}
                                to="/plugins/apexcharts"
                              >
                                Apexcharts
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/gallery-hover"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/gallery-hover"
                              >
                                Gallery Hover
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/image-copper"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/image-copper"
                              >
                                Image Copper
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/loader"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/loader"
                              >
                                Loader
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/select2"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/plugins/select2"
                              >
                                Select2
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/sweet-alert"
                                    ? "active"
                                    : ""
                                }nav-link`}
                                to="/plugins/sweet-alert"
                              >
                                Sweetalert
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/quill-editor"
                                    ? "active"
                                    : ""
                                }nav-link`}
                                to="/plugins/quill-editor"
                              >
                                Quill
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/plugins/uppy"
                                    ? "active"
                                    : ""
                                }nav-link`}
                                to="/plugins/uppy"
                              >
                                Uppy
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                    </ul>
                  </Collapse>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    className="menu-arrow justify-content-start"
                    onClick={() => setOpen12(!open12)}
                    aria-expanded={open12}
                    role="button"
                    aria-controls="elementsData"
                  >
                    <svg
                      className="icon-20"
                      width="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M11.9912 18.6215L5.49945 21.8641C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7088C4 14.4284 4.40573 14.8726 5.47299 15.3701L11.9912 18.6215Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="nav-text ms-2">Elements </span>
                  </Nav.Link>
                  <Collapse in={open12}>
                    <ul
                      className="iq-header-sub-menu list-unstyled "
                      id="elementsData"
                    >
                      <Nav.Item as="li">
                        <Link className="nav-link" to="/">
                          Components
                        </Link>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen13(!open13)}
                          aria-expanded={open13}
                          aria-controls="uiElementsPage"
                        >
                          Ui Elements
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open13}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled"
                            id="uiElementsPage"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/avatars"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/avatars"
                              >
                                Avatars
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/alerts"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/alerts"
                              >
                                Alerts
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/badges"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/badges"
                              >
                                Badges
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/breadcrumb"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/breadcrumb"
                              >
                                Breadcrumb
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/buttons"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/buttons"
                              >
                                Buttons
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/button-group"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/button-group"
                              >
                                Button Groups
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/offcanvas"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/offcanvas"
                              >
                                Offcanvas
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/color"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/color"
                              >
                                Colors
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/cards"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/cards"
                              >
                                Cards
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/carousel"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/carousel"
                              >
                                Carousel
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/grid"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/grid"
                              >
                                Grid
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/images"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/images"
                              >
                                Images
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/list-groups"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/list-groups"
                              >
                                list Group
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/modal"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/modal"
                              >
                                Modal
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/notifications"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/notifications"
                              >
                                Notifications
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/pagination"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/pagination"
                              >
                                Pagination
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/popovers"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/popovers"
                              >
                                Popovers
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/progressbars"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/progressbars"
                              >
                                Progressbars
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/typography"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/typography"
                              >
                                Typography
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/tabs"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/tabs"
                              >
                                Tabs
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/ui-elements/tooltips"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/tooltips"
                              >
                                Tooltips
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname ===
                                  "/ui-elements/embed-video"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/ui-elements/embed-video"
                              >
                                Video
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen13(!open13)}
                          aria-expanded={open13}
                          aria-controls="widgetsPage"
                        >
                          Widgets
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open13}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled"
                            id="widgetsPage"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/widget/widgetbasic"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/widget/widgetbasic"
                              >
                                Widget Basic
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/widget/widgetchart"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/widget/widgetchart"
                              >
                                Widget Chart
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/widget/widgetcard"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/widget/widgetcard"
                              >
                                Widget Card
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen14(!open14)}
                          aria-expanded={open14}
                          aria-controls="mapPages"
                        >
                          Map
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open14}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled"
                            id="mapPages"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/map/google"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/map/google"
                              >
                                Google
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen15(!open15)}
                          aria-expanded={open15}
                          aria-controls="formsPages"
                        >
                          Form
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open15}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled collapse"
                            id="formsPages"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/form/form-element"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/form/form-element"
                              >
                                Element
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/form/form-wizard"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/form/form-wizard"
                              >
                                Wizard
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/form/form-validation"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/form/form-validation"
                              >
                                Validation
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen16(!open16)}
                          aria-expanded={open16}
                          aria-controls="tablesPages"
                        >
                          Table
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open16}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled "
                            id="tablesPages"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/table/bootstrap-table"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/table/bootstrap-table"
                              >
                                Bootstrap Table
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/table/table-data"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/table/table-data"
                              >
                                Data Table
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/table/border-table"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/table/border-table"
                              >
                                Border Table
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/table/fancy-table"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/table/fancy-table"
                              >
                                Fancy Table
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/table/fixed-table"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/table/fixed-table"
                              >
                                Fixed Table
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          className="menu-arrow"
                          onClick={() => setOpen17(!open17)}
                          aria-expanded={open17}
                          aria-controls="iconsPages"
                        >
                          Icons
                          <i className="right-icon">
                            <svg
                              width="20"
                              className="icon-20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </i>
                        </Nav.Link>
                        <Collapse in={open17}>
                          <ul
                            className="iq-header-sub-menu left list-unstyled collapse"
                            id="iconsPages"
                          >
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/icon/solid"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/icon/solid"
                              >
                                Solid
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/icon/outline"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/icon/outline"
                              >
                                Outlined
                              </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                              <Link
                                className={`${
                                  location.pathname === "/icon/dual-tone"
                                    ? "active"
                                    : ""
                                } nav-link`}
                                to="/icon/dual-tone"
                              >
                                Salias
                              </Link>
                            </Nav.Item>
                          </ul>
                        </Collapse>
                      </Nav.Item>
                    </ul>
                  </Collapse>
                </Nav.Item>
              </ul>
            </div>
          </div>
          <div
            className={`offcanvas-backdrop fade  ${
              show1 === true ? "show d-block" : "d-none"
            }`}
            onClick={() => setShow1(false)}
          ></div>
        </div>
        <SubNav />
      </Container>
    </Navbar>
  );
});

Header.displayName = "Header";
export default Header;

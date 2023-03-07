import { memo, lazy, Suspense } from "react";
// import { Tooltip } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

//TransitionGroup
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// Dashboard
const Index = lazy(() => import("../views/dashboard/index"));

// User
const UserProfile = lazy(() => import("../views/dashboard/app/user-profile"));
const UserAdd = lazy(() => import("../views/dashboard/app/user-add"));
const UserList = lazy(() => import("../views/dashboard/app/user-list"));
// const userProfileEdit = lazy(() => import('../views/dashboard/app/user-privacy-setting'))

// widget
const Widgetbasic = lazy(() => import("../views/dashboard/widget/widgetbasic"));
const Widgetcard = lazy(() => import("../views/dashboard/widget/widgetcard"));
const Widgetchart = lazy(() => import("../views/dashboard/widget/widgetchart"));

// icon
const Solid = lazy(() => import("../views/dashboard/icons/solid"));
const Outline = lazy(() => import("../views/dashboard/icons/outline"));
const DualTone = lazy(() => import("../views/dashboard/icons/dual-tone"));

// Form
const FormElement = lazy(() => import("../views/dashboard/from/form-element"));
const FormValidation = lazy(() =>
  import("../views/dashboard/from/form-validation")
);
const FormWizard = lazy(() => import("../views/dashboard/from/form-wizard"));

// table
const BootstrapTable = lazy(() =>
  import("../views/dashboard/table/bootstrap-table")
);
const TableData = lazy(() => import("../views/dashboard/table/table-data"));
const Borderedtable = lazy(() =>
  import("../views/dashboard/table/border-table")
);
const Fancytable = lazy(() => import("../views/dashboard/table/fancy-table"));
const FixedTable = lazy(() => import("../views/dashboard/table/fixed-table"));

// map
const Google = lazy(() => import("../views/dashboard/maps/google"));

//extra
const PrivacyPolicy = lazy(() =>
  import("../views/dashboard/extra/privacy-policy")
);
const TermsofService = lazy(() =>
  import("../views/dashboard/extra/terms-of-service")
);
const BlankPages = lazy(() => import("../views/dashboard/extra/blankpages"));

//Special Pages
const Billing = lazy(() => import("../views/dashboard/special-pages/billing"));
const Billing1 = lazy(() =>
  import("../views/dashboard/special-pages/billing-1")
);
const Billing2 = lazy(() =>
  import("../views/dashboard/special-pages/billing-2")
);
const Kanban = lazy(() => import("../views/dashboard/special-pages/kanban"));
const Pricing = lazy(() => import("../views/dashboard/special-pages/pricing"));
const Timeline = lazy(() =>
  import("../views/dashboard/special-pages/timeline")
);
const Calender = lazy(() =>
  import("../views/dashboard/special-pages/calender")
);

// ui-kit
const Avatars = lazy(() => import("../views/uikit/avatars"));
const Color = lazy(() => import("../views/uikit/colors"));
const Accordian = lazy(() => import("../views/uikit/accordion"));
const AlternateFloatingTable = lazy(() =>
  import("../views/uikit/alternate-floating-lable")
);
const AlternateFormControl = lazy(() =>
  import("../views/uikit/alternate-form-control")
);
const Badge = lazy(() => import("../views/uikit/badge"));
const Breadcrumb = lazy(() => import("../views/uikit/breadcrumb"));
const Button = lazy(() => import("../views/uikit/button"));
const ButtonGroup = lazy(() => import("../views/uikit/buttons-group"));
const Calendar = lazy(() => import("../views/uikit/calender"));
const Carousel = lazy(() => import("../views/uikit/carousel"));
const Grid = lazy(() => import("../views/uikit/grid"));
const Card = lazy(() => import("../views/uikit/card"));
const DisableForm = lazy(() => import("../views/uikit/disabled-form"));
const Dropdown = lazy(() => import("../views/uikit/dropdowns"));
const Figure = lazy(() => import("../views/uikit/figure"));
const FloatingLable = lazy(() => import("../views/uikit/floating-lable"));
const FormOverview = lazy(() => import("../views/uikit/form-overview"));
const Image = lazy(() => import("../views/uikit/image"));
const InputGroup = lazy(() => import("../views/uikit/input-group"));
const ListGroup = lazy(() => import("../views/uikit/list-group"));
const Modal = lazy(() => import("../views/uikit/modal"));
const Notification = lazy(() => import("../views/uikit/notification"));
const Nav = lazy(() => import("../views/uikit/nav"));
const Navbar = lazy(() => import("../views/uikit/navbar"));
const OffCanvas = lazy(() => import("../views/uikit/off-canvas"));
const Pagination = lazy(() => import("../views/uikit/pagination"));
const Popovers = lazy(() => import("../views/uikit/popovers"));
const Progress = lazy(() => import("../views/uikit/progress"));
const Ribborn = lazy(() => import("../views/uikit/ribbon"));
const Scrollspy = lazy(() => import("../views/uikit/scrollspy"));
const SidebarOffcanvas = lazy(() => import("../views/uikit/sidebar-offcanvas"));
const Sizing = lazy(() => import("../views/uikit/sizing"));
const Spinners = lazy(() => import("../views/uikit/spinner"));
const Table = lazy(() => import("../views/uikit/table"));
const Toast = lazy(() => import("../views/uikit/toast"));
const ToggleBtn = lazy(() => import("../views/uikit/toggle-btn"));
const UiTooltip = lazy(() => import("../views/uikit/tooltip"));
const Typography = lazy(() => import("../views/uikit/typography"));
const Validation = lazy(() => import("../views/uikit/validation"));
const EmbedVideo = lazy(() => import("../views/uikit/embed-video"));
const Alerts = lazy(() => import("../views/uikit/alert"));
const Tabs = lazy(() => import("../views/uikit/tabs"));

// plugins
const Apexcharts = lazy(() => import("../views/dashboard/plugins/apexcharts"));
const Buttonhover = lazy(() =>
  import("../views/dashboard/plugins/button-hover")
);
const Choisejs = lazy(() => import("../views/dashboard/plugins/choise-js"));
const Flatpickerr = lazy(() => import("../views/dashboard/plugins/flatpickr"));
const Fslightbox = lazy(() => import("../views/dashboard/plugins/fslightbox"));
const Select2 = lazy(() => import("../views/dashboard/plugins/select2"));
const Sweetalert = lazy(() => import("../views/dashboard/plugins/sweet-alert"));
const Rating = lazy(() => import("../views/dashboard/plugins/rating"));
const Tour = lazy(() => import("../views/dashboard/plugins/tour"));
const Uppyplugin = lazy(() => import("../views/dashboard/plugins/uppy"));
const Uicolor = lazy(() => import("../views/dashboard/plugins/ui-color"));
const Galleryhover = lazy(() =>
  import("../views/dashboard/plugins/gallery-hover")
);
const Loader = lazy(() => import("../views/dashboard/plugins/loader"));
const Todo = lazy(() => import("../views/dashboard/plugins/todo"));
const Imagecopper = lazy(() =>
  import("../views/dashboard/plugins/image-copper")
);
const Quilleditor = lazy(() =>
  import("../views/dashboard/plugins/quill-editor")
);

//admin
const Admin = lazy(() => import("../views/dashboard/admin/admin"));
const Analytics = lazy(() => import("../views/dashboard/analytics"));
const Crypto = lazy(() => import("../views/dashboard/crypto"));
const Ecommerce = lazy(() => import("../views/dashboard/ecommerce"));
const DefaultRouter = memo(() => {
  return (
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/analytics" exact element={<Analytics />} />
      <Route path="/crypto" exact element={<Crypto />} />
      <Route path="/ecommerce" exact element={<Ecommerce />} />

      {/* user */}
      <Route path="/app/user-profile" exact element={<UserProfile />} />
      <Route path="/app/user-add" exact element={<UserAdd />} />
      <Route path="/app/user-list" exact element={<UserList />} />
      <Route
        path="/app/user-privacy-setting"
        exact
        element={<userProfileEdit />}
      />

      {/* widget */}
      <Route path="/widget/widgetbasic" exact element={<Widgetbasic />} />
      <Route path="/widget/widgetcard" exact element={<Widgetcard />} />
      <Route path="/widget/widgetchart" exact element={<Widgetchart />} />

      {/* icon */}
      <Route path="/icon/solid" exact element={<Solid />} />
      <Route path="/icon/outline" exact element={<Outline />} />
      <Route path="/icon/dual-tone" exact element={<DualTone />} />

      {/* From */}
      <Route path="/form/form-element" exact element={<FormElement />} />
      <Route path="/form/form-validation" exact element={<FormValidation />} />
      <Route path="/form/form-wizard" exact element={<FormWizard />} />

      {/* table */}
      <Route path="/table/bootstrap-table" exact element={<BootstrapTable />} />
      <Route path="/table/table-data" exact element={<TableData />} />
      <Route path="/table/border-table" exact element={<Borderedtable />} />
      <Route path="/table/fancy-table" exact element={<Fancytable />} />
      <Route path="/table/fixed-table" exact element={<FixedTable />} />

      {/*special pages */}
      <Route path="/special-pages/billing" exact element={<Billing />} />
      <Route path="/special-pages/billing-1" exact element={<Billing1 />} />
      <Route path="/special-pages/billing-2" exact element={<Billing2 />} />
      <Route path="/special-pages/kanban" exact element={<Kanban />} />
      <Route path="/special-pages/pricing" exact element={<Pricing />} />
      <Route path="/special-pages/timeline" exact element={<Timeline />} />
      <Route path="/special-pages/calender" exact element={<Calender />} />

      {/* map */}
      <Route path="/map/google" exact element={<Google />} />

      {/* extra */}
      <Route path="/extra/privacy-policy" exact element={<PrivacyPolicy />} />
      <Route
        path="/extra/terms-of-service"
        exact
        element={<TermsofService />}
      />
      <Route path="/extra/blank-page" exact element={<BlankPages />} />

      {/* Curso */}
      <Route path="/curso/curso-add" element={<CursoAdd />} />

      {/*ui-kit  */}
      <Route path="/uikit/avatars" exact element={<Avatars />} />
      <Route path="/uikit/alerts" exact element={<Alerts />} />
      <Route path="/uikit/color" exact element={<Color />} />
      <Route path="/uikit/accordion" exact element={<Accordian />} />
      <Route
        path="/uikit/alternate-floating-table"
        exact
        element={<AlternateFloatingTable />}
      />
      <Route
        path="/uikit/alternate-fotm-control"
        exact
        element={<AlternateFormControl />}
      />
      <Route path="/uikit/badges" exact element={<Badge />} />
      <Route path="/uikit/breadcrumb" exact element={<Breadcrumb />} />
      <Route path="/uikit/buttons" exact element={<Button />} />
      <Route path="/uikit/button-group" exact element={<ButtonGroup />} />
      <Route path="/uikit/calendar" exact element={<Calendar />} />
      <Route path="/uikit/carousel" exact element={<Carousel />} />
      <Route path="/uikit/grid" exact element={<Grid />} />
      <Route path="/uikit/cards" exact element={<Card />} />
      <Route path="/uikit/disable-form" exact element={<DisableForm />} />
      <Route path="/uikit/dropdown" exact element={<Dropdown />} />
      <Route path="/uikit/figure" exact element={<Figure />} />
      <Route path="/uikit/floating-lable" exact element={<FloatingLable />} />
      <Route path="/uikit/form-overview" exact element={<FormOverview />} />
      <Route path="/uikit/images" exact element={<Image />} />
      <Route path="/uikit/input-groups" exact element={<InputGroup />} />
      <Route path="/uikit/list-groups" exact element={<ListGroup />} />
      <Route path="/uikit/modal" exact element={<Modal />} />
      <Route path="/uikit/notifications" exact element={<Notification />} />
      <Route path="/uikit/nav" exact element={<Nav />} />
      <Route path="/uikit/navbar" exact element={<Navbar />} />
      <Route path="/uikit/offcanvas" exact element={<OffCanvas />} />
      <Route path="/uikit/pagination" exact element={<Pagination />} />
      <Route path="/uikit/popovers" exact element={<Popovers />} />
      <Route path="/uikit/progressbars" exact element={<Progress />} />
      <Route path="/uikit/ribborn" exact element={<Ribborn />} />
      <Route path="/uikit/scrollspy" exact element={<Scrollspy />} />
      <Route
        path="/uikit/sidebar-offcanvas"
        exact
        element={<SidebarOffcanvas />}
      />
      <Route path="/uikit/sizing" exact element={<Sizing />} />
      <Route path="/uikit/spinners" exact element={<Spinners />} />
      <Route path="/uikit/table" exact element={<Table />} />
      <Route path="/uikit/tabs" exact element={<Tabs />} />
      <Route path="/uikit/toast" exact element={Toast} />
      <Route path="/uikit/typography" exact element={<Typography />} />
      <Route path="/uikit/toggle-btn" exact element={<ToggleBtn />} />
      <Route path="/uikit/tooltips" exact element={<UiTooltip />} />
      <Route path="/uikit/embed-video" exact element={<EmbedVideo />} />
      <Route path="/uikit/validation" exact element={<Validation />} />
      {/*  pulgin pro */}
      <Route path="/plugins/apexcharts" element={<Apexcharts />}></Route>
      <Route path="/plugins/button-hover" element={<Buttonhover />}></Route>
      <Route path="/plugins/choise-js" element={<Choisejs />}></Route>
      <Route path="/plugins/flatpickr" element={<Flatpickerr />}></Route>
      <Route path="/plugins/fslightbox" element={<Fslightbox />}></Route>
      <Route path="/plugins/select2" element={<Select2 />}></Route>
      <Route path="/plugins/rating" element={<Rating />}></Route>
      <Route path="/plugins/sweet-alert" element={<Sweetalert />}></Route>
      <Route path="/plugins/tour" element={<Tour />}></Route>
      <Route path="/plugins/uppy" element={<Uppyplugin />}></Route>
      <Route path="/plugins/ui-color" element={<Uicolor />}></Route>
      <Route path="/plugins/gallery-hover" element={<Galleryhover />}></Route>
      <Route path="/plugins/loader" element={<Loader />}></Route>
      <Route path="/plugins/todo" element={<Todo />}></Route>
      <Route path="/plugins/image-copper" element={<Imagecopper />}></Route>
      <Route path="/plugins/quill-editor" element={<Quilleditor />}></Route>

      {/*admin*/}
      <Route path="/admin/admin" exact element={<Admin />} />
    </Routes>
  );
});

DefaultRouter.displayName = "DefaultRouter";
export default DefaultRouter;

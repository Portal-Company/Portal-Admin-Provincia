import { memo, lazy } from "react";

//router
import { Routes, Route } from "react-router-dom";

const CursoAdd = lazy(() => import("../views/dashboard/curso/curso-add"));
const CursoList = lazy(() => import("../views/dashboard/curso/curso-list"));

const ConfPerfil = lazy(() =>
  import("../views/dashboard/perfil-saida/perfil-conf")
);
const VerPerfil = lazy(() =>
  import("../views/dashboard/perfil-saida/perfil-ver")
);

///Formação
const FormacaoAdd = lazy(() =>
  import("../views/dashboard/formacao/formacao-add")
);
const FormacaoList = lazy(() =>
  import("../views/dashboard/formacao/formacao-list")
);

///Formação
const InscritosList = lazy(() =>
  import("../views/dashboard/inscritos/inscritos-list")
);
const InscritosAceitesList = lazy(() =>
  import("../views/dashboard/inscritos/aceites-list")
);
const InscritosRejeitoList = lazy(() =>
  import("../views/dashboard/inscritos/rejeitado-list")
);

///Formação
const FuncionarioAdd = lazy(() =>
  import("../views/dashboard/funcionarios/funcionario-add")
);
const FuncionarioList = lazy(() =>
  import("../views/dashboard/funcionarios/funcionario-list")
);

//layoutpages
import Default from "../layouts/dashboard/default";
import Horizontal from "../layouts/dashboard/horizontal";
import Boxed from "../layouts/dashboard/boxed";
import DualCompact from "../layouts/dashboard/dual-compact";
import Simple from "../layouts/dashboard/simple";

import AccountDeactive from "../views/dashboard/auth/account-deactivate";
import TwoFactor from "../views/dashboard/auth/two-factor";

// auth
const ConfirmMail = lazy(() => import("../views/dashboard/auth/confirm-mail"));
const LockScreen = lazy(() => import("../views/dashboard/auth/lock-screen"));
const Recoverpw = lazy(() => import("../views/dashboard/auth/recoverpw"));
const SignIn = lazy(() => import("../views/dashboard/auth/sign-in"));
const SignUp = lazy(() => import("../views/dashboard/auth/sign-up"));
// errors
const Error404 = lazy(() => import("../views/dashboard/errors/error404"));
const Error500 = lazy(() => import("../views/dashboard/errors/error500"));
const Maintenance = lazy(() => import("../views/dashboard/errors/maintenance"));

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
const Borderedtable = lazy(() =>
  import("../views/dashboard/table/border-table")
);
const Fancytable = lazy(() => import("../views/dashboard/table/fancy-table"));

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

const IndexRouters = memo(() => {
  return (
    <Routes>
      <Route path="/errors" element={<Simple />}>
        {/* error */}
        <Route path="error-404" element={<Error404 />} />
        <Route path="error-500" element={<Error500 />} />
        <Route path="maintenance" element={<Maintenance />} />
      </Route>
      {/* auth */}
      <Route path="/auth" element={<Simple />}>
        <Route path="confirm-mail" element={<ConfirmMail />} />
        <Route path="lock-screen" element={<LockScreen />} />
        <Route path="recoverpw" element={<Recoverpw />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="account-deactivate" element={<AccountDeactive />} />
        <Route path="two-factor" element={<TwoFactor />} />
      </Route>
      <Route path="/index-dual-compact" element={<DualCompact />}></Route>
      <Route path="/index-horizontal" element={<Horizontal />}></Route>
      <Route path="/index-boxed" element={<Boxed />}></Route>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Crypto />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/crypto" element={<Crypto />} />

        {/* Curso */}
        <Route path="/curso/curso-add" element={<CursoAdd />} />
        <Route path="/curso/curso-list" element={<CursoList />} />

        {/* Perfil Saída */}
        <Route path="/perfil-saida/perfil-conf" element={<ConfPerfil />} />
        <Route path="/perfil-saida/perfil-ver" element={<VerPerfil />} />

        {/* Formação */}
        <Route path="/formacao/formacao-add" element={<FormacaoAdd />} />
        <Route path="/formacao/formacao-list" element={<FormacaoList />} />

        {/* Inscritos */}
        <Route path="/inscritos/inscritos-list" element={<InscritosList />} />
        <Route
          path="/inscritos/aceites-list"
          element={<InscritosAceitesList />}
        />
        <Route
          path="/inscritos/rejeitados-list"
          element={<InscritosRejeitoList />}
        />

        {/* Formação */}
        <Route
          path="/funcionario/funcionario-add"
          element={<FuncionarioAdd />}
        />
        <Route
          path="/funcionario/funcionario-list"
          element={<FuncionarioList />}
        />

        {/* user */}
        <Route path="/app/user-profile" element={<UserProfile />} />

        <Route path="/app/user-add" element={<UserAdd />} />
        <Route path="/app/user-list" element={<UserList />} />
        <Route path="/app/user-privacy-setting" element={<userProfileEdit />} />

        {/* widget */}
        <Route path="/widget/widgetbasic" element={<Widgetbasic />} />
        <Route path="/widget/widgetcard" element={<Widgetcard />} />
        <Route path="/widget/widgetchart" element={<Widgetchart />} />

        {/* icon */}
        <Route path="/icon/solid" element={<Solid />} />
        <Route path="/icon/outline" element={<Outline />} />
        <Route path="/icon/dual-tone" element={<DualTone />} />

        {/* From */}
        <Route path="/form/form-element" element={<FormElement />} />
        <Route path="/form/form-validation" element={<FormValidation />} />
        <Route path="/form/form-wizard" element={<FormWizard />} />

        {/* table */}
        <Route path="/table/bootstrap-table" element={<BootstrapTable />} />
        <Route path="/table/border-table" element={<Borderedtable />} />
        <Route path="/table/fancy-table" element={<Fancytable />} />

        {/*special pages */}
        <Route path="/special-pages/billing" element={<Billing />} />
        <Route path="/special-pages/kanban" element={<Kanban />} />
        <Route path="/special-pages/pricing" element={<Pricing />} />
        <Route path="/special-pages/timeline" element={<Timeline />} />
        <Route path="/special-pages/calender" element={<Calender />} />

        {/* map */}
        <Route path="/map/google" element={<Google />} />

        {/* extra */}
        <Route path="/extra/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/extra/terms-of-service" element={<TermsofService />} />
        <Route path="/extra/blank-page" element={<BlankPages />} />

        {/*ui-kit  */}
        <Route path="/ui-elements/avatars" element={<Avatars />} />
        <Route path="/ui-elements/alerts" element={<Alerts />} />
        <Route path="/ui-elements/color" element={<Color />} />
        <Route path="/ui-elements/accordion" element={<Accordian />} />
        <Route
          path="/ui-elements/alternate-floating-table"
          element={<AlternateFloatingTable />}
        />
        <Route
          path="/ui-elements/alternate-fotm-control"
          element={<AlternateFormControl />}
        />
        <Route path="/ui-elements/badges" element={<Badge />} />
        <Route path="/ui-elements/breadcrumb" element={<Breadcrumb />} />
        <Route path="/ui-elements/buttons" element={<Button />} />
        <Route path="/ui-elements/button-group" element={<ButtonGroup />} />
        <Route path="/ui-elements/calendar" element={<Calendar />} />
        <Route path="/ui-elements/carousel" element={<Carousel />} />
        <Route path="/ui-elements/grid" element={<Grid />} />
        <Route path="/ui-elements/cards" element={<Card />} />
        <Route path="/ui-elements/disable-form" element={<DisableForm />} />
        <Route path="/ui-elements/dropdown" element={<Dropdown />} />
        <Route path="/ui-elements/figure" element={<Figure />} />
        <Route path="/ui-elements/floating-lable" element={<FloatingLable />} />
        <Route path="/ui-elements/form-overview" element={<FormOverview />} />
        <Route path="/ui-elements/images" element={<Image />} />
        <Route path="/ui-elements/input-groups" element={<InputGroup />} />
        <Route path="/ui-elements/list-groups" element={<ListGroup />} />
        <Route path="/ui-elements/modal" element={<Modal />} />
        <Route path="/ui-elements/notifications" element={<Notification />} />
        <Route path="/ui-elements/nav" element={<Nav />} />
        <Route path="/ui-elements/navbar" element={<Navbar />} />
        <Route path="/ui-elements/offcanvas" element={<OffCanvas />} />
        <Route path="/ui-elements/pagination" element={<Pagination />} />
        <Route path="/ui-elements/popovers" element={<Popovers />} />
        <Route path="/ui-elements/progressbars" element={<Progress />} />
        <Route path="/ui-elements/ribborn" element={<Ribborn />} />
        <Route path="/ui-elements/scrollspy" element={<Scrollspy />} />
        <Route
          path="/ui-elements/sidebar-offcanvas"
          element={<SidebarOffcanvas />}
        />
        <Route path="/ui-elements/sizing" element={<Sizing />} />
        <Route path="/ui-elements/spinners" element={<Spinners />} />
        <Route path="/ui-elements/table" element={<Table />} />
        <Route path="/ui-elements/tabs" element={<Tabs />} />
        <Route path="/ui-elements/toast" element={Toast} />
        <Route path="/ui-elements/typography" element={<Typography />} />
        <Route path="/ui-elements/toggle-btn" element={<ToggleBtn />} />
        <Route path="/ui-elements/tooltips" element={<UiTooltip />} />
        <Route path="/ui-elements/embed-video" element={<EmbedVideo />} />
        <Route path="/ui-elements/validation" element={<Validation />} />
        {/*  pulgin pro */}
        <Route path="/plugins/apexcharts" element={<Apexcharts />}></Route>
        <Route path="/plugins/button-hover" element={<Buttonhover />}></Route>
        <Route path="/plugins/choise-js" element={<Choisejs />}></Route>
        <Route path="/plugins/flatpickr" element={<Flatpickerr />}></Route>
        <Route path="/plugins/fslightbox" element={<Fslightbox />}></Route>
        <Route path="/plugins/select2" element={<Select2 />}></Route>
        <Route path="/plugins/rating" element={<Rating />}></Route>
        <Route path="/plugins/sweet-alert" element={<Sweetalert />}></Route>
        <Route path="/plugins/uppy" element={<Uppyplugin />}></Route>
        <Route path="/plugins/ui-color" element={<Uicolor />}></Route>
        <Route path="/plugins/gallery-hover" element={<Galleryhover />}></Route>
        <Route path="/plugins/loader" element={<Loader />}></Route>
        <Route path="/plugins/todo" element={<Todo />}></Route>
        <Route path="/plugins/image-copper" element={<Imagecopper />}></Route>
        <Route path="/plugins/quill-editor" element={<Quilleditor />}></Route>

        {/*admin*/}
        <Route path="/admin/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
});

IndexRouters.displayName = "IndexRouters";
export default IndexRouters;

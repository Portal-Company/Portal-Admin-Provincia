import { useEffect, memo, Fragment, useContext, Suspense } from 'react'
import { useLocation, Outlet } from 'react-router-dom'

//react-shepherd
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'

// header
import Header from '../../components/partials/headerstyle/header'

//subheader
import SubHeader from '../../components/partials/dashboard/headerstyle/sub-header'

//sidebar
import Sidebar from '../../components/partials/dashboard/sidebarstyle/sidebar'

//footer
import Footer from '../../components/partials/dashboard/footerstyle/footer'

//seetingoffCanvas
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'

import Loader from '../../components/Loader'

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors'


// Redux Selector / Action
import { useSelector } from 'react-redux';

const Tour = () => {
  const tour = useContext(ShepherdTourContext);
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/' && sessionStorage.getItem('tour') !== 'true') {
      tour?.start();
    }
  });
  return (
    <Fragment>
    </Fragment>
  );
};

const Default = memo((props) => {
  let location = useLocation();
  const pageLayout = useSelector(SettingSelector.page_layout)
  const appName = useSelector(SettingSelector.app_name)
  useEffect(() => {
  })

  const closeTour = () => {
    sessionStorage.setItem('tour', 'true')
  }

  // shepherd
  const newSteps = [
    {
      title: "<h4>Menu</h4>",
      text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
      attachTo: { element: ".sidebar ", on: "right" },
      buttons: [
        {
          type: "next",
          text: "Next"
        }
      ],
      when: {
        show: () => {
          document.querySelector('.shepherd-modal-overlay-container').classList.add('shepherd-modal-is-visible')
        },
        cancel: () => closeTour()
      }
    },
    {
      title: "<h4>Profile Setting</h4>",
      text: '<p className="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>',
      attachTo: { element: ".iq-tour ", on: "bottom" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back"
        },
        {
          type: "next",
          text: "Next"
        }
      ],
      when: {
        cancel: () => closeTour()
      }
    },
    {
      title: "<h4>Live Customizer</h4>",
      text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
      attachTo: { element: ".btn-setting", on: "left" },
      buttons: [
        {
          type: "back",
          classes: "shepherd-button-secondary",
          text: "Back"
        },
        {
          action() {
            sessionStorage.setItem('tour', 'true')
            return this.next();
          },
          text: "Done"
        }
      ],
      when: {
        cancel: () => closeTour()
      }
    },
  ];
  const tourOptions = {
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      }
    },
    when: {
      cancel: function () {
      }
    }
  };
  var subHeader = '';
  var commanclass = '';
  switch (location.pathname) {
    case '/special-pages/calender':
    case '/special-pages/billing':
    case '/special-pages/billing-1':
    case '/special-pages/billing-2':
    case '/special-pages/kanban':
    case '/special-pages/pricing':
    case '/special-pages/timeline':
    case '/app/user-profile':
    case '/app/user-add':
    case '/app/user-list':
    case '/table/table-data':
    case '/table/bootstrap-table':
    case '/table/border-table':
    case '/table/fancy-table':
    case '/table/fixed-table':
    case '/ui-elements/avatars':
    case '/ui-elements/alerts':
    case '/ui-elements/badges':
    case '/ui-elements/breadcrumb':
    case '/ui-elements/buttons':
    case '/ui-elements/button-group':
    case '/ui-elements/offcanvas':
    case '/ui-elements/color':
    case '/ui-elements/cards':
    case '/ui-elements/carousel':
    case '/ui-elements/grid':
    case '/ui-elements/images':
    case '/ui-elements/list-groups':
    case '/ui-elements/modal':
    case '/ui-elements/notifications':
    case '/ui-elements/pagination':
    case '/ui-elements/popovers':
    case '/ui-elements/progressbars':
    case '/ui-elements/typography':
    case '/ui-elements/tabs':
    case '/ui-elements/tooltips':
    case '/ui-elements/embed-video':
    case '/widget/widgetbasic':
    case '/widget/widgetchart':
    case '/widget/widgetcard':
    case '/map/google':
    case '/form/form-element':
    case '/form/form-wizard':
    case '/form/form-validation':
    case '/icon/solid':
    case '/icon/outline':
    case '/icon/dual-tone':
    case '/plugins/apexcharts':
    case '/plugins/button-hover':
    case '/plugins/choise-js':
    case '/plugins/flatpickr':
    case '/plugins/fslightbox':
    case '/plugins/gallery-hover':
    case '/plugins/image-copper':
    case '/plugins/loader':
    case '/plugins/rating':
    case '/plugins/select2':
    case '/plugins/sweet-alert':
    case '/plugins/quill-editor':
    case '/plugins/uppy':
    case '/extra/blank-page':
      subHeader = <SubHeader />
      commanclass = 'iq-banner default'
      break;
    default:
      break
  }

  return (
    <Fragment>
      <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
        <Loader />
        <Sidebar app_name={appName} />
        <Tour />
        <main className="main-content">
          <div className={`${commanclass} position-relative `}>
            <Header />
            {subHeader}
          </div>
          <div className={` ${pageLayout} content-inner pb-0`}>
            <Suspense>
              <Outlet></Outlet>
            </Suspense>
          </div>
          <Footer />
        </main>
        <SettingOffCanvas />
      </ShepherdTour>
    </Fragment>
  )
}
)

Default.displayName = "Default"
export default Default

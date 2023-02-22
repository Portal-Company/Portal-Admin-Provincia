import { useEffect } from 'react'
//router
import { useSearchParams } from 'react-router-dom'
import IndexRouters from "./router/index"
//scss
import "shepherd.js/dist/css/shepherd.css";
import "flatpickr/dist/flatpickr.css";
import 'choices.js/public/assets/styles/choices.min.css'
import "./assets/scss/qompac-ui.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/custom.scss"
import "./assets/custom/scss/custom.scss"
import 'swiper/css';
import 'swiper/css/navigation';

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { setSetting, theme_scheme, sidebar_color, page_layout, sidebar_type, sidebar_menu_style, theme_color, theme_scheme_direction } from './store/setting/actions'

function App() {

  const dispatch = useDispatch()
  dispatch(setSetting())
  const [searchParams] = useSearchParams();
  const layout = searchParams.get('layout')
  switch (layout) {
    case 'dark': dispatch(theme_scheme('dark'))
      break
    case 'semi-dark':
      dispatch((theme_scheme('light')))
      dispatch((sidebar_color('sidebar-dark')))
      break
    case 'full-width':
      dispatch((page_layout('container-fluid')))
      break
    case 'mini':
      dispatch((sidebar_type(['sidebar-mini'])))
      dispatch((sidebar_menu_style('sidebar-default navs-rounded-all')))
      dispatch((page_layout('container-fluid')))
      break
    case 'sidebar-pill-one':
      dispatch((sidebar_menu_style('sidebar-default navs-pill')))
      dispatch((page_layout('container-fluid')))
      dispatch((theme_color({ value: 'theme-color-default', colors: { "--{{prefix}}primary": '#50b5ff', "--{{prefix}}info": '#4bc7d2' } })))
      break
    case 'sidebar-pill-all':
      dispatch((sidebar_menu_style('sidebar-default navs-pill-all')))
      dispatch((sidebar_menu_style('container-fluid')))
      dispatch((theme_color({ value: 'theme-color-blue', colors: { "--{{prefix}}primary": '#2185F4', "--{{prefix}}secondary": '#B1BBC6' } })))
      break
    case 'sidebar-rounded-one':
      dispatch((sidebar_type([])))
      dispatch((sidebar_menu_style('sidebar-default navs-rounded')))
      dispatch((page_layout('container-fluid')))
      dispatch((theme_color({ value: 'theme-color-green', colors: { "--{{prefix}}primary": '#34A853', "--{{prefix}}secondary": '#B1C6B7' } })))
      break
    case 'sidebar-rounded-all':
      dispatch((sidebar_type([])))
      dispatch((sidebar_menu_style('sidebar-default navs-rounded-all')))
      dispatch((page_layout('container-fluid')))
      dispatch(theme_color({ value: 'theme-color-royal-blue', colors: { "--{{prefix}}primary": '#553AF9', "--{{prefix}}secondary": '#B4B1C6' } }))
      break
    case 'rtl':
      dispatch((theme_scheme_direction('rtl')))
      break
    case 'dark-rtl':
      dispatch((theme_scheme('dark')))
      dispatch((theme_scheme_direction('rtl')))
      break

    default:
      break

  }
  return (
    <div className="App">
      <IndexRouters />
    </div>
  );
}

export default App;

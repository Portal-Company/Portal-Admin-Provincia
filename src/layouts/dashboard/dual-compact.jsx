import { useEffect, memo, Fragment } from "react";

//HorizontalMulti2Router
import HorizontalMultiRouter from '../../router/horizontal-multi-router'

//herder
import HeaderStyle4 from "../../components/partials/dashboard/headerstyle/header-style-4";

//footer
import Footer from "../../components/partials/dashboard/footerstyle/footer";

//seetingoffCanvas
import SettingOffCanvas from "../../components/setting/SettingOffCanvas";
import { Container } from "react-bootstrap";

const DualCompact = memo((props) => {
  useEffect(() => {
    document.body.classList.add("dual-compact");
    return () => {
      document.body.classList.remove("dual-compact");
    };
  });

  return (
    <Fragment>
      <span className="screen-darken"></span>
      <main className="main-content">
        <HeaderStyle4 />
        <Container>
          <div className="conatiner-fluid content-inner">
            <HorizontalMultiRouter />
          </div>
        </Container>
        <Footer />
      </main>
      <SettingOffCanvas />
    </Fragment>
  );
});

DualCompact.displayName = "DualCompact";
export default DualCompact;

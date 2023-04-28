import { memo, Fragment, Suspense } from "react";

//seetingoffCanvas
import { Outlet } from "react-router-dom";

const Simple = memo((props) => {
  return (
    <Fragment>
      <div className="wrapper">
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </Fragment>
  );
});

Simple.displayName = "Simple";
export default Simple;

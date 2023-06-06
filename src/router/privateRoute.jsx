import { Navigate } from "react-router-dom";
import { getUserInfo } from "../views/dashboard/auth/services";

export function PrivateRoute({ children }) {
  const user = getUserInfo();

  if (!user) {
    return <Navigate to={"/auth/sign-in"} replace />;
  }

  return children;
}

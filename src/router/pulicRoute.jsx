import { Navigate } from "react-router-dom";
import { getUserInfo } from "../views/dashboard/auth/services";

export function PublicRoute({ children }) {
  const user = getUserInfo();

  if (user?.sub) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}

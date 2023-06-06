import { Navigate } from "react-router-dom";
import { getUserInfo } from "../views/dashboard/auth/services";

export function PublicRoute({ children }) {
  const user = getUserInfo();

  if (user) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}

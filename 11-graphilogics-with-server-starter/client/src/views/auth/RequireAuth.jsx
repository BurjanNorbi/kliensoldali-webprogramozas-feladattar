import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {
  let user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

import AuthStatus from "../auth/AuthStatus";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <h1 className="m-4">GraphiLogics</h1>
      <AuthStatus />
      <Outlet />
    </>
  );
};

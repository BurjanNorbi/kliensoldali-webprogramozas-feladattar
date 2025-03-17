import { Menu } from "../menu/Menu";

/* eslint-disable react/prop-types */
export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <div className="conatiner">{children}</div>
    </>
  );
};

// export default Layout;

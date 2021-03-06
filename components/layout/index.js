import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import NavbarMobile from "./navbarMobile";

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title>Julio Caesar</title>
      </Head>
      <Navbar menu={menu} />
      <NavbarMobile menu={menu} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

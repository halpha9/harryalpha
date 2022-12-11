import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import Meta from "./meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

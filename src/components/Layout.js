"use client";
import { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  if (false) {
    return <div>qwertyu</div>;
  }
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-[calc(100dvh-76px)] overflow-auto">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

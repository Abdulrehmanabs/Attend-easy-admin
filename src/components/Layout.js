"use client";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  if (false) {
    return <div>qwertyu</div>;
  }
  return (
    <section className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full max-h-screen min-h-screen overflow-hidden">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;

"use client";
import { useState, useEffect } from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";

const Layout = ({ children }) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);


  if (typeof window !== "undefined") {
    const item = client ? localStorage.getItem("user") : null;
    if (!item && client) {
      return <Login />;
    } else if (client && item) {
      return (
        <PrimeReactProvider>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full h-[calc(100dvh-76px)] overflow-auto">
              {children}
            </div>
          </div>
        </PrimeReactProvider>
      );
    }
  }
}

export default Layout;
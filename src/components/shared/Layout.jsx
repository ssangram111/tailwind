import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (<>
  
    <Header/>
    <main className="flex flex-row bg-black text-white h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        {/* <div>{<Outlet />}</div> */}
        <div>{children}</div>
      </div>
    </main>
    </>
  );
};

export default Layout;

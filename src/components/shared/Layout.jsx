import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (<>
  
    <Header/>
    <main className="flex bg-black text-white h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="">
        <div>{children}</div>
      </div>
    </main>
    </>
  );
};

export default Layout;

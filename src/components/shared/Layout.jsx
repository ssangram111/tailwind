import React, { useState,useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const Layout = ({ children }) => {
  const [open, setopen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width && windowSize.width < 640) {
      setopen(false);
    } else {
      setopen(true);
    }
  }, [windowSize]);

  return (
    <>
      <Header />

      <main className="flex bg-black text-white h-screen w-screen overflow-hidden relative">
        {open ? (
          <div className ="absolute top-55 left-40 " onClick={()=>setopen(false)}>
            <RxCross2 />
          </div>
        ) : (
          <div className="absolute left-2" onClick={()=>setopen(true)}>
            <FiMenu />
          </div>
        )}

        {open ? <Sidebar /> : <></>}

        <div className="flex flex-col flex-1 p-5">
          <div className="flex-1  min-h-0 overflow-auto">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;

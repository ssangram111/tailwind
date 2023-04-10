import React from "react";

import { Links } from "../../lib/constants/navigation";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-black w-40 p-3 text-white ">
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {Links.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;

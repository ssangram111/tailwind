import React from "react";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex-1 py-4 flex flex-row gap-3 bg-black text-white justify-between">
      <div className="flex items-center gap-2 px-4 py-3">
        <FcShop fontSize={24}  />
        <span className="text-neutral-100 text-lg">Open Shops </span>
      </div>

      <div className="flex gap-3 p-3">
        <Link
          to={"/"}
          className="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"
        >
          <div
            className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: 'url("https://source.unsplash.com/80x80?face")',
            }}
          ></div>
          <span className="text-xl">Profile</span>
        </Link>
      </div>
    </div>
  );
}

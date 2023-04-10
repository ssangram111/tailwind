import React from "react";
import Layout from "../components/shared/Layout";

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-white">Profile</h1>
      <div className="flex justify-end items-end gap-5 m-5">
        <button
          type="submit"
          className="h-12 w-28 rounded-full border-2 font-extrabold text-1xl bg-neutral-300 p-2"
        >
          Edit
        </button>
        <button
          type="submit"
          className="h-12 w-28 rounded-full border-2 font-extrabold text-1xl bg-rose-500 p-2"
        >
          Save
        </button>
      </div>

      <div className="bg-black">
        <div className="flex justify-between ps-5 sm:ps-20 pe-5 sm:pe-20"></div>
        <div className="flex items-center justify-center">
          <img
            src="https://source.unsplash.com/80x80?face"
            alt="profile"
            className="rounded-full w-32 h-32"
          />
        </div>
        <div>
          <form className="text-white mt-2 ps-5 sm:ps-20 pe-5 sm:pe-20 p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
              <div className="flex flex-col ">
                <label>First Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label>Contact No.</label>
                <input
                  type="text"
                  autoComplete="off"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label>City</label>
                <select
                  id="city"
                  name="city"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                >
                  <option value=""></option>
                  <option value="volvo">Delhi</option>
                  <option value="saab">Mumbai</option>
                  <option value="fiat">Bengalore</option>
                  <option value="audi">Ahemdabad</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label>State</label>
                <select
                  id="state"
                  name="state"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md"
                >
                  <option value=""></option>
                  <option value="volvo">Delhi</option>
                  <option value="saab">Maharastra</option>
                  <option value="fiat">Karnatka</option>
                  <option value="audi">Gujrat</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label>Address Line - 1 </label>
              <input
                type="text"
                autoComplete="off"
                className="border border-gray-400 py-1 px-2 bg-black rounded-md w-full"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label>Address Line - 2</label>
              <input
                type="text"
                autoComplete="off"
                className="border border-gray-400 py-1 px-2 bg-black rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 ">
              <div className="flex flex-col">
                <label>Role</label>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Manager "
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md w-full"
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  className="border border-gray-400 py-1 px-2 bg-black rounded-md w-full"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label>Description</label>
              <input
                type="text"
                autoComplete="off"
                className="border border-gray-400 py-1 px-2 bg-black rounded-md w-full h-20"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

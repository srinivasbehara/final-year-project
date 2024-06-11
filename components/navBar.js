import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router";

function NavBar() {
  function userRemover(){
     localStorage.clear();
  }
  return (
    <div>
      <div className="bg-black">
        <nav className="relatve container p-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-1 text-white w-96">
              <NavLink
                to="/"
                className="text-3xl font-semibold hover:cursor-default"
              >
                Uber
              </NavLink>
            </div>
            <div className="hidden md:flex space-x-7">
              <NavLink
                to="/myrides"
                name="/myrides"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold   text-white "
              >
                MyRides
              </NavLink>
              <NavLink
                to="/newride"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold   text-white "
              >
                NewRide
              </NavLink>
              <NavLink
                to="/aboutus"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold   text-white "
              >
                AboutUs
              </NavLink>
              <NavLink
                to="/myprofile"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-semibold   text-white "
              >
                MyProfile
              </NavLink>
            </div>
            <div className="hidden lg:flex px-0 space-x-4 mx-0">
              <NavLink
                to="/signin"
                className="p-3 mx-auto px-6 pt-2 rounded-full outline ouline-offset-2 outline-1  bg-white hover:text-black hover:bg-[#dddbdb]"
              >
                SignIn
              </NavLink>
              <NavLink
                to="/"
                onClick={userRemover()}
                className="p-3 px-6 pt-2 rounded-full outline ouline-offset-2 outline-1  bg-white hover:text-black hover:bg-[#dddbdb]"
              >
                log In
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
